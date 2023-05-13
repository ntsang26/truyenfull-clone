// offline
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Offline({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Truyện offline</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
    </View>
  );
}
export default Offline;
