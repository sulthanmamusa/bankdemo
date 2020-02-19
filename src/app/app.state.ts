import { BranchesState } from './branches/state/branches.state';

export interface AppState {
    readonly branches: BranchesState[];
}