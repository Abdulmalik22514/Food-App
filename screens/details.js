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
import { ChoiceOfAdd, Choices } from "../components/detailscard";

export default function Details({ navigation }) {
  const [selected, setSelected] = useState("Cream");
  const [value, setValue] = useState();
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
              <Text style={styles.review}>See Review</Text>
              {/* <View style={styles.underline} /> */}
            </TouchableOpacity>
          </View>
          <View style={styles.moneyAddition}>
            <Text style={styles.amount}>
              <Text style={styles.dolz}>$</Text>
              3.50
            </Text>
            <View style={styles.addSub}>
              <TouchableOpacity
                style={styles.substraction}
                onPress={() => (value > 0 ? setValue(value - 1) : null)}
              >
                <Less />
              </TouchableOpacity>
              <Text style={{ fontWeight: "bold" }}>{value}</Text>
              <TouchableOpacity
                style={styles.addition}
                onPress={() =>
                  value >= 0 && value < 10 ? setValue(value + 1) : null
                }
              >
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
          {ChoiceOfAdd.map((item, index) => {
            return (
              <Choices
                key={index}
                item={item}
                onPress={() => setSelected(item.title)}
                isSelected={item.title === selected}
              />
            );
          })}
          <Buttons
            style={styles.cart}
            title="Add to cart"
            isBold
            onPress={() => navigation.navigate("cart")}
          />
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
  review: {
    color: Colors.Red,
    fontWeight: "bold",
    fontSize: 13,
    textDecorationLine: "underline",
  },
  dolz: {
    color: Colors.Red,
    fontSize: 17,
    fontWeight: "bold",
  },
  cart: {
    width: "92%",
    borderRadius: 30,
    height: 60,
    marginTop: 40,
  },
  number: {
    color: Colors.Grey,
    fontSize: 13,
    fontWeight: "bold",
  },
  amount: {
    color: Colors.Red,
    fontWeight: "bold",
    fontSize: 30,
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
    fontSize: 18,
    // textAlign: "justify",
    lineHeight: 27,
    fontWeight: "300",
    height: 110,
    width: 370,
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
    width: 79,
    height: 2,
    backgroundColor: Colors.Red,
    marginTop: -1,
  },
  fav: {
    width: 180,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cakeText: {
    color: Colors.blackText,
    fontWeight: "bold",
    fontSize: 30,
    marginTop: -35,
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
    height: 400,
    paddingTop: 40,
  },
});
