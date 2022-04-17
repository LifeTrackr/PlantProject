import { call, put } from "redux-saga/effects";
import {
  setCompanionsRequest,
  setCompanionsSuccess,
  setCompanionsFailure,
  setEventsRequest,
  setEventsSuccess,
  setEventsFailure,
} from "../../reducers/companions";
import { requestGetCompanions, requestGetEvents } from "../requests/companions";
import * as SecureStore from "expo-secure-store";

export function* handleGetCompanions(action) {
  yield put(setCompanionsRequest());
  try {
    console.log("Token Companions");
    console.log(action.token);
    const response = yield call(requestGetCompanions, action.token);
    const { data } = response;
    yield put(setCompanionsSuccess(data));
    console.log(data);
  } catch (error) {
    console.log(error);
    yield put(setCompanionsFailure(error));
    console.log(error);
  }
}

export function* handleGetEvents(action) {
  yield put(setEventsRequest());
  try {
    console.log("Token Events");
    console.log(action.token);
    const response = yield call(requestGetEvents, action.token);
    const { data } = response;
    yield put(setEventsSuccess(data));
    console.log(data);
  } catch (error) {
    console.log(error);
    yield put(setEventsFailure(error));
    console.log(error);
  }
}
