import { configureStore } from "@reduxjs/toolkit";
import candidatesReducer from "./candidatesSlice";

export const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
