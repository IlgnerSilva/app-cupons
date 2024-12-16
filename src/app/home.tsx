import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

import { Categories, type CategoriesProps } from "@/components/categories";
import type { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";
import { api } from "@/services/api";

type Markets = PlaceProps;

export default function Home() {
	const [categories, setCategories] = useState<CategoriesProps>([]);
	const [category, setCategory] = useState<string>("");
	const [markets, setMarkets] = useState<Markets[]>([]);
	async function fetchCategories() {
		try {
			const { data } = await api.get("/categories");
			setCategories(data);
			setCategory(data[0].id);
		} catch (error) {
			Alert.alert("Ops", "Nao foi possivel carregar as categorias");
		}
	}

	async function fetchMarks() {
		try {
			if (!category) return;
			const { data } = await api.get(`/markets/category/${category}`);
			setMarkets(data);
			console.log(data);
		} catch (error) {
			Alert.alert("Ops", "Nao foi possivel carregar as marcas");
		}
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchCategories();
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchMarks();
	}, [category]);

	return (
		<View className="flex-1">
			<Categories
				selected={category}
				onSelect={setCategory}
				data={categories}
			/>
			<Places data={markets} />
		</View>
	);
}
