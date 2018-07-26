import { ApiModelProperty } from '@nestjs/swagger';

export class TodoParams {

    @ApiModelProperty()
    summary: string;
    @ApiModelProperty()
    content: string;
    @ApiModelProperty()
    progress: number;
    @ApiModelProperty()
    isCompleted:boolean;

}