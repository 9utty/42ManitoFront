import { combineReducers } from "redux";
import { GlobalSlice } from "./Slices/globalSlice";
import { MentoCardSlice } from "./Slices/mentoCardSlice";

export const rootReducer = combineReducers({
  global: GlobalSlice.reducer,
  mento: MentoCardSlice.reducer,
});
