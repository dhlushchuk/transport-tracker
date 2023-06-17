import type { FC } from "react";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import type { TTransport } from "../types";
import getTransportCategory from "../helpers/getTransportCategory";
import { useNavigation } from "@react-navigation/native";
import type { TransportStackParams } from "../types";
import { useTranslation } from "react-i18next";

interface Props {
  item: TTransport;
}

const TransportItem: FC<Props> = (props) => {
  const { id, name, category } = props.item;
  const navigation =
    useNavigation<NativeStackNavigationProp<TransportStackParams>>();

  const { t } = useTranslation();

  const pressHandler = () => {
    navigation.navigate("Transport", { id });
  };

  return (
    <TouchableOpacity key={id} onPress={pressHandler}>
      <View style={styles.transportItemContainer}>
        <Text style={styles.text}>
          {t("list.vehicle")} №{id}
        </Text>
        <Text style={styles.text}>
          {t("list.name")}: {name}
        </Text>
        <Text style={styles.text}>
          {t("list.category")}: {getTransportCategory(category)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  transportItemContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    borderStyle: "solid",
    borderRadius: 5,
    padding: 15,
    marginVertical: 8,
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
  },
});

export default TransportItem;
