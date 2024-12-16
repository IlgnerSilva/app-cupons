import { Ticket } from "lucide-react-native";
import {
	Image,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
	View,
} from "react-native";

export type PlaceProps = {
	id: string;
	name: string;
	description: string;
	cupons: number;
	cover: string;
	address: string;
};

type Props = TouchableOpacityProps & {
	data: PlaceProps;
};

export function Place({ data, ...rest }: Props) {
	return (
		<TouchableOpacity
			className="h-28 w-full p-2 border border-gray-200 rounded-xl flex-row gap-4 items-center"
			{...rest}
		>
			<Image
				className="w-28 h-24 rounded-lg bg-gray-200"
				source={{ uri: data.cover }}
			/>
			<View className="flex-1 gap-1">
				<Text className="text-sm font-medium text-gray-600 dark:text-gray-400">
					{data.name}
				</Text>
				<Text className="text-xs font-regular text-gray-500 dark:text-gray-300">
					{data.description}
				</Text>
				<View className="flex-row gap-2">
					<Ticket size={16} />
					<Text className="text-xs font-regular text-gray-400 dark:text-gray-200">
						{data.cupons} 3 Cupons disponíveis
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
