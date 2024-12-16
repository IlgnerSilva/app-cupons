import { Category } from "@/components/category";
import { FlatList } from "react-native";
import { s } from "./styles";

export type CategoriesProps = {
	id: string;
	name: string;
}[];

type Props = {
	data: CategoriesProps;
	selected: string;
	onSelect: (id: string) => void;
};
export function Categories({ data, selected, onSelect }: Props) {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<Category
					isSelected={item.id === selected}
					name={item.name}
					iconID={item.id}
					onPress={() => onSelect(item.id)}
				/>
			)}
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={s.content}
			className="max-h-9 absolute top-16 z-10"
		/>
	);
}
