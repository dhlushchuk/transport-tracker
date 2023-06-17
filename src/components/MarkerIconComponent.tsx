import type { FC } from "react";
import { Image, StyleSheet } from "react-native";
import { TransportCategory } from "../types";

interface Props {
  category: keyof typeof TransportCategory;
}

const MarkerIconComponent: FC<Props> = ({ category }) => {
  switch (category) {
    case TransportCategory.cargo:
      return (
        <Image
          source={require("../icons/parcel.png")}
          style={styles.markerImage}
        />
      );

    case TransportCategory.special:
      return (
        <Image
          source={require("../icons/helicopter.png")}
          style={styles.markerImage}
        />
      );

    case TransportCategory.passenger:
      return (
        <Image
          source={require("../icons/bus.png")}
          style={styles.markerImage}
        />
      );

    default:
      return null;
  }
};

const styles = StyleSheet.create({
  markerImage: {
    width: 35,
    height: 35,
  },
});

export default MarkerIconComponent;
