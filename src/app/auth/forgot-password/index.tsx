import { useRouter } from "expo-router";
import {
    ArrowLeft,
    ChevronRight,
    LockKeyhole,
    Mail,
    Phone,
} from "lucide-react-native";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

const ForgotPassword = () => {
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
            Enter your registered Gmail/Email and Phone Number address to get a
            reset code.
          </Text>
          {/* input section  */}
          <View className="relative mb-[14px] w-full">
            <Mail
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
              placeholder="Enter your registered Gmail"
              placeholderTextColor="#9AA4AF"
              keyboardType="email-address"
              autoCapitalize="none"
              className="h-[50px] w-full rounded-xl border border-[#E2E5E9] pl-10 pr-[14px] text-[14px] text-[#16202A]"
            />
          </View>
          <View className="relative mb-[14px] w-full">
            <Phone
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
              placeholder="Enter your registered Phone"
              placeholderTextColor="#9AA4AF"
              keyboardType="numeric"
              maxLength={10}
              autoCapitalize="none"
              className="h-[50px] w-full rounded-xl border border-[#E2E5E9] pl-10 pr-[14px] text-[14px] text-[#16202A]"
            />
          </View>
          <Pressable
            onPress={() => router.push("/auth/forgot-password/verify")}
            className="mt-2 h-[52px] w-full flex-row items-center justify-center rounded-xl bg-[#1A3A5C]"
          >
            <Text className="mr-2 text-[14.5px] font-bold text-white">
              Send reset code
            </Text>

            <ChevronRight size={16} color="#FFFFFF" strokeWidth={2.5} />
          </Pressable>

          <View className="mt-[18px] items-center">
            <Pressable onPress={() => router.back()}>
              <Text className="text-[13px] font-semibold text-[#1A3A5C]">
                Back to login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
