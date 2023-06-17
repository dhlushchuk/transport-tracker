import type { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { changeLanguage } from "../redux/language/languageSlice";
import type { LanguageState } from "../types";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { languageSelector } from "../redux/language/languageSlice";
import { useTranslation } from "react-i18next";

const langugaes = [
  {
    code: "ru",
    label: "Русский",
  },
  {
    code: "en",
    label: "English",
  },
];

const LanguageComponent: FC = () => {
  const language = useAppSelector(languageSelector);
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();

  const changeHandler = (value: LanguageState["language"]) => {
    dispatch(changeLanguage(value));
    i18n.changeLanguage(value);
  };

  return (
    <View>
      <Text style={styles.text}>{t("settings.language")}: </Text>
      <Picker selectedValue={language} onValueChange={changeHandler}>
        {langugaes.map(({ code, label }) => (
          <Picker.Item key={code} label={label} value={code} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default LanguageComponent;
