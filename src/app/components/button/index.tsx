import {
	ActivityIndicator,
	Text,
	type TextProps,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
	isLoading?: boolean;
};

function Button({
	children,
	className,
	isLoading = false,
	...rest
}: ButtonProps) {
	return (
		<TouchableOpacity
			disabled={isLoading}
			activeOpacity={0.7}
			className={`${className} flex-row justify-center items-center`}
			{...rest}
		>
			{isLoading ? <ActivityIndicator className="text-gray-100" /> : children}
		</TouchableOpacity>
	);
}

function Title({ children, className }: TextProps) {
	return <Text className={className}>{children}</Text>;
}

function Icon({ children, className }: TextProps) {
	return <Text>{children}</Text>;
}

Button.Title = Title;
Button.Icon = Icon;
export { Button };
