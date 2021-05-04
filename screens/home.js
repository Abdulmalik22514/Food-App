import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import * as Images from "../assets/images";
import * as Colors from "../common/colors";
import { DropDown, FilterIcon, SearchIcon } from "../assets/svg";
import { FoodItem, Foods } from "../components/customItems";
import { CustomFood, Recommended, Varieties } from "../components/customFood";
import { CustomBottom, Toppings } from "../components/customBottom";

export default function Home({ navigation }) {
  const [Active, SetActive] = useState("Burger");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"dark"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <TouchableOpacity>
            <Image source={Images.MenuIcon} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
          <View>
            <View style={styles.delivery}>
              <Text style={{ color: "#C3C3C3", marginRight: 20 }}>
                Delivery to
              </Text>
              <DropDown />
            </View>
            <Text style={{ color: "#BB0C24", fontWeight: "bold" }}>
              3245 Palm Street Lane
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              source={Images.ProfilePicture}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.what}>What would you like to order today?</Text>
        <View style={styles.searchFilter}>
          <View style={styles.searchInput}>
            <SearchIcon />
            <TextInput
              style={{ marginLeft: 10, width: "90%" }}
              placeholder="Search"
            />
          </View>
          <TouchableOpacity style={styles.filter}>
            <FilterIcon />
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {Foods.map((item, index) => {
              return (
                <FoodItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  onPress={() => SetActive(item.title)}
                  isActive={item.title === Active}
                />
              );
            })}
          </ScrollView>
        </View>

        <Recommended title="Recommended" />
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {Varieties.map((item) => (
            <CustomFood
              item={item}
              onPress={() => navigation.navigate("details")}
            />
          ))}
        </ScrollView>
        <Recommended title="Popular Items" />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Toppings.map((item) => (
            <CustomBottom item={item} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
  },

  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: 25,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  filter: {
    backgroundColor: "#BB0C24",
    width: "18%",
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  searchFilter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  searchInput: {
    flexDirection: "row",
    backgroundColor: "#F3F3F3",
    width: "70%",
    height: 52,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginRight: 20,
    alignItems: "center",
  },
  delivery: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  what: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#313131",
    marginTop: 10,
  },
});
