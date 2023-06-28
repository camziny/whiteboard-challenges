import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { List, Button, Input, Typography } from "antd";
import axios from "axios";

const { Title } = Typography;

// Action creators
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get("/api/tasks");
  return response.data;
});

export const addTask = createAsyncThunk("tasks/addTask", async (newTask) => {
  const response = await axios.post("/api/tasks", newTask);
  return response.data;
});

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId) => {
    await axios.delete(`/api/tasks/${taskId}`);
    return taskId;
  }
);

// Redux slice
const tasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

const store = configureStore({ reducer: tasksSlice.reducer });
const { dispatch } = store;

// Component
const App = () => {
  const [newTaskText, setNewTaskText] = useState("");

  const tasks = useSelector((state) => state.tasks.tasks);
  const status = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = () => {
    if (newTaskText) {
      dispatch(addTask({ text: newTaskText }));
      setNewTaskText("");
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <Title level={2}>Task Manager</Title>
      <Input
        placeholder="Enter a task"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        onPressEnter={handleAddTask}
        style={{ marginBottom: 16 }}
      />
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Error: {error}</div>}
      <List
        bordered
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item
            actions={[
              <Button onClick={() => handleDeleteTask(task.id)}>Delete</Button>,
            ]}
          >
            {task.text}
          </List.Item>
        )}
      />
    </div>
  );
};

export default App;
