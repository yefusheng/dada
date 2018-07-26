import { SharedModel } from '../../../shared/shared.model';
import {ApiModelProperty} from "@nestjs/swagger";

export interface Report extends SharedModel {
    title:string;
    startTime:string;
    endTime:string;
    content: Array<any>;
    reportType:string;
}
