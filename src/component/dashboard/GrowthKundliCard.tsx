import React from "react";
import { Text, View } from "react-native";
import { FileText } from "lucide-react-native";

export default function GrowthKundliCard() {
  return (
    <View className="w-full rounded-[24px] border border-[#E2E5E9] bg-white px-[12px] py-[12px]">
      {/* Header */}
      <View className="flex-row items-center">
        <View className="h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-[#1A3A5C]">
          <FileText size={21} color="#FFFFFF" />
        </View>

        <View className="ml-[10px]">
          <Text className="text-[16px] font-medium leading-[19px] text-[#303030]">
            Growth Kundli
          </Text>

          <Text className="mt-[1px] text-[11px] leading-[15px] text-[#6B7684]">
            360 Degree Career Report
          </Text>
        </View>
      </View>

      {/* Reports */}
      <View className="mt-[11px] gap-[7px]">
        <View className="h-[40px] flex-row items-center rounded-[9px] border border-[#D9DDE2] px-[14px]">
          <Text className="flex-1 text-[13px] font-medium text-[#303030]">
            Growth Kundli 1
          </Text>

          <Text className="text-[14px] text-[#555555]">
            &gt;
          </Text>
        </View>

        <View className="h-[40px] flex-row items-center rounded-[9px] border border-[#D9DDE2] px-[14px]">
          <Text className="flex-1 text-[13px] font-medium text-[#303030]">
            Growth Kundli 2
          </Text>

          <Text className="text-[14px] text-[#555555]">
            &gt;
          </Text>
        </View>
      </View>
    </View>
  );
}