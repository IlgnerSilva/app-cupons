import { Image, Text, View } from "react-native";

export function Welcome() {
	return (
		<View>
			<Image
				className="w-12 h-12 mt-6 mb-7"
				source={require("@/assets/logo.png")}
			/>
			<Text className=" text-2xl font-bold text-gray-600 dark:text-gray-100">
				Boas vindas ao Cluby!
			</Text>
			<Text className="text-base font-regular text-gray-500 dark:text-gray-200">
				Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.
			</Text>
		</View>
	);
}
