import { colors } from "@/styles/theme";
import { ActivityIndicator } from "react-native";

export function Loading() {
	return <ActivityIndicator className="flex-1" color={colors.green.base} />;
}
