import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Back, Trash } from "../assets/svg";
import * as Images from "../assets/images";
import * as Colors from "../common/colors";
import { Active, ActiveBox, CartCard, CartItem } from "../components/cartCard";

export default function CartScreen() {
  const [active, setActive] = useState("Active");
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <View>
        <View style={styles.topBar}>
          <Back color={"black"} />
          <Text style={styles.cartFood}>Cart Food</Text>
          <Image
            source={Images.ProfilePicture}
            style={{ width: 45, height: 45 }}
          />
        </View>
        <View style={styles.activeView}>
          {Active.map((item, index) => {
            return (
              <ActiveBox
                key={index}
                title={item.title}
                onPress={() => setActive(item.title)}
                isActive={item.title === active}
              />
            );
          })}
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.cartView}>
        <View>
          {CartItem.map((item, index) => {
            return (
              <CartCard
                key={index}
                money={item.money}
                num={item.num}
                title={item.title}
                pix={item.pix}
              />
            );
          })}
        </View>
        <Trash />
      </ScrollView>
      <View style={{ paddingHorizontal: 20, marginTop: 10 }}></View>
      <View style={styles.summaryBox}>
        <Text>Summary</Text>
        {/* < */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "white",
  },
  summaryBox: {
    backgroundColor: "white",
    padding: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    flex: 1,
  },
  cartView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 420,
    paddingVertical: 30,
    paddingHorizontal: 5,
    backgroundColor: Colors.Grey,
    width: "100%",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartFood: {
    fontWeight: "700",
    fontSize: 19,
    color: Colors.blackText,
  },
  activeView: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 30,
    paddingHorizontal: 60,
    width: 400,
    justifyContent: "space-between",
    // alignItems: "center",
    alignSelf: "center",
  },
});
