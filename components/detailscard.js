import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as Colors from "../common/colors";

export const ChoiceOfAdd = [
  {
    title: "Cream",
    money: "+$2.30",
  },
  {
    title: "Chocolate sauce",
    money: "+$2.30",
  },
  {
    title: "Vanilla ice cream",
    money: "+$2.30",
  },
];

export const Choices = ({ item, isSelected, onPress }) => {
  return (
    <View style={styles.choiceCont}>
      <View>
        <Text style={{ color: Colors.Ash, fontSize: 15, fontWeight: "300" }}>
          {item.title}
        </Text>
      </View>
      <View style={styles.selector}>
        <Text style={{ fontSize: 15, fontWeight: "600" }}>{item.money}</Text>
        <TouchableOpacity style={styles.outerCircle} onPress={onPress}>
          {isSelected ? (
            <View style={[styles.innerCircle, isSelected && styles.red]} />
          ) : (
            <View style={styles.innerCircle} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  choiceCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
  },
  red: {
    backgroundColor: Colors.Red,
  },
  selector: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "25%",
  },
  innerCircle: {
    width: 14,
    height: 14,
    backgroundColor: Colors.Grey,
    borderRadius: 7,
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderColor: Colors.Grey,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
