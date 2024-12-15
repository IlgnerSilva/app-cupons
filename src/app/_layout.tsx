import { Loading } from "@/app/components/loading";
import { colors } from "@/styles/theme";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

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
	);
}
