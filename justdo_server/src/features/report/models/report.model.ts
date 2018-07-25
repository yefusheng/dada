import { SharedModel } from '../../../shared/shared.model';

export interface Report extends SharedModel {
    title:string;
    startTime:string;
    endTime:string;
    content: any;

}
