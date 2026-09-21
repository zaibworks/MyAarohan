import { router } from "expo-router";
import { ArrowLeft, ChevronRight, Search, X } from "lucide-react-native";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
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
  "UX Designer",
  "Product Manager",
  "Architect",
  "Lawyer",
  "Chartered Accountant",
  "Teacher",
  "Psychologist",
  "Entrepreneur",
  "Not sure yet",
];

const confidenceOptions = [
  {
    value: "Very confident",
    description: "I already have a clear career direction.",
  },
  {
    value: "Somewhat confident",
    description: "I have a few careers in mind.",
  },
  {
    value: "Not sure yet",
    description: "I’m still exploring my options.",
  },
];

export default function FutureProfile() {
  const [dreamCareer1, setDreamCareer1] = useState("");
  const [dreamCareer2, setDreamCareer2] = useState("");
  const [dreamCareer3, setDreamCareer3] = useState("");

  const [activeCareer, setActiveCareer] = useState<1 | 2 | 3 | null>(null);

  const [careerSearch, setCareerSearch] = useState("");
  const [confidence, setConfidence] = useState("");

  const filteredSuggestions = careerSuggestions.filter((career) =>
    career.toLowerCase().includes(careerSearch.toLowerCase()),
  );

  const getCareerValue = (position: 1 | 2 | 3) => {
    if (position === 1) return dreamCareer1;
    if (position === 2) return dreamCareer2;
    return dreamCareer3;
  };

  const setCareerValue = (position: 1 | 2 | 3, value: string) => {
    if (position === 1) {
      setDreamCareer1(value);
    } else if (position === 2) {
      setDreamCareer2(value);
    } else {
      setDreamCareer3(value);
    }
  };

  const openCareerSearch = (position: 1 | 2 | 3) => {
    setActiveCareer(position);
    setCareerSearch(getCareerValue(position));
  };

  const handleCareerChange = (text: string) => {
    setCareerSearch(text);

    if (activeCareer !== null) {
      setCareerValue(activeCareer, text);
    }
  };

  const handleCareerSelect = (career: string) => {
    if (activeCareer !== null) {
      setCareerValue(activeCareer, career);
    }

    setCareerSearch("");
    setActiveCareer(null);
  };

  const clearCareer = (position: 1 | 2 | 3) => {
    setCareerValue(position, "");

    if (activeCareer === position) {
      setCareerSearch("");
    }
  };

  const handleContinue = () => {
    if (!dreamCareer1.trim()) {
      return;
    }

    if (!confidence) {
      return;
    }

    router.push("/auth/profile-setup/guardian");
  };

  const isComplete = dreamCareer1 && confidence;

  return (
    <SafeAreaView edges={["bottom"]} className="flex-1 bg-[#F4F6F8]">
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        className="flex-1"
      >
        {/* Header */}
        <View className="border-b border-[#E2E5E9] bg-white px-5 pb-3 pt-14">
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
                Step 3 of 8 · Your future
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
                37% complete
              </Text>
            </View>

            <View className="h-[5px] overflow-hidden rounded-full bg-[#E2E5E9]">
              <View
                className="h-full rounded-full"
                style={{
                  width: "37.5%",
                  backgroundColor: primary,
                }}
              />
            </View>
          </View>

          {/* Heading */}
          <View className="mb-7">
            <Text className="text-[25px] font-extrabold tracking-[-0.4px] text-[#16202A]">
              Your future
            </Text>

            <Text className="mt-2 max-w-[335px] text-[13px] leading-5 text-[#6B7684]">
              Tell us what careers interest you. You can explore and change your
              direction as you learn more.
            </Text>
          </View>

          {/* Career 1 */}
          <View className="mb-5">
            <View className="mb-2 flex-row items-center">
              <Text className="text-[13px] font-semibold text-[#16202A]">
                Dream Career 1
              </Text>
            </View>

            <View className="flex-row items-center rounded-[11px] border border-[#E2E5E9] bg-white px-3">
              <Search size={18} color="#9AA4AF" strokeWidth={1.9} />

              <TextInput
                value={dreamCareer1}
                onFocus={() => openCareerSearch(1)}
                onChangeText={(text) => {
                  setActiveCareer(1);
                  handleCareerChange(text);
                }}
                placeholder="Search your first career"
                placeholderTextColor="#9AA4AF"
                className="h-12 flex-1 px-2 text-[14px] text-[#16202A]"
              />

              {dreamCareer1.length > 0 && (
                <Pressable
                  onPress={() => clearCareer(1)}
                  className="h-8 w-8 items-center justify-center"
                >
                  <X size={16} color="#9AA4AF" />
                </Pressable>
              )}
            </View>

         {activeCareer === 1 && (
  <View className="mt-1 max-h-[180px] overflow-hidden rounded-[11px] border border-[#E2E5E9] bg-white">
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
    >
      {filteredSuggestions.length > 0 ? (
        filteredSuggestions.map((career) => (
          <Pressable
            key={career}
            onPress={() => handleCareerSelect(career)}
            className="border-b border-[#E2E5E9] px-3.5 py-3 last:border-b-0"
          >
            <Text className="text-[13px] text-[#16202A]">
              {career}
            </Text>
          </Pressable>
        ))
      ) : (
        <Text className="px-3.5 py-3 text-[12px] text-[#6B7684]">
          No suggestions found.
        </Text>
      )}
    </ScrollView>
  </View>
)}
          </View>

          {/* Career 2 */}
          <View className="mb-5">
            <View className="mb-2 flex-row items-center">
              <Text className="text-[13px] font-semibold text-[#16202A]">
                Dream Career 2
              </Text>
            </View>

            <View className="flex-row items-center rounded-[11px] border border-[#E2E5E9] bg-white px-3">
              <Search size={18} color="#9AA4AF" strokeWidth={1.9} />

              <TextInput
                value={dreamCareer2}
                onFocus={() => openCareerSearch(2)}
                onChangeText={(text) => {
                  setActiveCareer(2);
                  handleCareerChange(text);
                }}
                placeholder="Search another career"
                placeholderTextColor="#9AA4AF"
                className="h-12 flex-1 px-2 text-[14px] text-[#16202A]"
              />

              {dreamCareer2.length > 0 && (
                <Pressable
                  onPress={() => clearCareer(2)}
                  className="h-8 w-8 items-center justify-center"
                >
                  <X size={16} color="#9AA4AF" />
                </Pressable>
              )}
            </View>

           {activeCareer === 2 && (
  <View className="mt-1 max-h-[180px] overflow-hidden rounded-[11px] border border-[#E2E5E9] bg-white">
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
    >
      {filteredSuggestions.length > 0 ? (
        filteredSuggestions.map((career) => (
          <Pressable
            key={career}
            onPress={() => handleCareerSelect(career)}
            className="border-b border-[#E2E5E9] px-3.5 py-3 last:border-b-0"
          >
            <Text className="text-[13px] text-[#16202A]">
              {career}
            </Text>
          </Pressable>
        ))
      ) : (
        <Text className="px-3.5 py-3 text-[12px] text-[#6B7684]">
          No suggestions found.
        </Text>
      )}
    </ScrollView>
  </View>
)}
          </View>

          {/* Career 3 */}
          <View className="mb-7">
            <View className="mb-2 flex-row items-center">
              <Text className="text-[13px] font-semibold text-[#16202A]">
                Dream Career 3
              </Text>
            </View>

            <View className="flex-row items-center rounded-[11px] border border-[#E2E5E9] bg-white px-3">
              <Search size={18} color="#9AA4AF" strokeWidth={1.9} />

              <TextInput
                value={dreamCareer3}
                onFocus={() => openCareerSearch(3)}
                onChangeText={(text) => {
                  setActiveCareer(3);
                  handleCareerChange(text);
                }}
                placeholder="Search another career"
                placeholderTextColor="#9AA4AF"
                className="h-12 flex-1 px-2 text-[14px] text-[#16202A]"
              />

              {dreamCareer3.length > 0 && (
                <Pressable
                  onPress={() => clearCareer(3)}
                  className="h-8 w-8 items-center justify-center"
                >
                  <X size={16} color="#9AA4AF" />
                </Pressable>
              )}
            </View>

            {activeCareer === 3 && (
              <View className="mt-1 max-h-[180px] overflow-hidden rounded-[11px] border border-[#E2E5E9] bg-white">
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
    >
      {filteredSuggestions.length > 0 ? (
        filteredSuggestions.map((career) => (
          <Pressable
            key={career}
            onPress={() => handleCareerSelect(career)}
            className="border-b border-[#E2E5E9] px-3.5 py-3 last:border-b-0"
          >
            <Text className="text-[13px] text-[#16202A]">
              {career}
            </Text>
          </Pressable>
        ))
      ) : (
        <Text className="px-3.5 py-3 text-[12px] text-[#6B7684]">
          No suggestions found.
        </Text>
      )}
    </ScrollView>
  </View>
            )}
          </View>

          {/* Career Direction */}
          <View className="mb-2">
            <View className="mb-2 flex-row items-center">
              <Text className="text-[13px] font-semibold text-[#16202A]">
                How confident are you about your career direction?
              </Text>
            </View>

            <Text className="mb-3 text-[11px] leading-4 text-[#9AA4AF]">
              There is no right or wrong answer. This simply helps us understand
              where you are in your journey.
            </Text>

            {confidenceOptions.map((option) => {
              const selected = confidence === option.value;

              return (
                <Pressable
                  key={option.value}
                  onPress={() => setConfidence(option.value)}
                  className={`mb-2.5 flex-row items-center rounded-[11px] border px-3.5 py-3.5 ${
                    selected
                      ? "border-[#1A3A5C] bg-[#EAF1F7]"
                      : "border-[#E2E5E9] bg-white"
                  }`}
                >
                  <View
                    className={`mr-3 h-[20px] w-[20px] items-center justify-center rounded-full border ${
                      selected ? "border-[#1A3A5C]" : "border-[#C8CED5]"
                    }`}
                  >
                    {selected && (
                      <View className="h-[10px] w-[10px] rounded-full bg-[#1A3A5C]" />
                    )}
                  </View>

                  <View className="flex-1">
                    <Text
                      className={`text-[13px] ${
                        selected
                          ? "font-semibold text-[#1A3A5C]"
                          : "font-medium text-[#16202A]"
                      }`}
                    >
                      {option.value}
                    </Text>

                    <Text className="mt-0.5 text-[11px] leading-4 text-[#6B7684]">
                      {option.description}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>

        {/* Bottom Action */}
       <View className="border-t border-[#E2E5E9] bg-white px-5 py-3.5">
        <Pressable
        disabled={!isComplete}
          onPress={handleContinue}
          className={`h-[52px] w-full flex-row items-center justify-center rounded-[12px] active:opacity-90 ${isComplete ? "bg-[#1A3A5C]" : "bg-[#D6DBE1]"} `}
        >
          <Text className={`mr-2 text-[14px] font-bold text-white 
            ${ isComplete ? "text-white" : "text-[#9AA4AF]"}`}>
            Continue
          </Text>

          <ChevronRight size={17} color="#FFFFFF" strokeWidth={2.5} />
        </Pressable>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
