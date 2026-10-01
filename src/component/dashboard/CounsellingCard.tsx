import React from "react";
import { Pressable, Text, View } from "react-native";
import { CalendarCheck } from "lucide-react-native";

export default function CounsellingCard() {
  return (
    <View className="w-full rounded-[24px] border border-[#E2E5E9] bg-white px-[12px] py-[12px]">
      {/* Header */}
      <View className="flex-row items-center">
        <View className="h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-[#1A3A5C]">
          <CalendarCheck size={21} color="#FFFFFF" />
        </View>

        <View className="ml-[10px]">
          <Text className="text-[16px] font-medium leading-[19px] text-[#303030]">
            Counselling
          </Text>

          <Text className="mt-[1px] text-[11px] leading-[15px] text-[#6B7684]">
            360 Degree Career Counselling
          </Text>
        </View>
      </View>

      {/* Session */}
      <View className="mt-[11px] rounded-[21px] border border-[#D9DDE2] px-[13px] py-[10px]">
        <View className="flex-row">
          {/* Date / Time */}
          <View className="flex-1">
            <Text className="text-[12px] font-medium leading-[18px] text-[#444444]">
              Thu, 24 Sept, 2026
            </Text>

            <Text className="text-[12px] font-medium leading-[18px] text-[#444444]">
              9:30 AM-10:00 AM
            </Text>
          </View>

          {/* Counsellor */}
          <View className="w-[112px]">
            <Text className="text-[12px] leading-[18px] text-[#777777]">
              With
            </Text>

            <Text className="text-[12px] font-medium leading-[18px] text-[#444444]">
              Ayushman Gupta
            </Text>
          </View>
        </View>

        {/* Buttons */}
        <View className="mt-[9px] flex-row items-center justify-between">
          <Pressable className="h-[29px] w-[106px] items-center justify-center rounded-[6px] bg-[#079B68]">
            <Text className="text-[11px] font-semibold text-white">
              Join session
            </Text>
          </Pressable>

          <Pressable className="h-[29px] w-[98px] items-center justify-center rounded-[6px] border border-[#1A3A5C] bg-white">
            <Text className="text-[11px] font-medium text-[#1A3A5C]">
              View session
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}