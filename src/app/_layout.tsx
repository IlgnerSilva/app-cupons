import { Loading } from "@/components/loading";
import { colors } from "@/styles/theme";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
	Rubik_400Regular,
	Rubik_500Medium,
	Rubik_600SemiBold,
	Rubik_700Bold,
	useFonts,
} from "@expo-google-fonts/rubik";

// Import your global CSS file
import "../global.css";

export default function RootLayout() {
	const isDarkMode = useColorScheme();
	const [fontsLoaded] = useFonts({
		Rubik_400Regular,
		Rubik_500Medium,
		Rubik_600SemiBold,
		Rubik_700Bold,
	});

	if (!fontsLoaded) {
		return <Loading />;
	}

	return (
		<GestureHandlerRootView className="flex-1">
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: {
						backgroundColor:
							isDarkMode === "dark" ? colors.gray[600] : colors.gray[100],
						padding: 16,
					},
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen name="home" />
			</Stack>
		</GestureHandlerRootView>
	);
}
