import React, { useState } from "react";
import {
	FlatList,
	StyleSheet,
	View,
	Image,
	Dimensions,
	Text,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const CustomSlider = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const sliderData = [
		{
			id: "01",
			image: require("../assets/onboarding1.png"),
			title: "Welcome to Expense Tracker",
		},
		{
			id: "02",
			image: require("../assets/onboarding21.png"),
			title: "Track Your Expenses",
		},
		{
			id: "03",
			image: require("../assets/onboarding2.png"),
			title: "Set Budgets and Goals",
		},
	];

	const handleScroll = (event) => {
		let scrollPositionX = event.nativeEvent.contentOffset.x;
		console.log("scoll pos x", scrollPositionX);

		console.log({ screenWidth });
		let currentSlideIndex = scrollPositionX / screenWidth;
		setActiveIndex(currentSlideIndex);
		console.log("current slider", currentSlideIndex);
	};

	return (
		<View style={styles.container}>
			{/* render flatlist */}
			<View>
				<FlatList
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					onScroll={handleScroll}
					data={sliderData}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<View style={styles.slide}>
							<Image source={item.image} style={styles.image} />
							<Text style={styles.slideTitle}>{item.title}</Text>
						</View>
					)}
				/>
			</View>

			<View style={styles.dotIndicatorContainer}>
				{sliderData.map((_, index) => (
					<View
						key={index}
						style={[
							styles.dotIndicator,
							index === activeIndex ? styles.activeDotIndictaor : null,
						]}
					/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	slide: {
		width: screenWidth,
		height: 600,
		// backgroundColor: "green",
		justifyContent: "center",
		alignItems: "center",
		// paddingHorizontal: 16,
	},
	image: {
		width: screenWidth,
		height: "80%",
		resizeMode: "contain",
		// backgroundColor: "red",
	},
	dotIndicatorContainer: {
		// flex: 1,

		justifyContent: "center",
		// alignItems: "center",
		flexDirection: "row",
	},
	activeDotIndictaor: {
		backgroundColor: "red",
	},
	dotIndicator: {
		height: 20,
		width: 20,
		backgroundColor: "#3A539B",
		borderRadius: 10,

		marginHorizontal: 8,
	},
	slideTitle: {
		fontSize: 24,
	},
});

export default CustomSlider;
