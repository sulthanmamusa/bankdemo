import { Action } from '@ngrx/store';

export enum BranchesActionTypes {
    GET_ALL_BRANCHES = '[BRANCHES] Find All'
}

export class GetAllBranches implements Action {
    readonly type = BranchesActionTypes.GET_ALL_BRANCHES;

    constructor(private payload: any){}

}

export type BranchesActions = GetAllBranches;