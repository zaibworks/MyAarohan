import { router } from "expo-router";
import {
    ArrowRight,
    Check,
    Circle,
    Sparkles,
    UserRound,
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function RegistrationComplete() {
  return (
    <View className="flex-1 bg-[#F4F6F8]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: 40,
          paddingBottom: 26,
        }}
      >
        {/* Success Illustration */}
        <View className="mt-10 items-center">
          <View className="h-[116px] w-[116px] items-center justify-center rounded-full bg-[#E6F7EE]">
            <View className="h-[82px] w-[82px] items-center justify-center rounded-full bg-white">
              <View className="h-[58px] w-[58px] items-center justify-center rounded-full bg-[#1A3A5C]">
                <Check size={30} color="#FFFFFF" strokeWidth={3} />
              </View>
            </View>
          </View>

          <View className="absolute right-[92px] top-[-2px]">
            <Sparkles size={18} color="#1A3A5C" strokeWidth={2} />
          </View>
        </View>

        {/* Heading */}
        <View className="mt-7 items-center px-3">
          <Text className="text-center text-[27px] font-extrabold leading-8 text-[#16202A]">
            Registration Complete!
          </Text>

          <Text className="mt-3 text-center text-[13px] leading-5 text-[#6B7684]">
            Your MyAarohan account has been created successfully. You're now
            ready to start your personalized career journey.
          </Text>
        </View>

        {/* Progress Card */}
        <View className="mt-8 rounded-2xl border border-[#E6E9ED] bg-white p-4">
          <Text className="text-[14px] font-bold text-[#16202A]">
            You're almost ready
          </Text>

          <Text className="mt-1 text-[11px] leading-4 text-[#9AA4AF]">
            Complete your profile to get more personalized guidance.
          </Text>

          {/* Step 1 */}
          <View className="mt-5 flex-row items-center">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-[#E6F7EE]">
              <Check size={15} color="#1B8354" strokeWidth={3} />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-[12px] font-semibold text-[#16202A]">
                Account created
              </Text>

              <Text className="mt-0.5 text-[10px] text-[#9AA4AF]">
                Your registration details are saved
              </Text>
            </View>
          </View>

          {/* Connector */}
          <View className="ml-[15px] h-5 border-l border-dashed border-[#D6DBE1]" />

          {/* Step 2 */}
          <View className="flex-row items-center">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-[#EAF1F7]">
              <UserRound size={15} color="#1A3A5C" strokeWidth={2} />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-[12px] font-semibold text-[#16202A]">
                Complete your profile
              </Text>

              <Text className="mt-0.5 text-[10px] text-[#9AA4AF]">
                Tell us more about yourself
              </Text>
            </View>

            <View className="rounded-full bg-[#EAF1F7] px-2.5 py-1">
              <Text className="text-[9px] font-bold text-[#1A3A5C]">NEXT</Text>
            </View>
          </View>

          {/* Connector */}
          <View className="ml-[15px] h-5 border-l border-dashed border-[#D6DBE1]" />

          {/* Step 3 */}
          <View className="flex-row items-center">
            <View className="h-8 w-8 items-center justify-center rounded-full border border-[#E6E9ED] bg-[#F4F6F8]">
              <Circle size={11} color="#9AA4AF" strokeWidth={2} />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-[12px] font-semibold text-[#6B7684]">
                Start your career journey
              </Text>

              <Text className="mt-0.5 text-[10px] text-[#9AA4AF]">
                Explore assessments and recommendations
              </Text>
            </View>
          </View>
        </View>

        {/* What's Next */}
        <View className="mt-3 rounded-2xl border border-[#E6E9ED] bg-white p-4">
          <View className="flex-row items-center">
            <View className="h-8 w-8 items-center justify-center rounded-lg bg-[#EAF1F7]">
              <Sparkles size={16} color="#1A3A5C" strokeWidth={2} />
            </View>

            <Text className="ml-2.5 text-[13px] font-bold text-[#16202A]">
              What happens next?
            </Text>
          </View>

          <Text className="mt-2.5 text-[11px] leading-[17px] text-[#6B7684]">
            We'll ask you a few more questions about your goals, interests,
            academics and background. This helps MyAarohan provide more relevant
            career guidance.
          </Text>
        </View>

        {/* Continue Button */}
        <View className="mt-auto pt-7">
          <Pressable
            onPress={() => {
              // Replace this with your detailed profile setup route
              router.push("/student/(tabs)/profile");
            }}
            className="flex-row items-center justify-center rounded-xl bg-[#1A3A5C] py-3.5"
          >
            <Text className="text-[14px] font-bold text-white">
              Continue Setup
            </Text>

            <ArrowRight
              size={17}
              color="#FFFFFF"
              strokeWidth={2.5}
              style={{ marginLeft: 7 }}
            />
          </Pressable>

          <Pressable
            onPress={() => {
              // Temporary: replace with your actual dashboard route
              router.replace("/auth/login");
            }}
            className="mt-3 items-center py-2"
          >
            <Text className="text-[11px] font-medium text-[#6B7684]">
              I'll do this later
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
