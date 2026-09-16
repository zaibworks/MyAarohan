import { router } from "expo-router";
import { ArrowLeft, ChevronDown, Search, X } from "lucide-react-native";
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

const careerSuggestions = [
  "Software Engineer",
  "Doctor",
  "Data Scientist",
  "Not sure yet",
];

const genders = ["Prefer not to say", "Male", "Female", "Other"];

const days = Array.from({ length: 31 }, (_, index) => index + 1);

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 26 }, (_, index) => currentYear - 5 - index);

export default function ProfileSetup() {
  const [fullName, setFullName] = useState("Salman Khan");

  const [dreamCareer1, setDreamCareer1] = useState("");
  const [dreamCareer2, setDreamCareer2] = useState("");
  const [dreamCareer3, setDreamCareer3] = useState("");

  const [careerSearch, setCareerSearch] = useState("");
  const [showCareerSuggestions, setShowCareerSuggestions] = useState(false);

  const [dob, setDob] = useState("");
  const [age, setAge] = useState<number | null>(null);

  const [gender, setGender] = useState("");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGenderPicker, setShowGenderPicker] = useState(false);

  const [selectedDay, setSelectedDay] = useState(10);
  const [selectedMonth, setSelectedMonth] = useState(9);
  const [selectedYear, setSelectedYear] = useState(2008);

  const filteredSuggestions = careerSuggestions.filter((career) =>
    career.toLowerCase().includes(careerSearch.toLowerCase()),
  );

  const calculateAge = (date: Date) => {
    const today = new Date();

    let calculatedAge = today.getFullYear() - date.getFullYear();

    const monthDifference = today.getMonth() - date.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < date.getDate())
    ) {
      calculatedAge--;
    }

    return calculatedAge;
  };

  const handleDateConfirm = () => {
    const date = new Date(selectedYear, selectedMonth, selectedDay);

    const formattedDate = `${String(selectedDay).padStart(2, "0")}/${String(
      selectedMonth + 1,
    ).padStart(2, "0")}/${selectedYear}`;

    setDob(formattedDate);
    setAge(calculateAge(date));
    setShowDatePicker(false);
  };

  const handleCareerSelect = (career: string) => {
    setDreamCareer1(career);
    setCareerSearch("");
    setShowCareerSuggestions(false);
  };

  const handleContinue = () => {
    if (!dreamCareer1.trim()) {
      return;
    }

    router.push("/student/profile-setup/guardian");
  };

  const handleSaveDraft = () => {
    // Draft persistence will be connected when shared profile state
    // / storage is added to the profile setup flow.
  };

  return (
    <SafeAreaView edges={["bottom"]}
    className="flex-1 bg-[#F4F6F8]">
      {/* Top Bar */}
      <View className="border-b border-[#E2E5E9] bg-white px-4 pb-3 pt-10">
        <View className="flex-row items-center">
          <Pressable
            onPress={() => router.back()}
            className="mr-3 h-9 w-9 items-center justify-center rounded-[10px]"
          >
            <ArrowLeft size={21} color="#16202A" strokeWidth={2} />
          </Pressable>

          <Text className="text-[16px] font-semibold text-[#16202A]">
            Complete your profile
          </Text>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 18,
          paddingBottom: 24,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Progress */}
        <View className="mb-6">
          <View className="mb-2 flex-row items-center justify-between">
            <Text className="text-[13px] font-medium text-[#6B7684]">
              Step 1 of 5
            </Text>

            <Text className="text-[13px] font-semibold text-[#1A3A5C]">
              17%
            </Text>
          </View>

          <View className="h-1.5 overflow-hidden rounded-full bg-[#E2E5E9]">
            <View
              className="h-full rounded-full"
              style={{
                width: "17%",
                backgroundColor: primary,
              }}
            />
          </View>
        </View>

        {/* Heading */}
        <View className="mb-6">
          <Text className="text-[24px] font-bold text-[#16202A]">
            About you
          </Text>

          <Text className="mt-1.5 text-[14px] leading-5 text-[#6B7684]">
            Let’s start with the basics.
          </Text>
        </View>

        {/* Dream Career 1 */}
        <View className="mb-5">
          <Text className="mb-2 text-[13px] font-semibold text-[#16202A]">
            Dream Career 1 <Text className="text-[#E74C3C]">*</Text>
          </Text>

          <View className="relative">
            <View className="flex-row items-center rounded-[10px] border border-[#E2E5E9] bg-white px-3">
              <Search size={18} color="#9AA4AF" />

              <TextInput
                value={careerSearch || dreamCareer1}
                onChangeText={(text) => {
                  setCareerSearch(text);
                  setDreamCareer1(text);
                  setShowCareerSuggestions(true);
                }}
                onFocus={() => setShowCareerSuggestions(true)}
                placeholder="Search your dream career"
                placeholderTextColor="#9AA4AF"
                className="h-12 flex-1 px-2 text-[14px] text-[#16202A]"
              />

              {dreamCareer1.length > 0 && (
                <Pressable
                  onPress={() => {
                    setDreamCareer1("");
                    setCareerSearch("");
                  }}
                  className="h-8 w-8 items-center justify-center"
                >
                  <X size={17} color="#9AA4AF" />
                </Pressable>
              )}
            </View>

            {showCareerSuggestions && (
              <View className="mt-1 overflow-hidden rounded-[10px] border border-[#E2E5E9] bg-white">
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((career) => (
                    <Pressable
                      key={career}
                      onPress={() => handleCareerSelect(career)}
                      className="border-b border-[#E2E5E9] px-3.5 py-3 last:border-b-0"
                    >
                      <Text className="text-[14px] text-[#16202A]">
                        {career}
                      </Text>
                    </Pressable>
                  ))
                ) : (
                  <Text className="px-3.5 py-3 text-[13px] text-[#6B7684]">
                    No suggestions found.
                  </Text>
                )}
              </View>
            )}
          </View>

          <Text className="mt-2 text-[12px] leading-4 text-[#9AA4AF]">
            Type any career you want. Suggestions are optional.
          </Text>
        </View>

        {/* Dream Career 2 & 3 */}
        <View className="mb-5 flex-row gap-3">
          <View className="flex-1">
            <Text className="mb-2 text-[13px] font-semibold text-[#16202A]">
              Dream Career 2
            </Text>

            <TextInput
              value={dreamCareer2}
              onChangeText={setDreamCareer2}
              placeholder="Optional"
              placeholderTextColor="#9AA4AF"
              className="h-12 rounded-[10px] border border-[#E2E5E9] bg-white px-3 text-[13px] text-[#16202A]"
            />
          </View>

          <View className="flex-1">
            <Text className="mb-2 text-[13px] font-semibold text-[#16202A]">
              Dream Career 3
            </Text>

            <TextInput
              value={dreamCareer3}
              onChangeText={setDreamCareer3}
              placeholder="Optional"
              placeholderTextColor="#9AA4AF"
              className="h-12 rounded-[10px] border border-[#E2E5E9] bg-white px-3 text-[13px] text-[#16202A]"
            />
          </View>
        </View>

        {/* Gender */}
        <View className="mb-8">
          <Text className="mb-2 text-[13px] font-semibold text-[#16202A]">
            Gender
          </Text>

          <Pressable
            onPress={() => setShowGenderPicker(true)}
            className="h-12 flex-row items-center justify-between rounded-[10px] border border-[#E2E5E9] bg-white px-3.5"
          >
            <Text
              className={`text-[14px] ${
                gender ? "text-[#16202A]" : "text-[#9AA4AF]"
              }`}
            >
              {gender || "Select gender"}
            </Text>

            <ChevronDown size={18} color="#9AA4AF" />
          </Pressable>
        </View>

        {/* Footer Buttons */}
      </ScrollView>

      <View className="border-t border-[#E2E5E9] bg-[#F4F6F8] px-4 py-4">
        <View className="flex-row items-center gap-3">
          <Pressable
            onPress={handleSaveDraft}
            className="h-12 flex-1 items-center justify-center rounded-[10px] border border-[#D6DBE1] bg-white"
          >
            <Text className="text-[14px] font-semibold text-[#1A3A5C]">
              Save draft
            </Text>
          </Pressable>

          <Pressable
            onPress={handleContinue}
            className="h-12 flex-1 items-center justify-center rounded-[10px]"
            style={{
              backgroundColor: primary,
            }}
          >
            <Text className="text-[14px] font-semibold text-white">
              Continue
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Gender Bottom Sheet */}
      <Modal
        visible={showGenderPicker}
        transparent
        animationType="slide"
        onRequestClose={() => setShowGenderPicker(false)}
      >
        <View className="flex-1 justify-end bg-black/30">
          <View className="rounded-t-[24px] bg-white px-4 pb-8 pt-5">
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="text-[18px] font-bold text-[#16202A]">
                Select gender
              </Text>

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
