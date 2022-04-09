import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "./navigation/Tabs";
import SignIn from "./screens/Login/SignIn";
import SignUp from "./screens/Login/SignUp";
import Main from "./Main";
// const store = createStore(rootReducers, applyMiddleware(thunk));
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
