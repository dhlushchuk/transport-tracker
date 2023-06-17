import { NavigationContainer } from "@react-navigation/native";
import ListScreen from "./src/screens/ListScreen";
import MapScreen from "./src/screens/MapScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import TransportScreen from "./src/screens/TransportScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { TTabBarIconProps, TransportStackParams } from "./src/types";
import type { FC } from "react";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { useTranslation } from "react-i18next";
import "./src/localization/i18n";

// Main Navigation
const Tab = createBottomTabNavigator();

// Nested Transport Navigation
const TransportStack = createNativeStackNavigator<TransportStackParams>();

const TransportScreenStack: FC = () => {
  return (
    <TransportStack.Navigator
      initialRouteName="List"
      screenOptions={{ headerShown: false }}
    >
      <TransportStack.Screen name="List" component={ListScreen} />
      <TransportStack.Screen name="Transport" component={TransportScreen} />
    </TransportStack.Navigator>
  );
};

export default function App() {
  const { t } = useTranslation();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="ListStack"
          screenOptions={{
            tabBarStyle: { paddingTop: 5, paddingBottom: 5, height: 60 },
          }}
        >
          <Tab.Screen
            name="ListStack"
            component={TransportScreenStack}
            options={{
              title: t("list.title"),
              tabBarIcon: ({ focused, color, size }: TTabBarIconProps) => (
                <Ionicons
                  name={focused ? "list" : "list-outline"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              title: t("map.title"),
              tabBarIcon: ({ focused, color, size }: TTabBarIconProps) => (
                <Ionicons
                  name={focused ? "map" : "map-outline"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: t("settings.title"),
              tabBarIcon: ({ focused, color, size }: TTabBarIconProps) => (
                <Ionicons
                  name={focused ? "settings" : "settings-outline"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
