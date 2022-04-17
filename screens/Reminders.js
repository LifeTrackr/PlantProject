import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
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
import NeuMorph from "../components/NeuMorph";
import { useDispatch, useSelector } from "react-redux";
import moment, { suppressDeprecationWarnings } from "moment";
import { duration } from "moment";
import {
  getIcon,
  getPercentage,
  getTime,
  getTypeIcon,
} from "../filters/Filters";
import { NavigationContainer } from "@react-navigation/native";

const Reminders = ({ navigation }) => {
  const dispatch = useDispatch();
  const { companions, events } = useSelector((state) => state.companions);
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  useEffect(() => {
    // if (events.length != 0) {
    //   console.log(getTime(events[0].last_trigger));
    //   // let duration = moment.duration(lastTrigger.diff(now));
    //   // console.log(duration);
    // }
    console.log(events);
  }, [events, companions]);

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
              <Text style={styles.headerText}>Reminders</Text>
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
          {events &&
            events.map((item, key) => (
              <NeuMorph
                size={170}
                style={{ borderRadius: 10, marginTop: 24 }}
                key={key}
                onPress={() =>
                  navigation.navigate("CompanionOverview", {
                    name: companions.filter(
                      (x) => x.companion === item.companion_id
                    )[0].name,
                    notes: companions.filter(
                      (x) => x.companion === item.companion_id
                    )[0].notes,
                    image: companions.filter(
                      (x) => x.companion === item.companion_id
                    )[0].image,
                    companionID: companions.filter(
                      (x) => x.companion === item.companion_id
                    )[0].companion,
                    type: companions.filter(
                      (x) => x.companion === item.companion_id
                    )[0].companion_type,
                  })
                }
              >
                <View style={styles.component}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.image,
                    }}
                  />
                  <View style={styles.bottomContainer}>
                    <View style={styles.textContainer}>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.name}>{item.companion_name}</Text>
                        <Icon
                          style={{ left: 8, top: 3 }}
                          name={getTypeIcon(item.companion_type)}
                          color="#323232"
                          size={16}
                        />
                      </View>
                      <Text style={styles.lastAction}>
                        Last {getTime(item.last_trigger).duration}
                        {getTime(item.last_trigger).dateType} ago
                      </Text>
                    </View>
                    <NeuMorph
                      size={40}
                      style={{
                        right: 5,
                      }}
                    >
                      <View
                        style={{
                          width: "100%",
                          alignSelf: "flex-end",
                          height: "100%",
                          overflow: "hidden",
                          borderRadius: 100,
                          justifyContent: "flex-end",
                        }}
                      >
                        <View
                          style={{
                            height: getPercentage(
                              item.next_trigger,
                              item.frequency
                            ),
                            backgroundColor: getIcon(item.action)[1],
                            width: "100%",
                          }}
                        ></View>
                      </View>
                      <Icon
                        name={getIcon(item.action)[0]}
                        color="#8C8C8C"
                        size={27}
                        style={{ position: "absolute" }}
                      />
                    </NeuMorph>
                  </View>
                </View>
              </NeuMorph>
            ))}
        </View>
      </View>
    </View>
  );
};

export default Reminders;

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
    flexDirection: "row",
    marginTop: 10,
    width: "85%",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignSelf: "center",
  },
  component: {
    width: 170,
    height: 170,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
  },

  image: {
    height: 105,
    width: 158,
    marginTop: 6,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
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
    width: 100,
  },
  name: {
    fontFamily: "Nunito_700Bold",
    fontSize: 19,
    left: 3,
    color: "#3E3E3E",
    bottom: 1,
  },
  lastAction: {
    fontFamily: "Nunito_400Regular",
    fontSize: 14,
    left: 3,
    bottom: 2,
    color: "#6B6B6B",
  },
});
