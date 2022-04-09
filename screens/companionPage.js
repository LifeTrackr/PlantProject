import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SaveAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import NeuMorphRec from "../components/NeuMorphRec";
import NeuMorph from "../components/NeuMorph";

const CompanionPage = ({ navigator }) => {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "stretch", flex: 1 }}>
        <View style={{ marginHorizontal: 32, marginTop: 60 }}>
          <View style={styles.topContainer}>
            <NeuMorph>
              <Icon name="chevron-left" color="#3F4A62" size={35} />
            </NeuMorph>
            <View>
              <Text style={styles.headerText}>Aloe</Text>
            </View>
            <NeuMorph>
              <Icon name="delete-outline" size={27} color="#3F4A62" />
            </NeuMorph>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.subHeading}>Plant</Text>
              <Icon name="leaf" size={20} color="#3F4A62" style={{ left: 5 }} />
            </View>

            <View style={styles.imageInfoContainer}>
              <NeuMorphRec style={styles.imageContainer}>
                <Image
                  style={{ width: "96%", height: "96%", borderRadius: 10 }}
                  source={{
                    uri: "https://c4.wallpaperflare.com/wallpaper/746/883/660/earth-plant-aloe-vera-wallpaper-preview.jpg",
                  }}
                />
              </NeuMorphRec>
              <NeuMorphRec style={styles.infoContainer}>
                <Text style={styles.infoText}>Info</Text>
                <Text style={styles.notesText}>Add Notes</Text>
                <Text></Text>
              </NeuMorphRec>
            </View>
          </View>
          <View style={{ marginTop: 25, flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.subHeading}>Reminders</Text>
              <Icon name="plus" size={27} color="#3F4A62" />
            </View>
            <NeuMorphRec
              style={{ borderRadius: 10, marginTop: 20, width: "100%" }}
            >
              <View style={styles.component}>
                <View style={styles.remindersContainer}>
                  <Icon
                    name="water-outline"
                    size={35}
                    color="#3F4A62"
                    style={{ left: 3 }}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.name}>Watering</Text>
                    <Text style={styles.lastAction}>Each 10 days</Text>
                  </View>
                  <NeuMorph size={40} style={{ right: 5 }}>
                    <View
                      style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        borderRadius: 100,
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: "50%",
                          backgroundColor: "#83E7FD",
                          width: "100%",
                        }}
                      ></View>
                    </View>
                    <Text style={styles.iconReminder}>2h ago</Text>
                  </NeuMorph>
                </View>
              </View>
            </NeuMorphRec>
            <NeuMorphRec
              style={{ borderRadius: 10, marginTop: 20, width: "100%" }}
            >
              <View style={styles.component}>
                <View style={styles.remindersContainer}>
                  <Icon
                    name="water-outline"
                    size={35}
                    color="#3F4A62"
                    style={{ left: 3 }}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.name}>Watering</Text>
                    <Text style={styles.lastAction}>Each 10 days</Text>
                  </View>
                  <NeuMorph size={40} style={{ right: 5 }}>
                    <View
                      style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        borderRadius: 100,
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: "50%",
                          backgroundColor: "#83E7FD",
                          width: "100%",
                        }}
                      ></View>
                    </View>
                    <Text style={styles.iconReminder}>2h ago</Text>
                  </NeuMorph>
                </View>
              </View>
            </NeuMorphRec>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CompanionPage;

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
    color: "#3E3E3E",
  },
  contentContainer: {
    marginHorizontal: "6%",
    marginTop: "8%",
    flexDirection: "column",
    flex: 1,
  },
  subHeading: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 18,
    color: "#3E3E3E",
  },
  imageInfoContainer: {
    height: 145,
    width: "100%",

    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    height: 140,
    width: 175,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    height: 140,
    width: 160,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  infoText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    left: 10,
    top: 7,
  },
  notesText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 12,
    color: "#6B6B6B",
    alignSelf: "center",
  },
  component: {
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  remindersContainer: {
    width: "94%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "column",
    left: 15,
    height: 45,
    width: 260,
    top: 2,
    overflow: "hidden",
  },
  name: {
    fontFamily: "Nunito_700Bold",
    fontSize: 17,
    color: "#3E3E3E",
  },
  lastAction: {
    fontFamily: "Nunito_400Regular",
    fontSize: 12,
    color: "#6B6B6B",
  },
  iconReminder: {
    fontFamily: "Nunito_400Regular",
    width: 20,
    fontSize: 10,
    position: "absolute",
    textAlign: "center",
    color: "#6B6B6B",
  },
});
