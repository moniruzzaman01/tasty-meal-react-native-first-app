import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Meals from "./Components/Meals";

export default function App() {
  return (
    <View style={styles.container}>
      <Meals />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});
