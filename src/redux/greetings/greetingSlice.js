import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGreeting = createAsyncThunk(
  "greeting/fetchGreeting",
  async () => {
    const response = await fetch("http://127.0.0.1:3000/api/v1/greetings");
    const data = await response.json();
    return data;
  }
);

const initialState = {
  loading: false,
  greeting: "",
  error: "",
};

export const greetingSlice = createSlice({
  name: greeting,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      const newState = {
        ...state,
        loading: false,
        greeting: action.payload[0],
      };
      return newState;
    });
    builder.addCase(fetchGreeting.rejected, (state) => {
      const newState = { ...state, loading: false, error: "404 Not Found" };
      return newState;
    });
  },
});

export default greetingSlice.reducer;
