import type React from "react";
import { Image, Text, View } from "react-native";

export function Step(props: {
	scrIcon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<View className="flex-row  w-full gap-4">
			{props.scrIcon}
			<View className="">
				<Text className="text-base font-bold text-gray-600 dark:text-gray-100">
					{props.title}
				</Text>
				<Text className="text-sm font-regular text-gray-400 dark:text-gray-200">
					{props.description}
				</Text>
			</View>
		</View>
	);
}
