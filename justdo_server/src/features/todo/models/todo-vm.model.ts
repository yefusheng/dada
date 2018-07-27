import { SharedModelVm } from '../../../shared/shared.model';
import { ApiModelProperty } from '@nestjs/swagger';
/**
 * response model
 */
export class TodoVm extends SharedModelVm {


    @ApiModelProperty() summary: string;

    @ApiModelProperty() content: string;

    @ApiModelProperty() progress: number;
}
