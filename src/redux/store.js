import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "@/redux/slices/posts.slice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
    },
  });
};
