import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function StudentInformationCard() {
  const router = useRouter();
  return (
    <View className="w-full rounded-[28px] bg-[#1A3A5C] px-[16px] py-[15px]">
      {/* Header */}
      <View className="items-start">
        <Text className="text-[18px] font-semibold leading-[22px] text-white">
          Student information
        </Text>

        <Text className="mt-[1px] text-[12px] font-extralight leading-[16px] text-[#C5D1DD]">
          Your profile and available access.
        </Text>

        <Pressable
          onPress={() => router.push("/student/(tabs)/profile")}
          className="mt-[11px] h-[36px] w-[180px] items-center justify-center rounded-[9px] bg-white"
        >
          <Text className="text-[15px] font-medium text-[#303030]">
            View full profile
          </Text>
        </Pressable>
      </View>

      {/* Student */}
      <View className="mt-[19px] flex-row items-center px-[8px]">
        <View className="h-[43px] w-[43px] items-center justify-center rounded-full bg-[#DCE7F7]">
          <Text className="text-[25px] font-normal text-[#23496B]">Z</Text>
        </View>

        <View className="ml-[14px]">
          <Text className="text-[18px] font-semibold leading-[22px] text-white">
            ZAIB
          </Text>

          <Text className="mt-[1px] text-[12px] leading-[16px] text-[#C5D1DD]">
            Shibi Inter College
          </Text>
        </View>
      </View>

      {/* Information */}
      <View className="mt-[18px] gap-[7px]">
        <View className="flex-row gap-[8px]">
          <InfoBox label="CURRENT CLASS" value="Class 10" />
          <InfoBox label="STATE" value="Uttar Pradesh" />
        </View>

        <View className="flex-row gap-[8px]">
          <InfoBox label="EMAIL" value="zaibfr4@gmail.com" smallValue />

          <InfoBox label="DREAM CAREER" value="Not sure yet" smallValue />
        </View>
      </View>

      {/* Stats */}
      <View className="mt-[12px] flex-row gap-[8px]">
        <StatBox value="0" label="Assessments left" />
        <StatBox value="0" label="Mentorship sessions" />
        <StatBox value="1" label="Counselling sessions" />
      </View>
    </View>
  );
}

function InfoBox({ label,value,smallValue = false}: {label: string;value: string;smallValue?: boolean;}) {
  return (
    <View className="flex-1 rounded-[12px] bg-[#2c4968] px-[12px] py-[8px]">
      <Text className="text-[10px] font-light leading-[15px] text-[#AEBFCE]">
        {label}
      </Text>

      <Text
        numberOfLines={1}
        className={`mt-[2px] font-medium leading-[18px] text-white ${
          smallValue ? "text-[12px]" : "text-[14px]"
        }`}
      >
        {value}
      </Text>
    </View>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <View className="flex-1 rounded-[14px] bg-[#2c4968] px-[11px] py-[8px]">
      <Text className="text-[20px] font-medium leading-[26px] text-white">
        {value}
      </Text>

      <Text className="mt-[2px] text-[10px] font-medium leading-[12px] text-[#C4D0DC]">
        {label}
      </Text>
    </View>
  );
}
