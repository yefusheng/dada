import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
    Req,
    UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { ReportService } from './report.service';
import { MapperService } from '../../shared/mapping/mapper.service';
import { ReportVm } from './models/report-vm.model';
import { Report } from './models/report.model';
import { ApiException } from '../../shared/shared.model';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { UserRole } from '../../user/models/user-role.enum';
import { ReportParams } from './models/report-params.model';

@Controller('reports')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiUseTags('Report')
@ApiBearerAuth()
export class ReportController {
    constructor(private readonly _reportService: ReportService,
                private readonly _mapperService: MapperService) {
    }

    @Post('create')
    @HttpCode(200)
    @Roles(UserRole.User)
    @ApiResponse({ status: HttpStatus.OK, type: ReportVm })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: ApiException })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, type: ApiException })
    @ApiOperation({ title: '', operationId: 'Report_CreateReport' })
    async createReport(@Body() reportParams: ReportParams): Promise<ReportVm> {
        let report: Report;
        try {
            report = await this._reportService.createFromRequestBody(reportParams);
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return this._mapperService.mapper.map(
            this._reportService.modelName,
            this._reportService.viewModelName,
            report.toJSON(),
        );
    }

    @Get()
    @ApiResponse({ status: HttpStatus.OK, type: ReportVm, isArray: true })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: ApiException })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, type: ApiException })
    @ApiOperation({ title: '', operationId: 'Report_GetReports' })
    async getAllReports(@Req() request: Request): Promise<ReportVm[]> {
        let reports: Report[];
        try {
            reports = await this._reportService.getAll();
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return this._mapperService.mapper.map(
            `${this._reportService.modelName}[]`,
            `${this._reportService.viewModelName}[]`,
            reports.map(report => report.toJSON()),
        );
    }

    @Delete(':id')
    @Roles(UserRole.User)
    @UseGuards(RolesGuard)
    @ApiResponse({ status: HttpStatus.OK, type: ReportVm })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: ApiException })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, type: ApiException })
    @ApiOperation({ title: '', operationId: 'Report_DeleteReport' })
    async deleteReport(@Param('id') id: string): Promise<ReportVm> {
        try {
            const report: Report = await this._reportService.delete(id);
            return this._mapperService.mapper.map(
                this._reportService.modelName,
                this._reportService.viewModelName,
                report.toJSON(),
            );
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':id')
    @ApiResponse({ status: HttpStatus.OK, type: ReportVm })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: ApiException })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, type: ApiException })
    @ApiOperation({ title: '', operationId: 'Report_GetReportById' })
    async getReportById(@Param('id') id: string): Promise<ReportVm> {
        try {
            const report: Report = await this._reportService.getById(id);
            return this._mapperService.mapper.map(
                this._reportService.modelName,
                this._reportService.viewModelName,
                report.toJSON(),
            );
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put()
    @HttpCode(200)
    @ApiResponse({ status: HttpStatus.OK, type: ReportVm })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: ApiException })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, type: ApiException })
    @ApiOperation({ title: '', operationId: 'Report_UpdateReport' })
    async updateReport(@Body() report: ReportVm): Promise<ReportVm> {
        const existed: Report = await this._reportService.getById(report.id);
        if (!existed) throw new HttpException(`Not found ${report.id}`, HttpStatus.NOT_FOUND);

        try {
            const updated: Report = await this._reportService.updateFromRequestBody(report);
            return this._mapperService.mapper.map(
                this._reportService.modelName,
                this._reportService.viewModelName,
                updated.toJSON(),
            );
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
