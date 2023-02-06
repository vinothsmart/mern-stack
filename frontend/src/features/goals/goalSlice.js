import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  goals: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase("goal/getAll/pending", (state) => {
        state.isLoading = true;
      })
      .addCase("goal/getAll/fulfilled", (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = action.payload;
      })
      .addCase("goal/getAll/rejected", (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase("goal/create/pending", (state) => {
        state.isLoading = true;
      })
      .addCase("goal/create/fulfilled", (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals.push(action.payload);
      })
      .addCase("goal/create/rejected", (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase("goal/update/fulfilled", (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = state.goals.map((goal) => {
          if (goal.id === action.payload.id) {
            return action.payload;
          }
          return goal;
        });
      })
      .addCase("goal/update/pending", (state) => {
        state.isLoading = true;
      })
      .addCase("goal/update/rejected", (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase("goal/delete/pending", (state) => {
        state.isLoading = true;
      })
      .addCase("goal/delete/fulfilled", (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = state.goals.filter((goal) => goal.id !== action.payload);
      })
      .addCase("goal/delete/rejected", (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
