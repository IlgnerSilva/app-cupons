import { colors } from "@/styles/colors";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Text, useWindowDimensions } from "react-native";

import React from "react";
import { Place, type PlaceProps } from "../place";

type Props = {
	data: PlaceProps[];
};
export function Places({ data }: Props) {
	const dimensions = useWindowDimensions();
	const snapPoints = {
		min: 168,
		max: dimensions.height - 200,
	};
	const bottomSheetRef = React.useRef<BottomSheet>(null);
	return (
		// <View className="flex-1">
		// 	{data.map((item) => (
		// 		<Place key={item.id} data={item} />
		// 	))}
		// </View>
		<BottomSheet
			ref={bottomSheetRef}
			handleIndicatorStyle={{
				width: 80,
				height: 4,
				backgroundColor: colors.gray[300],
			}}
			backgroundStyle={{ backgroundColor: colors.gray[100] }}
			snapPoints={[snapPoints.min, snapPoints.max]}
			enableOverDrag={false}
		>
			<BottomSheetFlatList
				data={data}
				renderItem={({ item }) => <Place key={item.id} data={item} />}
				className="flex-1"
			/>
		</BottomSheet>
	);
}
