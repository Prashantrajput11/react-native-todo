import {
	StyleSheet,
	Text,
	TextInput,
	View,
	SafeAreaView,
	Pressable,
	FlatList,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";

// import async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
// import icons
import Icon from "react-native-vector-icons/FontAwesome";

const ExpenseListScreen = (props) => {
	// list of dummy todos
	let dummy_todos = [
		{
			id: "01",
			todoTitle: "buy milk",
		},
		{
			id: "02",
			todoTitle: "clean rack",
		},
	];

	// initialise local states
	const [todo, setTodo] = useState([]);
	const [inputText, setInputText] = useState("");
	const [description, setDescription] = useState("");
	const [editingTodo, setEditingTodo] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	console.log("hello");
	// Function to Add todo
	const handleAddToo = () => {
		console.log("inputText");
		if (!isEditing && inputText.trim()) {
			setTodo([
				...todo,
				{
					id: Math.random().toString(),
					todoTitle: inputText,
					description: description,
				},
			]);
			setInputText("");
			setDescription("");
		}
	};

	// Function to delete todo
	const handleDelete = (todos, item) => {
		// filter tood on id
		let filteredList = todos.filter((todo) => {
			return todo.id !== item.id;
		});

		// update todos state
		setTodo(filteredList);
	};

	// Function to update todo
	const updateTodo = (itemToUpdate, todoTitle, description) => {
		return todo.map((item) =>
			item.id === itemToUpdate.id
				? { ...item, todoTitle: todoTitle, description: description }
				: item
		);
	};

	// Function to edit todos
	const handleEdit = () => {
		// check if editing is not null and trim extra spaces
		if (isEditing && inputText.trim()) {
			const updatedTodos = updateTodo(editingTodo, inputText, description);

			setTodo(updatedTodos); // update todo state
			setIsEditing(false); // when editing is done, update editing state
			setEditingTodo(null);
			setInputText(""); // clear the input once todo is added/updated
			setDescription("");
		}
	};

	return (
		<>
			<SafeAreaView />

			<View style={{ alignItems: "center" }}>
				<CustomInput
					onChangeText={(e) => setInputText(e)}
					placeholder={"enter your todo"}
					value={inputText}
				/>
				<CustomInput
					onChangeText={(e) => setDescription(e)}
					placeholder={"enter description"}
					value={description}
				/>

				{/* total todos */}
				<View style={styles.todoLengthContainer}>
					<Text>total : {todo.length}</Text>
				</View>
			</View>

			<View style={{ alignItems: "center" }}>
				{/* add functionality */}
				<Pressable onPress={() => handleAddToo()} style={styles.addButton}>
					<Text style={styles.addButtonText}>Add</Text>
				</Pressable>

				{/* pressable to handle edit functionality */}
				<Pressable onPress={() => handleEdit()} style={styles.saveButton}>
					<Text style={styles.saveButtonText}>Update</Text>
				</Pressable>
			</View>

			<View style={styles.listContainer}>
				<FlatList
					data={todo.slice().reverse()}
					renderItem={({ item, index }) => (
						<View style={styles.todoContainer}>
							<View>
								<Text style={[styles.todoText]}>{item.todoTitle}</Text>
								<Text>{item.description}</Text>
							</View>

							<Pressable
								onPress={() => {
									setIsEditing(true);
									setEditingTodo(item);
									setInputText(item.todoTitle); // re fill the input with the text of item currently being edited
									setDescription(item.description);
								}}
							>
								<Icon name="edit" size={30} color="#900" />
							</Pressable>
							<Pressable
								onPress={() => handleDelete(todo, item)}
								style={{
									flexDirection: "row",
								}}
							>
								<Icon name="trash-o" size={30} color="#900" />
							</Pressable>
						</View>
					)}
				/>
			</View>
		</>
	);
};

export default ExpenseListScreen;

const styles = StyleSheet.create({
	addButton: {
		backgroundColor: "#3498db",
		padding: 10,
		alignItems: "center",
		borderRadius: 5,
		marginHorizontal: 10,
		marginBottom: 32,
		width: 100,
	},
	addButtonText: {
		color: "white",
		fontSize: 16,
	},
	saveButton: {
		backgroundColor: "#2ecc71",
		padding: 10,
		alignItems: "center",
		borderRadius: 5,
		marginHorizontal: 10,
		marginBottom: 32,
		width: 100,
	},
	saveButtonText: {
		color: "white",
		fontSize: 16,
	},
	todoContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
		backgroundColor: "#ebf5fb",
		paddingHorizontal: 36,
		paddingVertical: 16,
		borderRadius: 6,
	},
	todoLengthContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 10,
		backgroundColor: "#ebf5fb",
		height: 30,
		paddingHorizontal: 8,
		paddingVertical: 2,
		borderRadius: 6,
	},
	listContainer: {
		// alignItems: "center",
		marginHorizontal: 12,
	},
	todoText: {
		fontSize: 24,
		width: "60%",
	},
});
