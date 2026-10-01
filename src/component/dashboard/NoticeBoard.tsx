import { Bell } from "lucide-react-native";
import { Text, View } from "react-native";

export default function NoticeBoard() {
  return (
    <View className="w-full rounded-[23px] border border-[#E2E5E9] bg-white px-[11px] py-[11px]">
      {/* Header */}
      <View className="flex-row items-center">
        <View className="h-[38px] w-[38px] items-center justify-center rounded-[8px] bg-[#DDF3F7]">
          <Bell size={21} color="#1A3A5C" />
        </View>
        

        <View className="ml-[8px]">
          <Text className="text-[16px] font-medium leading-[17px] text-[#303030]">
            Notice board
          </Text>

          <Text className="mt-[1px] text-[11px] leading-[12px] text-[#7A838D]">
            Updates from your school
          </Text>
        </View>
      </View>

      {/* Empty State */}
      <Text className="mt-[17px] mb-[14px] text-[10px] text-[#8B939C]">
        No school notices right now.
      </Text>
    </View>
  );
}
