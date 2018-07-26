import {SchemaDefinition} from 'mongoose';
import {SharedDefinition} from '../../../shared/shared.model';

export const ReportDefinition: SchemaDefinition = {


        title: {
            type: String,
            required:
                [true, 'title is required'],
            minlength:
                [6, '{VALUE} must be at least 6 characters'],
        }
        ,
        startTime: {
            type: Date
        }
        ,
        endTime: {
            type: Date
        }
        ,
        reportType: {
          type: String
        },
        content: {
          type: Array
        }
    ,
        ...
            SharedDefinition,
    }
;
