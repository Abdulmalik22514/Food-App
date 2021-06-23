import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Colors from "../common/colors";
import * as Images from "../assets/images";
import { Add, Less } from "../assets/svg";

export const Active = [
  {
    title: "Active",
  },
  {
    title: "Previous",
  },
];

export const CartItem = [
  {
    pix: Images.HotDog,
    title: "Hot Dog",
    money: "$8.99",
    num: 2,
  },
  {
    pix: Images.Pepperoni,
    title: "Pizza Pepperoni",
    money: "$7.50",
    num: 1,
  },
  {
    pix: Images.Crepe,
    title: "Crepes",
    money: "$9.99",
    num: 2,
  },
];

export const CartCard = ({ title, num, pix, money }) => {
  return (
    <TouchableOpacity style={styles.cartCont} activeOpacity={0.7}>
      <Image
        source={pix}
        style={{ width: 110, height: 110, marginRight: 20 }}
      />
      <View style={{ paddingTop: 7 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.lorem}>Lorem ipsum dolor</Text>
        <View style={styles.bottomDetails}>
          <View style={styles.addSub}>
            <TouchableOpacity>
              <Less color={"white"} />
            </TouchableOpacity>
            <Text style={styles.num}>{num}</Text>
            <TouchableOpacity>
              <Add />
            </TouchableOpacity>
          </View>
          <Text style={styles.money}>{money}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const ActiveBox = ({ title, isActive, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={styles.box}>
          <Text style={styles.active}>{title}</Text>
        </View>

        {isActive ? <View style={styles.red} /> : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartCont: {
    // marginHorizontal: 10,
    height: 140,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    flexDirection: "row",
    marginBottom: 20,
  },
  num: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  money: {
    color: Colors.Red,
    fontWeight: "700",
    fontSize: 23,
  },
  lorem: {
    fontSize: 12,
    fontWeight: "300",
    color: Colors.Grey,
    marginTop: 5,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    color: Colors.Black,
  },
  bottomDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  addSub: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.Red,
    paddingHorizontal: 10,
    width: 70,
    height: 30,
    borderRadius: 15,
    marginRight: 30,
  },
  box: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  red: {
    width: 100,
    height: 2,
    backgroundColor: Colors.Red,
    marginTop: 10,
  },
  active: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.blackText,
    width: 100,
    textAlign: "center",
  },
});
