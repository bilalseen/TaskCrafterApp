import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import TodoDetail from "../screens/TodoDetail";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TodoDetail" component={TodoDetail} />
    </Stack.Navigator>
  );
}
