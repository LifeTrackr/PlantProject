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
import { getCompanions } from "./redux/reducers/companions";
// const store = createStore(rootReducers, applyMiddleware(thunk));
const Stack = createStackNavigator();
// const [tokenID, setTokenID] = useState(null);

// useEffect(() => {
//   let cleanup = false;

//   const getToken = async () => {
//     let token1 = await SecureStore.getItemAsync("token");
//     if (!cleanup) {
//       setTokenID(token1);
//       token1 = null;
//       if (tokenID) {
//         dispatch(getCompanions(tokenID));
//       }
//     }
//   };
//   getToken();
//   return () => (cleanup = true);
// }, [token]);

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
