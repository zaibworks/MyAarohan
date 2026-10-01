import React from "react";
import { Text, View } from "react-native";
import {
  BellRing,
  BookOpen,
  GraduationCap,
  LifeBuoy,
  ChevronRight
} from "lucide-react-native";

export default function HelpfulActionsCard() {
  return (
    <View className="w-full rounded-[23px] border border-[#E2E5E9] bg-white px-[10px] py-[11px]">
      {/* Title */}
      <Text className="mb-[10px] text-center text-[16px] font-medium text-[#303030]">
        Helpful Actions
      </Text>

      {/* Mentorship */}
      <View className=" h-[83px] rounded-[15px] border border-[#D9DDE2] px-[8px]">
        <View className="flex-1 flex-row">
          {/* left content  */}
          <View className="flex-1 flex-row mt-3 ">
          <View className="h-[28px] w-[28px] items-center justify-center rounded-[7px] bg-[#1A3A5C]">
            <GraduationCap size={16} color="#FFFFFF" />
          </View>

          <View className="ml-[7px] flex-1">
            <Text className="text-[14px] font-medium leading-[15px] text-[#303030]">
              Mentorship Sessions
            </Text>

            <Text className="mt-1 text-[10px] leading-[11px] text-[#7A838D]">
              Complete all three assessment
            </Text>

            <Text className="text-[10px] leading-[11px] text-[#7A838D]">
              sections to unlock.
            </Text>
          </View>

          </View>
              
              {/* locked icon  */}
          <View className="self-start mt-3 rounded-[5px] border border-[#8B8B8B] bg-[#F4F4F4] px-[5px] py-[2px]">
            <Text className="text-[10px] text-[#777777]">
              Locked
            </Text>
          </View>
        </View>

        <Text className="absolute bottom-[7px] right-[10px] text-[10px] font-medium text-[#1A3A5C]">
          View plans  &gt;
        </Text>
      </View>

      {/* Student Support */}
      <View className="mt-[7px] py-4 flex-row items-center rounded-[15px] border border-[#D9DDE2] px-[8px]">
        <View className="flex-1 flex-row">

        <View className="h-[28px] w-[28px] items-center justify-center rounded-[7px] bg-[#1A3A5C]">
          <LifeBuoy size={16} color="#FFFFFF" />
        </View>

        <View className="ml-[7px] flex-1">
          <Text className="text-[14px] font-medium leading-[15px] text-[#303030]">
            Student Support
          </Text>

          <Text className="mt-[1px] text-[10px] leading-[11px] text-[#6B7684]">
            Get help with assessments,
          </Text>

          <Text className="text-[10px] leading-[11px] text-[#6B7684]">
            payments, or sessions.
          </Text>
        </View>
        </View>

        <ChevronRight size={12}/>
      </View>

      {/* Career Encyclopedia */}
      <View className="mt-[7px] h-[57px] flex-row items-center rounded-[15px] border border-[#D9DDE2] px-[8px]">
        <View className="flex-1 flex-row ">

        <View className="h-[28px] w-[28px] items-center justify-center rounded-[7px] bg-[#1A3A5C]">
          <BookOpen size={16} color="#FFFFFF" />
        </View>

        <View className="ml-[7px] flex-1">
          <Text className="text-[14px] font-medium leading-[15px] text-[#303030]">
            Career Encyclopedia
          </Text>

          <Text className="mt-[1px] text-[10px] leading-[11px] text-[#6B7684]">
            Explore careers, subjects & pathways.
          </Text>
        </View>
        </View>

       <ChevronRight size={12}/>
      </View>
    </View>
  );
}