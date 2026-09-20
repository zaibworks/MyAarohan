import { useRouter } from "expo-router";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock3,
  FileText,
  LockKeyhole,
  Save,
} from "lucide-react-native";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const sections = [
  {
    title: "Aptitude",
    subtitle: "Measure your reasoning and problem-solving abilities.",
    questions: "100 Questions",
    duration: "45 Minutes",
    icon: Brain,
    color: "#2563EB",
    background: "#EFF6FF",
    details: [
      "Seven aptitude dimensions",
      "Adaptive difficulty",
      "No negative marking",
      "Questions cannot be skipped",
    ],
  },
  {
    title: "Personality",
    subtitle: "Understand your natural personality preferences.",
    questions: "40 Statements",
    duration: "10 Minutes",
    icon: FileText,
    color: "#1B8354",
    background: "#E6F7EE",
    details: [
      "Based on the OCEAN model",
      "There are no right or wrong answers",
      "Answer honestly based on yourself",
    ],
  },
  {
    title: "Psychometric Interests",
    subtitle: "Discover the areas of work and study that interest you.",
    questions: "110 Questions",
    duration: "30 Minutes",
    icon: CheckCircle2,
    color: "#7C3AED",
    background: "#F3E8FF",
    details: [
      "Based on MPII",
      "There are no right or wrong answers",
      "Used to identify career clusters",
    ],
  },
];

export default function AssessmentInstructions() {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  const handleStart = () => {
    if (!accepted) return;

    router.replace("/student/assessments/test/aptitude");
  };

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      className="flex-1 bg-[#F4F6F8]"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 12,
          paddingBottom: 28,
        }}
      >
        {/* Header */}
        <View className="mb-7">
          <View className="mb-3 h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF1F7]">
            <FileText size={24} color="#1A3A5C" strokeWidth={2.2} />
          </View>

          <Text className="text-[28px] font-bold tracking-[-0.6px] text-[#16202A]">
            Instruction Manual
          </Text>

          <Text className="mt-1.5 text-[15px] font-medium text-[#6B7684]">
            Your Journey of Ascent
          </Text>

          <Text className="mt-3 text-[14px] leading-[21px] text-[#6B7684]">
            Please read these instructions carefully before beginning your
            assessment. Your answers will help build a clearer picture of
            your abilities, personality, and interests.
          </Text>
        </View>

        {/* General Instructions */}
        <View className="mb-5 rounded-2xl border border-[#E2E5E9] bg-white p-4">
          <Text className="mb-4 text-[17px] font-bold text-[#16202A]">
            Before You Begin
          </Text>

          <InstructionRow
            icon={Clock3}
            title="Assessment Duration"
            text="Aptitude: 45 minutes • Personality: 10 minutes • Interests: 30 minutes"
          />

          <InstructionRow
            icon={LockKeyhole}
            title="Fixed Order"
            text="Complete the sections in order. You cannot skip ahead or revisit a submitted section."
          />

          <InstructionRow
            icon={CheckCircle2}
            title="Submitting"
            text="You may submit a section anytime. When the timer expires, the section will be submitted automatically."
          />

          <InstructionRow
            icon={Save}
            title="Auto-Save"
            text="Every answer is saved automatically as soon as you confirm it."
            last
          />
        </View>

        {/* Assessment Sections */}
        <Text className="mb-3 px-1 text-[17px] font-bold text-[#16202A]">
          Your Assessment
        </Text>

        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <View
              key={section.title}
              className="mb-3 rounded-2xl border border-[#E2E5E9] bg-white p-4"
            >
              <View className="flex-row items-start">
                <View
                  className="mr-3 h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: section.background }}
                >
                  <Icon
                    size={21}
                    color={section.color}
                    strokeWidth={2.2}
                  />
                </View>

                <View className="flex-1">
                  <Text className="text-[16px] font-bold text-[#16202A]">
                    {section.title}
                  </Text>

                  <Text className="mt-1 text-[13px] leading-[19px] text-[#6B7684]">
                    {section.subtitle}
                  </Text>
                </View>
              </View>

              <View className="mt-4 flex-row">
                <View className="mr-2 rounded-full bg-[#F4F6F8] px-3 py-1.5">
                  <Text className="text-[11px] font-semibold text-[#6B7684]">
                    {section.questions}
                  </Text>
                </View>

                <View className="rounded-full bg-[#F4F6F8] px-3 py-1.5">
                  <Text className="text-[11px] font-semibold text-[#6B7684]">
                    {section.duration}
                  </Text>
                </View>
              </View>

              <View className="mt-4 border-t border-[#EEF1F4] pt-3">
                {section.details.map((detail) => (
                  <View
                    key={detail}
                    className="mb-2 flex-row items-start"
                  >
                    <View className="mt-[6px] mr-2 h-1.5 w-1.5 rounded-full bg-[#9AA4AF]" />

                    <Text className="flex-1 text-[12.5px] leading-[18px] text-[#6B7684]">
                      {detail}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          );
        })}

        {/* Consent */}
        <Pressable
          onPress={() => setAccepted((value) => !value)}
          className="mt-2 flex-row items-start rounded-2xl border border-[#E2E5E9] bg-white p-4"
        >
          <View
            className={`mr-3 h-5 w-5 items-center justify-center rounded-md border ${
              accepted
                ? "border-[#1A3A5C] bg-[#1A3A5C]"
                : "border-[#C8CED5] bg-white"
            }`}
          >
            {accepted && (
              <CheckCircle2
                size={14}
                color="#FFFFFF"
                strokeWidth={3}
              />
            )}
          </View>

          <Text className="flex-1 text-[13px] leading-[19px] text-[#34404B]">
            I have read and understood the instructions.
          </Text>
        </Pressable>
      </ScrollView>

      {/* Bottom Action */}
      <View className="border-t border-[#E2E5E9] bg-white px-5 pb-5 pt-3">
        <Pressable
          disabled={!accepted}
          onPress={handleStart}
          className={`h-[52px] flex-row items-center justify-center rounded-xl ${
            accepted ? "bg-[#1A3A5C]" : "bg-[#E2E5E9]"
          }`}
        >
          <Text
            className={`text-[15px] font-bold ${
              accepted ? "text-white" : "text-[#9AA4AF]"
            }`}
          >
            Accept & Start Assessment
          </Text>

          <ArrowRight
            size={19}
            color={accepted ? "#FFFFFF" : "#9AA4AF"}
            strokeWidth={2.3}
            style={{ marginLeft: 8 }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

type InstructionRowProps = {
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    strokeWidth?: number;
  }>;
  title: string;
  text: string;
  last?: boolean;
};

function InstructionRow({
  icon: Icon,
  title,
  text,
  last = false,
}: InstructionRowProps) {
  return (
    <View
      className={`flex-row ${
        last ? "" : "mb-4 border-b border-[#EEF1F4] pb-4"
      }`}
    >
      <View className="mr-3 mt-0.5 h-8 w-8 items-center justify-center rounded-lg bg-[#F4F6F8]">
        <Icon size={16} color="#1A3A5C" strokeWidth={2.2} />
      </View>

      <View className="flex-1">
        <Text className="text-[13px] font-bold text-[#34404B]">
          {title}
        </Text>

        <Text className="mt-1 text-[12px] leading-[18px] text-[#6B7684]">
          {text}
        </Text>
      </View>
    </View>
  );
}
