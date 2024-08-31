import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World!</Text>
        <Text style={styles.subtitle}>WawBaws wish you   $$$$$$!  Have a nice    weekend! </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"cyan",
    flex: 2,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color:"red",
    borderColor:"black"
  },
  subtitle: {
    fontSize: 36,
    color: "black",
  },
});
