import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import { FC, ReactNode, useMemo } from "react";
import type { TPosition } from "../types";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const DEFAULT_LATITUDE_DELTA = 0.5;

interface Props {
  children: ReactNode | ReactNode[];
  position: TPosition;
}

const MapComponent: FC<Props> = (props) => {
  const { children, position } = props;

  const DEFAULT_LONGITUDE_DELTA =
    (position.latDelta || DEFAULT_LATITUDE_DELTA) * ASPECT_RATIO;

  const latitudeDelta = position.latDelta || DEFAULT_LATITUDE_DELTA;
  const longitudeDelta = position.lngDelta || DEFAULT_LONGITUDE_DELTA;

  const INITIAL_POSITION = useMemo(
    () => ({
      latitude: position.lat,
      longitude: position.lng,
      latitudeDelta,
      longitudeDelta,
    }),
    [position, latitudeDelta, longitudeDelta]
  );

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={INITIAL_POSITION}
    >
      {children}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapComponent;
