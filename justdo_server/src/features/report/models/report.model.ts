import { SharedModel } from '../../../shared/shared.model';
import {ApiModelProperty} from "@nestjs/swagger";
import {Schema} from "mongoose";

export interface Report extends SharedModel {
    title:string;
    startTime:string;
    endTime:string;
    content: paragraph;
    reportType:string;
}
export interface paragraph extends SharedModel {
    name:string,
    content:[{type:Schema.Types.ObjectId,ref:'todo'}],
    child:Schema.Types.ObjectId,ref:'paragraph';
}
