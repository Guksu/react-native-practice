import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Properties() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Properties {id}</Text>
    </View>
  );
}
