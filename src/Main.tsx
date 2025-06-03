import { NavigationContainer } from "@react-navigation/native"
import { BottomTabNavigator } from "./presentation/navigation/BottomTabNavigator"


export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  )
}
