import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 48,
        }}
      >
        Nome do evento
      </Text>

      <Text
        style={{
          color: "#6B6B6B",
          fontSize: 16,
        }}
      >
        Sexta-feira 24 de Abril de 2023
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#211201",
    padding: 24,
  },
});
