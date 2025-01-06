import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../../types";
import { RootState } from "@/redux/store";
interface initialState {
  tasks: ITask[];
}

const initialState = {
  tasks: [],
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
  },
});
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
