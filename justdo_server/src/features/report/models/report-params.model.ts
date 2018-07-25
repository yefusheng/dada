import { ApiModelProperty } from '@nestjs/swagger';

export class ReportParams {
    @ApiModelProperty()
    content: string;
    @ApiModelProperty()
    name: string;
    @ApiModelProperty()
    creator: string;

}