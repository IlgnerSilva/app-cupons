import { categoriesIcons } from "@/utils/categories-icons";
import type React from "react";
import { Pressable, type PressableProps, Text } from "react-native";
type Props = PressableProps & {
	iconID: string;
	isSelected: boolean;
	name: string;
};

export function Category({ iconID, isSelected = false, name, ...rest }: Props) {
	const Icon = categoriesIcons[iconID];
	return (
		<Pressable
			className={`h-9 ${isSelected ? "bg-green-base" : "bg-gray-100"} border border-gray-300 rounded-lg justify-center items-center flex-row px-2 gap-2 ${rest.className}`}
			{...rest}
		>
			<Icon size={16} color={isSelected ? "white" : "gray"} />
			<Text
				className={`text-sm ${isSelected ? "text-gray-100" : "text-gray-500"} font-regular`}
			>
				{name}
			</Text>
		</Pressable>
	);
}
