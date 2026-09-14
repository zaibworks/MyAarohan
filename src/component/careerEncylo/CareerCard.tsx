import { Pressable, Text, View } from "react-native";
import { ChevronRight, Code2, HeartPulse, Palette, Scale, Sparkles } from "lucide-react-native";

type Career = {
  id: string;
  name: string;
  category: string;
  desc: string;
  icon: string;
};

type Props = {
  career: Career;
  onPress: () => void;
};

function CareerIcon({ type }: { type: string }) {
  const props = {
    size: 21,
    color: "#1A3A5C",
    strokeWidth: 1.8,
  };

  switch (type) {
    case "technology":
      return <Code2 {...props} />;

    case "health":
      return <HeartPulse {...props} />;

    case "design":
    case "arts":
      return <Palette {...props} />;

    case "law":
      return <Scale {...props} />;

    default:
      return <Sparkles {...props} />;
  }
}

export default function CareerCard({ career, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="mb-2.5 flex-row items-center rounded-2xl border border-[#E2E5E9] bg-white p-3 active:opacity-70"
    >
      <View className="h-[44px] w-[44px] items-center justify-center rounded-[13px] bg-[#EEF3F7]">
        <CareerIcon type={career.icon} />
      </View>

      <View className="ml-3 flex-1">
        <Text className="text-[13px] font-extrabold text-[#16202A]">
          {career.name}
        </Text>

        <Text
          numberOfLines={2}
          className="mt-1 text-[11px] leading-[16px] text-[#6B7684]"
        >
          {career.desc}
        </Text>

        <Text className="mt-1 text-[9px] font-extrabold text-[#1A3A5C]">
          {career.category}
        </Text>
      </View>

      <ChevronRight size={17} color="#9AA4AF" />
    </Pressable>
  );
}