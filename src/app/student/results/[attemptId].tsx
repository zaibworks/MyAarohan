import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import {
    ArrowRight,
    Award,
    BarChart3,
    Brain,
    BriefcaseBusiness,
    CheckCircle2,
    ChevronDown,
    ChevronRight,
    Clock3,
    Compass,
    Lightbulb,
    Medal,
    Menu,
    Sparkles,
    TrendingUp,
    TriangleAlert,
    Trophy,
    Zap,
} from "lucide-react-native";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/component/Navbar";

type Dimension = {
  name: string;
  score: number;
  short: string;
};

type Skill = {
  name: string;
  value: number;
  description: string;
};

const dimensions: Dimension[] = [
  {
    name: "Verbal",
    score: 82,
    short: "VER",
  },
  {
    name: "Numerical",
    score: 76,
    short: "NUM",
  },
  {
    name: "Abstract",
    score: 84,
    short: "ABS",
  },
  {
    name: "Spatial",
    score: 71,
    short: "SPA",
  },
  {
    name: "Mechanical",
    score: 68,
    short: "MEC",
  },
  {
    name: "Perceptual",
    score: 79,
    short: "PER",
  },
  {
    name: "Language",
    score: 86,
    short: "LAN",
  },
];

const skills: Skill[] = [
  {
    name: "Problem Solving",
    value: 86,
    description:
      "You show strong ability to break down problems and find logical solutions.",
  },
  {
    name: "Analytical Thinking",
    value: 82,
    description:
      "You are comfortable identifying patterns and working with structured information.",
  },
  {
    name: "Communication",
    value: 78,
    description:
      "You have a good foundation for expressing ideas and understanding information.",
  },
  {
    name: "Adaptability",
    value: 74,
    description:
      "You can adjust well when situations, expectations or problems change.",
  },
];

const strengths = [
  "Strong abstract and logical reasoning",
  "Good verbal and language ability",
  "Above-average problem solving",
];

const improvements = [
  "Develop numerical speed and accuracy",
  "Build confidence with mechanical concepts",
  "Practice spatial reasoning regularly",
];

const careers = [
  {
    title: "Software Developer",
    match: 91,
    icon: BriefcaseBusiness,
  },
  {
    title: "Data Analyst",
    match: 87,
    icon: BarChart3,
  },
  {
    title: "Product Designer",
    match: 79,
    icon: Compass,
  },
];

export default function DetailedResult() {

    const navigate = useNavigation() as any;

  const { attemptId } = useLocalSearchParams<{
    attemptId: string;
  }>();

  const [selectedSkill, setSelectedSkill] = useState(0);
  const [showAllCareers, setShowAllCareers] = useState(false);

  const selectedSkillData = skills[selectedSkill];

  const visibleCareers = useMemo(
    () => (showAllCareers ? careers : careers.slice(0, 2)),
    [showAllCareers],
  );

  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']}
    className="flex-1 bg-[#F4F6F8]">

       <Navbar/>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 36,
        }}
      >
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <View className="px-5 pt-5">
          <View className="flex-row items-start justify-between">
            <View className="flex-1 pr-4">
              <Text className="text-[12px] font-semibold uppercase tracking-wider text-[#9AA4AF]">
                Career Aptitude Assessment
              </Text>

              <Text className="mt-1.5 text-[26px] font-bold text-[#16202A]">
                Your Results
              </Text>

              <Text className="mt-1.5 text-[13px] leading-5 text-[#6B7684]">
                Here's what your assessment tells us about your strengths,
                abilities and career potential.
              </Text>
            </View>

            <View className="h-11 w-11 items-center justify-center rounded-full bg-[#EAF1F7]">
              <Award size={23} color="#1A3A5C" strokeWidth={2} />
            </View>
          </View>

          <View className="mt-3 flex-row items-center">
            <View className="flex-row items-center">
              <CheckCircle2 size={14} color="#1B8354" strokeWidth={2.2} />

              <Text className="ml-1.5 text-[11px] font-medium text-[#6B7684]">
                Completed 28 Aug 2026
              </Text>
            </View>

            <View className="mx-2 h-1 w-1 rounded-full bg-[#B8BEC5]" />

            <View className="flex-row items-center">
              <Clock3 size={13} color="#9AA4AF" />

              <Text className="ml-1 text-[11px] text-[#6B7684]">32 min</Text>
            </View>
          </View>
        </View>

        {/* ================================================= */}
        {/* OVERALL SCORE */}
        {/* ================================================= */}

        <View className="mx-5 mt-5 overflow-hidden rounded-2xl border border-[#D6DBE1] bg-white">
          <View className="px-5 py-5">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-[12px] font-semibold uppercase tracking-wide text-[#9AA4AF]">
                  Overall Performance
                </Text>

                <Text className="mt-1 text-[15px] font-bold text-[#16202A]">
                  Strong performance
                </Text>
              </View>

              <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#E6F7EE]">
                <Trophy size={20} color="#1B8354" strokeWidth={2} />
              </View>
            </View>

            <View className="mt-5 flex-row items-end">
              <Text className="text-[48px] font-bold leading-[50px] text-[#1A3A5C]">
                78
              </Text>

              <Text className="mb-1.5 ml-1 text-[18px] font-semibold text-[#6B7684]">
                %
              </Text>

              <View className="mb-1.5 ml-3 rounded-full bg-[#E6F7EE] px-2.5 py-1">
                <Text className="text-[11px] font-semibold text-[#1B8354]">
                  Above Average
                </Text>
              </View>
            </View>

            <View className="mt-4 h-2 overflow-hidden rounded-full bg-[#E6E9ED]">
              <View
                className="h-full rounded-full bg-[#1A3A5C]"
                style={{ width: "78%" }}
              />
            </View>

            <View className="mt-3 flex-row justify-between">
              <Text className="text-[11px] text-[#9AA4AF]">
                Assessment Score
              </Text>

              <Text className="text-[11px] font-semibold text-[#1A3A5C]">
                78 / 100
              </Text>
            </View>
          </View>

          <View className="border-t border-[#E6E9ED] bg-[#F9FAFB] px-5 py-3.5">
            <Text className="text-[12px] leading-[18px] text-[#6B7684]">
              Your results indicate strong reasoning ability and good potential
              across several career-oriented skill areas.
            </Text>
          </View>
        </View>

        {/* ================================================= */}
        {/* APTITUDE PROFILE */}
        {/* ================================================= */}

        <View className="mt-7 px-5">
          <Text className="text-[19px] font-bold text-[#16202A]">
            Your Aptitude Profile
          </Text>

          <Text className="mt-1 text-[13px] leading-5 text-[#6B7684]">
            Your performance across seven core aptitude dimensions.
          </Text>
        </View>

        <View className="mx-5 mt-4 rounded-2xl border border-[#E6E9ED] bg-white p-4">
          {/* Radar visualization */}
          <View className="items-center py-3">
            <View className="h-[250px] w-[250px] items-center justify-center">
              {/* Outer radar */}
              <View className="absolute h-[210px] w-[210px] rounded-full border border-[#D6DBE1]" />
              <View className="absolute h-[160px] w-[160px] rounded-full border border-[#E6E9ED]" />
              <View className="absolute h-[110px] w-[110px] rounded-full border border-[#E6E9ED]" />
              <View className="absolute h-[60px] w-[60px] rounded-full border border-[#E6E9ED]" />

              {/* Axis lines */}
              <View className="absolute h-[210px] w-px bg-[#E6E9ED]" />
              <View className="absolute h-px w-[210px] bg-[#E6E9ED]" />

              {/* Visual profile */}
              <View
                className="absolute h-[135px] w-[135px] items-center justify-center rounded-full border-2 border-[#1A3A5C]"
                style={{
                  transform: [
                    { rotate: "18deg" },
                    { scaleX: 1.15 },
                    { scaleY: 0.72 },
                  ],
                  opacity: 0.35,
                }}
              />

              <View className="items-center justify-center">
                <Text className="text-[26px] font-bold text-[#1A3A5C]">
                  78%
                </Text>

                <Text className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-[#9AA4AF]">
                  Overall
                </Text>
              </View>

              {/* Labels */}
              <Text className="absolute -top-1 text-[10px] font-semibold text-[#6B7684]">
                Verbal
              </Text>

              <Text className="absolute right-0 top-[47px] text-[10px] font-semibold text-[#6B7684]">
                Numerical
              </Text>

              <Text className="absolute bottom-[17px] right-[-2px] text-[10px] font-semibold text-[#6B7684]">
                Abstract
              </Text>

              <Text className="absolute bottom-[-1px] text-[10px] font-semibold text-[#6B7684]">
                Spatial
              </Text>

              <Text className="absolute bottom-[17px] left-[-2px] text-[10px] font-semibold text-[#6B7684]">
                Mechanical
              </Text>

              <Text className="absolute left-0 top-[47px] text-[10px] font-semibold text-[#6B7684]">
                Perceptual
              </Text>

              <Text className="absolute left-[28px] top-[-1px] text-[10px] font-semibold text-[#6B7684]">
                Language
              </Text>
            </View>
          </View>

          {/* Dimension scores */}
          <View className="mt-2">
            {dimensions.map((dimension) => (
              <View key={dimension.name} className="mb-3">
                <View className="flex-row items-center justify-between">
                  <Text className="text-[12px] font-medium text-[#16202A]">
                    {dimension.name}
                  </Text>

                  <Text className="text-[12px] font-bold text-[#1A3A5C]">
                    {dimension.score}%
                  </Text>
                </View>

                <View className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#E6E9ED]">
                  <View
                    className="h-full rounded-full bg-[#1A3A5C]"
                    style={{
                      width: `${dimension.score}%`,
                    }}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* ================================================= */}
        {/* STRENGTHS + IMPROVEMENTS */}
        {/* ================================================= */}

        <View className="mt-7 px-5">
          <Text className="text-[19px] font-bold text-[#16202A]">
            What Your Results Tell You
          </Text>

          <Text className="mt-1 text-[13px] text-[#6B7684]">
            Your strongest areas and where you can grow.
          </Text>
        </View>

        <View className="mt-4 px-5">
          {/* Strengths */}
          <View className="rounded-2xl border border-[#D8EDE1] bg-[#F8FCF9] p-4">
            <View className="flex-row items-center">
              <View className="h-9 w-9 items-center justify-center rounded-xl bg-[#E6F7EE]">
                <TrendingUp size={18} color="#1B8354" />
              </View>

              <View className="ml-2.5">
                <Text className="text-[15px] font-bold text-[#16202A]">
                  Your Strengths
                </Text>

                <Text className="mt-0.5 text-[11px] text-[#6B7684]">
                  Areas where you're performing well
                </Text>
              </View>
            </View>

            <View className="mt-4">
              {strengths.map((item) => (
                <View key={item} className="mb-2.5 flex-row items-start">
                  <CheckCircle2 size={15} color="#1B8354" strokeWidth={2.2} />

                  <Text className="ml-2 flex-1 text-[12px] leading-[18px] text-[#4F5B68]">
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Improvements */}
          <View className="mt-3.5 rounded-2xl border border-[#E9E0C8] bg-[#FFFDF7] p-4">
            <View className="flex-row items-center">
              <View className="h-9 w-9 items-center justify-center rounded-xl bg-[#FFF6DF]">
                <TriangleAlert size={18} color="#9A6B00" />
              </View>

              <View className="ml-2.5">
                <Text className="text-[15px] font-bold text-[#16202A]">
                  Areas to Improve
                </Text>

                <Text className="mt-0.5 text-[11px] text-[#6B7684]">
                  Skills that can become stronger
                </Text>
              </View>
            </View>

            <View className="mt-4">
              {improvements.map((item) => (
                <View key={item} className="mb-2.5 flex-row items-start">
                  <View className="mt-1 h-1.5 w-1.5 rounded-full bg-[#9A6B00]" />

                  <Text className="ml-2.5 flex-1 text-[12px] leading-[18px] text-[#4F5B68]">
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* ================================================= */}
        {/* CAREER FIT */}
        {/* ================================================= */}

        <View className="mt-7 px-5">
          <View className="flex-row items-center">
            <View className="h-9 w-9 items-center justify-center rounded-xl bg-[#EAF1F7]">
              <Compass size={19} color="#1A3A5C" />
            </View>

            <View className="ml-2.5">
              <Text className="text-[19px] font-bold text-[#16202A]">
                Career Fit
              </Text>

              <Text className="mt-0.5 text-[12px] text-[#6B7684]">
                Careers that align with your profile
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-4 px-5">
          {visibleCareers.map((career, index) => {
            const Icon = career.icon;

            return (
              <Pressable
                key={career.title}
                className="mb-3 rounded-2xl border border-[#E6E9ED] bg-white p-4"
              >
                <View className="flex-row items-center">
                  <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#EAF1F7]">
                    <Icon size={20} color="#1A3A5C" />
                  </View>

                  <View className="ml-3 flex-1">
                    <Text className="text-[14px] font-bold text-[#16202A]">
                      {career.title}
                    </Text>

                    <Text className="mt-1 text-[11px] text-[#9AA4AF]">
                      Career compatibility
                    </Text>
                  </View>

                  <View className="items-end">
                    <Text className="text-[19px] font-bold text-[#1A3A5C]">
                      {career.match}%
                    </Text>

                    <Text className="text-[10px] text-[#9AA4AF]">match</Text>
                  </View>
                </View>

                <View className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E6E9ED]">
                  <View
                    className="h-full rounded-full bg-[#1A3A5C]"
                    style={{
                      width: `${career.match}%`,
                    }}
                  />
                </View>

                <View className="mt-3 flex-row items-center justify-end">
                  <Text className="text-[11px] font-semibold text-[#1A3A5C]">
                    Explore career
                  </Text>

                  <ChevronRight size={15} color="#1A3A5C" />
                </View>
              </Pressable>
            );
          })}

          <Pressable
            onPress={() => setShowAllCareers((prev) => !prev)}
            className="flex-row items-center justify-center py-2"
          >
            <Text className="text-[12px] font-semibold text-[#1A3A5C]">
              {showAllCareers
                ? "Show fewer careers"
                : "View more career matches"}
            </Text>

            <ChevronDown
              size={15}
              color="#1A3A5C"
              className="ml-1"
              style={{
                transform: [
                  {
                    rotate: showAllCareers ? "180deg" : "0deg",
                  },
                ],
              }}
            />
          </Pressable>
        </View>

        {/* ================================================= */}
        {/* GROWTH EXPLORER */}
        {/* ================================================= */}

        <View className="mt-7 px-5">
          <View className="flex-row items-center">
            <View className="h-9 w-9 items-center justify-center rounded-xl bg-[#EAF1F7]">
              <TrendingUp size={19} color="#1A3A5C" />
            </View>

            <View className="ml-2.5 flex-1">
              <Text className="text-[19px] font-bold text-[#16202A]">
                Growth Explorer
              </Text>

              <Text className="mt-0.5 text-[12px] text-[#6B7684]">
                Explore the skills behind your result
              </Text>
            </View>
          </View>
        </View>

        <View className="mx-5 mt-4 rounded-2xl border border-[#E6E9ED] bg-white p-4">
          {/* Skill selector */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 10,
            }}
          >
            {skills.map((skill, index) => {
              const active = selectedSkill === index;

              return (
                <Pressable
                  key={skill.name}
                  onPress={() => setSelectedSkill(index)}
                  className={`mr-2 rounded-full border px-3.5 py-2 ${
                    active
                      ? "border-[#1A3A5C] bg-[#EAF1F7]"
                      : "border-[#D6DBE1] bg-white"
                  }`}
                >
                  <Text
                    className={`text-[11px] font-semibold ${
                      active ? "text-[#1A3A5C]" : "text-[#6B7684]"
                    }`}
                  >
                    {skill.name}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>

          {/* Selected skill */}
          <View className="mt-5 rounded-xl bg-[#F4F6F8] p-4">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-[14px] font-bold text-[#16202A]">
                  {selectedSkillData.name}
                </Text>

                <Text className="mt-1 text-[11px] text-[#6B7684]">
                  Current skill level
                </Text>
              </View>

              <Text className="text-[24px] font-bold text-[#1A3A5C]">
                {selectedSkillData.value}%
              </Text>
            </View>

            <View className="mt-4 h-2 overflow-hidden rounded-full bg-[#DDE2E7]">
              <View
                className="h-full rounded-full bg-[#1A3A5C]"
                style={{
                  width: `${selectedSkillData.value}%`,
                }}
              />
            </View>

            <Text className="mt-4 text-[12px] leading-[19px] text-[#6B7684]">
              {selectedSkillData.description}
            </Text>
          </View>

          {/* Growth tip */}
          <View className="mt-3 flex-row rounded-xl border border-[#E6E9ED] bg-white p-3">
            <Lightbulb size={17} color="#1A3A5C" strokeWidth={2} />

            <Text className="ml-2 flex-1 text-[11px] leading-[17px] text-[#6B7684]">
              Consistent practice can help you strengthen this skill and improve
              your future assessment performance.
            </Text>
          </View>
        </View>

        {/* ================================================= */}
        {/* RECOMMENDATION */}
        {/* ================================================= */}

        <View className="mx-5 mt-7 overflow-hidden rounded-2xl border border-[#D6DBE1] bg-[#EAF1F7] p-5">
          <View className="flex-row items-start">
            <View className="h-10 w-10 items-center justify-center rounded-xl bg-white">
              <Sparkles size={20} color="#1A3A5C" />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-[16px] font-bold text-[#1A3A5C]">
                Your next step
              </Text>

              <Text className="mt-1.5 text-[12px] leading-[19px] text-[#6B7684]">
                Your results are a starting point, not a final decision. Explore
                your career matches, work on your improvement areas and talk to
                a counsellor to understand your options better.
              </Text>

              <Pressable
                onPress={() => router.push("/student/counselling")}
                className="mt-4 flex-row items-center self-start rounded-xl bg-[#1A3A5C] px-4 py-2.5"
              >
                <Text className="text-[12px] font-semibold text-white">
                  Talk to a Counsellor
                </Text>

                <ArrowRight size={15} color="#FFFFFF" className="ml-1.5" />
              </Pressable>
            </View>
          </View>
        </View>

        {/* ================================================= */}
        {/* AARO AI */}
        {/* ================================================= */}

        <View className="mx-5 mt-3.5 rounded-2xl border border-[#E6E9ED] bg-white p-4">
          <View className="flex-row items-center">
            <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#EAF1F7]">
              <Brain size={20} color="#1A3A5C" />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-[14px] font-bold text-[#16202A]">
                Have questions about your result?
              </Text>

              <Text className="mt-1 text-[11px] leading-[17px] text-[#6B7684]">
                Ask AARO AI to explain your strengths, careers or improvement
                areas.
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => router.push("/student/ai")}
            className="mt-3 flex-row items-center justify-center rounded-xl border border-[#1A3A5C] py-2.5"
          >
            <Zap size={15} color="#1A3A5C" fill="#1A3A5C" />

            <Text className="ml-1.5 text-[12px] font-semibold text-[#1A3A5C]">
              Ask AARO AI
            </Text>
          </Pressable>
        </View>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <View className="items-center px-8 pb-2 pt-7">
          <Medal size={22} color="#9AA4AF" strokeWidth={1.8} />

          <Text className="mt-2 text-center text-[10px] leading-[16px] text-[#9AA4AF]">
            Assessment results are designed to help you understand your
            strengths and explore suitable career directions.
          </Text>

          <Text className="mt-1 text-[10px] text-[#B0B7BE]">
            Attempt ID: {attemptId}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
