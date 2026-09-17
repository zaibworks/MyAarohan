import Navbar from "@/component/Navbar";
import {
  CalendarDays,
  ChevronRight,
  ClipboardCheck,
  Compass,
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function StudentDashboard() {
  return (
    <View className="flex-1 bg-[#F4F6F8]">
      {/* ───────────────── Header ───────────────── */}
      <Navbar />

      {/* ───────────────── Content ───────────────── */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 18,
          paddingBottom: 24,
        }}
      >
        {/* ───────────── Main Journey Card ───────────── */}
        <View className="overflow-hidden rounded-[22px] bg-[#1A3A5C]">
          <View className="px-5 pb-6 pt-5">
            <Text className="text-[11px] font-bold tracking-[1.2px] text-[#BFD4E6]">
              YOUR CAREER JOURNEY
            </Text>

            <Text className="mt-2 text-[22px] font-bold leading-8 text-white">
              Start your career journey
            </Text>

            <Text className="mt-2 max-w-[310px] text-[13px] leading-5 text-[#DCE8F2]">
              Choose a plan to get access to assessments and personalised
              counselling.
            </Text>

            <Pressable className="mt-5 self-start flex-row items-center rounded-xl bg-white px-4 py-3">
              <Text className="text-[14px] font-bold text-[#1A3A5C]">
                View Plans
              </Text>

              <ChevronRight
                size={18}
                color="#1A3A5C"
                strokeWidth={2.5}
              />
            </Pressable>
          </View>
        </View>

        {/* ───────────── Stats ───────────── */}
        <View className="mt-4 rounded-[14px] border border-[#E2E5E9] bg-white px-2 py-3">
          <View className="flex-row items-center">
            {/* Assessments */}
            <View className="flex-1 items-center px-2">
              <Text className="text-[11px] font-semibold text-[#6B7684]">
                Assessments
              </Text>

              <Text className="mt-1 text-[13px] font-bold text-[#1A3A5C]">
                0 left
              </Text>
            </View>

            {/* Divider */}
            <View className="h-9 w-px bg-[#E2E5E9]" />

            {/* Mentorship */}
            <View className="flex-1 items-center px-2">
              <Text className="text-[11px] font-semibold text-[#6B7684]">
                Mentorship
              </Text>

              <Text className="mt-1 text-[13px] font-bold text-[#1A3A5C]">
                0 session
              </Text>
            </View>

            {/* Divider */}
            <View className="h-9 w-px bg-[#E2E5E9]" />

            {/* Counselling */}
            <View className="flex-1 items-center px-2">
              <Text
                className="text-[11px] font-semibold text-[#6B7684]"
                numberOfLines={1}
              >
                Counselling
              </Text>

              <Text className="mt-1 text-[13px] font-bold text-[#1A3A5C]">
                0 session
              </Text>
            </View>
          </View>
        </View>

        {/* ───────────── Assessment + Counselling ───────────── */}
        <View className="mt-7 flex-row">
          {/* Assessment */}
          <Pressable className="mr-2 flex-1 rounded-[18px] border border-[#E2E5E9] bg-white p-4 pb-8">
            <View className="flex-row items-start justify-between">
              <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#1A3A5C]">
                <ClipboardCheck
                  size={22}
                  color="#FFFFFF"
                  strokeWidth={2}
                />
              </View>

              <View className="rounded-full bg-[#F0F2F4] px-2.5 py-1">
                <Text className="text-[10px] font-bold text-[#6B7684]">
                  PLAN REQUIRED
                </Text>
              </View>
            </View>

            <Text className="mt-4 text-[16px] font-bold text-[#16202A]">
              Assessment
            </Text>

            <Text className="mt-1 text-[12px] leading-4 text-[#6B7684]">
              360° Career Assessment
            </Text>

            <Text className="mt-4 text-[11px] font-medium text-[#8A949E]">
              Get access with a plan
            </Text>

            <Pressable className="mt-3 flex-row items-center">
              <Text className="text-[12px] font-bold text-[#1A3A5C]">
                View plans
              </Text>

              <ChevronRight
                size={15}
                color="#1A3A5C"
                strokeWidth={2.5}
              />
            </Pressable>
          </Pressable>

          {/* Counselling */}
          <Pressable className="ml-2 flex-1 rounded-[18px] border border-[#E2E5E9] bg-white p-4 pb-8">
            <View className="flex-row items-start justify-between">
              <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#1A3A5C]">
                <CalendarDays
                  size={21}
                  color="#FFFFFF"
                  strokeWidth={2}
                />
              </View>

              <View className="rounded-full bg-[#F0F2F4] px-2.5 py-1">
                <Text className="text-[10px] font-bold text-[#6B7684]">
                  PLAN REQUIRED
                </Text>
              </View>
            </View>

            <Text className="mt-4 text-[16px] font-bold text-[#16202A]">
              Counselling
            </Text>

            <Text className="mt-1 text-[12px] leading-4 text-[#6B7684]">
              Get personalised career guidance
            </Text>

            <Text className="mt-4 text-[11px] font-medium text-[#8A949E]">
              Get access with a plan
            </Text>

            <Pressable className="mt-3 flex-row items-center">
              <Text className="text-[12px] font-bold text-[#1A3A5C]">
                View plans
              </Text>

              <ChevronRight
                size={15}
                color="#1A3A5C"
                strokeWidth={2.5}
              />
            </Pressable>
          </Pressable>
        </View>

        {/* ───────────── Career Encyclopedia ───────────── */}
        <Pressable className="mt-4 flex-row items-center rounded-[18px] border border-[#E2E5E9] bg-white px-4 py-7">
          <View className="h-12 w-12 items-center justify-center rounded-full bg-[#EAF1F7]">
            <Compass
              size={24}
              color="#1A3A5C"
              strokeWidth={2}
            />
          </View>

          <View className="ml-4 flex-1">
            <Text className="text-[15px] font-bold text-[#16202A]">
              Career Encyclopedia
            </Text>

            <Text className="mt-1 text-[12px] leading-4 text-[#6B7684]">
              Explore careers, subjects & pathways.
            </Text>
          </View>

          <ChevronRight
            size={20}
            color="#1A3A5C"
            strokeWidth={2.2}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
}
