import { SharedModelVm } from '../../../shared/shared.model';
import { ApiModelProperty } from '@nestjs/swagger';
import { Schema } from 'mongoose';

export class ReportVm extends SharedModelVm {
    @ApiModelProperty()
    title:string;
    @ApiModelProperty()
    startTime:string;
    @ApiModelProperty()
    endTime:string;
    // @ApiModelProperty()
    // content: [{type:Schema.Types.ObjectId,ref:'todo'}];
    @ApiModelProperty()
    content: Array<any>;
}
