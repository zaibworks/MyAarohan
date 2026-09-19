import { useRouter } from "expo-router";
import {
  ChevronRight,
  GraduationCap,
  LockKeyhole,
  Compass
} from "lucide-react-native";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const Login = () => {

const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");

const [phoneError, setPhoneError] = useState("");
const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
   let isValid = true;
    setPhoneError("")
    setPasswordError("")

    if(!phone.trim()){
      setPhoneError("Phone number required")
      isValid= false;
    }

    if(!password.trim()){
      setPasswordError("Please enter password")
      isValid=false;
    }

     if (!isValid) return;
     
      router.replace("/student");
  };

  return (
    <SafeAreaView edges={["bottom"]} className="flex-1 bg-white mb-3">
      {/* Content */}
      <View className="mt-40 flex-1 px-[26px] pt-5">
        {/* Brand Icon */}
        <View className="mb-[18px] h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#EAF1F7]">
          <Compass
            size={26}
            color="#1A3A5C"
            strokeWidth={2}
          />
        </View>

        {/* Heading */}
        <Text className="mb-2 text-[24px] font-extrabold tracking-[-0.3px] text-[#16202A]">
          Welcome back
        </Text>

        {/* Subtitle */}
        <Text className="mb-[26px] max-w-[310px] text-[12px] leading-5 text-[#6B7684]">
          Sign in to continue your personalised career journey with MyAarohan.
        </Text>

        {/* Phone Number */}
        <View className="mb-4">
          <Text className="mb-[7px] text-[12.5px] font-semibold text-[#6B7684]">
            Phone
          </Text>

          <View
  className={`h-[50px] flex-row overflow-hidden rounded-xl border bg-white ${
    phoneError ? "border-[#B33A3A]" : "border-[#E2E5E9]"
  }`}
>
            {/* Country Code */}
            <View className="items-center justify-center border-r border-[#E2E5E9] bg-[#F4F6F8] px-3.5">
              <Text className="text-[14px] font-semibold text-[#6B7684]">
                +91
              </Text>
            </View>

            {/* Phone Input */}
            <TextInput
            value={phone}
            onChangeText={(value)=>{
              setPhone(value)
              setPhoneError("")
            }}
              placeholder="Enter your phone number"
              placeholderTextColor="#9AA4AF"
              keyboardType="number-pad"
              maxLength={10}
              className="flex-1 px-[13px] text-[14px] text-[#16202A]"
            />
          </View>
          {phoneError && (
  <Text className="mt-1.5 text-[11px] text-[#B33A3A]">
    {phoneError}
  </Text>
)}
        </View>
        

        {/* Password */}
        <View className="mb-4">
          <Text className="mb-[7px] text-[12.5px] font-semibold text-[#6B7684]">
            Password
          </Text>

          <TextInput
          value={password}
          onChangeText={(value)=>{
            setPassword(value)
            setPasswordError("")
          }}
            placeholder="Enter your password"
            placeholderTextColor="#9AA4AF"
            secureTextEntry
           className={`h-[50px] rounded-xl border bg-white px-[13px] text-[14px] text-[#16202A] ${
    passwordError ? "border-[#B33A3A]" : "border-[#E2E5E9]"
  }`}/>
  {passwordError && (
  <Text className="mt-1.5 text-[11px] text-[#B33A3A]">
    {passwordError}
  </Text>
)}

          {/* Security Helper */}
          <View className="mt-2.5 flex-row items-start rounded-[10px] bg-[#EAF1F7] px-3 py-2.5">
            <LockKeyhole
              size={15}
              color="#1A3A5C"
              strokeWidth={2}
              style={{ marginTop: 1 }}
            />

            <Text className="ml-2 flex-1 text-[11px] leading-4 text-[#6B7684]">
              First time signing in? Use your date of birth as your password.
            </Text>
          </View>
        </View>

        {/* Forgot Login Details */}
        <Pressable
          onPress={() => router.push("/auth/forgot-password")}
          className="mt-1 self-start"
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
          className="h-[52px] w-full flex-row items-center justify-center rounded-xl bg-[#1A3A5C] active:opacity-90"
        >
          <Text className="mr-2 text-[14.5px] font-bold text-white">
            Log in
          </Text>

          <ChevronRight
            size={16}
            color="#FFFFFF"
            strokeWidth={2.5}
          />
        </Pressable>

        {/* Create Account */}
        <View className="mt-4 flex-row items-center justify-center">
          <Text className="text-[13px] text-[#6B7684]">
            New here?{" "}
          </Text>

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