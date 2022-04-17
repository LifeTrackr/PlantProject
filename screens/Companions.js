import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";

const Companions = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  const dispatch = useDispatch();
  const { companions, events } = useSelector((state) => state.companions);

  useEffect(() => {
    //  console.log(companions);
  }, [companions, events]);

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
          {companions &&
            companions.map((item, key) => (
              <NeuMorphRec
                style={{ borderRadius: 10, marginTop: 15 }}
                key={key}
                onPress={
                  () =>
                    navigation.navigate("CompanionOverview", {
                      name: item.name,
                      notes: item.notes,
                      image: item.image,
                      companionID: item.companion,
                      type: item.companion_type,
                    })
                  // navigation.navigate("CompanionOverview", {
                  //   name: item.name,

                  //    projectId: item.id,
                  //    uid: item.user.id,
                  //    participants: item.participants,
                  // //     caption: item.caption,
                  // //     description: item.description,
                  // })
                }
              >
                <View style={styles.component}>
                  <View style={styles.contentContainer}>
                    <View style={styles.imageContainer}>
                      <Image
                        style={styles.image}
                        source={{
                          uri: item.image,
                        }}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.name}>{item.name}</Text>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.lastAction}>Reminders:</Text>
                        {events &&
                          events
                            .filter((x) => x.companion_id === item.companion)
                            .map((item, key) => (
                              <Text
                                key={key}
                                style={[styles.lastAction, { marginLeft: 2 }]}
                              >
                                {item.action}
                              </Text>
                            ))}
                      </View>
                    </View>
                    <NeuMorph style={{ left: 40 }} size={40}>
                      <Icon name="dots-vertical" color="#3F4A62" size={28} />
                    </NeuMorph>
                  </View>
                </View>
              </NeuMorphRec>
            ))}
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
    marginTop: 10,
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
