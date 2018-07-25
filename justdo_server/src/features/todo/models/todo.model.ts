import { SharedModel } from '../../../shared/shared.model';

export interface Todo extends SharedModel {
    content: string;
    name:string;
    progress: number;
    label:string;
    isCompleted: boolean;
    startTime:string;
    endTime:string;
    planStartTIme:string;
    planEndTime:string;
}
