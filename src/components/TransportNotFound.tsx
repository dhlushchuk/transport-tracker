import { Text, View, Button, StyleSheet } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { TransportStackParams } from "../types";
import { useNavigation } from "@react-navigation/native";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

const TransportNotFound: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TransportStackParams>>();

  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("notFound.message")}</Text>
      <Button
        title={t("notFound.backButton")}
        onPress={() => navigation.navigate("List")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  text: {
    width: "100%",
    maxWidth: 300,
    textAlign: "center",
    fontSize: 24,
  },
});

export default TransportNotFound;
