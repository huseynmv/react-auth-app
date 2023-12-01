import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./store";
import loadState from "../core/helpers/loadState";
import saveState from "../core/helpers/saveState";

const initialState: IState = loadState();

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setUser: (state: IState, action: PayloadAction<any>) => {
      state.user = action.payload;
      saveState(state);
    },
    setLoader: (state: IState, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
  },
});

export const { setUser, setLoader } = rootSlice.actions;

export default rootSlice.reducer;
