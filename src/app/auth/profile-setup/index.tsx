import { router } from "expo-router";
import {
  ArrowLeft,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react-native";
import { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const primary = "#1A3A5C";

const genders = ["Male", "Female", "Other", "Prefer not to say"];

const days = Array.from({ length: 31 }, (_, index) => index + 1);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentYear = new Date().getFullYear();

const years = Array.from({ length: 80 }, (_, index) => currentYear - index);

export default function ProfileSetup() {
  const [fullName, setFullName] = useState("");

  const [gender, setGender] = useState("");

 const [focusedField, setFocusedField] = useState<
  "day" | "month" | "year" | null
>(null);

const [formData, setFormData] = useState({
  day: "",
  month: "",
  year: "",
});
 
  const [showGenderPicker, setShowGenderPicker] = useState(false);

  const handleContinue = () => {
    if (!fullName.trim()) {
      return;
    }

    if (
       formData.day === null ||
      formData.month === null ||
      formData.year === null
    ) {
      return;
    }

    router.push("/auth/profile-setup/school");
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-[#F4F6F8]">
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
              Step 1 of 8 · About you
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
              12% complete
            </Text>
          </View>

          <View className="h-[5px] overflow-hidden rounded-full bg-[#E2E5E9]">
            <View
              className="h-full rounded-full"
              style={{
                width: "12.5%",
                backgroundColor: primary,
              }}
            />
          </View>
        </View>

        {/* Heading */}
        <View className="mb-7">
          <Text className="text-[25px] font-extrabold tracking-[-0.4px] text-[#16202A]">
            Let’s meet you
          </Text>

          <Text className="mt-2 max-w-[330px] text-[13px] leading-5 text-[#6B7684]">
            Start with a few basic details so we can personalize your
            experience.
          </Text>
        </View>

        {/* Full Name */}
        <View className="mb-6">
          <View className="mb-2 flex-row items-center">
            <Text className="text-[13px] font-semibold text-[#16202A]">
              Full name
            </Text>
          </View>

          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter your full name"
            placeholderTextColor="#9AA4AF"
            className="h-12 w-full rounded-[11px] border border-[#E2E5E9] bg-white px-[13px] text-[14px] text-[#16202A]"
          />
        </View>

        {/* Date of Birth */}
        <View className="mb-6">
          <View className="mb-2 flex-row items-center">
            <Text className="text-[13px] font-semibold text-[#16202A]">
              Date of birth
            </Text>
          </View>

          <View className="flex-row gap-2">
  {/* Day */}
  <View className="flex-[0.9] bg-white rounded-[11px]">
    <TextInput
      onFocus={() => setFocusedField("day")}
      onBlur={() => setFocusedField(null)}
      value={formData.day}
      onChangeText={(value) =>
        setFormData({ ...formData, day: value })
      }
      placeholder="DD"
      placeholderTextColor="#9AA4AF"
      keyboardType="number-pad"
      cursorColor="transparent"
      maxLength={2}
      className={`h-12 w-full rounded-[11px] border px-2 text-center text-[14px] text-[#16202A] ${
        focusedField === "day"
          ? "border-[#1a3a5c77]"
          : "border-[#E2E5E9]"
      }`}
    />
  </View>

  {/* Month */}
  <View className="flex-[0.9] bg-white rounded-[11px]">

    <TextInput
      onFocus={() => setFocusedField("month")}
      onBlur={() => setFocusedField(null)}
      value={formData.month}
      onChangeText={(value) =>
        setFormData({ ...formData, month: value })
      }
      placeholder="MM"
      placeholderTextColor="#9AA4AF"
      keyboardType="number-pad"
      cursorColor="transparent"
      maxLength={2}
      className={`h-12 w-full rounded-[11px] border px-2 text-center text-[14px] text-[#16202A] ${
        focusedField === "month"
          ? "border-[#1a3a5c77]"
          : "border-[#E2E5E9]"
      }`}
    />
  </View>

  {/* Year */}
  <View className="flex-[1.4] bg-white rounded-[11px]">

    <TextInput
      onFocus={() => setFocusedField("year")}
      onBlur={() => setFocusedField(null)}
      value={formData.year}
      onChangeText={(value) =>
        setFormData({ ...formData, year: value })
      }
      placeholder="YYYY"
      placeholderTextColor="#9AA4AF"
      keyboardType="number-pad"
      cursorColor="transparent"
      maxLength={4}
      className={`h-12 w-full rounded-[11px] border px-2 text-center text-[14px] text-[#16202A] ${
        focusedField === "year"
          ? "border-[#1a3a5c77]"
          : "border-[#E2E5E9]"
      }`}
    />
  </View>
</View>

         <Text className="mt-2 text-[11px] leading-4 text-[#9AA4AF]">
  Your date of birth helps us personalize your profile.
</Text>
        </View>

        {/* Gender */}
        <View>
          <View className="mb-2 flex-row items-center">
            <Text className="text-[13px] font-semibold text-[#16202A]">
              Gender
            </Text>
          </View>

          <Pressable
            onPress={() => setShowGenderPicker(true)}
            className="h-12 flex-row items-center justify-between rounded-[11px] border border-[#E2E5E9] bg-white px-3.5 active:bg-[#F8FAFB]"
          >
            <Text
              className={`text-[14px] ${
                gender ? "text-[#16202A]" : "text-[#9AA4AF]"
              }`}
            >
              {gender || "Select gender"}
            </Text>

            <ChevronDown size={18} color="#9AA4AF" strokeWidth={1.9} />
          </Pressable>

          <Text className="mt-2 text-[11px] leading-4 text-[#9AA4AF]">
            You may choose not to say.
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

      {/* Gender Picker */}
      <Modal
        visible={showGenderPicker}
        transparent
        animationType="slide"
        onRequestClose={() => setShowGenderPicker(false)}
      >
        <View className="flex-1 justify-end bg-black/30">
          <View className="rounded-t-[24px] bg-white px-4 pb-8 pt-5">
            <View className="mb-4 flex-row items-center justify-between">
              <View className="flex-1 pr-3">
                <Text className="text-[18px] font-bold text-[#16202A]">
                  Select gender
                </Text>

                <Text className="mt-1 text-[11px] text-[#6B7684]">
                  You may choose not to say.
                </Text>
              </View>

              <Pressable
                onPress={() => setShowGenderPicker(false)}
                className="h-9 w-9 items-center justify-center rounded-full bg-[#F4F6F8]"
              >
                <X size={18} color="#6B7684" />
              </Pressable>
            </View>

            {genders.map((item) => {
              const selected = gender === item;

              return (
                <Pressable
                  key={item}
                  onPress={() => {
                    setGender(item);
                    setShowGenderPicker(false);
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
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
