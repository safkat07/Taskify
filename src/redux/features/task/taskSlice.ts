import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../../types";
import { RootState } from "@/redux/store";

interface initialState {
  tasks: ITask[];
}

const initialState = {
  tasks: [
    {
      id: "123",
      title: "Initialize frontend",
      description: "Create Home Page and Routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "124",
      title: "Set up backend",
      description: "Install Node.js, Express, and MongoDB",
      dueDate: "2025-12",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "125",
      title: "Design login page",
      description: "Create and style the login and registration forms",
      dueDate: "2025-10",
      isCompleted: false,
      priority: "Medium",
    },
    {
      id: "126",
      title: "Write API documentation",
      description: "Document all endpoints using Swagger",
      dueDate: "2025-09",
      isCompleted: false,
      priority: "Low",
    },
    {
      id: "127",
      title: "Test user authentication",
      description: "Write unit and integration tests for login/logout",
      dueDate: "2025-08",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "128",
      title: "Optimize images",
      description: "Compress and lazy load images across the app",
      dueDate: "2025-07",
      isCompleted: false,
      priority: "Medium",
    },
  ],
};


const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export default taskSlice.reducer;
