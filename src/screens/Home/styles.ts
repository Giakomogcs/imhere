import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#211201",
    padding: 24,
  },
  eventName: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventData: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#fff",

    height: 56,
    padding: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#31CF67",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
    gap: 12,
  },
});
