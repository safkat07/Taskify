# Task Management System App

This is a **Task Management System** built with React, designed to help users manage their tasks efficiently. The app includes basic features like task creation, updating, deleting, and marking tasks as complete. State management is handled using **Redux** to ensure a scalable and maintainable structure.

## Features

- **Add Tasks:** Easily create new tasks with a title and description.
- **View Tasks:** See a list of all tasks, including their status.
- **Update Tasks:** Edit the details of existing tasks.
- **Delete Tasks:** Remove tasks from the list.
- **Mark as Complete:** Mark tasks as done with a simple toggle.
- **State Persistence:** Application state is managed globally using **Redux**.

## Tech Stack

- **Frontend:** React, Redux
- **Styling:** Tailwind CSS (or any preferred CSS framework/library)
- **State Management:** Redux Toolkit
- **Other Libraries:** React Router (if routing is implemented), Axios (if API calls are included)


## Getting Started

1. **Add a Task**  
   Use the "Add Task" button to create a new task by entering the required details.

2. **Update or Delete**  
   Each task in the list has options to update its details or delete it entirely.

3. **Mark as Complete**  
   Toggle the task's status to mark it as complete or incomplete.

## State Management with Redux

The application uses Redux Toolkit to manage the global state. Below is an example of a basic task slice:

```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = updatedTask;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, updateTask, deleteTask, toggleTaskComplete } = ta


