import { takeLatest } from "redux-saga/effects";
import {
  handleGetUsers,
  handleCreateUser,
  handleGetToken,
} from "./handlers/users";
import { GET_USERS, CREATE_USER, GET_TOKEN } from "../reducers/users";

export function* watcherSaga() {
  yield takeLatest(GET_USERS, handleGetUsers);
  yield takeLatest(CREATE_USER, handleCreateUser);
  yield takeLatest(GET_TOKEN, handleGetToken);
}
