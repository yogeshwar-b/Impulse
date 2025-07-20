import { Link } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Link href="/settings" push asChild>
        <Button title="Settings" />
      </Link>
    </View>
  );
}
