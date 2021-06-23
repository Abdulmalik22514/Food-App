import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Facebook, Google, LogoType } from "../assets/svg";
import { Buttons } from "../components/customButton";
import { Input } from "../components/customInput";

export default function CreateAccount({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <ImageBackground
        source={require("../assets/images/registerImage.png")}
        style={styles.image}
      >
        <LogoType style={styles.logoType} />
      </ImageBackground>

      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Your email" />
      <Input placeholder="Password" />
      <Buttons
        title="Register Now"
        onPress={() => navigation.navigate("login")}
      />
      <View style={styles.option}>
        <Buttons
          hasColor
          icon={<Facebook />}
          onPress={() => navigation.navigate("home")}
          style={{ marginRight: 40 }}
        />
        <Buttons
          diffColor
          icon={<Google />}
          onPress={() => navigation.navigate("home")}
        />
      </View>
      <View style={styles.already}>
        <Text style={styles.createAccount}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.login}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  createAccount: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#313131",
  },
  login: {
    color: "#BB0C24",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 15,
  },
  already: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 430,
  },
  logoType: {
    alignSelf: "center",
    marginTop: 250,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
});
