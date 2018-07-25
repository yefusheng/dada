import { SharedModel } from '../../../shared/shared.model';

export interface Report extends SharedModel {
    content: string;
    name:string;
    progress: number;
    label:string;
    isCompleted: boolean;
    startTime:string;
    endTime:string;
    planStartTIme;
    planEndTime;
}
