import { useRouter } from "expo-router";
import {
  AlertTriangle,
  CheckCircle2,
  LogOut,
  RotateCcw,
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const options = [
  {
    id: "A",
    text: "Option A",
  },
  {
    id: "B",
    text: "Option B",
  },
  {
    id: "C",
    text: "Option C",
  },
  {
    id: "D",
    text: "Option D",
  },
];

export default function AptitudeTest() {
  const router = useRouter();

  const selectedOption = "B";

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
              Aptitude Test
            </Text>

            <Text className="mt-0.5 text-xs text-[#9AA4AF]">
              12 of 100 answered
            </Text>
          </View>

          {/* Timer */}
          <View className="rounded-lg bg-[#EAF1F7] px-3 py-1.5">
            <Text className="text-[15px] font-bold text-[#1A3A5C]">
              44:38
            </Text>
          </View>
        </View>

        {/* Progress */}
        <View className="mt-4 h-2 overflow-hidden rounded-full bg-[#E8EBEF]">
          <View
            className="h-full rounded-full bg-[#1A3A5C]"
            style={{ width: "12%" }}
          />
        </View>

        <Text className="mt-2 text-xs text-[#6B7684]">
          You may submit anytime
        </Text>
      </View>

      {/* Question Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 24,
          paddingBottom: 24,
        }}
      >
        {/* Question Number */}
        <Text className="text-xs font-bold uppercase tracking-[1px] text-[#6B7684]">
          Question 13
        </Text>

        {/* Question */}
        <Text className="mt-3 text-[21px] font-bold leading-7 text-[#16202A]">
          Which number should come next in the sequence?
        </Text>

        <Text className="mt-2 text-sm leading-5 text-[#6B7684]">
          Select the option that best completes the sequence.
        </Text>

        {/* Question Image
            Render ZoomableQuestionImage here when required.
        */}

        {/* Options */}
        <View className="mt-7">
          {options.map((option) => {
            const isSelected = selectedOption === option.id;

            return (
              <Pressable
                key={option.id}
                className={`mb-3 flex-row items-center rounded-xl border px-4 py-4 ${
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

                {/* Option Text */}
                <Text
                  className={`ml-3 flex-1 text-[15px] leading-5 ${
                    isSelected
                      ? "font-semibold text-[#1A3A5C]"
                      : "font-medium text-[#34404B]"
                  }`}
                >
                  {option.text}
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

        {/* Main Actions */}
        <View className="flex-row gap-3">
          {/* Restart */}
          <Pressable className="h-12 flex-1 flex-row items-center justify-center rounded-xl border border-[#D6DBE1] bg-white">
            <RotateCcw
              size={18}
              color="#6B7684"
              strokeWidth={2}
            />

            <Text className="ml-2 text-sm font-semibold text-[#6B7684]">
              Restart
            </Text>
          </Pressable>

          {/* Confirm & Next */}
          <Pressable 
          onPress={()=>router.push('/student/assessments/test/personality')}
          className="h-12 flex-[1.5] flex-row items-center justify-center rounded-xl bg-[#1A3A5C]">
            <Text className="text-sm font-bold text-white">
              Confirm & Next
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}