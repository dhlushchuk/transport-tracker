import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { TTransport } from "../../types";
import type { RootState } from "../store";
import TRANSPORT_LIST from "../../helpers/data.json";

interface TransportState {
  current: TTransport | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: TransportState = {
  current: null,
  isLoading: false,
  isError: false,
};

export const transportSlice = createSlice({
  name: "transport",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTransportById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTransportById.fulfilled, (state, action) => {
      state.current = action.payload as TTransport;
      state.isLoading = false;
    });
    builder.addCase(fetchTransportById.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const fetchTransportById = createAsyncThunk(
  "transport/fetchByIdStatus",
  async (id: number) => {
    // fake request to the server
    const transport = await new Promise((resolve, reject) =>
      setTimeout(() => {
        const transport = TRANSPORT_LIST.find((item) => item.id === id);
        transport ? resolve(transport) : reject();
      }, 1500)
    );
    return transport;
  }
);

export const transportSelector = (state: RootState) => state.transport;
export const currentTransportSelector = (state: RootState) =>
  state.transport.current;

export default transportSlice.reducer;
