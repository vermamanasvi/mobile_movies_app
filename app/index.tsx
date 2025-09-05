import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className = 'flex-1 justify-center items-center'>
      <Text className="text-5xl text-dark-200 font-bold"> Welcome!</Text>

      <Link href="/onboarding" className="mt-5 px-4 py-2 bg-blue-500 rounded"> Onboarding </Link>
      <Link href="/movie/Avengers" className="mt-5 px-4 py-2 bg-green-500 rounded"> Avengers </Link>
    </View>

  );
}
