import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export const Input = ({ placeholder }) => {
  return (
    <View>
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#C3C3C3",
    borderWidth: 1,
    borderRadius: 17,
    width: 270,
    height: 37,
    alignSelf: "center",
    paddingHorizontal: 10,
    marginTop: 13,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
  },
});
