import { router } from "expo-router";
import {
    ArrowRight,
    Check,
    CircleCheck,
    Compass,
    Sparkles,
    UserRound,
} from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileSetupComplete() {
  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-[#F4F6F8]">
      <View className="flex-1 px-5 pb-5 pt-8">
        {/* Success Illustration */}
        <View className="mt-8 items-center">
          <View className="h-[122px] w-[122px] items-center justify-center rounded-full bg-[#E6F7EE]">
            <View className="h-[88px] w-[88px] items-center justify-center rounded-full bg-white">
              <View className="h-[62px] w-[62px] items-center justify-center rounded-full bg-[#1A3A5C]">
                <Check size={32} color="#FFFFFF" strokeWidth={3} />
              </View>
            </View>
          </View>

          {/* Decorative sparkles */}
          <View className="absolute left-[94px] top-[-4px]">
            <Sparkles size={18} color="#1A3A5C" strokeWidth={2} />
          </View>

          <View className="absolute right-[92px] bottom-[5px]">
            <Sparkles size={13} color="#1B8354" strokeWidth={2} />
          </View>
        </View>

        {/* Heading */}
        <View className="mt-7 items-center px-3">
          <Text className="text-center text-[27px] font-extrabold leading-8 tracking-[-0.4px] text-[#16202A]">
            Profile Complete!
          </Text>

          <Text className="mt-3 text-center text-[13px] leading-5 text-[#6B7684]">
            Your profile has been completed successfully. MyAarohan now has the
            information needed to personalize your career journey.
          </Text>
        </View>

        {/* Completion Card */}
        <View className="mt-8 rounded-2xl border border-[#E2E5E9] bg-white p-4">
          <View className="flex-row items-center">
            <View className="h-9 w-9 items-center justify-center rounded-[11px] bg-[#E6F7EE]">
              <CircleCheck size={19} color="#1B8354" strokeWidth={2.2} />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-[13px] font-bold text-[#16202A]">
                Your profile is ready
              </Text>

              <Text className="mt-0.5 text-[10.5px] leading-4 text-[#9AA4AF]">
                All profile setup steps have been completed.
              </Text>
            </View>

            <View className="rounded-full bg-[#E6F7EE] px-2.5 py-1">
              <Text className="text-[9px] font-bold text-[#1B8354]">100%</Text>
            </View>
          </View>

          {/* Completed steps */}
          <View className="mt-5">
            <View className="flex-row items-center">
              <View className="h-7 w-7 items-center justify-center rounded-full bg-[#E6F7EE]">
                <Check size={14} color="#1B8354" strokeWidth={3} />
              </View>

              <Text className="ml-3 text-[11.5px] font-semibold text-[#16202A]">
                About you
              </Text>
            </View>

            <View className="ml-[13px] h-3 border-l border-dashed border-[#D6DBE1]" />

            <View className="flex-row items-center">
              <View className="h-7 w-7 items-center justify-center rounded-full bg-[#E6F7EE]">
                <Check size={14} color="#1B8354" strokeWidth={3} />
              </View>

              <Text className="ml-3 text-[11.5px] font-semibold text-[#16202A]">
                Academic & background
              </Text>
            </View>

            <View className="ml-[13px] h-3 border-l border-dashed border-[#D6DBE1]" />

            <View className="flex-row items-center">
              <View className="h-7 w-7 items-center justify-center rounded-full bg-[#E6F7EE]">
                <Check size={14} color="#1B8354" strokeWidth={3} />
              </View>

              <Text className="ml-3 text-[11.5px] font-semibold text-[#16202A]">
                Goals & preferences
              </Text>
            </View>

            <View className="ml-[13px] h-3 border-l border-dashed border-[#D6DBE1]" />

            <View className="flex-row items-center">
              <View className="h-7 w-7 items-center justify-center rounded-full bg-[#E6F7EE]">
                <Check size={14} color="#1B8354" strokeWidth={3} />
              </View>

              <Text className="ml-3 text-[11.5px] font-semibold text-[#16202A]">
                Profile review
              </Text>
            </View>
          </View>
        </View>

        {/* What's next */}
        <View className="mt-3 rounded-2xl border border-[#E2E5E9] bg-white p-4">
          <View className="flex-row items-center">
            <View className="h-9 w-9 items-center justify-center rounded-[11px] bg-[#EAF1F7]">
              <Compass size={18} color="#1A3A5C" strokeWidth={2} />
            </View>

            <View className="ml-2.5 flex-1">
              <Text className="text-[13px] font-bold text-[#16202A]">
                What's next?
              </Text>

              <Text className="mt-0.5 text-[10.5px] text-[#9AA4AF]">
                Start exploring your career journey
              </Text>
            </View>
          </View>

          <View className="mt-3 flex-row">
            <View className="mr-2 mt-0.5">
              <UserRound size={14} color="#6B7684" strokeWidth={1.9} />
            </View>

            <Text className="flex-1 text-[11px] leading-[17px] text-[#6B7684]">
              Explore assessments, career recommendations and personalized
              guidance based on your profile.
            </Text>
          </View>
        </View>

        {/* Bottom CTA */}
        <View className="mt-auto pt-7">
          <Pressable
            onPress={() => {
              router.replace("/student/(tabs)");
            }}
            className="h-[52px] w-full flex-row items-center justify-center rounded-xl bg-[#1A3A5C] active:opacity-90"
          >
            <Text className="mr-2 text-[14px] font-bold text-white">
              Go to Dashboard
            </Text>

            <ArrowRight size={17} color="#FFFFFF" strokeWidth={2.5} />
          </Pressable>

          <Text className="mt-2 text-center text-[10px] text-[#9AA4AF]">
            Your profile setup is now complete.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
