import { useRouter } from "expo-router";
import {
    ArrowLeft,
    ChevronRight,
    Lock,
    LockKeyhole,
} from "lucide-react-native";
import { Pressable, Text, TextInput, View } from "react-native";

const Verify = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white">
      {/* left arrow  */}
      <View className="pl-9 pt-16">
        <Pressable
          onPress={() => router.back()}
          className="h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#E2E5E9]"
        >
          <ArrowLeft size={18} color="#1A3A5C" strokeWidth={2} />
        </Pressable>
      </View>
      {/* content  */}
      <View className="flex-1 px-[26px] pb-5 pt-6">
        {/* hero section  */}
        <View className="items-center px-2 pt-2 pb-1">
          <View className="mb-4 h-14 w-14 items-center justify-center rounded-[16px] bg-[#EAF1F7]">
            <LockKeyhole size={28} color="#1A3A5C" strokeWidth={2} />
          </View>
          <Text className="mb-2 text-[22px] font-extrabold text-[#16202A]">
            Reset password
          </Text>

          <Text className="mb-[22px] text-center text-[13px] leading-5 text-[#6B7684]">
            Enter the code from your Gmail and choose a new password.
          </Text>
          <View className="mb-5 rounded-xl bg-[#E6F7EE] px-[14px] py-3">
            <Text className="text-center text-[12px] leading-[19px] text-[#1B8354]">
              If this student account has a registered email, we sent a reset
              code. Please check your inbox. If you do not receive it, contact
              support or your school admin.
            </Text>
          </View>
          {/* input section  */}
          {/* otp */}
          <View className="relative mb-[14px] w-full">
            <Lock
              size={16}
              color="#9AA4AF"
              strokeWidth={2}
              style={{
                position: "absolute",
                left: 14,
                top: 17,
                zIndex: 1,
              }}
            />
            <TextInput
              placeholder="Enter 6-digit reset code"
              placeholderTextColor="#9AA4AF"
              keyboardType="numeric"
              autoCapitalize="none"
              className="h-[50px] w-full rounded-xl border border-[#E2E5E9] pl-10 pr-[14px] text-[14px] text-[#16202A]"
            />
          </View>
          <View className="relative mb-[14px] w-full">
            <Lock
              size={16}
              color="#9AA4AF"
              strokeWidth={2}
              style={{
                position: "absolute",
                left: 14,
                top: 17,
                zIndex: 1,
              }}
            />
            <TextInput
              placeholder="New Password"
              placeholderTextColor="#9AA4AF"
              secureTextEntry
              autoCapitalize="none"
              className="h-[50px] w-full rounded-xl border border-[#E2E5E9] pl-10 pr-[14px] text-[14px] text-[#16202A]"
            />
          </View>
          <View className="relative mb-[14px] w-full">
            <Lock
              size={16}
              color="#9AA4AF"
              strokeWidth={2}
              style={{
                position: "absolute",
                left: 14,
                top: 17,
                zIndex: 1,
              }}
            />
            <TextInput
              placeholder="Confirm New Password"
              placeholderTextColor="#9AA4AF"
              secureTextEntry
              autoCapitalize="none"
              className="h-[50px] w-full rounded-xl border border-[#E2E5E9] pl-10 pr-[14px] text-[14px] text-[#16202A]"
            />
          </View>
          <Pressable
            onPress={() => router.replace("/auth/login")}
            className="mt-2 h-[52px] w-full flex-row items-center justify-center rounded-xl bg-[#1A3A5C]"
          >
            <Text className="mr-2 text-[14.5px] font-bold text-white">
              Reset Password
            </Text>

            <ChevronRight size={16} color="#FFFFFF" strokeWidth={2.5} />
          </Pressable>

          <View className="mt-[18px] items-center">
            <Pressable>
              <Text className="text-[13px] font-semibold text-[#1A3A5C]">
                Request a new code
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Verify;
