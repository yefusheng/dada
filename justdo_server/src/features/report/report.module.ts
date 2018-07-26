import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { REPORT_MODEL, ReportSchema } from './schema/report.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: REPORT_MODEL, schema: ReportSchema }])],
    providers: [ReportService],
    controllers: [ReportController],
    exports: [ReportService],
})
export class ReportModule {
}
