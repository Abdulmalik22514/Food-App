import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import * as Images from "../assets/images";
import * as Colors from "../common/colors";

export const Toppings = [
  {
    img: Images.Waffles,
    title: "Waffles",
    lorem: "Lorem ipsum dolor ",
    money: `$${2.99}`,
  },
  {
    img: Images.HotDog,
    title: "Hot dog",
    lorem: "Lorem ipsum dolor ",
    money: `$${2.99}`,
  },
  {
    img: Images.Soup,
    title: "Soup",
    lorem: "Lorem ipsum dolor ",
    money: `$${2.99}`,
  },
];

export const CustomBottom = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={item.img} style={{ width: 51, height: 51 }} />
      <View>
        <Text style={{ color: "#3B3B3B", fontSize: 15, fontWeight: "bold" }}>
          {item.title}
        </Text>
        <Text style={{ fontSize: 8, color: Colors.Grey }}>{item.lorem} </Text>
        <Text style={{ fontSize: 12, color: Colors.Red, fontWeight: "bold" }}>
          {item.money}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 148,
    height: 110,
    borderRadius: 10,
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 7,
  },
});
