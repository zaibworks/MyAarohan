import { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";
import {
  ArrowLeft,
  BookOpen,
  Plus,
  Trash2,
  X,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const primary = "#1A3A5C";

type Subject = {
  id: number;
  name: string;
  score: number;
  maxScore: number;
};

export default function AcademicScreen() {
  const [overallScore, setOverallScore] = useState("");

  const [subjects, setSubjects] = useState<Subject[]>([]);

  const [showSubjectSheet, setShowSubjectSheet] = useState(false);

  const [subjectName, setSubjectName] = useState("");
  const [subjectScore, setSubjectScore] = useState("");
  const [subjectMaxScore, setSubjectMaxScore] = useState("100");

  const [scoreError, setScoreError] = useState("");

  const resetSubjectForm = () => {
    setSubjectName("");
    setSubjectScore("");
    setSubjectMaxScore("100");
    setScoreError("");
  };

  const closeSubjectSheet = () => {
    setShowSubjectSheet(false);
    resetSubjectForm();
  };

  const openSubjectSheet = () => {
    resetSubjectForm();
    setShowSubjectSheet(true);
  };

  const handleScoreChange = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    setSubjectScore(numericValue);
    setScoreError("");

    const score = Number(numericValue);
    const maxScore = Number(subjectMaxScore);

    if (
      numericValue &&
      subjectMaxScore &&
      score > maxScore
    ) {
      setScoreError(
        "Score can't be greater than maximum score."
      );
    }
  };

  const handleMaxScoreChange = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    setSubjectMaxScore(numericValue);
    setScoreError("");

    const score = Number(subjectScore);
    const maxScore = Number(numericValue);

    if (
      subjectScore &&
      numericValue &&
      score > maxScore
    ) {
      setScoreError(
        "Score can't be greater than maximum score."
      );
    }
  };

  const saveSubject = () => {
    const score = Number(subjectScore);
    const maxScore = Number(subjectMaxScore);

    if (!subjectName.trim()) {
      return;
    }

    if (!subjectScore || !subjectMaxScore) {
      return;
    }

    if (score > maxScore) {
      setScoreError(
        "Score can't be greater than maximum score."
      );
      return;
    }

    const newSubject: Subject = {
      id: Date.now(),
      name: subjectName.trim(),
      score,
      maxScore,
    };

    setSubjects((prev) => [...prev, newSubject]);

    closeSubjectSheet();
  };

  const deleteSubject = (id: number) => {
    setSubjects((prev) =>
      prev.filter((subject) => subject.id !== id)
    );
  };

  const handleSaveDraft = () => {
    // Draft persistence will be connected with shared profile state.
  };

  const handleContinue = () => {
    router.push("/student/profile-setup/lifestyle");
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
            <ArrowLeft
              size={21}
              color="#16202A"
              strokeWidth={2}
            />
          </Pressable>

          <Text className="text-[16px] font-semibold text-[#16202A]">
            Complete your profile
          </Text>
        </View>
      </View>

      {/* Scrollable Content */}
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
              Step 3 of 5
            </Text>

            <Text className="text-[13px] font-semibold text-[#1A3A5C]">
              67%
            </Text>
          </View>

          <View className="h-1.5 overflow-hidden rounded-full bg-[#E2E5E9]">
            <View
              className="h-full rounded-full"
              style={{
                width: "67%",
                backgroundColor: primary,
              }}
            />
          </View>
        </View>

        {/* Heading */}
        <View className="mb-6">
          <Text className="text-[24px] font-bold text-[#16202A]">
            Academic history
          </Text>

          <Text className="mt-1.5 text-[14px] leading-5 text-[#6B7684]">
            Enter the score format used by your school board. For
            example: 85%, 8.5 CGPA, or 425/500.
          </Text>
        </View>

        {/* Overall Score */}
        <View className="mb-7">
          <Text className="mb-2 text-[13px] font-semibold text-[#16202A]">
            Overall score
          </Text>

          <TextInput
            value={overallScore}
            onChangeText={setOverallScore}
            placeholder="85%, 8.5 CGPA, or 425/500"
            placeholderTextColor="#9AA4AF"
            className="h-12 rounded-[10px] border border-[#E2E5E9] bg-white px-3.5 text-[14px] text-[#16202A]"
          />
        </View>

        {/* Subject Heading */}
        <View className="mb-3">
          <Text className="text-[17px] font-bold text-[#16202A]">
            Subject wise performance
          </Text>

          <Text className="mt-1 text-[13px] leading-5 text-[#6B7684]">
            Add individual subject marks if you want to provide
            more detail.
          </Text>
        </View>

        {/* Add Subject */}
        <Pressable
          onPress={openSubjectSheet}
          className="mb-4 flex-row items-center justify-center rounded-[10px] border border-dashed border-[#1A3A5C] bg-[#EAF1F7] py-3.5"
        >
          <Plus
            size={19}
            color={primary}
            strokeWidth={2.2}
          />

          <Text className="ml-2 text-[14px] font-semibold text-[#1A3A5C]">
            Add subject
          </Text>
        </Pressable>

        {/* Empty State */}
        {subjects.length === 0 ? (
          <View className="items-center rounded-[12px] border border-[#E2E5E9] bg-white px-5 py-10">
            <View className="mb-3 h-12 w-12 items-center justify-center rounded-full bg-[#EAF1F7]">
              <BookOpen
                size={23}
                color={primary}
              />
            </View>

            <Text className="text-[15px] font-semibold text-[#16202A]">
              No subjects added yet.
            </Text>

            <Text className="mt-1 text-center text-[13px] leading-5 text-[#9AA4AF]">
              You can continue and add marks later.
            </Text>
          </View>
        ) : (
          <View className="gap-3">
            {subjects.map((subject) => (
              <View
                key={subject.id}
                className="rounded-[12px] border border-[#E2E5E9] bg-white p-4"
              >
                <View className="flex-row items-center">
                  {/* Subject Icon */}
                  <View className="mr-3 h-10 w-10 items-center justify-center rounded-[10px] bg-[#EAF1F7]">
                    <BookOpen
                      size={19}
                      color={primary}
                    />
                  </View>

                  {/* Subject Details */}
                  <View className="flex-1">
                    <Text className="text-[14px] font-semibold text-[#16202A]">
                      {subject.name}
                    </Text>

                    <Text className="mt-1 text-[13px] text-[#6B7684]">
                      Score: {subject.score}/{subject.maxScore}
                    </Text>
                  </View>

                  {/* Delete */}
                  <Pressable
                    onPress={() =>
                      deleteSubject(subject.id)
                    }
                    className="h-9 w-9 items-center justify-center rounded-[9px] bg-[#FDECEC]"
                  >
                    <Trash2
                      size={16}
                      color="#B33A3A"
                    />
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Fixed Footer */}
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

      {/* Add Subject Bottom Sheet */}
      <Modal
        visible={showSubjectSheet}
        transparent
        animationType="slide"
        onRequestClose={closeSubjectSheet}
      >
        <View className="flex-1 justify-end bg-black/30">
          <View className="max-h-[75%] rounded-t-[24px] bg-white px-4 pb-8 pt-5">
            {/* Sheet Header */}
            <View className="mb-5 flex-row items-center justify-between">
              <Text className="text-[18px] font-bold text-[#16202A]">
                Add subject
              </Text>

              <Pressable
                onPress={closeSubjectSheet}
                className="h-9 w-9 items-center justify-center rounded-full bg-[#F4F6F8]"
              >
                <X
                  size={18}
                  color="#6B7684"
                />
              </Pressable>
            </View>

            <ScrollView
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 12,
              }}
            >
              {/* Subject Name */}
              <View className="mb-5">
                <Text className="mb-2 text-[13px] font-semibold text-[#16202A]">
                  Subject
                </Text>

                <TextInput
                  value={subjectName}
                  onChangeText={setSubjectName}
                  placeholder="e.g. Mathematics"
                  placeholderTextColor="#9AA4AF"
                  className="h-12 rounded-[10px] border border-[#E2E5E9] bg-white px-3.5 text-[14px] text-[#16202A]"
                />
              </View>

              {/* Score / Maximum Score */}
              <View className="mb-2 flex-row gap-3">
                {/* Score */}
                <View className="flex-1">
                  <Text className="mb-2 text-[13px] font-semibold text-[#16202A]">
                    Score
                  </Text>

                  <TextInput
                    value={subjectScore}
                    onChangeText={handleScoreChange}
                    placeholder="0"
                    placeholderTextColor="#9AA4AF"
                    keyboardType="number-pad"
                    className={`h-12 rounded-[10px] border bg-white px-3.5 text-[14px] text-[#16202A] ${
                      scoreError
                        ? "border-[#E74C3C]"
                        : "border-[#E2E5E9]"
                    }`}
                  />
                </View>

                {/* Maximum Score */}
                <View className="flex-1">
                  <Text className="mb-2 text-[13px] font-semibold text-[#16202A]">
                    Maximum score
                  </Text>

                  <TextInput
                    value={subjectMaxScore}
                    onChangeText={handleMaxScoreChange}
                    placeholder="100"
                    placeholderTextColor="#9AA4AF"
                    keyboardType="number-pad"
                    className={`h-12 rounded-[10px] border bg-white px-3.5 text-[14px] text-[#16202A] ${
                      scoreError
                        ? "border-[#E74C3C]"
                        : "border-[#E2E5E9]"
                    }`}
                  />
                </View>
              </View>

              {/* Score Error */}
              {scoreError ? (
                <Text className="mb-5 text-[12px] text-[#E74C3C]">
                  {scoreError}
                </Text>
              ) : (
                <View className="mb-5" />
              )}

              {/* Save Subject */}
              <Pressable
                onPress={saveSubject}
                className="h-12 items-center justify-center rounded-[10px]"
                style={{
                  backgroundColor: primary,
                }}
              >
                <Text className="text-[14px] font-semibold text-white">
                  Save subject
                </Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}