import { SharedModelVm } from '../../../shared/shared.model';
import { ApiModelProperty } from '@nestjs/swagger';

export class ReportVm extends SharedModelVm {
    @ApiModelProperty()
    title:string;
    @ApiModelProperty()
    startTime:string;
    @ApiModelProperty()
    endTime:string;
    @ApiModelProperty()
    content: Array<any>;

}
