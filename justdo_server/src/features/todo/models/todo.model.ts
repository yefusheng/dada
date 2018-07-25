import { SharedModel } from '../../../shared/shared.model';
import {ApiModelProperty} from "@nestjs/swagger";

export interface Todo extends SharedModel {
    summary:string;
    content: string;
    progress: number;
    //startTime:string;
    //endTime:string;
    //planStartTIme:string;
    //planEndTime:string;
}