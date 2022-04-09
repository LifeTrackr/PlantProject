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
import { useDispatch, useSelector } from "react-redux";
import { getUsers, createUser, getToken } from "../redux/reducers/users";
import * as SecureStore from "expo-secure-store";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 85,
          position: "absolute",
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 20,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Reminders"
        component={Reminders}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.buttonWrapper}>
              <Icon
                name="alarm"
                size={focused ? 35 : 32}
                color={focused ? "#6183C7" : "#3F4A62"}
              />
              <Icon
                name="circle-small"
                size={focused ? 20 : 20}
                color={focused ? "#6183C7" : "transparent"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Companions"
        component={Companions}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.buttonWrapper}>
              <Icon
                name="camera-iris"
                size={focused ? 37 : 32}
                color={focused ? "#6183C7" : "#3F4A62"}
              />
              <Icon
                name="circle-small"
                size={focused ? 20 : 20}
                color={focused ? "#6183C7" : "transparent"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Logs}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.shadow}>
              <LinearGradient
                style={styles.buttonAddWrapper}
                colors={["#6183C7", "#1F3666"]}
              >
                <Icon name="plus" size={37} color={"white"} />
              </LinearGradient>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Logs"
        component={Logs}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.buttonWrapper}>
              <Icon
                name="console"
                size={focused ? 37 : 32}
                color={focused ? "#6183C7" : "#3F4A62"}
              />
              <Icon
                name="circle-small"
                size={focused ? 20 : 20}
                color={focused ? "#6183C7" : "transparent"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.buttonWrapper}>
              <Icon
                name="cog"
                size={focused ? 37 : 32}
                color={focused ? "#6183C7" : "#3F4A62"}
              />
              <Icon
                name="circle-small"
                size={focused ? 20 : 20}
                color={focused ? "#6183C7" : "transparent"}
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
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 5,
  },

  buttonWrapper: {
    alignItems: "center",
    justifyContent: "center",
    top: 15,
    height: 75,
    width: 75,
  },
  buttonAddWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 70,
    width: 70,
    bottom: 5,
    borderRadius: 25,
  },
});
