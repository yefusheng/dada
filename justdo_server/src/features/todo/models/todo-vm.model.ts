import { SharedModelVm } from '../../../shared/shared.model';
import { ApiModelProperty } from '@nestjs/swagger';

export class TodoVm extends SharedModelVm {


    @ApiModelProperty() summary: string;

    @ApiModelProperty() content: string;
    S
    @ApiModelProperty() progress: number;
}
