import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Candidate {
  id: string;
  name: string;
}

interface CandidatesState {
  candidates: Candidate[];
}

const initialState: CandidatesState = {
  candidates: [
    { id: "1", name: "Jean" },
    { id: "2", name: "Claude" },
    { id: "3", name: "Paul" },

    {
      id: "4",
      name: "Marc",
    },
    {
      id: "5",
      name: "Pierre",
    },
    {
      id: "6",
      name: "Albert",
    },
  ],
};

const candidatesSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    setCandidates(state, action: PayloadAction<Candidate[]>) {
      state.candidates = action.payload;
    },
  },
});

export const { setCandidates } = candidatesSlice.actions;

export default candidatesSlice.reducer;
