import { SharedModel } from '../../../shared/shared.model';
import {ApiModelProperty} from "@nestjs/swagger";

/**
 * db model
 */
export interface Todo extends SharedModel {
    summary:string;
    content: string;
    progress: number;
    isCompleted:boolean;
}
