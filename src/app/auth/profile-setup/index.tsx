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

  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGenderPicker, setShowGenderPicker] = useState(false);

  const handleDateConfirm = () => {
    if (
      selectedDay === null ||
      selectedMonth === null ||
      selectedYear === null
    ) {
      return;
    }

    setShowDatePicker(false);
  };

  const handleContinue = () => {
    if (!fullName.trim()) {
      return;
    }

    if (
      selectedDay === null ||
      selectedMonth === null ||
      selectedYear === null
    ) {
      return;
    }

    router.push("/auth/profile-setup/school");
  };

  const formattedDate =
    selectedDay !== null && selectedMonth !== null && selectedYear !== null
      ? `${String(selectedDay).padStart(2, "0")}/${String(
          selectedMonth + 1,
        ).padStart(2, "0")}/${selectedYear}`
      : "";

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

            <View className="ml-2 rounded-full bg-[#FFF6DF] px-2 py-0.5">
              <Text className="text-[8px] font-bold text-[#9A6B00]">
                REQUIRED
              </Text>
            </View>
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

            <View className="ml-2 rounded-full bg-[#FFF6DF] px-2 py-0.5">
              <Text className="text-[8px] font-bold text-[#9A6B00]">
                REQUIRED
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => setShowDatePicker(true)}
            className="h-12 flex-row items-center justify-between rounded-[11px] border border-[#E2E5E9] bg-white px-3.5 active:bg-[#F8FAFB]"
          >
            <Text
              className={`text-[14px] ${
                formattedDate ? "text-[#16202A]" : "text-[#9AA4AF]"
              }`}
            >
              {formattedDate || "Select your date of birth"}
            </Text>

            <CalendarDays size={18} color="#6B7684" strokeWidth={1.9} />
          </Pressable>

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

            <View className="ml-2 rounded-full bg-[#EEF3F7] px-2 py-0.5">
              <Text className="text-[8px] font-bold text-[#6B7684]">
                OPTIONAL
              </Text>
            </View>
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

      {/* Date Picker */}
      <Modal
        visible={showDatePicker}
        transparent
        animationType="slide"
        onRequestClose={() => setShowDatePicker(false)}
      >
        <View className="flex-1 justify-end bg-black/30">
          <View className="rounded-t-[24px] bg-white px-4 pb-8 pt-5">
            <View className="mb-5 flex-row items-center justify-between">
              <View>
                <Text className="text-[18px] font-bold text-[#16202A]">
                  Date of birth
                </Text>

                <Text className="mt-1 text-[11px] text-[#6B7684]">
                  Select your date of birth
                </Text>
              </View>

              <Pressable
                onPress={() => setShowDatePicker(false)}
                className="h-9 w-9 items-center justify-center rounded-full bg-[#F4F6F8]"
              >
                <X size={18} color="#6B7684" />
              </Pressable>
            </View>

            <View className="mb-5 flex-row">
              {/* Day */}
              <View className="mr-2 flex-1">
                <Text className="mb-2 text-[11px] font-semibold text-[#6B7684]">
                  Day
                </Text>

                <ScrollView
                  className="h-[180px]"
                  showsVerticalScrollIndicator={false}
                >
                  {days.map((day) => {
                    const selected = selectedDay === day;

                    return (
                      <Pressable
                        key={day}
                        onPress={() => setSelectedDay(day)}
                        className={`mb-1 items-center rounded-[9px] py-2.5 ${
                          selected ? "bg-[#EAF1F7]" : "bg-white"
                        }`}
                      >
                        <Text
                          className={`text-[13px] ${
                            selected
                              ? "font-bold text-[#1A3A5C]"
                              : "text-[#16202A]"
                          }`}
                        >
                          {day}
                        </Text>
                      </Pressable>
                    );
                  })}
                </ScrollView>
              </View>

              {/* Month */}
              <View className="mr-2 flex-[1.5]">
                <Text className="mb-2 text-[11px] font-semibold text-[#6B7684]">
                  Month
                </Text>

                <ScrollView
                  className="h-[180px]"
                  showsVerticalScrollIndicator={false}
                >
                  {months.map((month, index) => {
                    const selected = selectedMonth === index;

                    return (
                      <Pressable
                        key={month}
                        onPress={() => setSelectedMonth(index)}
                        className={`mb-1 rounded-[9px] px-3 py-2.5 ${
                          selected ? "bg-[#EAF1F7]" : "bg-white"
                        }`}
                      >
                        <Text
                          className={`text-[13px] ${
                            selected
                              ? "font-bold text-[#1A3A5C]"
                              : "text-[#16202A]"
                          }`}
                        >
                          {month}
                        </Text>
                      </Pressable>
                    );
                  })}
                </ScrollView>
              </View>

              {/* Year */}
              <View className="flex-1">
                <Text className="mb-2 text-[11px] font-semibold text-[#6B7684]">
                  Year
                </Text>

                <ScrollView
                  className="h-[180px]"
                  showsVerticalScrollIndicator={false}
                >
                  {years.map((year) => {
                    const selected = selectedYear === year;

                    return (
                      <Pressable
                        key={year}
                        onPress={() => setSelectedYear(year)}
                        className={`mb-1 items-center rounded-[9px] py-2.5 ${
                          selected ? "bg-[#EAF1F7]" : "bg-white"
                        }`}
                      >
                        <Text
                          className={`text-[13px] ${
                            selected
                              ? "font-bold text-[#1A3A5C]"
                              : "text-[#16202A]"
                          }`}
                        >
                          {year}
                        </Text>
                      </Pressable>
                    );
                  })}
                </ScrollView>
              </View>
            </View>

            <Pressable
              onPress={handleDateConfirm}
              className="h-[50px] items-center justify-center rounded-[12px] bg-[#1A3A5C] active:opacity-90"
            >
              <Text className="text-[14px] font-bold text-white">
                Confirm date
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
