import { useRouter } from "expo-router";
import {
  ArrowLeft,
  BriefcaseBusiness,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  UsersRound,
} from "lucide-react-native";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform

} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const extracurricularOptions = [
  "Cricket",
  "Football",
  "Badminton",
  "Basketball",
  "Volleyball",
  "Athletics",
  "Chess",
  "Swimming",
  "Dancing",
  "Singing",
  "Music",
  "Drawing",
  "Painting",
  "Photography",
  "Theatre",
  "Debate",
  "Public Speaking",
  "Writing",
  "Reading",
  "Coding",
  "Robotics",
  "Gaming",
  "Science Club",
  "Math Club",
  "Literature Club",
  "School Club",
  "Volunteering",
  "Social Work",
  "Leadership",
  "Entrepreneurship",
  "Gardening",
  "Cooking",
  "Crafts",
  "Other",
];

const workOptions = [
  "Office / On-site",
  "Remote",
  "Hybrid",
  "Outdoors / Field work",
  "Not sure yet",
];

const firstGenerationOptions = [
  "Yes",
  "No",
  "Not sure",
];

const educationOptions = [
  "No formal schooling",
  "Primary school",
  "Secondary school",
  "Higher secondary",
  "Graduate",
  "Postgraduate",
  "Doctorate",
  "Prefer not to say",
];

type PickerType =
  | "work"
  | "firstGeneration"
  | "fatherEducation"
  | "motherEducation"
  | null;

const World = () => {
  const router = useRouter();

  const [workPreference, setWorkPreference] = useState("");
const [extracurriculars, setExtracurriculars] = useState<string[]>([]);
const [activitySearch, setActivitySearch] = useState("");
const [activityPickerOpen, setActivityPickerOpen] = useState(false);
  const [firstGeneration, setFirstGeneration] = useState("");
  const [fatherEducation, setFatherEducation] = useState("");
  const [motherEducation, setMotherEducation] = useState("");

  const [openPicker, setOpenPicker] = useState<PickerType>(null);

  const getOptions = () => {
    switch (openPicker) {
      case "work":
        return workOptions;

      case "firstGeneration":
        return firstGenerationOptions;

      case "fatherEducation":
      case "motherEducation":
        return educationOptions;

      default:
        return [];
    }
  };

  const getCurrentValue = () => {
    switch (openPicker) {
      case "work":
        return workPreference;

      case "firstGeneration":
        return firstGeneration;

      case "fatherEducation":
        return fatherEducation;

      case "motherEducation":
        return motherEducation;

      default:
        return "";
    }
  };

  const handleSelect = (value: string) => {
    switch (openPicker) {
      case "work":
        setWorkPreference(value);
        break;

      case "firstGeneration":
        setFirstGeneration(value);
        break;

      case "fatherEducation":
        setFatherEducation(value);
        break;

      case "motherEducation":
        setMotherEducation(value);
        break;
    }

    setOpenPicker(null);
  };

  const isComplete =
    workPreference &&
    extracurriculars.length > 0 &&
    firstGeneration &&
    fatherEducation &&
    motherEducation;

    const filteredActivities = extracurricularOptions.filter((activity) =>
  activity.toLowerCase().includes(activitySearch.toLowerCase()),
);

  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-[#F4F6F8]">
      {/* Header */}
      <View className="border-b border-[#E2E5E9] bg-white px-[22px] pb-4 pt-3">
        <View className="flex-row items-center">
          <Pressable
            onPress={() => router.back()}
            className="mr-3 h-[38px] w-[38px] items-center justify-center rounded-xl bg-[#F4F6F8] active:opacity-70"
          >
            <ArrowLeft size={19} color="#1A3A5C" strokeWidth={2.2} />
          </Pressable>

          <View className="flex-1">
            <Text className="text-[16px] font-extrabold text-[#16202A]">
              Complete your profile
            </Text>

            <Text className="mt-0.5 text-[11px] font-medium text-[#6B7684]">
              Step 7 of 8 · Your world
            </Text>
          </View>

          <Text className="text-[11px] font-bold text-[#1A3A5C]">
            87.5%
          </Text>
        </View>

        {/* Progress */}
        <View className="mt-3 h-[4px] overflow-hidden rounded-full bg-[#E2E5E9]">
          <View className="h-full w-[87.5%] rounded-full bg-[#1A3A5C]" />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 22,
          paddingTop: 24,
          paddingBottom: 30,
        }}
      >
        <Text className="text-[23px] font-extrabold tracking-[-0.4px] text-[#16202A]">
          Tell us about your world
        </Text>

        <Text className="mt-2 max-w-[335px] text-[12px] leading-[18px] text-[#6B7684]">
          A little more about your interests, environment and the people
          around you helps us understand your career journey better.
        </Text>

        {/* Work preference */}
        <View className="mt-7">
          <View className="mb-2 flex-row items-center">
            <View className="mr-2 h-[32px] w-[32px] items-center justify-center rounded-[10px] bg-[#EAF1F7]">
              <BriefcaseBusiness
                size={17}
                color="#1A3A5C"
                strokeWidth={2}
              />
            </View>

            <View>
              <Text className="text-[13px] font-bold text-[#16202A]">
                Work preference
              </Text>

              <Text className="text-[10px] text-[#9AA4AF]">
                Required
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => setOpenPicker("work")}
            className="min-h-[50px] flex-row items-center rounded-xl border border-[#E2E5E9] bg-white px-3.5 active:opacity-80"
          >
            <Text
              className={`flex-1 text-[13px] ${
                workPreference ? "text-[#16202A]" : "text-[#9AA4AF]"
              }`}
            >
              {workPreference || "What kind of work environment do you prefer?"}
            </Text>

            <ChevronDown size={17} color="#6B7684" />
          </Pressable>
        </View>

        {/* Extracurricular activities */}
       <View className="mt-6">
  <View className="mb-2">
    <Text className="text-[13px] font-bold text-[#16202A]">
      Extracurricular activities
    </Text>

    <Text className="mt-0.5 text-[10px] text-[#9AA4AF]">
      Required · Select all that apply
    </Text>
  </View>

  {/* Selected activities */}
  {extracurriculars.length > 0 && (
    <View className="mb-2.5 flex-row flex-wrap">
      {extracurriculars.map((activity) => (
        <Pressable
          key={activity}
          onPress={() =>
            setExtracurriculars((current) =>
              current.filter((item) => item !== activity),
            )
          }
          className="mb-2 mr-2 flex-row items-center rounded-full bg-[#EAF1F7] px-3 py-1.5"
        >
          <Text className="text-[11px] font-semibold text-[#1A3A5C]">
            {activity}
          </Text>

          <Text className="ml-1.5 text-[12px] font-bold text-[#6B7684]">
            ×
          </Text>
        </Pressable>
      ))}
    </View>
  )}

  {/* Picker trigger */}
  <Pressable
    onPress={() => setActivityPickerOpen(true)}
    className="min-h-[50px] flex-row items-center rounded-xl border border-[#E2E5E9] bg-white px-3.5 active:opacity-80"
  >
    <Text
      className={`flex-1 text-[13px] ${
        extracurriculars.length
          ? "text-[#16202A]"
          : "text-[#9AA4AF]"
      }`}
    >
      {extracurriculars.length
        ? `${extracurriculars.length} activities selected`
        : "Select your activities"}
    </Text>

    <ChevronDown size={17} color="#6B7684" />
  </Pressable>
</View>

{/* ActivitesPicker  */}


        {/* First generation schooling */}
        <View className="mt-6">
          <View className="mb-2 flex-row items-center">
            <View className="mr-2 h-[32px] w-[32px] items-center justify-center rounded-[10px] bg-[#EAF1F7]">
              <GraduationCap
                size={17}
                color="#1A3A5C"
                strokeWidth={2}
              />
            </View>

            <View>
              <Text className="text-[13px] font-bold text-[#16202A]">
                First-generation schooling
              </Text>

              <Text className="text-[10px] text-[#9AA4AF]">
                Required
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => setOpenPicker("firstGeneration")}
            className="min-h-[50px] flex-row items-center rounded-xl border border-[#E2E5E9] bg-white px-3.5 active:opacity-80"
          >
            <Text
              className={`flex-1 text-[13px] ${
                firstGeneration ? "text-[#16202A]" : "text-[#9AA4AF]"
              }`}
            >
              {firstGeneration || "Is yours the first generation to attend school?"}
            </Text>

            <ChevronDown size={17} color="#6B7684" />
          </Pressable>
        </View>

        {/* Parents education */}
        <View className="mt-6">
          <View className="mb-2 flex-row items-center">
            <View className="mr-2 h-[32px] w-[32px] items-center justify-center rounded-[10px] bg-[#EAF1F7]">
              <UsersRound
                size={17}
                color="#1A3A5C"
                strokeWidth={2}
              />
            </View>

            <View>
              <Text className="text-[13px] font-bold text-[#16202A]">
                Parents' education
              </Text>

              <Text className="text-[10px] text-[#9AA4AF]">
                Required
              </Text>
            </View>
          </View>

          {/* Father */}
          <Text className="mb-2 text-[11.5px] font-semibold text-[#6B7684]">
            Father's education
          </Text>

          <Pressable
            onPress={() => setOpenPicker("fatherEducation")}
            className="mb-4 min-h-[50px] flex-row items-center rounded-xl border border-[#E2E5E9] bg-white px-3.5 active:opacity-80"
          >
            <Text
              className={`flex-1 text-[13px] ${
                fatherEducation ? "text-[#16202A]" : "text-[#9AA4AF]"
              }`}
            >
              {fatherEducation || "Select education level"}
            </Text>

            <ChevronDown size={17} color="#6B7684" />
          </Pressable>

          {/* Mother */}
          <Text className="mb-2 text-[11.5px] font-semibold text-[#6B7684]">
            Mother's education
          </Text>

          <Pressable
            onPress={() => setOpenPicker("motherEducation")}
            className="min-h-[50px] flex-row items-center rounded-xl border border-[#E2E5E9] bg-white px-3.5 active:opacity-80"
          >
            <Text
              className={`flex-1 text-[13px] ${
                motherEducation ? "text-[#16202A]" : "text-[#9AA4AF]"
              }`}
            >
              {motherEducation || "Select education level"}
            </Text>

            <ChevronDown size={17} color="#6B7684" />
          </Pressable>
        </View>
      </ScrollView>

      {/* Bottom action */}
      <View className="border-t border-[#E2E5E9] bg-white px-[22px] pb-3 pt-3">
        <Pressable
          disabled={!isComplete}
          onPress={() => router.push("/auth/profile-setup/review")}
          className={`h-[52px] w-full flex-row items-center justify-center rounded-xl ${
            isComplete ? "bg-[#1A3A5C]" : "bg-[#D6DBE1]"
          }`}
        >
          <Text
            className={`mr-2 text-[14px] font-bold ${
              isComplete ? "text-white" : "text-[#9AA4AF]"
            }`}
          >
            Review profile
          </Text>

          <ChevronRight
            size={17}
            color={isComplete ? "#FFFFFF" : "#9AA4AF"}
            strokeWidth={2.5}
          />
        </Pressable>
      </View>

      {/* Picker */}
      {openPicker && (
        <View className="absolute inset-0 justify-end bg-black/30">
          <Pressable
            onPress={() => setOpenPicker(null)}
            className="flex-1"
          />

          <View className="max-h-[65%] rounded-t-[24px] bg-white px-5 pb-7 pt-5">
            <View className="mb-4 flex-row items-center justify-between">
              <View>
                <Text className="text-[17px] font-extrabold text-[#16202A]">
                  Select an option
                </Text>

                <Text className="mt-1 text-[11px] text-[#9AA4AF]">
                  Choose one option to continue
                </Text>
              </View>

              <Pressable
                onPress={() => setOpenPicker(null)}
                className="h-[34px] w-[34px] items-center justify-center rounded-full bg-[#F4F6F8]"
              >
                <Text className="text-[18px] text-[#6B7684]">
                  ×
                </Text>
              </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {getOptions().map((option) => {
                const selected = getCurrentValue() === option;

                return (
                  <Pressable
                    key={option}
                    onPress={() => handleSelect(option)}
                    className={`mb-2 min-h-[48px] flex-row items-center rounded-xl border px-3.5 ${
                      selected
                        ? "border-[#1A3A5C] bg-[#EAF1F7]"
                        : "border-[#E2E5E9] bg-white"
                    }`}
                  >
                    <Text
                      className={`flex-1 text-[13px] ${
                        selected
                          ? "font-bold text-[#1A3A5C]"
                          : "font-medium text-[#16202A]"
                      }`}
                    >
                      {option}
                    </Text>

                    {selected && (
                      <View className="h-[20px] w-[20px] items-center justify-center rounded-full bg-[#1A3A5C]">
                        <Text className="text-[12px] font-bold text-white">
                          ✓
                        </Text>
                      </View>
                    )}
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        </View>
      )}

      {activityPickerOpen && (
  <View className="absolute inset-0 justify-end bg-black/30">
    <Pressable
      onPress={() => setActivityPickerOpen(false)}
      className="flex-1"
    />

    <View className="max-h-[72%] rounded-t-[24px] bg-white px-5 pb-7 pt-5">
      {/* Header */}
      <View className="mb-4 flex-row items-center justify-between">
        <View>
          <Text className="text-[17px] font-extrabold text-[#16202A]">
            Activities
          </Text>

          <Text className="mt-1 text-[11px] text-[#9AA4AF]">
            Select everything you enjoy or participate in
          </Text>
        </View>

        <Pressable
          onPress={() => setActivityPickerOpen(false)}
          className="h-[34px] w-[34px] items-center justify-center rounded-full bg-[#F4F6F8]"
        >
          <Text className="text-[18px] text-[#6B7684]">
            ×
          </Text>
        </Pressable>
      </View>

      {/* Search */}
      <View className="mb-4 h-[46px] flex-row items-center rounded-xl border border-[#E2E5E9] bg-[#F4F6F8] px-3">
        <Text className="mr-2 text-[16px] text-[#9AA4AF]">
          🔍
        </Text>

        <TextInput
          value={activitySearch}
          onChangeText={setActivitySearch}
          placeholder="Search activities..."
          placeholderTextColor="#9AA4AF"
          className="flex-1 text-[13px] text-[#16202A]"
        />
      </View>

      {/* Options */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-row flex-wrap">
          {filteredActivities.map((activity) => {
            const selected = extracurriculars.includes(activity);

            return (
              <Pressable
                key={activity}
                onPress={() => {
                  setExtracurriculars((current) =>
                    selected
                      ? current.filter((item) => item !== activity)
                      : [...current, activity],
                  );
                }}
                className={`mb-2 mr-2 rounded-full border px-3 py-2 ${
                  selected
                    ? "border-[#1A3A5C] bg-[#EAF1F7]"
                    : "border-[#E2E5E9] bg-white"
                }`}
              >
                <Text
                  className={`text-[11px] ${
                    selected
                      ? "font-bold text-[#1A3A5C]"
                      : "font-medium text-[#6B7684]"
                  }`}
                >
                  {activity}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {filteredActivities.length === 0 && (
          <View className="items-center py-8">
            <Text className="text-[12px] text-[#9AA4AF]">
              No activities found
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Done */}
      <Pressable
        onPress={() => setActivityPickerOpen(false)}
        className="mt-4 h-[50px] items-center justify-center rounded-xl bg-[#1A3A5C]"
      >
        <Text className="text-[13px] font-bold text-white">
          Done
        </Text>
      </Pressable>
    </View>
  </View>
)}
    </SafeAreaView>
  );
};

export default World;