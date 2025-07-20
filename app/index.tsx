import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View className="bg-red-200">
        <Text className="text-xl font-bold text-blue-500">Impulse!</Text>
      </View>
      <Link href="/settings" push asChild>
        <Button title="Settings" />
      </Link>
    </View>
  );
}
