import { BranchesActions, BranchesActionTypes } from './branches.action';
import { initialState } from './branches.state';

export function reducers(state = initialState, action: BranchesActions){
    switch(action.type){
        case BranchesActionTypes.GET_ALL_BRANCHES : 
        console.log('Called GetAllBranches');
        return {
            ...state
        }
    }
}