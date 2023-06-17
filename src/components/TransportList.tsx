import { FlatList, StyleSheet } from "react-native";
import TransportItem from "./TransportItem";
import type { FC } from "react";
import useAppSelector from "../hooks/useAppSelector";
import { listSelector } from "../redux/list/listSlice";

const TransportList: FC = () => {
  const { transport } = useAppSelector(listSelector);

  return (
    <FlatList
      style={styles.list}
      keyExtractor={(item) => item.id.toString()}
      data={transport}
      renderItem={({ item }) => <TransportItem item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 70,
  },
});

export default TransportList;
