import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./store";

import { environment } from "../core/configs/app.config";

const initialState: IState = {
  user: null,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setUser: (state: IState, action: PayloadAction<any>) => {
      // state.user = jwtDecode(action.payload);
      state.user = "user";
    },
  },
});

export const { setUser } = rootSlice.actions;

export default rootSlice.reducer;
