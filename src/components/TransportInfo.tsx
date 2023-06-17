import type { FC } from "react";
import { Text, View, StyleSheet, Button, Linking, Alert } from "react-native";
import useAppSelector from "../hooks/useAppSelector";
import type { TTransport } from "../types";
import getTransportCategory from "../helpers/getTransportCategory";
import { currentTransportSelector } from "../redux/transport/transportSlice";
import { useTranslation } from "react-i18next";

const TransportInfo: FC = () => {
  const currentTransport = useAppSelector(
    currentTransportSelector
  ) as TTransport;

  const handlePress = async (url: string) => {
    await Linking.openURL(url).catch(() => {
      Alert.alert(t("whatsapp.error"), t("whatsapp.alert"));
    });
  };

  const { t } = useTranslation();

  return (
    <View style={styles.info}>
      <Text style={styles.text}>{t("list.category")}:</Text>
      <Text style={styles.infoText}>
        {getTransportCategory(currentTransport.category)}
      </Text>
      <Text style={styles.text}>{t("list.name")}:</Text>
      <Text style={styles.infoText}>{currentTransport.name}</Text>
      <Text style={styles.text}>{t("transport.phone")}:</Text>
      <Text style={styles.infoText}>{currentTransport.phone}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            title={t("transport.callButton")}
            onPress={() => handlePress("tel:" + currentTransport.phone)}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title={t("transport.sendMessageButton")}
            onPress={() =>
              handlePress(
                "whatsapp://send?text=" +
                  t("whatsapp.message") +
                  "&phone=" +
                  currentTransport.phone
              )
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
  infoText: {
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonWrapper: {
    flex: 1,
  },
});

export default TransportInfo;
