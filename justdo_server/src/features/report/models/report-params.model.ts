import { ApiModelProperty } from '@nestjs/swagger';

export class ReportParams {
    @ApiModelProperty()
    title:string;
    @ApiModelProperty()
    startTime:string;
    @ApiModelProperty()
    endTime:string;
    @ApiModelProperty()
    reportType:string;
    @ApiModelProperty()
    content: Array<any>;
}