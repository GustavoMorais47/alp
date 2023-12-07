import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreparoLista from "../pages/preparo";
import PreparoAdicionar from "../pages/preparo/adicionar";
import PreparoDetalhes from "../pages/preparo/detalhe";

export type PreparoRoutesList = {
  PreparoLista: undefined;
  PreparoDetalhes: { id: string };
  PreparoAdicionar: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<PreparoRoutesList>();

export default function PreparoRoutes() {
  return (
    <Navigator
      initialRouteName="PreparoLista"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Screen name="PreparoLista" component={PreparoLista} />
      <Screen name="PreparoDetalhes" component={PreparoDetalhes} />
      <Screen name="PreparoAdicionar" component={PreparoAdicionar} />
    </Navigator>
  );
}
