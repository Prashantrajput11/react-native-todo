import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ExpenseListScreen from "./screens/ExpenseListScreen";
import SplashScreen from "./screens/SplashScreen";

export default function App() {
	return (
		<View>
			<ExpenseListScreen />
			{/* <SplashScreen /> */}
		</View>
	);
}

const styles = StyleSheet.create({});
