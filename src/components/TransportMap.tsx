import { Marker } from "react-native-maps";
import { View, StyleSheet } from "react-native";
import { FC, useMemo } from "react";
import MarkerIconComponent from "../components/MarkerIconComponent";
import MapComponent from "../components/MapComponent";
import type { TTransport } from "../types";
import useAppSelector from "../hooks/useAppSelector";
import { currentTransportSelector } from "../redux/transport/transportSlice";

const TransportMap: FC = () => {
  const currentTransport = useAppSelector(
    currentTransportSelector
  ) as TTransport;

  // current transport position on the map
  const position = useMemo(
    () => ({
      lat: currentTransport.position.latitude,
      lng: currentTransport.position.longitude,
      latDelta: 0.02,
    }),
    [currentTransport.position]
  );

  return (
    <View style={styles.mapContainer}>
      <MapComponent position={position}>
        <Marker
          description={currentTransport.name}
          coordinate={currentTransport.position}
        >
          <MarkerIconComponent category={currentTransport.category} />
        </Marker>
      </MapComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: 300,
  },
});

export default TransportMap;
