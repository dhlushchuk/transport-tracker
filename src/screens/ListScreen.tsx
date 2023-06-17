import { View, StyleSheet } from "react-native";
import TransportList from "../components/TransportList";
import TransportFilter from "../components/TransportFilter";
import type { FC } from "react";

const ListScreen: FC = () => {
  return (
    <View style={styles.listScreen}>
      <TransportFilter />
      <TransportList />
    </View>
  );
};

const styles = StyleSheet.create({
  listScreen: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default ListScreen;
