import { Marker } from "react-native-maps";
import TRANSPORT_LIST from "../helpers/data.json";
import MarkerIconComponent from "./MarkerIconComponent";
import MapComponent from "./MapComponent";
import type { FC } from "react";
import type { TransportCategory } from "../types";

const MOSCOW = { lat: 55.75222, lng: 37.61556 };

const TransportFullMap: FC = () => {
  return (
    <MapComponent position={MOSCOW}>
      {TRANSPORT_LIST.map(({ id, position, category, name }) => (
        <Marker key={id} description={name} coordinate={position}>
          <MarkerIconComponent
            category={category as keyof typeof TransportCategory}
          />
        </Marker>
      ))}
    </MapComponent>
  );
};

export default TransportFullMap;
