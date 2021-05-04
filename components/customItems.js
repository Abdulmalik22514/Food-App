import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Images from "../assets/images";
import * as Colors from "../common/colors";

export const Foods = [
  {
    icon: Images.Burger,
    title: "Burger",
  },
  {
    icon: Images.Pizza,
    title: "Pizza",
  },
  {
    icon: Images.Sushi,
    title: "Sushi",
  },
  {
    icon: Images.Ramen,
    title: "Ramen",
  },
  {
    icon: Images.Chicken,
    title: "Chicken",
  },
];

export const FoodItem = ({ title, icon, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, isActive && styles.red]}
      onPress={onPress}
    >
      <View style={styles.circle}>
        <Image source={icon} style={styles.image} />
      </View>
      <Text style={[styles.ash, isActive && styles.white]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  red: {
    backgroundColor: Colors.Red,
    width: 64,
    height: 120,
    borderRadius: 32,
    alignItems: "center",
    padding: 5,
    marginRight: 20,
  },
  ash: {
    color: Colors.Ash,
  },
  white: {
    color: "white",
  },
  container: {
    width: 66,
    height: 120,
    borderRadius: 33,
    backgroundColor: "white",
    alignItems: "center",
    padding: 5,
    marginRight: 20,
  },
  image: {
    width: 38,
    height: 38,
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
