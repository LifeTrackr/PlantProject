import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SaveAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import NeuMorphRec from "../../components/NeuMorphRec";
import NeuMorph from "../../components/NeuMorph";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompanions,
  createCompanion,
  getEvents,
} from "../../redux/reducers/companions";
import { useFormik, Formik, yupToFormErrors } from "formik";
import Reminders from "../Reminders";
import * as yup from "yup";
import { CompanionTypes } from "../../filters/Pickers";

const AddNewCompanion = ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });
  const dispatch = useDispatch();
  const { tokenID } = route.params;
  //console.log(tokenID);

  const { companions, events } = useSelector((state) => state.companions);
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisibility = (bool) => {
    setisModalVisible(bool);
  };
  const LoginSchema = yup.object().shape({
    name: yup.string().min(2, "Too Short!").required("Required"),
    companion_type: yup.string().required("Required"),
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        notes: "",
        companion_type: "",
        image: "https://i.ytimg.com/vi/NuwM2jPAmDI/maxresdefault.jpg",
      },
      validationSchema: LoginSchema,
      onSubmit: (values) => {
        values.companion_type = values.companion_type.toLowerCase();
        dispatch(createCompanion(tokenID, values));
        dispatch(getEvents(tokenID));
        dispatch(getCompanions(tokenID));
        navigation.navigate("Companions");
      },
    });

  const typeCompanions = (type) => {
    values.companion_type = type;
  };

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "stretch", flex: 1 }}>
        <View style={{ marginHorizontal: 32, marginTop: 60 }}>
          <View style={styles.topContainer}>
            <NeuMorph onPress={() => navigation.popToTop()}>
              <Icon name="close" color="#3F4A62" size={35} />
            </NeuMorph>
            <View>
              <Text style={styles.headerText}>New Companion</Text>
            </View>
            <NeuMorph onPress={handleSubmit}>
              <Icon name="check" size={27} color="#3F4A62" />
            </NeuMorph>
          </View>
          <View
            style={{
              marginTop: 80,
              width: "100%",
              flexDirection: "column",
            }}
          >
            <Text style={styles.loginText}>Add New Companion</Text>
          </View>
          <NeuMorphRec
            disabled={true}
            style={{ borderRadius: 10, marginTop: 20, width: "100%" }}
          >
            <View style={styles.emailContainer}>
              <TextInput
                style={styles.placeholder}
                placeholder="Name"
                placeholderTextColor={"#7E7E7E"}
                onChangeText={handleChange("name")}
                value={values.name}
              />
            </View>
          </NeuMorphRec>
          {errors.name ? (
            <Text style={[styles.signUp, { color: "red" }]}>{errors.name}</Text>
          ) : (
            <Text style={[styles.signUp]}></Text>
          )}
          <NeuMorphRec
            disabled={true}
            style={{
              borderRadius: 10,
              marginTop: 20,
              width: "100%",
              height: 100,
            }}
          >
            <View style={styles.notesContainer}>
              <TextInput
                multiline={true}
                style={styles.placeholder}
                placeholder="Notes"
                placeholderTextColor={"#7E7E7E"}
                onChangeText={handleChange("notes")}
                value={values.notes}
              />
            </View>
          </NeuMorphRec>
          <NeuMorphRec
            onPress={() => changeModalVisibility(true)}
            style={{ borderRadius: 10, marginTop: 40, width: "100%" }}
          >
            <View style={styles.emailContainer}>
              <Text style={[styles.placeholder, { color: "#7E7E7E" }]}>
                {values.companion_type
                  ? values.companion_type
                  : "Companion Type"}
              </Text>
            </View>
            <Modal
              transparent={true}
              animationType="fade"
              visible={isModalVisible}
              nRequestClose={() => changeModalVisibility(false)}
            >
              <CompanionTypes
                changeModalVisibility={changeModalVisibility}
                typeCompanions={typeCompanions}
              />
            </Modal>
          </NeuMorphRec>
          {!values.companion_type ? (
            <Text style={[styles.signUp, { color: "red" }]}>
              {errors.companion_type}
            </Text>
          ) : (
            <Text style={[styles.signUp]}></Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default AddNewCompanion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ECF0F3",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 23,
  },
  loginText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 22,
    color: "#3E3E3E",
  },
  emailContainer: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  notesContainer: {
    width: "100%",
    height: "95%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "5%",
  },
  descriptionText: {
    color: "#7E7E7E",
    fontFamily: "Nunito_400Regular",
    fontSize: 11,
    marginLeft: 1,
    marginTop: 4,
  },
  placeholder: {
    width: "92%",
    fontSize: 15,
    fontFamily: "Nunito_600SemiBold",
    textAlign: "left",
  },
  signUp: {
    color: "#7E7E7E",
    fontFamily: "Nunito_400Regular",
    fontSize: 12,
    marginLeft: 3,
    marginTop: 8,
    height: 20,
  },
});
