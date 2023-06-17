import { View, ActivityIndicator, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { TransportStackParams } from "../types";
import { type FC, useEffect } from "react";
import TransportInfo from "../components/TransportInfo";
import TransportNotFound from "../components/TransportNotFound";
import TransportMap from "../components/TransportMap";
import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import { transportSelector } from "../redux/transport/transportSlice";
import { fetchTransportById } from "../redux/transport/transportSlice";

type Props = NativeStackScreenProps<TransportStackParams, "Transport">;

const TransportScreen: FC<Props> = ({ route }) => {
  const dispatch = useAppDispatch();
  const transport = useAppSelector(transportSelector);

  // fetching current transport by ID
  useEffect(() => {
    dispatch(fetchTransportById(route.params.id));
  }, []);

  if (transport.isLoading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0D6EFD" />
      </View>
    );

  if (transport.current)
    return (
      <View>
        <TransportMap />
        <TransportInfo />
      </View>
    );

  if (transport.isError) return <TransportNotFound />;

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default TransportScreen;
