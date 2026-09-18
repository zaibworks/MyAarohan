import { router } from "expo-router";
import {
  ArrowLeft,
  Check,
  Info,
  Search
} from "lucide-react-native";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Option = {
  label: string;
  value: string;
};

const streamOptions: Option[] = [
  { label: "Science", value: "science" },
  { label: "Commerce", value: "commerce" },
  { label: "Arts / Humanities", value: "arts" },
  { label: "Not decided yet", value: "not-decided" },
];

const certaintyOptions: Option[] = [
  { label: "Very sure", value: "very-sure" },
  { label: "Somewhat sure", value: "somewhat-sure" },
  { label: "Not sure at all", value: "not-sure" },
];

const learningOptions: Option[] = [
  { label: "Watching videos", value: "videos" },
  { label: "Reading text", value: "reading" },
  { label: "Hands-on practice", value: "hands-on" },
  { label: "Discussing with others", value: "discussion" },
];

const workStyleOptions: Option[] = [
  { label: "Independently", value: "independently" },
  { label: "In a team", value: "team" },
  { label: "Mix of both", value: "both" },
];

const accessOptions: Option[] = [
  { label: "Full access", value: "full" },
  { label: "Limited access", value: "limited" },
  { label: "No access", value: "none" },
];

const firstGenerationOptions: Option[] = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Not sure", value: "not-sure" },
];

const parentEducationOptions: Option[] = [
  { label: "No formal education", value: "none" },
  { label: "School level", value: "school" },
  { label: "Undergraduate", value: "undergraduate" },
  { label: "Postgraduate or higher", value: "postgraduate" },
];

const activities = [
  "Sports",
  "Music",
  "Dance",
  "Art",
  "Debate",
  "Public Speaking",
  "Coding",
  "Robotics",
  "Writing",
  "Reading",
  "Volunteering",
  "Photography",
  "Theatre",
  "Gaming",
  "Entrepreneurship",
  "Other",
];

export default function LifestyleScreen() {
  const [currentStep, setCurrentStep] = useState(1);

  const [stream, setStream] = useState("");
  const [careerCertainty, setCareerCertainty] = useState("");

  const [learningStyle, setLearningStyle] = useState("");
  const [workStyle, setWorkStyle] = useState("");

  const [studyTime, setStudyTime] = useState("");
  const [internetAccess, setInternetAccess] = useState("");

  const [firstGeneration, setFirstGeneration] = useState("");
  const [parentEducation, setParentEducation] = useState("");

  const [activitySearch, setActivitySearch] = useState("");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const progress =
    currentStep === 1
      ? "70%"
      : currentStep === 2
        ? "74%"
        : currentStep === 3
          ? "78%"
          : currentStep === 4
            ? "82%"
            : "86%";

  const handleBack = () => {
    if (currentStep === 1) {
      router.back();
      return;
    }

    setCurrentStep((prev) => prev - 1);
  };

  const handleContinue = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    router.push("/auth/profile-setup/review");
  };

  const handleSaveDraft = () => {
    // TODO: Connect this to shared profile state / backend later.
    console.log("Lifestyle draft saved");
  };

  const toggleActivity = (activity: string) => {
    setSelectedActivities((prev) => {
      if (prev.includes(activity)) {
        return prev.filter((item) => item !== activity);
      }

      return [...prev, activity];
    });
  };

  const filteredActivities = activities.filter((activity) =>
    activity.toLowerCase().includes(activitySearch.toLowerCase()),
  );

  const renderOption = (
    option: Option,
    selectedValue: string,
    onSelect: (value: string) => void,
  ) => {
    const selected = selectedValue === option.value;

    return (
      <Pressable
        key={option.value}
        onPress={() => onSelect(option.value)}
        className={`mb-2.5 flex-row items-center rounded-xl border px-4 py-3.5 ${
          selected
            ? "border-[#1A3A5C] bg-[#EAF1F7]"
            : "border-[#E2E5E9] bg-white"
        }`}
      >
        <View
          className={`mr-3 h-5 w-5 items-center justify-center rounded-full border ${
            selected
              ? "border-[#1A3A5C] bg-[#1A3A5C]"
              : "border-[#D6DBE1] bg-white"
          }`}
        >
          {selected && <Check size={13} color="#FFFFFF" strokeWidth={3} />}
        </View>

        <Text
          className={`flex-1 text-[14px] ${
            selected ? "font-medium text-[#1A3A5C]" : "text-[#16202A]"
          }`}
        >
          {option.label}
        </Text>
      </Pressable>
    );
  };

  const renderHeader = () => (
    <View className="border-b border-[#E2E5E9] bg-white pt-10">
      <View className="h-14 flex-row items-center px-4">
        <Pressable
          onPress={handleBack}
          className="mr-3 h-9 w-9 items-center justify-center rounded-lg"
          hitSlop={8}
        >
          <ArrowLeft size={21} color="#16202A" strokeWidth={2} />
        </Pressable>

        <Text className="text-[16px] font-semibold text-[#16202A]">
          Complete your profile
        </Text>
      </View>

      <View className="px-4 pb-4">
        <View className="mb-2 flex-row items-center justify-between">
          <Text className="text-[12px] font-medium text-[#6B7684]">
            Step 4 of 5
          </Text>

          <Text className="text-[12px] font-semibold text-[#1A3A5C]">
            {progress}
          </Text>
        </View>

        <View className="h-1.5 overflow-hidden rounded-full bg-[#E6E9ED]">
          <View
            className="h-full rounded-full bg-[#1A3A5C]"
            style={{ width: progress }}
          />
        </View>
      </View>
    </View>
  );

  const renderStepOne = () => (
    <>
      <View className="mb-5">
        <Text className="text-[22px] font-semibold text-[#16202A]">
          Academic direction
        </Text>

        <Text className="mt-1.5 text-[14px] leading-5 text-[#6B7684]">
          Tell us a little about your academic direction and career confidence.
        </Text>
      </View>

      <View className="mb-6 rounded-xl border border-[#DCE7F0] bg-[#EAF1F7] p-4">
        <View className="mb-2 flex-row items-center">
          <Info size={17} color="#1A3A5C" />
          <Text className="ml-2 text-[14px] font-semibold text-[#1A3A5C]">
            Why we ask this
          </Text>
        </View>

        <Text className="text-[13px] leading-5 text-[#496176]">
          These answers help us understand your learning environment and
          interests. Skip optional questions you're not comfortable answering.
        </Text>
      </View>

      <Text className="mb-2.5 text-[14px] font-semibold text-[#16202A]">
        Stream for Grades 11–12
      </Text>

      {streamOptions.map((option) => renderOption(option, stream, setStream))}

      <View className="mt-4">
        <Text className="mb-2.5 text-[14px] font-semibold text-[#16202A]">
          How sure are you about your career direction?
        </Text>

        {certaintyOptions.map((option) =>
          renderOption(option, careerCertainty, setCareerCertainty),
        )}
      </View>
    </>
  );

  const renderStepTwo = () => (
    <>
      <View className="mb-5">
        <Text className="text-[22px] font-semibold text-[#16202A]">
          Learning & work style
        </Text>

        <Text className="mt-1.5 text-[14px] leading-5 text-[#6B7684]">
          Tell us how you learn and work best.
        </Text>
      </View>

      <Text className="mb-2.5 text-[14px] font-semibold text-[#16202A]">
        What's the fastest way for you to learn a new concept?
      </Text>

      {learningOptions.map((option) =>
        renderOption(option, learningStyle, setLearningStyle),
      )}

      <View className="mt-4">
        <Text className="mb-2.5 text-[14px] font-semibold text-[#16202A]">
          How do you prefer to work?
        </Text>

        {workStyleOptions.map((option) =>
          renderOption(option, workStyle, setWorkStyle),
        )}
      </View>
    </>
  );

  const renderStepThree = () => (
    <>
      <View className="mb-5">
        <Text className="text-[22px] font-semibold text-[#16202A]">
          Home & access
        </Text>

        <Text className="mt-1.5 text-[14px] leading-5 text-[#6B7684]">
          A little about your study environment at home.
        </Text>
      </View>

      <View className="mb-5">
        <Text className="mb-2 text-[14px] font-semibold text-[#16202A]">
          Study time at home
        </Text>

        <TextInput
          value={studyTime}
          onChangeText={setStudyTime}
          placeholder="e.g. 4 hours"
          placeholderTextColor="#9AA4AF"
          className="rounded-xl border border-[#E2E5E9] bg-white px-4 py-3.5 text-[14px] text-[#16202A]"
        />
      </View>

      <View>
        <Text className="mb-2.5 text-[14px] font-semibold text-[#16202A]">
          Internet access
        </Text>

        {accessOptions.map((option) =>
          renderOption(option, internetAccess, setInternetAccess),
        )}
      </View>
    </>
  );

  const renderStepFour = () => (
    <>
      <View className="mb-5">
        <Text className="text-[22px] font-semibold text-[#16202A]">
          Family background
        </Text>

        <Text className="mt-1.5 text-[14px] leading-5 text-[#6B7684]">
          Optional, but helps us support you better.
        </Text>
      </View>

      <Text className="mb-2.5 text-[14px] font-semibold text-[#16202A]">
        Are you the first person in your family to study at this level?
      </Text>

      {firstGenerationOptions.map((option) =>
        renderOption(option, firstGeneration, setFirstGeneration),
      )}

      <View className="mt-4">
        <Text className="mb-2.5 text-[14px] font-semibold text-[#16202A]">
          Parents' education
        </Text>

        {parentEducationOptions.map((option) =>
          renderOption(option, parentEducation, setParentEducation),
        )}
      </View>
    </>
  );

  const renderStepFive = () => (
    <>
      <View className="mb-5">
        <Text className="text-[22px] font-semibold text-[#16202A]">
          Extracurricular activities
        </Text>

        <Text className="mt-1.5 text-[14px] leading-5 text-[#6B7684]">
          Select all that apply. Search if you don't see yours.
        </Text>
      </View>

      <View className="mb-4 flex-row items-center rounded-xl border border-[#E2E5E9] bg-white px-3.5">
        <Search size={18} color="#9AA4AF" />

        <TextInput
          value={activitySearch}
          onChangeText={setActivitySearch}
          placeholder="Search activities"
          placeholderTextColor="#9AA4AF"
          className="flex-1 px-2.5 py-3.5 text-[14px] text-[#16202A]"
        />
      </View>

      <Text className="mb-3 text-[13px] font-medium text-[#6B7684]">
        {selectedActivities.length} selected
      </Text>

      <View className="flex-row flex-wrap">
        {filteredActivities.map((activity) => {
          const selected = selectedActivities.includes(activity);

          return (
            <Pressable
              key={activity}
              onPress={() => toggleActivity(activity)}
              className={`mb-2.5 mr-2 rounded-full border px-3.5 py-2.5 ${
                selected
                  ? "border-[#1A3A5C] bg-[#1A3A5C]"
                  : "border-[#E2E5E9] bg-white"
              }`}
            >
              <Text
                className={`text-[13px] ${
                  selected ? "font-medium text-white" : "text-[#16202A]"
                }`}
              >
                {activity}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </>
  );

  return (
    <SafeAreaView edges={["bottom"]} className="flex-1 bg-[#F4F6F8]">
      {renderHeader()}

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 20,
          paddingBottom: 24,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {currentStep === 1 && renderStepOne()}
        {currentStep === 2 && renderStepTwo()}
        {currentStep === 3 && renderStepThree()}
        {currentStep === 4 && renderStepFour()}
        {currentStep === 5 && renderStepFive()}
      </ScrollView>

      <View className="border-t border-[#E2E5E9] bg-[#F4F6F8] px-4 py-4">
        <View className="flex-row items-center justify-between">
          <Pressable onPress={handleSaveDraft} className="px-2 py-3">
            <Text className="text-[14px] font-medium text-[#6B7684]">
              Save draft
            </Text>
          </Pressable>

          <Pressable
            onPress={handleContinue}
            className="min-w-[125px] items-center rounded-xl bg-[#1A3A5C] px-5 py-3.5"
          >
            <Text className="text-[14px] font-semibold text-white">
              {currentStep === 5 ? "Review" : "Continue"}
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
