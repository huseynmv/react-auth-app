import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./store";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  email: string;
}
const storedAccessToken = localStorage.getItem(
  "Architecture (Mode: Default)-token"
);
const decodedToken = storedAccessToken
  ? jwtDecode<DecodedToken>(storedAccessToken)
  : null;

const initialState: IState = {
  user: decodedToken ? { email: decodedToken.email } : null,
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
