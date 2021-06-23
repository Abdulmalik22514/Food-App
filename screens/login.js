import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { Facebook, Google, LogoType } from "../assets/svg";
import { Buttons } from "../components/customButton";
import { Input } from "../components/customInput";

export default function Login({ navigation }) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <ImageBackground
        source={require("../assets/images/registerImage.png")}
        style={styles.image}
      >
        <LogoType style={styles.logoType} />
      </ImageBackground>

      <Input placeholder="Username or email" />
      <Input placeholder="Password" />
      <Buttons title="Log In" onPress={() => navigation.navigate("home")} />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot your password?</Text>
      </TouchableOpacity>

      <View style={styles.options}>
        <Buttons
          hasColor
          icon={<Facebook />}
          onPress={() => navigation.navigate("home")}
        />
        <Buttons
          diffColor
          icon={<Google />}
          onPress={() => navigation.navigate("home")}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("createAccount")}>
        <Text style={styles.createAccount}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  createAccount: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 60,
    marginTop: 20,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 430,
  },
  forgot: {
    color: "#787878",
    textAlign: "center",
    marginTop: 25,
    marginBottom: 50,
  },
  logoType: {
    alignSelf: "center",
    marginTop: 250,
    // width: 300,
  },
});
