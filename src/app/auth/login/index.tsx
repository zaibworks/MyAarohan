import { useRouter } from "expo-router";
import {
  ArrowLeft,
  ChevronRight,
  GraduationCap,
  LockKeyhole,
} from "lucide-react-native";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/student");
  };

  return (
    <SafeAreaView edges={["bottom"]} 
    className="flex-1 bg-white">
      {/* Top Bar */}
      <View className="pl-9 pt-16">
        <Pressable className="h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#E2E5E9] bg-white">
          <ArrowLeft size={18} color="#1A3A5C" strokeWidth={2} />
        </Pressable>
      </View>

      {/* Content */}
      <View className="flex-1 px-[26px] pt-5 mt-20">
        {/* Brand Icon */}
        <View className="mb-[18px] h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#EAF1F7]">
          <GraduationCap size={26} color="#1A3A5C" strokeWidth={2} />
        </View>

        {/* Heading */}
        <Text className="mb-2 text-[24px] font-extrabold text-[#16202A] ">
          Welcome back
        </Text>

        {/* Subtitle */}
        <Text className="mb-[26px] max-w-[300px] text-[12px] leading-5 text-[#6B7684]">
          Sign in to continue your personalised career journey with MyAarohan.
        </Text>

        {/* Phone Number Field */}
        <View className="mb-4">
          <Text className="mb-[7px] text-[12.5px] font-semibold text-[#6B7684]">
            Phone number
          </Text>

          <View className="h-[50px] flex-row overflow-hidden rounded-xl border border-[#E2E5E9]">
            {/* Country Code */}
            <View className="items-center justify-center border-r border-[#E2E5E9] bg-[#F4F6F8] px-3">
              <Text className="text-[14px] font-semibold text-[#6B7684]">
                +91
              </Text>
            </View>

            {/* Phone Input */}
            <TextInput
              placeholder="9876543210"
              placeholderTextColor="#9AA4AF"
              keyboardType="number-pad"
              maxLength={10}
              className="flex-1 px-[13px] text-[14px] text-[#16202A]"
            />
          </View>
        </View>

        {/* Date of Birth */}
        <View className="mb-4">
          <Text className="mb-[7px] text-[12.5px] font-semibold text-[#6B7684]">
            Date of birth
          </Text>

          {/* DD / MM / YYYY */}
          <View className="flex-row gap-2">
            <TextInput
              placeholder="DD"
              placeholderTextColor="#9AA4AF"
              keyboardType="number-pad"
              maxLength={2}
              className="h-[50px] flex-[0.9] rounded-xl border border-[#E2E5E9] px-2 text-center text-[14px] text-[#16202A]"
            />

            <TextInput
              placeholder="MM"
              placeholderTextColor="#9AA4AF"
              keyboardType="number-pad"
              maxLength={2}
              className="h-[50px] flex-[0.9] rounded-xl border border-[#E2E5E9] px-2 text-center text-[14px] text-[#16202A]"
            />

            <TextInput
              placeholder="YYYY"
              placeholderTextColor="#9AA4AF"
              keyboardType="number-pad"
              maxLength={4}
              className="h-[50px] flex-[1.4] rounded-xl border border-[#E2E5E9] px-2 text-center text-[14px] text-[#16202A]"
            />
          </View>

          {/* Security Helper */}
          <View className="mt-2.5 flex-row items-start gap-2 rounded-[10px] bg-[#EAF1F7] px-3 py-2.5">
            <LockKeyhole size={15} color="#1A3A5C" strokeWidth={2} />

            <Text className="flex-1 text-[11px] leading-4 text-[#6B7684]">
              Your date of birth acts as your password for secure login.
            </Text>
          </View>
        </View>

        {/* Forgot Login Details */}
        <Pressable
          onPress={() => router.push("/auth/forgot-password")}
          className="mt-1"
        >
          <Text className="text-[12.5px] font-semibold text-[#1A3A5C]">
            Forgot your login details?
          </Text>
        </Pressable>
      </View>

      {/* Footer */}
      <View className="px-[26px] pt-3">
        {/* Login Button */}
        <Pressable
          onPress={handleLogin}
          className="h-[52px] w-full flex-row items-center justify-center rounded-xl bg-[#1A3A5C]"
        >
          <Text className="mr-2 text-[14.5px] font-bold text-white">
            Log in
          </Text>

          <ChevronRight size={16} color="#FFFFFF" strokeWidth={2.5} />
        </Pressable>

        {/* Create Account */}
        <View className="mt-4 flex-row items-center justify-center">
          <Text className="text-[13px] text-[#6B7684]">New here? </Text>

          <Pressable onPress={() => router.push("/auth/register")}>
            <Text className="text-[13px] font-bold text-[#1A3A5C]">
              Create an account
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
