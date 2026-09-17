import { useNavigation, useRouter } from "expo-router";
import { Menu } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

const Navbar = () => {
  const navigate = useNavigation() as any;
  const router = useRouter();

  return (
    <View className="border-b border-[#E6E9ED] bg-white pt-10">
      <View className="h-[62px] flex-row items-center justify-between px-4">
        {/* Left */}
        <View className="flex-row items-center gap-3">
          <Pressable
            onPress={() => navigate.openDrawer()}
            className="h-9 w-9 items-center justify-center rounded-[10px] border border-[#E6E9ED] bg-white"
          >
            <Menu size={18} color="#16202A" strokeWidth={2} />
          </Pressable>
        </View>

        {/* Avatar */}
        <Pressable
          onPress={() => router.push("/student/(tabs)/profile")}
          className="h-[34px] w-[34px] items-center justify-center rounded-full bg-[#1A3A5C]"
        >
          <Text className="text-[14px] font-semibold text-white">Z</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;
