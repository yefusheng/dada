import { SharedModel } from '../../../shared/shared.model';
import {ApiModelProperty} from "@nestjs/swagger";
import {Schema} from "mongoose";
import {paragraph} from "../../todo/models/paragraph";

export interface Report extends SharedModel {
    title:string;
    startTime:string;
    endTime:string;
    content: Array<paragraph>;
    reportType:string;
}
