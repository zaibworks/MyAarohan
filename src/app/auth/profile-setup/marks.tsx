import { router } from "expo-router";
import {
  ArrowLeft,
  ChevronRight,
  Plus,
  Trash2,
} from "lucide-react-native";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const primary = "#1A3A5C";

type Subject = {
  id: number;
  name: string;
  score: string;
  maxScore: string;
};

export default function MarksProfile() {
  const [overallScore, setOverallScore] = useState("");

  const [subjects, setSubjects] = useState<Subject[]>([
    {
      id: 1,
      name: "",
      score: "",
      maxScore: "100",
    },
  ]);

  const addSubject = () => {
    const newId =
      subjects.length > 0
        ? Math.max(...subjects.map((subject) => subject.id)) + 1
        : 1;

    setSubjects((current) => [
      ...current,
      {
        id: newId,
        name: "",
        score: "",
        maxScore: "100",
      },
    ]);
  };

  const removeSubject = (id: number) => {
    if (subjects.length === 1) {
      return;
    }

    setSubjects((current) =>
      current.filter((subject) => subject.id !== id),
    );
  };

  const updateSubject = (
    id: number,
    field: keyof Subject,
    value: string,
  ) => {
    setSubjects((current) =>
      current.map((subject) =>
        subject.id === id
          ? {
              ...subject,
              [field]:
                field === "score" || field === "maxScore"
                  ? value
                  : value,
            }
          : subject,
      ),
    );
  };

  const handleContinue = () => {
    if (!overallScore.trim()) {
      return;
    }

    const hasIncompleteSubject = subjects.some(
      (subject) =>
        !subject.name.trim() ||
        !subject.score.trim() ||
        !subject.maxScore.trim(),
    );

    if (hasIncompleteSubject) {
      return;
    }

    router.push("/auth/profile-setup/learning");
  };

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      className="flex-1 bg-[#F4F6F8]"
    >
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
            <ArrowLeft
              size={21}
              color="#16202A"
              strokeWidth={2}
            />
          </Pressable>

          <View className="flex-1">
            <Text className="text-[16px] font-bold text-[#16202A]">
              Complete your profile
            </Text>

            <Text className="mt-0.5 text-[11px] text-[#6B7684]">
              Step 5 of 8 · Your marks
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
              62% complete
            </Text>
          </View>

          <View className="h-[5px] overflow-hidden rounded-full bg-[#E2E5E9]">
            <View
              className="h-full rounded-full"
              style={{
                width: "62.5%",
                backgroundColor: primary,
              }}
            />
          </View>
        </View>

        {/* Heading */}
        <View className="mb-7">
          <Text className="text-[25px] font-extrabold tracking-[-0.4px] text-[#16202A]">
            Your marks
          </Text>

          <Text className="mt-2 max-w-[335px] text-[13px] leading-5 text-[#6B7684]">
            Share your recent academic performance so we can better
            understand your strengths.
          </Text>
        </View>

        {/* Overall Result */}
        <View className="mb-7">
          <View className="mb-2 flex-row items-center">
            <Text className="text-[13px] font-semibold text-[#16202A]">
              Overall score
            </Text>
          </View>

          <View className="flex-row items-center rounded-[11px] border border-[#E2E5E9] bg-white px-3">
            <TextInput
              value={overallScore}
              onChangeText={(text) =>
                setOverallScore(text)
              }
              placeholder="85%, 8.5 CGPA, or 425/500"
              placeholderTextColor="#9AA4AF"
              className="h-12 flex-1 text-[14px] text-[#16202A]"
            />
          </View>

          <Text className="mt-2 text-[11px] leading-4 text-[#9AA4AF]">
            Enter your overall percentage or equivalent result.
          </Text>
        </View>

        {/* Subjects Heading */}
        <View className="mb-3 flex-row items-center justify-between">
          <View>
            <Text className="text-[15px] font-bold text-[#16202A]">
              Subject scores
            </Text>

            <Text className="mt-1 text-[11px] text-[#6B7684]">
              Add the subjects you want us to consider.
            </Text>
          </View>
        </View>

        {/* Subjects */}
        {subjects.map((subject, index) => (
          <View
            key={subject.id}
            className="mb-4 rounded-[12px] border border-[#E2E5E9] bg-white p-3.5"
          >
            {/* Subject Header */}
            <View className="mb-3 flex-row items-center justify-between">
              <Text className="text-[12px] font-bold text-[#1A3A5C]">
                Subject {index + 1}
              </Text>

              {subjects.length > 1 && (
                <Pressable
                  onPress={() => removeSubject(subject.id)}
                  className="h-8 w-8 items-center justify-center rounded-[9px] active:bg-[#FDECEC]"
                >
                  <Trash2
                    size={16}
                    color="#B33A3A"
                    strokeWidth={1.9}
                  />
                </Pressable>
              )}
            </View>

            {/* Subject Name */}
            <Text className="mb-2 text-[12px] font-semibold text-[#16202A]">
              Subject
            </Text>

            <TextInput
              value={subject.name}
              onChangeText={(text) =>
                updateSubject(
                  subject.id,
                  "name",
                  text,
                )
              }
              placeholder="e.g. Mathematics"
              placeholderTextColor="#9AA4AF"
              className="mb-4 h-12 rounded-[11px] border border-[#E2E5E9] bg-white px-3.5 text-[14px] text-[#16202A]"
            />

            {/* Score */}
            <View className="flex-row">
              <View className="mr-2 flex-1">
                <Text className="mb-2 text-[12px] font-semibold text-[#16202A]">
                  Score
                </Text>

                <TextInput
                  value={subject.score}
                  onChangeText={(text) =>
                    updateSubject(
                      subject.id,
                      "score",
                      text,
                    )
                  }
                  placeholder="e.g. 82"
                  placeholderTextColor="#9AA4AF"
                  keyboardType="number-pad"
                  className="h-12 rounded-[11px] border border-[#E2E5E9] bg-white px-3.5 text-[14px] text-[#16202A]"
                />
              </View>

              <View className="ml-2 flex-1">
                <Text className="mb-2 text-[12px] font-semibold text-[#16202A]">
                  Maximum marks
                </Text>

                <TextInput
                  value={subject.maxScore}
                  onChangeText={(text) =>
                    updateSubject(
                      subject.id,
                      "maxScore",
                      text,
                    )
                  }
                  placeholder="e.g. 100"
                  placeholderTextColor="#9AA4AF"
                  keyboardType="number-pad"
                  className="h-12 rounded-[11px] border border-[#E2E5E9] bg-white px-3.5 text-[14px] text-[#16202A]"
                />
              </View>
            </View>
          </View>
        ))}

        {/* Add Subject */}
        <Pressable
          onPress={addSubject}
          className="mb-5 h-[46px] flex-row items-center justify-center rounded-[11px] border border-dashed border-[#B9C3CD] bg-white active:bg-[#F8FAFB]"
        >
          <Plus
            size={17}
            color={primary}
            strokeWidth={2}
          />

          <Text className="ml-2 text-[13px] font-semibold text-[#1A3A5C]">
            Add another subject
          </Text>
        </Pressable>

        {/* Info */}
        <View className="rounded-[11px] bg-[#EAF1F7] px-3.5 py-3">
          <Text className="text-[11px] leading-4 text-[#6B7684]">
            Your academic information helps us understand your current
            strengths and identify suitable learning and career pathways.
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

          <ChevronRight
            size={17}
            color="#FFFFFF"
            strokeWidth={2.5}
          />
        </Pressable>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}