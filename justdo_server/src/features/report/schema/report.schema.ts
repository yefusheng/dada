import { Schema } from 'mongoose';
import { ReportDefinition } from './report.definition';
import { schemaOptions } from '../../../shared/shared.model';

export const ReportSchema = new Schema(ReportDefinition, schemaOptions);
export const REPORT_MODEL = 'Report';
