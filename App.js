import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoadingScreen from "./screens/LoadingScreen";
import Login from "./screens/Login";
import OnboardingScreen from "./screens/OnboardingScreen";

//import DashboardScreen from "./screens/DashboardScreen";
const AppSwitchNavigator = createSwitchNavigator({
    
    LoadingScreen: LoadingScreen,
    OnboardingScreen:OnboardingScreen,
    Login: Login,
   // DashboardScreen: DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)
export default function App() {
  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
