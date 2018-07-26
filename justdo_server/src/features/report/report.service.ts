import { Injectable } from '@nestjs/common';
import { SharedService } from '../../shared/shared.service';
import { Report } from './models/report.model';
import { REPORT_MODEL } from './schema/report.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReportService extends SharedService<Report> {
    constructor(@InjectModel(REPORT_MODEL) private readonly _reportModel: Model<Report>) {
        super(_reportModel);
    }
}
