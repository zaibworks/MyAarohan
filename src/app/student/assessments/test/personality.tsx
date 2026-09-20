import {
  AlertTriangle,
  CheckCircle2,
  LogOut,
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const options = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];

export default function PersonalityTest() {
  const selectedOption = "Agree";
  const router = useRouter()

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      className="flex-1 bg-[#F4F6F8]"
    >
      {/* Active Assessment Warning */}
      <View className="flex-row items-center bg-[#B02020] px-5 py-3">
        <AlertTriangle
          size={18}
          color="#FFFFFF"
          strokeWidth={2.2}
        />

        <Text className="ml-2 flex-1 text-xs font-semibold leading-4 text-white">
          ASSESSMENT ACTIVE — answers save automatically. Keep the app open
          until submission succeeds.
        </Text>
      </View>

      {/* Header */}
      <View className="border-b border-[#E2E5E9] bg-white px-5 pb-4 pt-4">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-[17px] font-bold text-[#16202A]">
              Personality Test
            </Text>

            <Text className="mt-0.5 text-xs text-[#9AA4AF]">
              4 of 40 answered
            </Text>
          </View>

          {/* Timer */}
          <View className="rounded-lg bg-[#EAF1F7] px-3 py-1.5">
            <Text className="text-[15px] font-bold text-[#1A3A5C]">
              09:29
            </Text>
          </View>
        </View>

        {/* Progress */}
        <View className="mt-4 h-2 overflow-hidden rounded-full bg-[#E8EBEF]">
          <View
            className="h-full rounded-full bg-[#1A3A5C]"
            style={{ width: "10%" }}
          />
        </View>

        <Text className="mt-2 text-xs text-[#6B7684]">
          You may submit anytime
        </Text>
      </View>

      {/* Question */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 26,
          paddingBottom: 24,
        }}
      >
        {/* Question Number */}
        <Text className="text-xs font-bold uppercase tracking-[1px] text-[#6B7684]">
          Question 5
        </Text>

        {/* Statement */}
        <Text className="mt-4 text-[23px] font-bold leading-8 text-[#16202A]">
          I am curious about how things work.
        </Text>

        <Text className="mt-3 text-sm leading-5 text-[#6B7684]">
          Choose the option that best describes how much you agree with this
          statement.
        </Text>

        {/* Likert Options */}
        <View className="mt-8">
          {options.map((option) => {
            const isSelected = selectedOption === option;

            return (
              <Pressable
                key={option}
                className={`mb-3 min-h-[54px] flex-row items-center rounded-xl border px-4 ${
                  isSelected
                    ? "border-[#1A3A5C] bg-[#EAF1F7]"
                    : "border-[#E2E5E9] bg-white"
                }`}
              >
                {/* Radio */}
                <View
                  className={`h-6 w-6 items-center justify-center rounded-full border ${
                    isSelected
                      ? "border-[#1A3A5C] bg-[#1A3A5C]"
                      : "border-[#B8C0C8] bg-white"
                  }`}
                >
                  {isSelected && (
                    <View className="h-2.5 w-2.5 rounded-full bg-white" />
                  )}
                </View>

                {/* Label */}
                <Text
                  className={`ml-3 flex-1 text-[15px] ${
                    isSelected
                      ? "font-semibold text-[#1A3A5C]"
                      : "font-medium text-[#34404B]"
                  }`}
                >
                  {option}
                </Text>

                {isSelected && (
                  <CheckCircle2
                    size={19}
                    color="#1A3A5C"
                    strokeWidth={2}
                  />
                )}
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View className="border-t border-[#E2E5E9] bg-white px-5 pb-4 pt-3">
        {/* Submit Test */}
        <Pressable className="mb-3 h-10 flex-row items-center justify-center rounded-xl border border-[#D6DBE1] bg-[#F8F9FA]">
          <LogOut
            size={16}
            color="#6B7684"
            strokeWidth={2}
          />

          <Text className="ml-2 text-sm font-semibold text-[#6B7684]">
            Submit Test
          </Text>
        </Pressable>

        {/* Next */}
        <Pressable onPress={()=>router.push('/student/assessments/test/interest')}
        className="h-12 flex-row items-center justify-center rounded-xl bg-[#1A3A5C]">
          <Text className="text-sm font-bold text-white">
            Next
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}