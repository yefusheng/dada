import {Schema} from "mongoose";
import {SharedModel} from "../../../shared/shared.model";
import {ApiModelProperty} from "@nestjs/swagger";
/**
 * db model
 */
export interface paragraph extends SharedModel {

    name:string;

    content:[{type:Schema.Types.ObjectId,ref:'todo'}];

    child:Schema.Types.ObjectId,ref:'paragraph';
}
