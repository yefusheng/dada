import {SchemaDefinition} from 'mongoose';
import {SharedDefinition} from '../../../shared/shared.model';

export const DocsDefinition: SchemaDefinition = {


        title: {
            type: String,
            required:
                [true, 'title is required'],
            minlength:
                [6, '{VALUE} must be at least 6 characters'],
        }
        ,
        ...
            SharedDefinition,
    }
;
