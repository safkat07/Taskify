import { configureStore } from "@reduxjs/toolkit";
import counterReaducer from "./features/counter/counterSlice";
import taskReducer from "./features/task/taskSlice";
export const store = configureStore({
  reducer: {
    counter: counterReaducer,
    todo: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
