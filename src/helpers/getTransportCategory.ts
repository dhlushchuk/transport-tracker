import { TransportCategory } from "../types";
import { t } from "i18next";

// getting category label by code
const getTransportCategory = (category: string) => {
  switch (category) {
    case TransportCategory.cargo:
      return t("category.cargo");

    case TransportCategory.special:
      return t("category.special");

    case TransportCategory.passenger:
      return t("category.passenger");

    default:
      return t("category.unknown");
  }
};

export default getTransportCategory;
