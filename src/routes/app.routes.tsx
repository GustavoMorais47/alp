import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PreparoRoutes from "./preparo.routes";
import { Ionicons } from "@expo/vector-icons";

export type AppRoutesList = {
  Preparo: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesList>();

export default function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="Preparo"
        component={PreparoRoutes}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "receipt" : "receipt-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
