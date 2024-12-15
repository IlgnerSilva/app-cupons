import { Step } from "@/app/components/steps/step";
import { colors } from "@/styles/colors";
import { MapPin, QrCode, Ticket } from "lucide-react-native";
import { Text, View } from "react-native";

export function Steps() {
	return (
		<View className="flex-1 gap-6">
			<Text className="text-base font-regular dark:text-gray-200 text-gray-500">
				Veja como funciona:
			</Text>
			<Step
				scrIcon={<MapPin color={colors.red.base} />}
				title="Encontre estabelecimentos"
				description={
					"Veja locais perto de você que são" + "\n" + "parceiros Cluby"
				}
			/>
			<Step
				scrIcon={<QrCode color={colors.red.base} />}
				title="Ative o cupom com QR Code"
				description={
					"Escaneie o código no estabelecimento" +
					"\n" +
					"para usar o benefício"
				}
			/>
			<Step
				scrIcon={<Ticket color={colors.red.base} />}
				title="Garanta vantagens perto de você"
				description={
					"Ative cupons onde estiver, em" +
					"\n" +
					"diferentes tipos de estabelecimento "
				}
			/>
		</View>
	);
}
