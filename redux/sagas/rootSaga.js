import { takeLatest } from "redux-saga/effects";
import {
  handleGetUsers,
  handleCreateUser,
  handleGetToken,
} from "./handlers/users";
import { GET_USERS, CREATE_USER, GET_TOKEN } from "../reducers/users";
import { GET_COMPANIONS, GET_EVENTS } from "../reducers/companions";
import { handleGetCompanions, handleGetEvents } from "./handlers/companions";

export function* watcherSaga() {
  yield takeLatest(GET_USERS, handleGetUsers);
  yield takeLatest(CREATE_USER, handleCreateUser);
  yield takeLatest(GET_TOKEN, handleGetToken);
  yield takeLatest(GET_COMPANIONS, handleGetCompanions);
  yield takeLatest(GET_EVENTS, handleGetEvents);
}
