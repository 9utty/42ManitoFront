import { GlobalSlice } from "./slices/globalSlice";
import { combineReducers } from "redux";
import { MentoCardSlice } from "./slices/mentoCardSlice";

export const rootReducer = combineReducers({
  global: GlobalSlice.reducer,
  mento: MentoCardSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
