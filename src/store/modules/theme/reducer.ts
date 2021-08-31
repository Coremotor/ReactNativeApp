import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TThemeState} from './types';

const initialState: TThemeState = {theme: undefined};

const userSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state: TThemeState, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = userSlice.actions;

export default userSlice.reducer;
