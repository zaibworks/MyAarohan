import { useRouter } from "expo-router";
import {
    ArrowLeft,
    ChevronRight,
    Eye,
    EyeOff,
    LockKeyhole,
} from "lucide-react-native";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

const ChangePassword = () => {
  const router = useRouter();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChangePassword = () => {
    if (!currentPassword.trim()) {
      Alert.alert("Current Password", "Please enter your current password.");
      return;
    }

    if (!newPassword.trim()) {
      Alert.alert("New Password", "Please enter a new password.");
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert(
        "Invalid Password",
        "Your new password must be at least 6 characters.",
      );
      return;
    }

    if (!confirmPassword.trim()) {
      Alert.alert("Confirm Password", "Please re-enter your new password.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert(
        "Passwords Don't Match",
        "New password and confirm password must be the same.",
      );
      return;
    }

    Alert.alert(
      "Password Changed",
      "Your password has been changed successfully.",
      [
        {
          text: "Continue",
          onPress: () => router.back(),
        },
      ],
    );
  };

  return (
    <View className="flex-1 bg-white">
      {/* Back button */}
      <View className="pl-9 pt-16">
        <Pressable
          onPress={() => router.back()}
          className="h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#E2E5E9]"
        >
          <ArrowLeft size={18} color="#1A3A5C" strokeWidth={2} />
        </Pressable>
      </View>

      {/* Content */}
      <View className="flex-1 px-[26px] pb-5 pt-6">
        <View className="items-center px-2 pt-2">
          {/* Hero Icon */}
          <View className="mb-4 h-14 w-14 items-center justify-center rounded-[16px] bg-[#EAF1F7]">
            <LockKeyhole size={28} color="#1A3A5C" strokeWidth={2} />
          </View>

          {/* Heading */}
          <Text className="mb-2 text-center text-[22px] font-extrabold text-[#16202A]">
            Change Password
          </Text>

          <Text className="mb-[24px] text-center text-[13px] leading-5 text-[#6B7684]">
            Use your current password to create a new one for this account.
          </Text>

          {/* Current Password */}
          <View className="relative mb-[14px] w-full">
            <LockKeyhole
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
              value={currentPassword}
              onChangeText={setCurrentPassword}
              placeholder="Enter your current password"
              placeholderTextColor="#9AA4AF"
              secureTextEntry={!showCurrent}
              autoCapitalize="none"
              className="h-[50px] w-full rounded-xl border border-[#E2E5E9] pl-10 pr-12 text-[14px] text-[#16202A]"
            />

            <Pressable
              onPress={() => setShowCurrent(!showCurrent)}
              className="absolute right-3 top-0 h-[50px] w-8 items-center justify-center"
            >
              {showCurrent ? (
                <EyeOff size={17} color="#9AA4AF" />
              ) : (
                <Eye size={17} color="#9AA4AF" />
              )}
            </Pressable>
          </View>

          {/* New Password */}
          <View className="relative mb-[14px] w-full">
            <LockKeyhole
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
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Minimum 6 characters"
              placeholderTextColor="#9AA4AF"
              secureTextEntry={!showNew}
              autoCapitalize="none"
              className="h-[50px] w-full rounded-xl border border-[#E2E5E9] pl-10 pr-12 text-[14px] text-[#16202A]"
            />

            <Pressable
              onPress={() => setShowNew(!showNew)}
              className="absolute right-3 top-0 h-[50px] w-8 items-center justify-center"
            >
              {showNew ? (
                <EyeOff size={17} color="#9AA4AF" />
              ) : (
                <Eye size={17} color="#9AA4AF" />
              )}
            </Pressable>
          </View>

          {/* Confirm Password */}
          <View className="relative mb-[14px] w-full">
            <LockKeyhole
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
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Re-enter new password"
              placeholderTextColor="#9AA4AF"
              secureTextEntry={!showConfirm}
              autoCapitalize="none"
              className="h-[50px] w-full rounded-xl border border-[#E2E5E9] pl-10 pr-12 text-[14px] text-[#16202A]"
            />

            <Pressable
              onPress={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-0 h-[50px] w-8 items-center justify-center"
            >
              {showConfirm ? (
                <EyeOff size={17} color="#9AA4AF" />
              ) : (
                <Eye size={17} color="#9AA4AF" />
              )}
            </Pressable>
          </View>

          {/* Button */}
          <Pressable
            onPress={handleChangePassword}
            className="mt-2 h-[52px] w-full flex-row items-center justify-center rounded-xl bg-[#1A3A5C]"
          >
            <Text className="mr-2 text-[14.5px] font-bold text-white">
              Change Password
            </Text>

            <ChevronRight size={16} color="#FFFFFF" strokeWidth={2.5} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;
