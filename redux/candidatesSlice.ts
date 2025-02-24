import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Candidate {
  id: string;
  username: string;
  password: string;
  select: string;
  date: string;
  remember: boolean;
}

interface CandidatesState {
  candidates: Candidate[];
}

const initialState: CandidatesState = {
  candidates: [
    {
      id: "1",
      username: "Jean",
      password: "",
      select: "nextJS",
      date: "",
      remember: false,
    },
    {
      id: "2",
      username: "Claude",
      password: "",
      select: "Javascript",
      date: "",
      remember: false,
    },
    {
      id: "3",
      username: "Paul",
      password: "",
      select: "Python",
      date: "",
      remember: false,
    },
    {
      id: "4",
      username: "Marc",
      password: "",
      select: "NextJs",
      date: "",
      remember: false,
    },
    {
      id: "5",
      username: "Pierre",
      password: "",
      select: "Python",
      date: "",
      remember: false,
    },
    {
      id: "6",
      username: "Albert",
      password: "",
      select: "Javascript",
      date: "",
      remember: false,
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
    // Si je veux ajouter des informations sur mon candidat et les afficher dans une page
    addCandidate: (state, action: PayloadAction<Candidate>) => {
      state.candidates.push(action.payload);
    },
  },
});

export const { setCandidates, addCandidate } = candidatesSlice.actions;

export default candidatesSlice.reducer;
