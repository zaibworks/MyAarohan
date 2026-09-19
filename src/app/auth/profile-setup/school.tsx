import { router } from "expo-router";
import {
    ArrowLeft,
    ChevronDown,
    ChevronRight,
    Mail,
    MapPin,
    School,
} from "lucide-react-native";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const primary = "#1A3A5C";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const grades = [
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

export default function SchoolProfile() {
  const [schoolName, setSchoolName] = useState("");
  const [grade, setGrade] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");

  const [showGradePicker, setShowGradePicker] = useState(false);
  const [showStatePicker, setShowStatePicker] = useState(false);

  const handleContinue = () => {
    if (!schoolName.trim()) {
      return;
    }

    if (!grade) {
      return;
    }

    if (!state) {
      return;
    }

    if (!email.trim()) {
      return;
    }

    router.push("/auth/profile-setup/future");
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-[#F4F6F8]">
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        className="flex-1"
      >
        {/* Header */}
        <View className="border-b border-[#E2E5E9] bg-white px-5 pb-3 pt-3">
          <View className="flex-row items-center">
            <Pressable
              onPress={() => router.back()}
              className="mr-3 h-9 w-9 items-center justify-center rounded-[10px] active:bg-[#F4F6F8]"
            >
              <ArrowLeft size={21} color="#16202A" strokeWidth={2} />
            </Pressable>

            <View className="flex-1">
              <Text className="text-[16px] font-bold text-[#16202A]">
                Complete your profile
              </Text>

              <Text className="mt-0.5 text-[11px] text-[#6B7684]">
                Step 2 of 8 · Your school
              </Text>
            </View>
          </View>
        </View>

        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 22,
            paddingBottom: 30,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Progress */}
          <View className="mb-7">
            <View className="mb-2 flex-row items-center justify-between">
              <Text className="text-[12px] font-medium text-[#6B7684]">
                Your profile
              </Text>

              <Text className="text-[12px] font-semibold text-[#1A3A5C]">
                25% complete
              </Text>
            </View>

            <View className="h-[5px] overflow-hidden rounded-full bg-[#E2E5E9]">
              <View
                className="h-full rounded-full"
                style={{
                  width: "25%",
                  backgroundColor: primary,
                }}
              />
            </View>
          </View>

          {/* Heading */}
          <View className="mb-7">
            <Text className="text-[25px] font-extrabold tracking-[-0.4px] text-[#16202A]">
              Your school
            </Text>

            <Text className="mt-2 max-w-[335px] text-[13px] leading-5 text-[#6B7684]">
              Tell us a little about where you study and how we can reach you.
            </Text>
          </View>

          {/* School Name */}
          <View className="mb-6">
            <View className="mb-2 flex-row items-center">
              <Text className="text-[13px] font-semibold text-[#16202A]">
                School
              </Text>

              <View className="ml-2 rounded-full bg-[#FFF6DF] px-2 py-0.5">
                <Text className="text-[8px] font-bold text-[#9A6B00]">
                  REQUIRED
                </Text>
              </View>
            </View>

            <View className="h-12 flex-row items-center rounded-[11px] border border-[#E2E5E9] bg-white px-3">
              <School size={18} color="#6B7684" strokeWidth={1.9} />

              <TextInput
                value={schoolName}
                onChangeText={setSchoolName}
                placeholder="Enter your school name"
                placeholderTextColor="#9AA4AF"
                className="ml-2 flex-1 text-[14px] text-[#16202A]"
              />
            </View>
          </View>

          {/* Grade */}
          <View className="mb-6">
            <View className="mb-2 flex-row items-center">
              <Text className="text-[13px] font-semibold text-[#16202A]">
                Grade / Class
              </Text>

              <View className="ml-2 rounded-full bg-[#FFF6DF] px-2 py-0.5">
                <Text className="text-[8px] font-bold text-[#9A6B00]">
                  REQUIRED
                </Text>
              </View>
            </View>

            <Pressable
              onPress={() => setShowGradePicker(true)}
              className="h-12 flex-row items-center justify-between rounded-[11px] border border-[#E2E5E9] bg-white px-3.5 active:bg-[#F8FAFB]"
            >
              <Text
                className={`text-[14px] ${
                  grade ? "text-[#16202A]" : "text-[#9AA4AF]"
                }`}
              >
                {grade || "Select your class"}
              </Text>

              <ChevronDown size={18} color="#9AA4AF" strokeWidth={1.9} />
            </Pressable>
          </View>

          {/* State */}
          <View className="mb-6">
            <View className="mb-2 flex-row items-center">
              <Text className="text-[13px] font-semibold text-[#16202A]">
                State
              </Text>

              <View className="ml-2 rounded-full bg-[#FFF6DF] px-2 py-0.5">
                <Text className="text-[8px] font-bold text-[#9A6B00]">
                  REQUIRED
                </Text>
              </View>
            </View>

            <Pressable
              onPress={() => setShowStatePicker(true)}
              className="h-12 flex-row items-center justify-between rounded-[11px] border border-[#E2E5E9] bg-white px-3.5 active:bg-[#F8FAFB]"
            >
              <View className="flex-1 flex-row items-center">
                <MapPin size={18} color="#6B7684" strokeWidth={1.9} />

                <Text
                  className={`ml-2 text-[14px] ${
                    state ? "text-[#16202A]" : "text-[#9AA4AF]"
                  }`}
                >
                  {state || "Select your state"}
                </Text>
              </View>

              <ChevronDown size={18} color="#9AA4AF" strokeWidth={1.9} />
            </Pressable>
          </View>

          {/* Email */}
          <View>
            <View className="mb-2 flex-row items-center">
              <Text className="text-[13px] font-semibold text-[#16202A]">
                Email
              </Text>

              <View className="ml-2 rounded-full bg-[#FFF6DF] px-2 py-0.5">
                <Text className="text-[8px] font-bold text-[#9A6B00]">
                  REQUIRED
                </Text>
              </View>
            </View>

            <View className="h-12 flex-row items-center rounded-[11px] border border-[#E2E5E9] bg-white px-3">
              <Mail size={18} color="#6B7684" strokeWidth={1.9} />

              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email address"
                placeholderTextColor="#9AA4AF"
                keyboardType="email-address"
                autoCapitalize="none"
                className="ml-2 flex-1 text-[14px] text-[#16202A]"
              />
            </View>

            <Text className="mt-2 text-[11px] leading-4 text-[#9AA4AF]">
              We’ll use this email for important profile and career updates.
            </Text>
          </View>
        </ScrollView>

        {/* Bottom Action */}
        <View className="border-t border-[#E2E5E9] bg-white px-5 py-3.5">
          <Pressable
            onPress={handleContinue}
            className="h-[52px] w-full flex-row items-center justify-center rounded-[12px] bg-[#1A3A5C] active:opacity-90"
          >
            <Text className="mr-2 text-[14px] font-bold text-white">
              Continue
            </Text>

            <ChevronRight size={17} color="#FFFFFF" strokeWidth={2.5} />
          </Pressable>
        </View>

        {/* Grade Picker */}
        <Modal
          visible={showGradePicker}
          transparent
          animationType="slide"
          onRequestClose={() => setShowGradePicker(false)}
        >
          <View className="flex-1 justify-end bg-black/30">
            <View className="max-h-[70%] rounded-t-[24px] bg-white px-4 pb-8 pt-5">
              <View className="mb-4">
                <Text className="text-[18px] font-bold text-[#16202A]">
                  Select your class
                </Text>

                <Text className="mt-1 text-[11px] text-[#6B7684]">
                  Choose the class you are currently studying in.
                </Text>
              </View>

              <ScrollView showsVerticalScrollIndicator={false}>
                {grades.map((item) => {
                  const selected = grade === item;

                  return (
                    <Pressable
                      key={item}
                      onPress={() => {
                        setGrade(item);
                        setShowGradePicker(false);
                      }}
                      className={`mb-2 rounded-[10px] border px-4 py-3.5 ${
                        selected
                          ? "border-[#1A3A5C] bg-[#EAF1F7]"
                          : "border-[#E2E5E9] bg-white"
                      }`}
                    >
                      <Text
                        className={`text-[14px] ${
                          selected
                            ? "font-semibold text-[#1A3A5C]"
                            : "text-[#16202A]"
                        }`}
                      >
                        {item}
                      </Text>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </Modal>

        {/* State Picker */}
        <Modal
          visible={showStatePicker}
          transparent
          animationType="slide"
          onRequestClose={() => setShowStatePicker(false)}
        >
          <View className="flex-1 justify-end bg-black/30">
            <View className="max-h-[80%] rounded-t-[24px] bg-white px-4 pb-8 pt-5">
              <View className="mb-4">
                <Text className="text-[18px] font-bold text-[#16202A]">
                  Select your state
                </Text>

                <Text className="mt-1 text-[11px] text-[#6B7684]">
                  Select the state where your school is located.
                </Text>
              </View>

              <ScrollView showsVerticalScrollIndicator={false}>
                {states.map((item) => {
                  const selected = state === item;

                  return (
                    <Pressable
                      key={item}
                      onPress={() => {
                        setState(item);
                        setShowStatePicker(false);
                      }}
                      className={`mb-2 rounded-[10px] border px-4 py-3 ${
                        selected
                          ? "border-[#1A3A5C] bg-[#EAF1F7]"
                          : "border-[#E2E5E9] bg-white"
                      }`}
                    >
                      <Text
                        className={`text-[14px] ${
                          selected
                            ? "font-semibold text-[#1A3A5C]"
                            : "text-[#16202A]"
                        }`}
                      >
                        {item}
                      </Text>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
