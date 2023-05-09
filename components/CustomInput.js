import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CustomInput = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.textInputContainer}>
				<TextInput
					style={{ fontSize: 20 }}
					placeholder={props.placeholder}
					onChangeText={props.onChangeText}
					value={props.value}
				/>
			</View>
		</View>
	);
};

export default CustomInput;

const styles = StyleSheet.create({
	container: {
		// backgroundColor: "red",
		marginHorizontal: 32,
		marginVertical: 22,
		alignItems: "center",
	},
	textInputContainer: {
		borderColor: "#2f89c5",
		borderWidth: 2,
		paddingVertical: 14,
		paddingHorizontal: 16,
		borderRadius: 6,
		width: 222,
		// backgroundColor: "green",
	},
});
