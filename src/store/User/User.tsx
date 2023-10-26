import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAuthData, ITodoData } from "../../features/login/Login.type";
import { isOverDue } from "../../utils/Date";

export interface AuthState {
  user: IAuthData | undefined;
}

const initialState: AuthState = {
  user: undefined,
};

export const counterSlice = createSlice({
  name: "userTodo",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuthData>) => {
      state.user = action.payload;
    },
    addTodoReducer: (state, action: PayloadAction<ITodoData>) => {
      if (state.user) {
        const index = state.user?.records.findIndex(
          (item) => item.key === state.user?.activeUser
        );
        state.user.records[index].data.push({
          id: action.payload.id,
          type: action.payload.type,
          date: action.payload.date,
          title: action.payload.title,
        });
        const key = process.env.REACT_APP_KEY;
        localStorage.setItem(key || "", JSON.stringify(state.user));
      }
    },
    updateTodoReducer: (
      state,
      action: PayloadAction<{ id: any; type: "open" | "done" | "overdue" }>
    ) => {
      if (state.user) {
        const index = state.user?.records.findIndex(
          (item) => item.key === state.user?.activeUser
        );
        state.user.records[index].data.map((item) => {
          if (item.id === action.payload.id) {
            item.type = action.payload.type;
          }
          return item;
        });
        const key = process.env.REACT_APP_KEY;
        localStorage.setItem(key || "", JSON.stringify(state.user));
      }
    },
    deleteTodoReducer: (state, action: PayloadAction<{ id: any }>) => {
      if (state.user) {
        const index = state.user?.records.findIndex(
          (item) => item.key === state.user?.activeUser
        );
        state.user.records[index].data = state.user.records[index].data.filter(
          (item) => {
            if (item.id !== action.payload.id) {
              return item;
            }
          }
        );
        const key = process.env.REACT_APP_KEY;
        localStorage.setItem(key || "", JSON.stringify(state.user));
      }
    },
  },
});

export const { setUser, addTodoReducer, updateTodoReducer, deleteTodoReducer } =
  counterSlice.actions;

export default counterSlice.reducer;
