import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Colors from "../common/colors";
import { Tick } from "../assets/svg";

export default function TodoList() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.tracker}>Task Tracker</Text>
          {/* <Buttons title="close" /> */}
          <TouchableOpacity style={styles.touches}>
            <Text style={{ color: "white", fontSize: 17 }}>Close</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 20 }}>Task</Text>
        <TextInput style={styles.input} placeholder="Add Task" />
        <Text style={{ fontSize: 20 }}>Day & Time</Text>
        <TextInput style={styles.input} placeholder="Add Day & Time" />
        <View style={styles.reminderBox}>
          <Text style={styles.reminder}>Set Reminder</Text>
          <TouchableOpacity style={styles.checkBox}>
            <Tick />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.touch}>
          <Text style={{ color: "white", fontSize: 17 }}>Save Task</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  touch: {
    width: "100%",
    height: 50,
    backgroundColor: "black",
    borderRadius: 6,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  reminderBox: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  touches: {
    width: 90,
    height: 50,
    backgroundColor: "red",
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "#C3C3C3",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 30,
  },
  checkBox: {
    width: 20,
    height: 20,
    backgroundColor: "#C3C3C3",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  reminder: {
    fontSize: 17,
    textAlign: "justify",
    width: 80,
    lineHeight: 21,
  },
  tracker: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.blackText,
    marginRight: 10,
  },
  container: {
    flex: 1,
    paddingTop: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  content: {
    paddingVertical: 20,
    borderRadius: 5,
    borderColor: "magenta",
    borderWidth: 1,
    width: "100%",
    marginTop: 50,
    paddingHorizontal: 30,
  },
});
