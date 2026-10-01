import React from "react";
import { Pressable, Text, View } from "react-native";
import {
  ClipboardList,
  Heart,
  LockKeyhole,
  UserRound,
} from "lucide-react-native";

export default function AssessmentCard() {
  return (
    <View className="w-full rounded-[24px] border border-[#E2E5E9] bg-white px-[12px] py-[12px]">
      {/* Header */}
      <View className="flex-row items-start">
        <View className="h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-[#1A3A5C]">
          <ClipboardList size={21} color="#FFFFFF" />
        </View>

        <View className="ml-[10px] flex-1">
          <Text className="text-[16px] font-medium leading-[19px] text-[#303030]">
            Assessment
          </Text>

          <Text className="mt-[1px] text-[11px] leading-[15px] text-[#6B7684]">
            360° Career Assessment
          </Text>
        </View>

        <View className="h-[25px] min-w-[49px] items-center justify-center rounded-[6px] border border-[#d8d8d8] bg-[#F4F4F4] px-[5px]">
          <Text className="text-[10px] font-medium text-[#777777]">
            Locked
          </Text>
        </View>
      </View>

      {/* Assessment Options */}
      <View className="mt-[11px] gap-[7px]">
        {/* Row 1 */}
        <View className="flex-row gap-[6px]">
          <AssessmentOption
            icon={<ClipboardList size={17} color="#FFFFFF" />}
            title="Aptitude"
          />

          <AssessmentOption
            icon={<UserRound size={17} color="#FFFFFF" />}
            title="Personality"
          />
        </View>

        {/* Row 2 */}
        <View className="flex-row gap-[6px]">
          <AssessmentOption
            icon={
              <Heart
                size={17}
                color="#FFFFFF"
                fill="#FFFFFF"
              />
            }
            title="Interests"
          />

          <Pressable className="h-[43px] flex-1 items-center justify-center rounded-[10px] bg-[#1A3A5C]">
            <Text className="text-[12px] font-semibold text-white">
              Start assessment
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

function AssessmentOption({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <View className="h-[43px] flex-1 flex-row items-center rounded-[10px] border border-[#1A3A5C] px-[8px]">
      <View className="h-[27px] w-[27px] items-center justify-center rounded-[7px] bg-[#1A3A5C]">
        {icon}
      </View>

      <Text className="ml-[7px] text-[12px] font-medium text-[#303030]">
        {title}
      </Text>
    </View>
  );
}