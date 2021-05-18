import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Add, Back, Heart, Less, Star } from "../assets/svg";
import * as Images from "../assets/images";
import * as Colors from "../common/colors";
import { Buttons } from "../components/customButton";

const ChoiceOfAdd = [
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

const Choices = ({ item, isSelected, onPress }) => {
  return (
    <View style={styles.choiceCont}>
      <View>
        <Text style={{ color: Colors.Ash, fontSize: 15 }}>{item.title}</Text>
      </View>
      <View style={styles.selector}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>{item.money}</Text>
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

export default function Details() {
  const [selected, setSelected] = useState("Cream");
  return (
    <View style={styles.container}>
      <StatusBar style={"light"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={Images.Cake}
          style={styles.cake}
          resizeMode={"cover"}
        >
          <View style={styles.topCont}>
            <TouchableOpacity>
              <Back />
            </TouchableOpacity>
            <Text style={styles.crepeText}>Crepes and Waffles</Text>
            <TouchableOpacity style={styles.heart}>
              <Heart />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={{ paddingHorizontal: 15 }}>
          <Text style={styles.cakeText}>Cranberry Cake</Text>
          <View style={styles.fav}>
            <Star />
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>4.5</Text>
            <Text style={styles.number}>(25+)</Text>
            <TouchableOpacity>
              <Text style={{ color: Colors.Red, fontWeight: "bold" }}>
                See Review
              </Text>
              <View style={styles.underline} />
            </TouchableOpacity>
          </View>
          <View style={styles.moneyAddition}>
            <Text style={styles.amount}>{`$${3.5}`}</Text>
            <View style={styles.addSub}>
              <TouchableOpacity style={styles.substraction}>
                <Less />
              </TouchableOpacity>
              <Text style={{ fontWeight: "bold" }}>03</Text>
              <TouchableOpacity style={styles.addition}>
                <Add />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.lorem}>
            Tart cranberries, sweet buttery cake, and a fantastic texture all
            combine in this Cranberry Christmas Cake. This recipe is a holiday
            favorite!
          </Text>
          <Text style={styles.choice}>Choice of Add On</Text>
          {ChoiceOfAdd.map((item) => {
            return (
              <Choices
                item={item}
                onPress={() => setSelected(item.title)}
                isSelected={item.title === selected}
              />
            );
          })}
          <Buttons style={styles.cart} title="Add to cart" isBold />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 5,
  },
  cart: {
    width: "100%",
    borderRadius: 30,
    height: 60,
  },
  number: {
    color: Colors.Grey,
    fontSize: 13,
    fontWeight: "bold",
  },
  amount: {
    color: Colors.Red,
    fontWeight: "bold",
    fontSize: 17,
  },
  red: {
    backgroundColor: Colors.Red,
  },
  selector: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "25%",
  },
  choiceCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
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
  choice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 12,
    color: Colors.Black,
    letterSpacing: 1,
  },
  lorem: {
    color: Colors.Ash,
    fontSize: 15,
    textAlign: "justify",
    lineHeight: 21,
  },
  moneyAddition: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 15,
  },
  addSub: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "32%",
  },
  addition: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    width: 32,
    height: 32,
    backgroundColor: Colors.Red,
  },
  substraction: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 15,
    width: 30,
    height: 30,
    borderColor: Colors.Red,
  },
  underline: {
    width: 75,
    height: 3,
    backgroundColor: Colors.Red,
    marginTop: -3,
  },
  fav: {
    width: 165,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  cakeText: {
    color: Colors.blackText,
    fontWeight: "bold",
    fontSize: 25,
    marginTop: -25,
  },
  crepeText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  topCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
  },
  heart: {
    backgroundColor: Colors.Red,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cake: {
    width: "100%",
    height: 350,
    paddingTop: 40,
  },
});
