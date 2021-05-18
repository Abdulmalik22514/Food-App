//In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LaunchScreen from "./screens/launch";
import Login from "./screens/login";
import CreateAccount from "./screens/createAccount";
import Home from "./screens/home";
import Details from "./screens/details";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="launch" component={LaunchScreen} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="createAccount" component={CreateAccount} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
