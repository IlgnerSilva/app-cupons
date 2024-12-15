import { Button } from "@/app/components/button";
import { Steps } from "@/app/components/steps";
import { Welcome } from "@/app/components/welcome";
import { router } from "expo-router";
import { View } from "react-native";
export default function Index() {
	return (
		<View className="flex-1 p-10 gap-10">
			<Welcome />
			<Steps />
			<Button
				onPress={() => router.navigate("/home")}
				className="bg-green-base rounded-xl h-14"
			>
				<Button.Title className="text-gray-100 font-semibold">
					Começar
				</Button.Title>
			</Button>
		</View>
	);
}
