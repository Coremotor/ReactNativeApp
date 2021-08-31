import {TState} from '../../store';

export const getIsAuth = (state: TState) => state.authorization.auth;
