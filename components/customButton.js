import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Buttons = ({
  title,
  hasColor,
  diffColor,
  icon,
  onPress,
  style,
  isBold,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.touches,
        hasColor && styles.blueColor,
        diffColor && styles.skyBlue,
        style,
      ]}
    >
      <Text style={[styles.text, isBold && styles.bold]}>
        {title ? title : icon}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touches: {
    width: 120,
    height: 40,
    backgroundColor: "#BB0C24",
    borderRadius: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 17,
  },
  skyBlue: {
    backgroundColor: "#00ACEE",
  },
  blueColor: {
    backgroundColor: "#3B5998",
  },
  text: {
    color: "white",
    fontSize: 15,
  },
});
