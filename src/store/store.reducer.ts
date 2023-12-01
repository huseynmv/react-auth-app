import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./store";

import { environment } from "../core/configs/app.config";

const initialState: IState = {
  user: null,
  loader: false,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setUser: (state: IState, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setLoader: (state: IState, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
  },
});

export const { setUser, setLoader } = rootSlice.actions;

export default rootSlice.reducer;
