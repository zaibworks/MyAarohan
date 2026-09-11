import { router, useNavigation } from "expo-router";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FileText,
  Filter,
  Lightbulb,
  Menu,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react-native";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

type FilterType = "all" | "aptitude" | "personality";

type Result = {
  id: string;
  title: string;
  type: "aptitude" | "personality";
  date: string;
  score: string;
  scoreLabel: string;
  questions: string;
  duration: string;
  status: string;
  icon: "aptitude" | "personality";
  summary: string;
};

const results: Result[] = [
  {
    id: "assessment-001",
    title: "#1 Assessment",
    type: "aptitude",
    date: "28 Aug 2026",
    score: "78%",
    scoreLabel: "Strong Performance",
    questions: "259 / 260",
    duration: "32 min",
    status: "Completed",
    icon: "aptitude",
    summary:
      "You performed strongly across multiple aptitude dimensions with good potential for analytical and problem-solving careers.",
  },
  {
    id: "assessment-002",
    title: "#2 Assessment",
    type: "personality",
    date: "24 Aug 2026",
    score: "82%",
    scoreLabel: "Very Strong",
    questions: "239 / 260",
    duration: "24 min",
    status: "Completed",
    icon: "personality",
    summary:
      "Your responses show a balanced personality profile with strong curiosity, openness and goal orientation.",
  },
  {
    id: "assessment-003",
    title: "#3 Assessment",
    type: "aptitude",
    date: "12 Aug 2026",
    score: "71%",
    scoreLabel: "Good Performance",
    questions: "260 / 260",
    duration: "35 min",
    status: "Completed",
    icon: "aptitude",
    summary:
      "You showed consistent performance with several areas that can improve further through practice.",
  },
  {
    id: "assessment-004",
    title: "#4 Assessment",
    type: "personality",
    date: "04 Aug 2026",
    score: "76%",
    scoreLabel: "Good Match",
    questions: "230 / 260",
    duration: "26 min",
    status: "Completed",
    icon: "personality",
    summary:
      "Your profile indicates good adaptability and a positive approach toward learning and new experiences.",
  },
];

const filters: { key: FilterType; label: string }[] = [
  { key: "all", label: "All Results" },
];

function ResultIcon({ type }: { type: "aptitude" | "personality" }) {
  if (type === "personality") {
    return <Brain size={22} color="#1A3A5C" strokeWidth={2} />;
  }

  return <Target size={22} color="#1A3A5C" strokeWidth={2} />;
}

export default function Results() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredResults =
    activeFilter === "all"
      ? results
      : results.filter((result) => result.type === activeFilter);

  const latestResult = results[0];

  const navigate = useNavigation() as any;
  return (
    <View className="flex-1 bg-[#F4F6F8] pt-10">
      {/* Existing app top bar goes here */}

      <View className="border-b border-[#E6E9ED] bg-white">
        <View className="h-[62px] flex-row items-center justify-between px-4">
          {/* Left */}
          <View className="flex-row items-center gap-3">
            <Pressable
              onPress={() => navigate.openDrawer()}
              className="h-9 w-9 items-center justify-center rounded-[10px] border border-[#E6E9ED] bg-white"
            >
              <Menu size={18} color="#16202A" strokeWidth={2} />
            </Pressable>
          </View>

          {/* Avatar */}
          <Pressable
            onPress={() => router.push("/student/profile")}
            className="h-[34px] w-[34px] items-center justify-center rounded-full bg-[#1A3A5C]"
          >
            <Text className="text-[14px] font-semibold text-white">Z</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {/* Header */}
        <View className="px-5 pt-5">
          <View className="flex-row items-center justify-between">
            <View className="flex-1 pr-4">
              <Text className="text-[26px] font-bold text-[#16202A]">
                My Results
              </Text>

              <Text className="mt-1.5 text-[14px] leading-5 text-[#6B7684]">
                View your assessment history and explore your career insights.
              </Text>
            </View>

            <View className="h-11 w-11 items-center justify-center rounded-full bg-[#EAF1F7]">
              <BarChart3 size={22} color="#1A3A5C" strokeWidth={2} />
            </View>
          </View>
        </View>

        {/* Latest Result */}
        <View className="mx-5 mt-5 overflow-hidden rounded-2xl border border-[#D6DBE1] bg-white">
          <View className="px-4 pt-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="h-9 w-9 items-center justify-center rounded-xl bg-[#EAF1F7]">
                  <Trophy size={19} color="#1A3A5C" strokeWidth={2} />
                </View>

                <View className="ml-2.5">
                  <Text className="text-[12px] font-semibold uppercase tracking-wide text-[#9AA4AF]">
                    Latest Result
                  </Text>

                  <Text className="mt-0.5 text-[15px] font-bold text-[#16202A]">
                    {latestResult.title}
                  </Text>
                </View>
              </View>
            </View>

            <View className="mt-5 flex-row items-end justify-between">
              <View>
                <Text className="text-[38px] font-bold leading-10 text-[#1A3A5C]">
                  {latestResult.score}
                </Text>

                <Text className="mt-1 text-[13px] font-medium text-[#1B8354]">
                  {latestResult.scoreLabel}
                </Text>
              </View>

              <View className="items-end">
                <Text className="text-[12px] text-[#9AA4AF]">Completed on</Text>

                <Text className="mt-0.5 text-[13px] font-semibold text-[#16202A]">
                  {latestResult.date}
                </Text>
              </View>
            </View>
          </View>

          <View className="mx-4 my-4 h-px bg-[#E6E9ED]" />

          <View className="flex-row px-4 pb-4">
            <View className="flex-1">
              <Text className="text-[11px] text-[#9AA4AF]">QUESTIONS</Text>
              <Text className="mt-1 text-[14px] font-semibold text-[#16202A]">
                {latestResult.questions}
              </Text>
            </View>

            <View className="flex-1">
              <Text className="text-[11px] text-[#9AA4AF]">DURATION</Text>
              <Text className="mt-1 text-[14px] font-semibold text-[#16202A]">
                {latestResult.duration}
              </Text>
            </View>

            <View className="flex-1 items-end">
              <Pressable
                onPress={() =>
                  router.push(`/student/results/${latestResult.id}` as any)
                }
                className="flex-row items-center rounded-xl bg-[#1A3A5C] px-3.5 py-2.5"
              >
                <Text className="text-[12px] font-semibold text-white">
                  View Result
                </Text>

                <ArrowRight
                  size={15}
                  color="#FFFFFF"
                  strokeWidth={2.3}
                  className="ml-1.5"
                />
              </Pressable>
            </View>
          </View>
        </View>

        {/* Quick Stats */}
        <View className="mt-5 px-5">
          <View className="flex-row">
            <View className="mr-2.5 flex-1 rounded-2xl border border-[#E6E9ED] bg-white p-3.5">
              <View className="h-9 w-9 items-center justify-center rounded-xl bg-[#EAF1F7]">
                <ClipboardCheck size={18} color="#1A3A5C" />
              </View>

              <Text className="mt-3 text-[22px] font-bold text-[#16202A]">
                4
              </Text>

              <Text className="mt-0.5 text-[12px] text-[#6B7684]">
                Assessments completed
              </Text>
            </View>

            <View className="ml-2.5 flex-1 rounded-2xl border border-[#E6E9ED] bg-white p-3.5">
              <View className="h-9 w-9 items-center justify-center rounded-xl bg-[#E6F7EE]">
                <TrendingUp size={18} color="#1B8354" />
              </View>

              <Text className="mt-3 text-[22px] font-bold text-[#16202A]">
                77%
              </Text>

              <Text className="mt-0.5 text-[12px] text-[#6B7684]">
                Average performance
              </Text>
            </View>
          </View>
        </View>

        {/* Results Header */}
        <View className="mt-7 px-5">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-[19px] font-bold text-[#16202A]">
                Assessment Results
              </Text>

              <Text className="mt-1 text-[13px] text-[#6B7684]">
                Your completed assessment history
              </Text>
            </View>

            <View className="h-9 w-9 items-center justify-center rounded-xl border border-[#D6DBE1] bg-white">
              <Filter size={17} color="#6B7684" strokeWidth={2} />
            </View>
          </View>

          {/* Filters */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-4"
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {filters.map((filter) => {
              const active = activeFilter === filter.key;

              return (
                <Pressable
                  key={filter.key}
                  onPress={() => setActiveFilter(filter.key)}
                  className={`mr-2 rounded-full border px-4 py-2.5 ${
                    active
                      ? "border-[#1A3A5C] bg-[#EAF1F7]"
                      : "border-[#D6DBE1] bg-white"
                  }`}
                >
                  <Text
                    className={`text-[12px] font-semibold ${
                      active ? "text-[#1A3A5C]" : "text-[#6B7684]"
                    }`}
                  >
                    {filter.label}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* Result Cards */}
        <View className="mt-4 px-5">
          {filteredResults.map((result, index) => (
            <Pressable
              key={result.id}
              onPress={() =>
                router.push(`/student/results/${result.id}` as any)
              }
              className="mb-3.5 rounded-2xl border border-[#E6E9ED] bg-white p-4"
            >
              {/* Card Top */}
              <View className="flex-row items-start">
                <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#EAF1F7]">
                  <ResultIcon type={result.icon} />
                </View>

                <View className="ml-3 flex-1 pr-2">
                  <Text className="text-[15px] font-bold text-[#16202A]">
                    {result.title}
                  </Text>

                  <View className="mt-1.5 flex-row items-center">
                    <CalendarDays size={13} color="#9AA4AF" />

                    <Text className="ml-1 text-[11px] text-[#9AA4AF]">
                      {result.date}
                    </Text>
                  </View>
                </View>

                <CheckCircle2 size={19} color="#1B8354" strokeWidth={2} />
              </View>

              {/* Score */}
              <View className="mt-4 flex-row items-center rounded-xl bg-[#F4F6F8] px-3 py-3">
                <View className="flex-1">
                  <Text className="text-[10px] font-semibold uppercase tracking-wide text-[#9AA4AF]">
                    Score
                  </Text>

                  <Text className="mt-0.5 text-[22px] font-bold text-[#1A3A5C]">
                    {result.score}
                  </Text>
                </View>

                <View className="flex-1 border-l border-[#D6DBE1] pl-3">
                  <Text className="text-[10px] font-semibold uppercase tracking-wide text-[#9AA4AF]">
                    Questions
                  </Text>

                  <Text className="mt-1 text-[13px] font-semibold text-[#16202A]">
                    {result.questions}
                  </Text>
                </View>

                <View className="flex-1 border-l border-[#D6DBE1] pl-3">
                  <Text className="text-[10px] font-semibold uppercase tracking-wide text-[#9AA4AF]">
                    Time
                  </Text>

                  <View className="mt-1 flex-row items-center">
                    <Clock3 size={12} color="#6B7684" />

                    <Text className="ml-1 text-[12px] font-semibold text-[#16202A]">
                      {result.duration}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Summary */}
              <View className="mt-3 flex-row">
                <Lightbulb size={15} color="#1A3A5C" strokeWidth={2} />

                <Text className="ml-2 flex-1 text-[12px] leading-[18px] text-[#6B7684]">
                  {result.summary}
                </Text>
              </View>

              {/* Footer */}
              <View className="mt-4 flex-row items-center justify-between border-t border-[#E6E9ED] pt-3">
                <View className="flex-row items-center">
                  <View className="rounded-full bg-[#E6F7EE] px-2.5 py-1">
                    <Text className="text-[10px] font-semibold text-[#1B8354]">
                      {result.status}
                    </Text>
                  </View>

                  <Text className="ml-2 text-[11px] font-medium text-[#6B7684]">
                    {result.scoreLabel}
                  </Text>
                </View>

              </View>
            </Pressable>
          ))}
        </View>

        {/* Empty state */}
        {filteredResults.length === 0 && (
          <View className="mx-5 mt-4 items-center rounded-2xl border border-[#E6E9ED] bg-white px-6 py-10">
            <View className="h-12 w-12 items-center justify-center rounded-full bg-[#EAF1F7]">
              <FileText size={22} color="#1A3A5C" />
            </View>

            <Text className="mt-4 text-[16px] font-bold text-[#16202A]">
              No results found
            </Text>

            <Text className="mt-1.5 text-center text-[12px] leading-5 text-[#6B7684]">
              Complete an assessment to see your results here.
            </Text>
          </View>
        )}

        {/* Bottom Insight */}
        <View className="mx-5 mt-2 overflow-hidden rounded-2xl border border-[#D6DBE1] bg-[#EAF1F7] p-4">
          <View className="flex-row">
            <View className="h-10 w-10 items-center justify-center rounded-xl bg-white">
              <Sparkles size={19} color="#1A3A5C" strokeWidth={2} />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-[14px] font-bold text-[#1A3A5C]">
                Want to understand your results better?
              </Text>

              <Text className="mt-1 text-[12px] leading-[18px] text-[#6B7684]">
                Explore your detailed assessment insights and discover careers
                that match your strengths.
              </Text>

              <Pressable
                onPress={() => router.push("/student/ai" as any)}
                className="mt-3 flex-row items-center self-start"
              >
                <Text className="text-[12px] font-bold text-[#1A3A5C]">
                  Ask AARO AI
                </Text>

                <ArrowRight size={14} color="#1A3A5C" className="ml-1.5" />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
