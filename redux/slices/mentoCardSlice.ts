import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Card {
  image: string;
  userNickName: string;
  description: string;
  hashtag: string[];
}

interface State {
  mentoCard: Card[];
}

const initialState: State = {
  mentoCard: [],
};

export const MentoCardSlice = createSlice({
  name: "mentoCard",
  initialState: initialState,
  reducers: {
    addCard(state, action: PayloadAction<Card[]>) {
      state.mentoCard = state.mentoCard.concat(action.payload);
    },
  },
});
