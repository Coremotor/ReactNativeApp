import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TAuthorizationState} from './types';

const initialState: TAuthorizationState = {auth: false};

const userSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setAuth(state: TAuthorizationState, action: PayloadAction<boolean>) {
      state.auth = action.payload;
    },
  },
});

export const {setAuth} = userSlice.actions;

export default userSlice.reducer;
