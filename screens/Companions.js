import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SaveAreaView,
  TouchableOpacity,
  TextInput,
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

const Companions = ({ navigator }) => {
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
      <View style={{ alignSelf: "stretch" }}>
        <View style={{ marginHorizontal: 32, marginTop: 60 }}>
          <View style={styles.topContainer}>
            <NeuMorph>
              <Icon name="view-list" color="#3F4A62" size={27} />
            </NeuMorph>
            <View>
              <Text style={styles.headerText}>Companions</Text>
            </View>
            <NeuMorph>
              <Icon name="sort" size={24} color="#3F4A62" />
            </NeuMorph>
          </View>
        </View>
      </View>
      <View style={styles.searchBar}>
        <Icon
          style={{ marginLeft: 10 }}
          name="magnify"
          color="#3F4A62"
          size={22}
        />

        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#3F4A62"
        />
      </View>
      <View style={{ width: "100%", flex: 1 }}>
        <View style={styles.listContainer}>
          <NeuMorphRec style={{ borderRadius: 10 }}>
            <View style={styles.component}>
              <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: "https://c4.wallpaperflare.com/wallpaper/746/883/660/earth-plant-aloe-vera-wallpaper-preview.jpg",
                    }}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.name}>Aloe</Text>
                  <Text style={styles.lastAction}>Reminders: Watering</Text>
                </View>
                <NeuMorph style={{ left: 40 }} size={40}>
                  <Icon name="dots-vertical" color="#3F4A62" size={28} />
                </NeuMorph>
              </View>
            </View>
          </NeuMorphRec>

          <NeuMorphRec style={{ borderRadius: 10, marginTop: 20 }}>
            <View style={styles.component}>
              <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: "https://tractive.com/blog/wp-content/uploads/2018/11/header_image_home_alone_dog-768x576.jpg",
                    }}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.name}>Charlie</Text>
                  <Text style={styles.lastAction}>Reminders: Feeding</Text>
                </View>
                <NeuMorph style={{ left: 40 }} size={40}>
                  <Icon name="dots-vertical" color="#3F4A62" size={28} />
                </NeuMorph>
              </View>
            </View>
          </NeuMorphRec>
        </View>
      </View>
    </View>
  );
};

export default Companions;

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
  searchBar: {
    width: "85%",
    alignSelf: "center",
    height: 40,
    marginTop: 20,
    backgroundColor: "#E3E6EC",
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#D6DCE8",
  },
  input: {
    textAlign: "center",
    width: "85%",
    height: 30,
    fontSize: 14,
  },
  listContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 30,
    width: "85%",
    alignSelf: "center",
  },
  component: {
    width: "100%",
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    width: "94%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    height: 45,
    width: 45,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
  },
  image: {
    height: "100%",
    width: "100%",

    borderRadius: 100,
  },
  bottomContainer: {
    width: 158,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 59,
  },
  textContainer: {
    flexDirection: "column",
    left: 12,
    height: 45,
    width: 210,
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
});
