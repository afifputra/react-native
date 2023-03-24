import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another piece of text!</Text>
      </View>
      <Text
        style={{
          margin: 16,
          borderColor: "black",
          borderWidth: 1,
          padding: 8,
        }}
      >
        Hello World!
      </Text>
      <Button title="Click me!" color={"red"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
