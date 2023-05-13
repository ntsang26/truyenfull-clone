// Tìm kiếm truyện
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function FindStories({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tìm kiếm truyện</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
    </View>
  );
}
export default FindStories;
