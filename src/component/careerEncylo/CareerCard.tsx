import { Pressable, Text, View } from "react-native";
import {
  ChevronRight,
  Code2,
  HeartPulse,
  Palette,
  Scale,
  Sparkles,
} from "lucide-react-native";

type Career = {
  id: string;
  name: string;
  category: string;
  desc: string;
  icon: string;
  fitTags: string[];
  exams: string[];
  moreExams?: number;
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
      className="mb-3.5 rounded-[18px] border border-[#E2E5E9] bg-white p-4 active:opacity-70"
    >
      {/* Header */}
      <View className="flex-row items-start justify-between">
        <View className="flex-1 pr-3">
          <View className="flex-row items-center">
            <View className="mr-2.5 h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#EEF3F7]">
              <CareerIcon type={career.icon} />
            </View>

            <View className="flex-1">
              <Text className="text-[17px] font-extrabold text-[#16202A]">
                {career.name}
              </Text>

              <Text className="mt-0.5 text-[10px] font-bold text-[#6B7684]">
                {career.category}
              </Text>
            </View>
          </View>
        </View>

        {/* View Button */}
        <Pressable
          onPress={onPress}
          className="rounded-[10px] bg-[#F0F1FF] px-3.5 py-2 active:opacity-70"
        >
          <Text className="text-[12px] font-bold text-[#5146E5]">
            View
          </Text>
        </Pressable>
      </View>

      {/* Description */}
      <Text
        numberOfLines={3}
        className="mt-3 text-[12px] leading-[19px] text-[#6B7684]"
      >
        {career.desc}
      </Text>

      {/* Career Fit Chips */}
      {career.fitTags.length > 0 && (
        <View className="mt-3 flex-row flex-wrap gap-2">
          {career.fitTags.slice(0, 2).map((tag) => (
            <View
              key={tag}
              className="rounded-full border border-[#E3D4FF] bg-[#F8F2FF] px-3 py-2"
            >
              <Text className="text-[10px] font-semibold leading-[15px] text-[#7A3FF2]">
                {tag}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Exams */}
      {career.exams.length > 0 && (
        <View className="mt-2.5 flex-row flex-wrap items-center gap-2">
          {career.exams.slice(0, 2).map((exam) => (
            <View
              key={exam}
              className="rounded-full bg-[#F1F2F4] px-3 py-2"
            >
              <Text
                numberOfLines={1}
                className="max-w-[260px] text-[10px] font-semibold text-[#596575]"
              >
                {exam}
              </Text>
            </View>
          ))}

          {!!career.moreExams && career.moreExams > 0 && (
            <Text className="text-[10px] font-bold text-[#9AA4AF]">
              +{career.moreExams} More exams
            </Text>
          )}
        </View>
      )}
    </Pressable>
  );
}