import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { LanguageState } from "../../types";
import type { RootState } from "../store";

const initialState: LanguageState = {
  language: "ru",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (
      state,
      action: PayloadAction<LanguageState["language"]>
    ) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export const languageSelector = (state: RootState) => state.language.language;

export default languageSlice.reducer;
