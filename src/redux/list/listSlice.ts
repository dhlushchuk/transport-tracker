import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TTransport } from "../../types";
import TRANSPORT_LIST from "../../helpers/data.json";
import type { RootState } from "../store";

interface ListState {
  filter: {
    current: string;
    categories: string[];
  };
  transport: TTransport[];
}

const list = TRANSPORT_LIST.map((transport) => transport.category);
const categories = list.filter((item, index) => list.indexOf(item) === index);

const initialState: ListState = {
  filter: {
    current: "",
    categories,
  },
  transport: TRANSPORT_LIST as TTransport[],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filter.current = action.payload;
    },

    // filter transport list using current filter
    filterTransport: (state) => {
      state.filter.current
        ? (state.transport = TRANSPORT_LIST.filter(
            (item) => item.category === state.filter.current
          ) as TTransport[])
        : (state.transport = TRANSPORT_LIST as TTransport[]);
    },
  },
});

export const { changeFilter, filterTransport } = listSlice.actions;

export const listSelector = (state: RootState) => state.list;

export default listSlice.reducer;
