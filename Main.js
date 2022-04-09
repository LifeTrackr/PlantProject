import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "./navigation/Tabs";
import SignIn from "./screens/Login/SignIn";
import SignUp from "./screens/Login/SignUp";
import { getUsers, createUser, getToken } from "./redux/reducers/users";
import * as SecureStore from "expo-secure-store";
const Stack = createStackNavigator();

export default function Main() {
  const dispatch = useDispatch();
  const { users, error, user, token } = useSelector((state) => state.users);
  const [tokenID, setTokenID] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      let token1 = await SecureStore.getItemAsync("token");
      setTokenID(token1);
      token1 = null;
    };
    getToken();
  }, [token]);

  console.log("this is main");
  console.log(tokenID);
  console.log(token);

  if (!tokenID) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={Tabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
