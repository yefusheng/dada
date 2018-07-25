import { ApiModelProperty } from '@nestjs/swagger';

export class TodoParams {
    @ApiModelProperty()
    content: string;
    @ApiModelProperty()
    name: string;
    @ApiModelProperty()
    progress: number;
    @ApiModelProperty()
    todoPeoPle: string;
    @ApiModelProperty()
    creator: string;

}