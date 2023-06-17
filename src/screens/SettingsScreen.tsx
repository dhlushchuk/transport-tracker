import type { FC } from "react";
import { View, StyleSheet } from "react-native";
import LanguageComponent from "../components/LanguageComponent";

const SettingsScreen: FC = () => {
  return (
    <View style={styles.container}>
      <LanguageComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
});

export default SettingsScreen;
