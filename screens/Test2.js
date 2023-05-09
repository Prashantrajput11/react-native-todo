import {
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";

const Test2 = () => {
	const [input, setInput] = useState("");
	const [todo, setTodo] = useState([]);
	return (
		<View>
			<TextInput placeholder="enter todo" onChangeText={(e) => setInput(e)} />

			<TouchableOpacity
				onPress={() =>
					setTodos([...todos, { id: Math.random().toString(), text: input }])
				}
			>
				<Text>Add</Text>
			</TouchableOpacity>

			<FlatList
				data={todo}
				renderItem={({ item, index }) => (
					<View>
						<Text>{item.text}</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default Test2;

const styles = StyleSheet.create({});
