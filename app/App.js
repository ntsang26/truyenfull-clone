// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import Ionicons from "react-native-vector-icons/FontAwesome";
// // import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import HomeScreen from "./Home";

// const Stack = createNativeStackNavigator();
// export default function App() {
//   return (

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import HomeScreen from "./Home";
import Explore from "./views/Explore";
import FindStories from "./views/FindStories";
import Genre from "./views/Genre";
import Offline from "./views/Offline";
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      {/* <Button
        title="Go to Home"
        onPress={() => navigation.navigate("HomeScreen")}
      /> */}
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
        options={{
          headerBackTitle: "Back",
        }}
      />
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{
            title: "Trang chủ",
            // headerStyle: {
            //   backgroundColor: "#f4511e",
            // },
            // headerTintColor: "#fff",
            // headerTitleStyle: {
            //   fontWeight: "bold",
            // },

            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      {/* <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarStyle: {
            backgroundColor: "black",
          },
        }}
      >
        <Tab.Screen
          name="Khám phá"
          component={Explore}
          options={{
            tabBarLabel: "Khám phá",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="find" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Thể loại"
          component={Genre}
          options={{
            tabBarLabel: "Thể loại",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Tìm kiếm truyện"
          component={FindStories}
          options={{
            tabBarLabel: "Tìm kiếm",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="search1" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Truyện offline"
          component={Offline}
          options={{
            tabBarLabel: "Truyện offline",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="arrowdown" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
