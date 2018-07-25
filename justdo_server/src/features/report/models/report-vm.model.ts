import { SharedModelVm } from '../../../shared/shared.model';
import { ApiModelProperty } from '@nestjs/swagger';

export class ReportVm extends SharedModelVm {
    @ApiModelProperty() content: string;

    @ApiModelProperty()
    name: string;

}
