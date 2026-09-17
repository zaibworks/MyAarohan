import { router } from "expo-router";
import {
  BookOpen,
  ChevronRight,
  Lock,
  Star,
  UserRound,
  UsersRound,
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Profile() {
  const dreamCareers = [
    { rank: "1", name: "Software Engineer" },
    { rank: "2", name: "Photographer" },
    { rank: "3", name: "Book Writer" },
  ];

  return (
    <View className="flex-1 bg-white pt-10">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Profile Header */}
        <View className="items-center border-b-[8px] border-[#F4F6F8] px-5 pb-5 pt-[18px]">
          {/* Avatar */}
          <View className="relative mb-3">
            <View className="h-[84px] w-[84px] items-center justify-center rounded-full border-[3px] border-white bg-[#1A3A5C]">
              <Text className="text-[30px] font-bold text-white">Z</Text>
            </View>

            {/* Lock Pin */}
            <View className="absolute bottom-[-2px] right-[-2px] h-[26px] w-[26px] items-center justify-center rounded-full border-[3px] border-white bg-[#1A3A5C]">
              <Lock size={12} color="#FFFFFF" strokeWidth={2.5} />
            </View>
          </View>

          <Text className="mb-[3px] text-[19px] font-extrabold text-[#16202A]">
            Zaib
          </Text>

          <Text className="mb-2.5 text-[12.5px] text-[#6B7684]">
            Grade 7 · hhpy, Delhi
          </Text>

          {/* Locked Chip */}
          <View className="flex-row items-center gap-1.5 rounded-full bg-[#EAF1F7] px-3 py-1.5">
            <Lock size={11} color="#1A3A5C" strokeWidth={2.5} />

            <Text className="text-[11px] font-bold text-[#1A3A5C]">
              Profile locked
            </Text>
          </View>
        </View>

        {/* Quick Stats */}
        <View className="flex-row border-b-[8px] border-[#F4F6F8] px-[18px] py-3.5">
          {/* Age */}
          <View className="flex-1 items-center">
            <Text className="text-[16px] font-extrabold text-[#16202A]">
              18
            </Text>

            <Text className="mt-0.5 text-[9.5px] font-bold uppercase tracking-[0.3px] text-[#9AA4AF]">
              Age
            </Text>
          </View>

          {/* Grade */}
          <View className="flex-1 items-center border-l border-[#E2E5E9]">
            <Text className="text-[16px] font-extrabold text-[#16202A]">9</Text>

            <Text className="mt-0.5 text-[9.5px] font-bold uppercase tracking-[0.3px] text-[#9AA4AF]">
              Grade
            </Text>
          </View>

          {/* Top Score */}
          <View className="flex-1 items-center border-l border-[#E2E5E9]">
            <Text className="text-[16px] font-extrabold text-[#16202A]">
              92
            </Text>

            <Text className="mt-0.5 text-[9.5px] font-bold uppercase tracking-[0.3px] text-[#9AA4AF]">
              Top score
            </Text>
          </View>
        </View>

        {/* Dream Careers */}
        <View className="border-b-[8px] border-[#F4F6F8] px-[18px] py-4">
          <View className="mb-3 flex-row items-center">
            <Star size={16} color="#1A3A5C" />

            <Text className="ml-2 text-[13.5px] font-bold text-[#16202A]">
              Dream careers
            </Text>
          </View>

          <View className="flex-row flex-wrap gap-2">
            {dreamCareers.map((career) => (
              <View
                key={career.rank}
                className="flex-row items-center rounded-full bg-[#EAF1F7] px-3 py-[7px]"
              >
                <View className="h-[15px] w-[15px] items-center justify-center rounded-full bg-[#1A3A5C]">
                  <Text className="text-[9px] font-extrabold text-white">
                    {career.rank}
                  </Text>
                </View>

                <Text className="ml-1.5 text-[12px] font-bold text-[#1A3A5C]">
                  {career.name}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Academic History */}
        <View className="border-b-[8px] border-[#F4F6F8] px-[18px] py-4">
          <View className="mb-3 flex-row items-center">
            <BookOpen size={16} color="#1A3A5C" />

            <Text className="ml-2 text-[13.5px] font-bold text-[#16202A]">
              Academic history
            </Text>
          </View>

          {/* Overall Result */}
          <View className="items-center pb-4 pt-1.5">
            <Text className="mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.6px] text-[#9AA4AF]">
              Overall result
            </Text>

            <Text className="mb-1 text-[32px] font-extrabold leading-[32px] text-[#1A3A5C]">
              N/A
            </Text>

            <Text className="text-[11px] text-[#6B7684]">
              Total score / percentage
            </Text>
          </View>

          {/* Subject */}
          <View className="mt-2 flex-row items-center justify-between rounded-[11px] bg-[#F4F6F8] px-3 py-[11px]">
            <Text className="text-[13px] font-semibold text-[#16202A]">
              Maths
            </Text>

            <Text className="text-[13px] font-bold text-[#1A3A5C]">92</Text>
          </View>
        </View>

        {/* Personal Details */}
        <View className="border-b-[8px] border-[#F4F6F8] px-[18px] py-4">
          <View className="mb-3 flex-row items-center">
            <UserRound size={16} color="#1A3A5C" />

            <Text className="ml-2 text-[13.5px] font-bold text-[#16202A]">
              Personal details
            </Text>
          </View>

          {/* Date of Birth */}
          <View className="flex-row gap-2 border-b border-[#F4F6F8] py-[9px]">
            <Text className="w-[42%] text-[11.5px] text-[#6B7684]">
              Date of Birth
            </Text>

            <Text className="flex-1 text-right text-[13px] font-semibold text-[#16202A]">
              01/01/2000
            </Text>
          </View>

          {/* Gender */}
          <View className="flex-row gap-2 border-b border-[#F4F6F8] py-[9px]">
            <Text className="w-[42%] text-[11.5px] text-[#6B7684]">Gender</Text>

            <Text className="flex-1 text-right text-[13px] font-semibold text-[#16202A]">
              Male
            </Text>
          </View>

          {/* Email */}
          <View className="flex-row gap-2 py-[9px]">
            <Text className="w-[42%] text-[11.5px] text-[#6B7684]">Email</Text>

            <Text
              numberOfLines={1}
              className="flex-1 text-right text-[13px] font-semibold text-[#16202A]"
            >
              zaibfr4@gmail.com
            </Text>
          </View>
        </View>

        {/* Parents / Guardians */}
        <View className="border-b-[8px] border-[#F4F6F8] px-[18px] py-4">
          <View className="mb-3 flex-row items-center">
            <UsersRound size={16} color="#1A3A5C" />

            <Text className="ml-2 text-[13.5px] font-bold text-[#16202A]">
              Parents / Guardians
            </Text>
          </View>

          {/* Guardian Card */}
          <View className="rounded-[11px] bg-[#F4F6F8] px-3 py-[11px]">
            <Text className="mb-1 text-[12px] font-bold text-[#16202A]">
              Zaib — Father
            </Text>

            {/* Phone */}
            <View className="flex-row gap-2 border-b border-white py-[9px]">
              <Text className="w-[42%] text-[11.5px] text-[#6B7684]">
                Phone
              </Text>

              <Text className="flex-1 text-right text-[13px] font-semibold text-[#16202A]">
                6555555555
              </Text>
            </View>

            {/* Email */}
            <View className="flex-row gap-2 py-[9px]">
              <Text className="w-[42%] text-[11.5px] text-[#6B7684]">
                Email
              </Text>

              <Text
                numberOfLines={1}
                className="flex-1 text-right text-[13px] font-semibold text-[#16202A]"
              >
                zaibfather@example.com
              </Text>
            </View>
          </View>
        </View>

        {/* Account & Security */}
        <Pressable
          onPress={() => router.push("/auth/change-password")}
          className="flex-row items-center px-[18px] py-3.5"
        >
          {/* Icon */}
          <View className="h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-[#EAF1F7]">
            <Lock size={18} color="#1A3A5C" />
          </View>

          {/* Text */}
          <View className="ml-3 flex-1">
            <Text className="mb-[1px] text-[13.5px] font-bold text-[#16202A]">
              Account & Security
            </Text>

            <Text className="text-[11.5px] text-[#6B7684]">
              Change your password
            </Text>
          </View>

          <ChevronRight size={15} color="#9AA4AF" />
        </Pressable>
      </ScrollView>
    </View>
  );
}
