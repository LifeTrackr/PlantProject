import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
// import rootReducers from "./redux/reducers"
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Tabs from "./navigation/Tabs";

// const store = createStore(rootReducers, applyMiddleware(thunk));
const Stack = createStackNavigator();

const App = () => {
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
};

export default App;
