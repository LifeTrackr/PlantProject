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
import { getCompanions } from "../../redux/reducers/companions";
import { fetchData } from "../../filters/Filters";
import { AddModal } from "../../filters/Pickers";
import Reminders from "../Reminders";
const AddNew = ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });
  const dispatch = useDispatch();
  const { companions, events } = useSelector((state) => state.companions);
  const { tokenID, showModal } = route.params;
  const [isModalVisible, setisModalVisible] = useState(true);

  useEffect(() => {
    setisModalVisible(true);
  }, [isModalVisible]);

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool);
  };

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <AddModal
        changeModalVisibility={changeModalVisibility}
        navigation={navigation}
        isModalVisible={isModalVisible}
        tokenID={tokenID}
      />
    </View>
  );
};

export default AddNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
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
});
