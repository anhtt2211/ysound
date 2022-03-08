import { ListParams, ListResponse } from "@domain/models/common";
import { User } from "@domain/models/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface UserState {
  loading?: boolean;
  list: User[];
}

const initialState: UserState = {
  loading: false,
  list: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchAllUsersRequest: (state) => {
      state.loading = true;
    },
    fetchAllUsersSuccess: (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchAllUsersFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
    },
  },
});

export const {
  fetchAllUsersSuccess,
  fetchAllUsersRequest,
  fetchAllUsersFailed,
} = userSlice.actions;

export const $users = (state: RootState) => state.users;

export default userSlice.reducer;
