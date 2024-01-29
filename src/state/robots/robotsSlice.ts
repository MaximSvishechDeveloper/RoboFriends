import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Robot } from "../../components/CardList";

interface RobotsInitialState {
  robots: Robot[];
  status: string;
  error: string | null | undefined;
}
const initialState: RobotsInitialState = {
  robots: [],
  status: "",
  error: null,
};

const robotsSlice = createSlice({
  name: "robots",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.robots = action.payload;
      })
      .addCase(fetchAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchAsync = createAsyncThunk("robots/fetchAsync", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
});

export default robotsSlice.reducer;
