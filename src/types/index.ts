export type TTransport = {
  id: number;
  name: string;
  phone: string;
  category: keyof typeof TransportCategory;
  position: {
    latitude: number;
    longitude: number;
  };
};

export enum TransportCategory {
  cargo = "cargo",
  passenger = "passenger",
  special = "special",
}

export type TransportStackParams = {
  List: undefined;
  Transport: {
    id: number;
  };
};

export type TTabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

export type TPosition = {
  lat: number;
  lng: number;
  latDelta?: number;
  lngDelta?: number;
};

export interface LanguageState {
  language: "ru" | "en";
}
