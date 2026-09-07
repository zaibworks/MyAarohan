import { useRouter } from "expo-router";
import { Compass } from "lucide-react-native";
import { useEffect } from "react";
import { View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-[#1A3A5C]">
      {/* Logo Section */}
      <View className="flex-1 items-center justify-center">
        <View className="h-[118px] w-[118px] items-center justify-center rounded-[32px] border border-[#E2E5E9] bg-[#F7F9FC]">
          {/* Pulsing outer border */}
          <View className="absolute -inset-[10px] rounded-[40px] border border-[#E2E5E9]" />

          {/* Logo */}
          <View className="h-[78px] w-[78px] items-center justify-center rounded-[24px] bg-[#1A3A5C]">
            {/* Temporary logo mark */}
            <Compass size={50} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}
