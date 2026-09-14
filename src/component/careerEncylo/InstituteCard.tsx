import { Pressable, Text, View } from "react-native";
import { Building2, ChevronRight } from "lucide-react-native";

type Props = {
  name: string;
  course: string;
  location: string;
  type: "government" | "private";
};

export default function InstituteCard({
  name,
  course,
  location,
  type,
}: Props) {
  return (
    <Pressable className="mb-2 flex-row items-center rounded-[13px] border border-[#E2E5E9] bg-white p-3 active:opacity-70">
      <View className="h-[35px] w-[35px] items-center justify-center rounded-[10px] bg-[#EEF3F7]">
        <Building2 size={17} color="#1A3A5C" />
      </View>

      <View className="ml-2.5 flex-1">
        <Text className="text-[11px] font-extrabold leading-[15px] text-[#16202A]">
          {name}
        </Text>

        <Text className="mt-0.5 text-[9.5px] text-[#6B7684]">
          {course} • {location}
        </Text>

        <Text className="mt-1 text-[8px] font-extrabold uppercase text-[#1A3A5C]">
          {type}
        </Text>
      </View>

      <ChevronRight size={16} color="#9AA4AF" />
    </Pressable>
  );
}