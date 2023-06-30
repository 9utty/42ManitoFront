import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Auth {
  userId: number;
  AccessToken: string;
}

const initialState = {
  isLogin: true, // TODO : 현재는 로그인되어있다고 가정하고 만들기 때문에 로그인 구현시엔 false
  userId: 0,
  AccessToken: "",
};

export const GlobalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    addAToken(state, action: PayloadAction<string>) {
      state.AccessToken = action.payload;
      state.isLogin = true;
    },
    addUserId(state, action: PayloadAction<number>) {
      state.userId = action.payload;
    },
  },
});
