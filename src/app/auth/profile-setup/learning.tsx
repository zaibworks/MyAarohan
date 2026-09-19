import { useRouter } from "expo-router";
import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Clock3,
  GraduationCap,
  Wifi,
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const streamOptions = [
  "Science",
  "Commerce",
  "Arts / Humanities",
  "Vocational",
  "Not decided yet",
];

const learningStyles = [
  "Visual",
  "Reading / Writing",
  "Auditory",
  "Hands-on",
  "A mix of different styles",
];

const studyHours = [
  "Less than 1 hour",
  "1–2 hours",
  "2–3 hours",
  "3–4 hours",
  "More than 4 hours",
];

const internetOptions = [
  "Good access",
  "Limited access",
  "Occasional access",
  "No regular access",
];

const Learning = () => {
  const router = useRouter();

  const [stream, setStream] = useState("");
  const [learningStyle, setLearningStyle] = useState("");
  const [hours, setHours] = useState("");
  const [internet, setInternet] = useState("");

  const [openPicker, setOpenPicker] = useState<
    "stream" | "learningStyle" | "hours" | "internet" | null
  >(null);

  const getOptions = () => {
    switch (openPicker) {
      case "stream":
        return streamOptions;
      case "learningStyle":
        return learningStyles;
      case "hours":
        return studyHours;
      case "internet":
        return internetOptions;
      default:
        return [];
    }
  };

  const getValue = () => {
    switch (openPicker) {
      case "stream":
        return stream;
      case "learningStyle":
        return learningStyle;
      case "hours":
        return hours;
      case "internet":
        return internet;
      default:
        return "";
    }
  };

  const handleSelect = (value: string) => {
    switch (openPicker) {
      case "stream":
        setStream(value);
        break;
      case "learningStyle":
        setLearningStyle(value);
        break;
      case "hours":
        setHours(value);
        break;
      case "internet":
        setInternet(value);
        break;
    }

    setOpenPicker(null);
  };

  const isComplete =
    stream && learningStyle && hours && internet;

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
              Step 6 of 8 · How you learn
            </Text>
          </View>

          <Text className="text-[11px] font-bold text-[#1A3A5C]">
            75%
          </Text>
        </View>

        {/* Progress */}
        <View className="mt-3 h-[4px] overflow-hidden rounded-full bg-[#E2E5E9]">
          <View className="h-full w-[75%] rounded-full bg-[#1A3A5C]" />
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
          How do you learn?
        </Text>

        <Text className="mt-2 max-w-[330px] text-[12px] leading-[18px] text-[#6B7684]">
          Tell us about your academic direction and the way you prefer to
          learn and study.
        </Text>

        {/* Stream */}
        <View className="mt-7">
          <View className="mb-2 flex-row items-center">
            <View className="mr-2 h-[32px] w-[32px] items-center justify-center rounded-[10px] bg-[#EAF1F7]">
              <GraduationCap size={17} color="#1A3A5C" strokeWidth={2} />
            </View>

            <View>
              <Text className="text-[13px] font-bold text-[#16202A]">
                Academic stream
              </Text>
              <Text className="text-[10px] text-[#9AA4AF]">
                Required
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => setOpenPicker("stream")}
            className="min-h-[50px] flex-row items-center rounded-xl border border-[#E2E5E9] bg-white px-3.5 active:opacity-80"
          >
            <Text
              className={`flex-1 text-[13px] ${
                stream ? "text-[#16202A]" : "text-[#9AA4AF]"
              }`}
            >
              {stream || "Select your stream"}
            </Text>

            <ChevronDown size={17} color="#6B7684" />
          </Pressable>
        </View>

        {/* Learning style */}
        <View className="mt-6">
          <View className="mb-2 flex-row items-center">
            <View className="mr-2 h-[32px] w-[32px] items-center justify-center rounded-[10px] bg-[#EAF1F7]">
              <BookOpen size={17} color="#1A3A5C" strokeWidth={2} />
            </View>

            <View>
              <Text className="text-[13px] font-bold text-[#16202A]">
                Learning style
              </Text>
              <Text className="text-[10px] text-[#9AA4AF]">
                Required
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => setOpenPicker("learningStyle")}
            className="min-h-[50px] flex-row items-center rounded-xl border border-[#E2E5E9] bg-white px-3.5 active:opacity-80"
          >
            <Text
              className={`flex-1 text-[13px] ${
                learningStyle ? "text-[#16202A]" : "text-[#9AA4AF]"
              }`}
            >
              {learningStyle || "Select your learning style"}
            </Text>

            <ChevronDown size={17} color="#6B7684" />
          </Pressable>
        </View>

        {/* Study hours */}
        <View className="mt-6">
          <View className="mb-2 flex-row items-center">
            <View className="mr-2 h-[32px] w-[32px] items-center justify-center rounded-[10px] bg-[#EAF1F7]">
              <Clock3 size={17} color="#1A3A5C" strokeWidth={2} />
            </View>

            <View>
              <Text className="text-[13px] font-bold text-[#16202A]">
                Study time
              </Text>
              <Text className="text-[10px] text-[#9AA4AF]">
                Required
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => setOpenPicker("hours")}
            className="min-h-[50px] flex-row items-center rounded-xl border border-[#E2E5E9] bg-white px-3.5 active:opacity-80"
          >
            <Text
              className={`flex-1 text-[13px] ${
                hours ? "text-[#16202A]" : "text-[#9AA4AF]"
              }`}
            >
              {hours || "How much do you study daily?"}
            </Text>

            <ChevronDown size={17} color="#6B7684" />
          </Pressable>
        </View>

        {/* Internet */}
        <View className="mt-6">
          <View className="mb-2 flex-row items-center">
            <View className="mr-2 h-[32px] w-[32px] items-center justify-center rounded-[10px] bg-[#EAF1F7]">
              <Wifi size={17} color="#1A3A5C" strokeWidth={2} />
            </View>

            <View>
              <Text className="text-[13px] font-bold text-[#16202A]">
                Internet access
              </Text>
              <Text className="text-[10px] text-[#9AA4AF]">
                Required
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => setOpenPicker("internet")}
            className="min-h-[50px] flex-row items-center rounded-xl border border-[#E2E5E9] bg-white px-3.5 active:opacity-80"
          >
            <Text
              className={`flex-1 text-[13px] ${
                internet ? "text-[#16202A]" : "text-[#9AA4AF]"
              }`}
            >
              {internet || "Select your internet access"}
            </Text>

            <ChevronDown size={17} color="#6B7684" />
          </Pressable>
        </View>
      </ScrollView>

      {/* Bottom action */}
      <View className="border-t border-[#E2E5E9] bg-white px-[22px] pb-3 pt-3">
        <Pressable
          disabled={!isComplete}
          onPress={() => router.push("/auth/profile-setup/world")}
          className={`h-[52px] w-full flex-row items-center justify-center rounded-xl ${
            isComplete ? "bg-[#1A3A5C]" : "bg-[#D6DBE1]"
          }`}
        >
          <Text
            className={`mr-2 text-[14px] font-bold ${
              isComplete ? "text-white" : "text-[#9AA4AF]"
            }`}
          >
            Continue
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
                <Text className="text-[18px] text-[#6B7684]">×</Text>
              </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {getOptions().map((option) => {
                const selected = getValue() === option;

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
                      className={`flex-1 text-[13px] font-medium ${
                        selected
                          ? "font-bold text-[#1A3A5C]"
                          : "text-[#16202A]"
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
    </SafeAreaView>
  );
};

export default Learning;