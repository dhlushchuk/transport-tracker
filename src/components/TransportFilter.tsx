import type { FC } from "react";
import { Picker } from "@react-native-picker/picker";
import getTransportCategory from "../helpers/getTransportCategory";
import { StyleSheet, View, Button } from "react-native";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import type { RootState } from "../redux/store";
import { changeFilter, filterTransport } from "../redux/list/listSlice";
import { useTranslation } from "react-i18next";

const filterSelector = (state: RootState) => state.list.filter;

const TransportFilter: FC = () => {
  const filter = useAppSelector(filterSelector);
  const dispatch = useAppDispatch();
  const changeHandler = (value: string) => {
    dispatch(changeFilter(value));
  };

  const { t } = useTranslation();

  const submitHandler = () => {
    dispatch(filterTransport());
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerWrapper}>
        <Picker
          style={styles.picker}
          selectedValue={filter.current}
          onValueChange={changeHandler}
        >
          <Picker.Item label={t("list.picker")} value="" />
          {filter.categories.map((category) => (
            <Picker.Item
              key={category}
              label={getTransportCategory(category)}
              value={category}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title={t("list.submitButton")} onPress={submitHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingRight: 10,
    marginTop: 10,
  },
  pickerWrapper: {
    flex: 2,
  },
  buttonWrapper: {
    flex: 1,
  },
  picker: {
    height: 60,
  },
});

export default TransportFilter;
