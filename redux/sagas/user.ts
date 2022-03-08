import userApi from "@api/userApi";
import { ListResponse } from "@domain/models/common";
import { User } from "@domain/models/user";
import {
  fetchAllUsersFailed,
  fetchAllUsersRequest,
  fetchAllUsersSuccess,
} from "@redux/slices/userSlice";
import { call, put, takeLatest } from "redux-saga/effects";

function* fetchAllUsers(action) {
  try {
    const response: ListResponse<User> = yield call(userApi.getAllUsers);

    yield put(fetchAllUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchAllUsersFailed(error.message));
  }
}

export default function* userSaga() {
  yield takeLatest(fetchAllUsersRequest.type, fetchAllUsers);
}
