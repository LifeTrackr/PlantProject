import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SaveAreaView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { useFormik, Formik } from "formik";
import NeuMorph from "../../components/NeuMorph";
import NeuMorphRec from "../../components/NeuMorphRec";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, createUser, getToken } from "../../redux/reducers/users";
import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().min(2, "Too Short!").required("Required"),
});

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });
  const { error, message } = useSelector((state) => state.users);
  useEffect(() => {
    if (error) {
      showAlert("Unknown error", "Please try again later", "Try Again");
    }
  }, [error]);

  const showAlert = (message, description, button) =>
    Alert.alert(message, description, [
      {
        text: button,
        onPress: () => navigation.navigate("SignIn"),
      },
    ]);

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(getToken(values.email.toLowerCase(), values.password));
    },
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <View
          style={{
            marginTop: 100,
            marginHorizontal: 40,
            flexDirection: "column",
          }}
        >
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.appName}>Lifetrackr</Text>
        </View>

        <View
          style={{
            marginTop: 35,
            marginHorizontal: 40,
            flexDirection: "column",
          }}
        >
          <Text style={styles.loginText}>Sign In</Text>
          <Text style={styles.descriptionText}>
            Start getting your plants and pets into their best shape with your
            customization
          </Text>
          <NeuMorphRec style={{ borderRadius: 10, marginTop: 20, width: 350 }}>
            <View style={styles.emailContainer}>
              <TextInput
                style={{
                  width: "92%",
                  height: 50,
                  backgroundColor: "transparent",
                  fontSize: 14,
                }}
                placeholder="Email"
                placeholderTextColor={"#7E7E7E"}
                onChangeText={handleChange("email")}
                value={values.email}
              />
            </View>
          </NeuMorphRec>
          {errors.email ? (
            <Text style={[styles.signUp, { color: "red" }]}>
              {errors.email}
            </Text>
          ) : null}

          <NeuMorphRec style={{ borderRadius: 10, marginTop: 20, width: 350 }}>
            <View style={styles.emailContainer}>
              <TextInput
                style={{
                  width: "92%",
                  height: 50,
                  backgroundColor: "transparent",
                  fontSize: 14,
                }}
                secureTextEntry
                placeholder="Password"
                placeholderTextColor={"#7E7E7E"}
                onChangeText={handleChange("password")}
                value={values.password}
              />
            </View>
          </NeuMorphRec>
          {errors.password ? (
            <Text style={[styles.signUp, { color: "red" }]}>
              {errors.password}
            </Text>
          ) : null}

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.signUp}>Don't have an account?</Text>
            <Text
              style={[styles.signUp, { color: "#8A6CFF" }]}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 25,
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: 40,
            }}
          >
            <NeuMorph size={60} onPress={handleSubmit}>
              <Icon name="arrow-right-bold-outline" color="#3F4A62" size={27} />
            </NeuMorph>
          </View>
        </View>
      </View>
      <ImageBackground
        style={{ flex: 1.7 }}
        imageStyle={
          {
            // borderTopLeftRadius: 90,
            // borderTopRightRadius: 90,
            // borderWidth: 1,
          }
        }
        source={{
          uri: "https://wallpaperaccess.com/full/1261211.jpg",
        }}
      ></ImageBackground>

      {/* <View
            style={{
              alignSelf: "center",
              marginTop: 40,
              width: "100%",
              height: 300,
              alignItems: "center",
              justifyContent: "space-around",
              backgroundColor: "black",
            }}
          >
            <TextInput
              style={{ width: "90%", height: 50, backgroundColor: "white" }}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            <TextInput
              style={{ width: "90%", height: 50, backgroundColor: "white" }}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            <Button
              title="hahsa"
              onPress={handleSubmit}
              style={{ width: 100, height: 100, backgroundColor: "red" }}
            />
          </View> */}
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF0F3",
    flexDirection: "column",
  },
  welcomeText: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 40,
    color: "#3E3E3E",
  },
  appName: {
    fontFamily: "Nunito_700Bold",
    fontSize: 40,
    color: "#3E3E3E",
  },
  loginText: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 25,
    color: "#3E3E3E",
  },
  emailContainer: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionText: {
    color: "#7E7E7E",
    fontFamily: "Nunito_400Regular",
    fontSize: 11,

    marginLeft: 1,
    marginTop: 4,
  },
  signUp: {
    color: "#7E7E7E",
    fontFamily: "Nunito_400Regular",
    fontSize: 12,
    marginLeft: 3,
    marginTop: 8,
  },
});
