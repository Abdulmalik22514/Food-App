import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import * as Colors from "../common/colors";
import AppIntroSlider from "react-native-app-intro-slider";
import { LogoType } from "../assets/svg";

const slides = [
  {
    key: 1,
    image: require("../assets/images/launch.png"),
    icon: <LogoType />,
  },
  {
    key: 2,
    image: require("../assets/images/registerImage.png"),
    icon: <LogoType />,
  },
];

export default function LaunchScreen({ navigation }) {
  const _renderItem = ({ item }) => {
    return (
      <ImageBackground source={item.image} style={styles.slide}>
        <View style={{ marginTop: 400 }}>{item.icon}</View>
      </ImageBackground>
    );
  };

  const _renderDoneButton = () => {
    return (
      <Text style={{ color: "black", marginTop: 9, fontSize: 18 }}>Done</Text>
    );
  };

  const _renderNextButton = () => {
    return (
      <Text style={{ color: "black", marginTop: 9, fontSize: 18 }}>Next</Text>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        dotStyle={{ backgroundColor: "grey" }}
        activeDotStyle={{ backgroundColor: "black" }}
        onDone={() => navigation.navigate("createAccount")}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  slide: {
    flex: 1,
    alignItems: "center",
  },
});
