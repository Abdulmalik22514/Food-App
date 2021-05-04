import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as Images from "../assets/images";
import * as Colors from "../common/colors";
import { CheckIcon, DeployIcon, Heart, Star } from "../assets/svg";

export const Varieties = [
  {
    bgImage: Images.Crepes,
    name: "Crepes and Waffles",
    minTime: "10",
    maxTime: "20",
    Option: ["BURGER", "CHICKEN", "FAST FOOD"],
  },
  {
    bgImage: Images.Crepes,
    name: "Pizza and Pepperoni",
    minTime: "7",
    maxTime: "10",
    Option: ["BURGER", "CHICKEN", "FAST FOOD"],
  },
];

export const CustomFood = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.Creepings}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <ImageBackground source={Images.Crepes} style={styles.crepeImg}>
        <View style={styles.favHeart}>
          <TouchableOpacity style={styles.fav}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>4.5</Text>
            <Star />
            <Text style={{ color: Colors.Grey, fontSize: 10 }}>(25+)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.heart}>
            <Heart />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{ marginHorizontal: 15 }}>
        <View style={styles.toppings}>
          <Text style={styles.variety}>{item.name}</Text>
          <CheckIcon />
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <View style={styles.scooterImg}>
            <Image source={Images.Scooter} style={styles.scooter} />
            <Text style={{ color: Colors.Ash }}>Free delivery</Text>
          </View>
          <View style={styles.timeImg}>
            <Image source={Images.Time} style={styles.time} />
            <Text style={{ color: Colors.Ash }}>
              {`${item.minTime} - ${item.maxTime} mins `}
            </Text>
          </View>
        </View>
        <View style={styles.foodings}>
          {item.Option.map((item) => (
            <View style={styles.foodCont}>
              <Text style={{ fontSize: 11, color: Colors.Grey }}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Recommended = ({ title }) => {
  return (
    <View style={styles.recommendedView}>
      <Text style={styles.recommeded}>{title}</Text>
      <View style={styles.viewAll}>
        <Text style={styles.view}>View All</Text>
        <DeployIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  foodings: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fav: {
    backgroundColor: "white",
    width: 80,
    height: 30,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 7,
  },
  heart: {
    backgroundColor: Colors.Red,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  favHeart: {
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  view: {
    color: Colors.Red,
    fontWeight: "bold",
    marginRight: 5,
  },
  time: {
    width: 20,
    height: 15,
    marginRight: 5,
  },
  timeImg: {
    flexDirection: "row",
    alignItems: "center",
  },
  scooter: {
    width: 20,
    height: 15,
    marginRight: 5,
  },
  scooterImg: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  variety: {
    marginRight: 10,
    color: "#3B3B3B",
    fontWeight: "bold",
    fontSize: 16,
  },
  toppings: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  Creepings: {
    width: 290,
    borderRadius: 20,
    backgroundColor: "white",
    paddingBottom: 20,
    marginBottom: 15,
    marginRight: 15,
  },
  crepeImg: {
    width: 290,
    height: 150,
    overflow: "hidden",
  },
  recommeded: {
    fontWeight: "bold",
    color: Colors.Black,
    fontSize: 17,
  },
  viewAll: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  recommendedView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginRight: 20,
    alignItems: "center",
  },
  foodCont: {
    backgroundColor: Colors.itemBack,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 25,
    borderRadius: 5,
    marginTop: 15,
    marginRight: 15,
  },
});
