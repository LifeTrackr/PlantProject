import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Reminders from "../screens/Reminders";
import SignUp from "../screens/Login/SignUp";
import SignIn from "../screens/Login/SignIn";
import CompanionPage from "../screens/companionPage";
import Settings from "../screens/Settings";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Logs from "../screens/Logs";
import Companions from "../screens/Companions";
import { LinearGradient } from "expo-linear-gradient";
import AddNew from "../screens/Add/addNew";

import { useDispatch, useSelector } from "react-redux";
import { getUsers, createUser, getToken } from "../redux/reducers/users";
import * as SecureStore from "expo-secure-store";

const Tab = createBottomTabNavigator();
const Tabs = ({ route, navigation }) => {
  const { tokenID } = route.params;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "transparent",
        tabBarStyle: {
          height: 90,
          position: "absolute",
          elevation: 0,
          backgroundColor: "#ECF0F3",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Reminders"
        component={Reminders}
        initialParams={{ tokenID: tokenID }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={
                focused
                  ? [styles.buttonWrapper, { backgroundColor: "#3F4A62" }]
                  : styles.buttonWrapper
              }
            >
              <Icon
                name="alarm"
                style={{ top: 4 }}
                size={focused ? 35 : 32}
                color={focused ? "#ECF0F3" : "#3F4A62"}
              />
              <Icon
                name="circle-small"
                size={focused ? 20 : 20}
                color={focused ? "#ECF0F3" : "transparent"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Companions"
        component={Companions}
        initialParams={{ tokenID: tokenID }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={
                focused
                  ? [styles.buttonWrapper, { backgroundColor: "#3F4A62" }]
                  : styles.buttonWrapper
              }
            >
              <Icon
                name="camera-iris"
                style={{ top: 4 }}
                size={focused ? 37 : 32}
                color={focused ? "#ECF0F3" : "#3F4A62"}
              />
              <Icon
                name="circle-small"
                size={focused ? 20 : 20}
                color={focused ? "#ECF0F3" : "transparent"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddNew}
        initialParams={{ tokenID: tokenID, showModal: true }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.shadow}>
              <View style={styles.buttonAddWrapper}>
                <Icon name="plus" size={37} color={"#3F4A62"} />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Logs"
        initialParams={{ tokenID: tokenID }}
        component={Logs}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={
                focused
                  ? [styles.buttonWrapper, { backgroundColor: "#3F4A62" }]
                  : styles.buttonWrapper
              }
            >
              <Icon
                name="console"
                style={{ top: 4 }}
                size={focused ? 37 : 32}
                color={focused ? "#ECF0F3" : "#3F4A62"}
              />
              <Icon
                name="circle-small"
                size={focused ? 20 : 20}
                color={focused ? "#ECF0F3" : "transparent"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        initialParams={{ tokenID: tokenID }}
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={
                focused
                  ? [styles.buttonWrapper, { backgroundColor: "#3F4A62" }]
                  : styles.buttonWrapper
              }
            >
              <Icon
                name="cog"
                style={{ top: 4 }}
                size={focused ? 37 : 32}
                color={focused ? "#ECF0F3" : "#3F4A62"}
              />
              <Icon
                name="circle-small"
                size={20}
                color={focused ? "#ECF0F3" : "transparent"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    // shadowColor: "#1F3666",
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    // shadowOpacity: 10,
    // shadowRadius: 9,
    // elevation: 5,
  },

  buttonWrapper: {
    alignItems: "center",
    justifyContent: "center",
    top: 14,
    height: 65,
    width: 65,
    borderRadius: 25,
  },
  buttonAddWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9DDE5",
    height: 65,
    width: 65,
    bottom: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#3F4A62",
  },
});
