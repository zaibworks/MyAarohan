import Navbar from "@/component/Navbar";
import { useLocalSearchParams, useRouter } from "expo-router";
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
  Medal,
  Sparkles,
  TrendingUp,
  TriangleAlert,
  Trophy,
  Zap,
} from "lucide-react-native";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import AptitudeRadar from "@/component/AptitudeRadar";
import PersonalityRadar from "@/component/PersonalityRadar";

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

type PersonalityTrait = {
  name: string;
  score: number;
  level: string;
  description: string;
};

type CareerOrientation = {
  name: string;
  score: number;
  level: string;
  description: string;
};

type DreamCareer = {
  title: string;
  icon: typeof BriefcaseBusiness;
  description: string;
  nextStep: string;
  education: string;
  outlook: string;
  focus: string;
};

const dimensions: Dimension[] = [
  {
    name: "Verbal",
    score: 80,
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

const personalityTraits: PersonalityTrait[] = [
  {
    name: "Openness",
    score: 82,
    level: "Very High",
    description:
      "You are imaginative, curious and open to new experiences. This can support creative and innovative career paths.",
  },
  {
    name: "Conscientiousness",
    score: 68,
    level: "High",
    description:
      "You can work toward goals with structure and responsibility, especially when expectations are clear.",
  },
  {
    name: "Extraversion",
    score: 54,
    level: "Moderate",
    description:
      "You can balance independent work with social interaction depending on the environment.",
  },
  {
    name: "Agreeableness",
    score: 72,
    level: "High",
    description:
      "You tend to value cooperation and understanding when working with other people.",
  },
  {
    name: "Neuroticism",
    score: 38,
    level: "Low",
    description:
      "You generally remain calm when dealing with pressure and changing situations.",
  },
];

const careerOrientations: CareerOrientation[] = [
  {
    name: "Analytical Problem-Solving",
    score: 78,
    level: "Strong",
    description:
      "Enjoys logic, puzzles, data and figuring out how things work.",
  },
  {
    name: "Organisation & Planning",
    score: 64,
    level: "Moderate",
    description:
      "Likes structure, planning, neatness and doing things in an orderly way.",
  },
  {
    name: "Extraversion & Social Energy",
    score: 58,
    level: "Moderate",
    description:
      "Drawn to people, activity, group work and leading from the front.",
  },
  {
    name: "Empathy & Helping Orientation",
    score: 67,
    level: "Moderate",
    description:
      "Cares about others and enjoys supporting and encouraging people.",
  },
  {
    name: "Emotional Sensitivity",
    score: 44,
    level: "Low",
    description:
      "Your profile suggests you may work well in environments that require emotional balance.",
  },
  {
    name: "Creativity & Exploration",
    score: 81,
    level: "Strong",
    description:
      "Loves new ideas, creative expression and experimenting with possibilities.",
  },
  {
    name: "Practical & Hands-on",
    score: 62,
    level: "Moderate",
    description:
      "Likes building, fixing, working with tools and real-world tasks.",
  },
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

const dreamCareers: DreamCareer[] = [
  {
    title: "Software Engineer",
    icon: BriefcaseBusiness,
    description:
      "A software engineer designs and builds digital systems, applications and software solutions.",
    nextStep:
      "Explore the field through small coding projects and compare related technology paths before committing to a long-term pathway.",
    education:
      "Computer Science, Software Engineering, BCA, B.Tech or related technical pathways can provide a foundation.",
    outlook:
      "Technology continues to offer diverse roles across software development, systems and digital products.",
    focus:
      "Strengthen logical reasoning, coding fundamentals, problem solving and consistent project practice.",
  },
  {
    title: "Photographer",
    icon: Compass,
    description:
      "A photographer creates images for news, documentary work, weddings, fashion, products, advertising, portraits and other visual communication.",
    nextStep:
      "Try practical photography activities and compare different areas such as portrait, product, travel or documentary photography.",
    education:
      "Fine arts, media studies, design, journalism or practical photography training can support this pathway.",
    outlook:
      "Portfolio quality, visual skills, technical practice and communication are important for building opportunities.",
    focus:
      "Develop composition, lighting, editing, visual storytelling and a strong portfolio.",
  },
  {
    title: "Book Writer",
    icon: Sparkles,
    description:
      "A book writer develops stories, ideas and long-form written content across different genres and subjects.",
    nextStep:
      "Write short stories or essays regularly, read across genres and seek feedback to develop your writing voice.",
    education:
      "There is no single fixed degree requirement; literature, journalism, communication and creative-writing pathways can help.",
    outlook:
      "Writing opportunities can span publishing, digital content, journalism, education and independent work.",
    focus:
      "Strengthen verbal reasoning, language ability, creativity, reading and consistent writing practice.",
  },
];

export default function DetailedResult() {
  const { attemptId } = useLocalSearchParams<{
    attemptId: string;
  }>();

  const router = useRouter();

  const [selectedSkill, setSelectedSkill] = useState(0);
  const [showAllCareers, setShowAllCareers] = useState(false);
  const [selectedGrowthDimension, setSelectedGrowthDimension] = useState<
    number | null
  >(null);
  const [improvementAmount, setImprovementAmount] = useState(0);

  const selectedSkillData = skills[selectedSkill];

  const visibleCareers = useMemo(
    () => (showAllCareers ? careers : careers.slice(0, 2)),
    [showAllCareers],
  );

  const selectedGrowthData =
    selectedGrowthDimension !== null
      ? dimensions[selectedGrowthDimension]
      : null;

  const projectedScore = selectedGrowthData
    ? Math.min(selectedGrowthData.score + improvementAmount, 100)
    : 0;

  return (
    <View className="flex-1 bg-[#F4F6F8]">
      <Navbar />

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
          <AptitudeRadar dimensions={dimensions}/>

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
        {/* PERSONALITY TRAIT */}
        {/* ================================================= */}

        <View className="mt-7 px-5">
          <Text className="text-[19px] font-bold text-[#16202A]">
            Personality Trait
          </Text>

          <Text className="mt-1 text-[13px] leading-5 text-[#6B7684]">
            Understand the personality characteristics reflected in your
            assessment.
          </Text>
        </View>

        <View className="mx-5 mt-4 rounded-2xl border border-[#E6E9ED] bg-white p-4">
          <PersonalityRadar traits={personalityTraits}/>

          <View className="mt-3">
            {personalityTraits.map((trait) => (
              <View key={trait.name} className="mb-4">
                <View className="flex-row items-center justify-between">
                  <Text className="text-[12px] font-semibold text-[#16202A]">
                    {trait.name}
                  </Text>

                  <View className="flex-row items-center">
                    <Text className="mr-2 text-[11px] font-bold text-[#1A3A5C]">
                      {trait.score}%
                    </Text>

                    <View className="rounded-full bg-[#EAF1F7] px-2 py-1">
                      <Text className="text-[9px] font-bold uppercase text-[#1A3A5C]">
                        {trait.level}
                      </Text>
                    </View>
                  </View>
                </View>

                <View className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#E6E9ED]">
                  <View
                    className="h-full rounded-full bg-[#1A3A5C]"
                    style={{
                      width: `${trait.score}%`,
                    }}
                  />
                </View>

                <Text className="mt-2 text-[11px] leading-[17px] text-[#6B7684]">
                  {trait.description}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* ================================================= */}
        {/* INTEREST & CAREER EXPLORATION */}
        {/* ================================================= */}

        <View className="mt-7 px-5">
          <Text className="text-[19px] font-bold text-[#16202A]">
            Interest & Career Exploration Analysis
          </Text>

          <Text className="mt-1 text-[13px] leading-5 text-[#6B7684]">
            Key themes from your interest and psychometric responses.
          </Text>
        </View>

        <View className="mx-5 mt-4">
          {careerOrientations.map((orientation) => (
            <View
              key={orientation.name}
              className="mb-3 rounded-2xl border border-[#E6E9ED] bg-white p-4"
            >
              <View className="flex-row items-start justify-between">
                <View className="flex-1 pr-3">
                  <Text className="text-[13px] font-bold text-[#16202A]">
                    {orientation.name}
                  </Text>

                  <Text className="mt-1 text-[11px] leading-[17px] text-[#6B7684]">
                    {orientation.description}
                  </Text>
                </View>

                <View className="items-end">
                  <Text className="text-[18px] font-bold text-[#1A3A5C]">
                    {orientation.score}
                  </Text>

                  <Text className="text-[9px] font-semibold uppercase text-[#9AA4AF]">
                    {orientation.level}
                  </Text>
                </View>
              </View>

              <View className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E6E9ED]">
                <View
                  className="h-full rounded-full bg-[#1A3A5C]"
                  style={{
                    width: `${orientation.score}%`,
                  }}
                />
              </View>
            </View>
          ))}
        </View>

        {/* ================================================= */}
        {/* PROFILE CLUSTER */}
        {/* ================================================= */}

        <View className="mt-7 px-5">
          <Text className="text-[19px] font-bold text-[#16202A]">
            Profile Cluster & Factor Analysis
          </Text>

          <Text className="mt-1 text-[13px] leading-5 text-[#6B7684]">
            A broader view of how your assessment dimensions come together.
          </Text>
        </View>

        <View className="mx-5 mt-4 rounded-2xl border border-[#E6E9ED] bg-white p-4">
          <View className="rounded-xl bg-[#1A3A5C] p-4">
            <Text className="text-[10px] font-bold uppercase tracking-wider text-[#BFD4E6]">
              Your Profile Cluster
            </Text>

            <Text className="mt-1.5 text-[20px] font-bold text-white">
              Versatile Generalist
            </Text>

            <Text className="mt-1 text-[11px] leading-[17px] text-[#DCE8F2]">
              Balanced across multiple aptitudes with the flexibility to explore
              different career directions.
            </Text>
          </View>

          <View className="mt-4">
            <Text className="text-[12px] font-bold text-[#16202A]">
              Aligned Career Families
            </Text>

            <View className="mt-2 flex-row flex-wrap">
              {[
                "Technology",
                "Management",
                "Entrepreneurship",
                "Education",
              ].map((family) => (
                <View
                  key={family}
                  className="mb-2 mr-2 rounded-full bg-[#EAF1F7] px-3 py-1.5"
                >
                  <Text className="text-[10px] font-bold text-[#1A3A5C]">
                    {family}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View className="mt-5">
            <Text className="text-[12px] font-bold text-[#16202A]">
              Core Factor Scores
            </Text>

            {[
              { name: "Quantitative", score: 76 },
              { name: "Verbal", score: 82 },
              { name: "Spatial", score: 71 },
            ].map((factor) => (
              <View key={factor.name} className="mt-3">
                <View className="flex-row items-center justify-between">
                  <Text className="text-[11px] font-medium text-[#6B7684]">
                    {factor.name}
                  </Text>

                  <Text className="text-[11px] font-bold text-[#1A3A5C]">
                    {factor.score}
                  </Text>
                </View>

                <View className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#E6E9ED]">
                  <View
                    className="h-full rounded-full bg-[#1A3A5C]"
                    style={{
                      width: `${factor.score}%`,
                    }}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* ================================================= */}
        {/* WHAT YOUR SCORES MEAN */}
        {/* ================================================= */}

        <View className="mt-7 px-5">
          <Text className="text-[19px] font-bold text-[#16202A]">
            What Your Scores Mean For You
          </Text>

          <Text className="mt-1 text-[13px] leading-5 text-[#6B7684]">
            A personalised reading of your aptitude, personality and interests.
          </Text>
        </View>

        <View className="mx-5 mt-4 rounded-2xl border border-[#E6E9ED] bg-white p-4">
          <Text className="text-[12px] leading-[20px] text-[#4F5B68]">
            Your profile shows a combination of strong reasoning ability,
            curiosity and openness to new ideas. These qualities can support
            careers where continuous learning, problem solving and adapting to
            new situations are important.
          </Text>

          <Text className="mt-4 text-[12px] leading-[20px] text-[#4F5B68]">
            Your numerical and reasoning abilities provide a useful foundation
            for analytical work. At the same time, developing weaker dimensions
            can help you become more confident across a wider range of academic
            and career situations.
          </Text>

          <Text className="mt-4 text-[12px] leading-[20px] text-[#4F5B68]">
            Use these results as a starting point. Practical projects,
            exploration and real-world exposure can help you understand which
            career environments actually suit you.
          </Text>
        </View>

        {/* ================================================= */}
        {/* WEAKNESSES & HOW TO FIX */}
        {/* ================================================= */}

        <View className="mt-7 px-5">
          <Text className="text-[19px] font-bold text-[#16202A]">
            Your Weaknesses & How To Fix Them
          </Text>

          <Text className="mt-1 text-[13px] leading-5 text-[#6B7684]">
            Practical ways to build on strengths and improve weaker areas.
          </Text>
        </View>

        <View className="mx-5 mt-4 rounded-2xl border border-[#E6E9ED] bg-white p-4">
          {[
            {
              title: "Verbal Reasoning",
              text: "Practice reading comprehension and focus on identifying the main point, supporting arguments and important details.",
            },
            {
              title: "Perceptual Aptitude",
              text: "Spend a few minutes regularly on visual puzzles and pattern-recognition exercises to improve speed and accuracy.",
            },
            {
              title: "Spatial Aptitude",
              text: "Practice mentally rotating shapes and working with 2D and 3D diagrams to strengthen spatial understanding.",
            },
            {
              title: "Abstract Reasoning",
              text: "Work through non-verbal reasoning questions and focus on identifying rules, relationships and patterns.",
            },
            {
              title: "Language Aptitude",
              text: "Build vocabulary consistently and use new words in writing or conversation to improve comprehension and expression.",
            },
          ].map((item) => (
            <View
              key={item.title}
              className="mb-4 border-b border-[#EEF1F4] pb-4 last:mb-0 last:border-b-0 last:pb-0"
            >
              <Text className="text-[13px] font-bold text-[#16202A]">
                {item.title}
              </Text>

              <Text className="mt-1.5 text-[11px] leading-[18px] text-[#6B7684]">
                {item.text}
              </Text>
            </View>
          ))}
        </View>

        {/* ================================================= */}
        {/* DREAM CAREER ANALYSIS */}
        {/* ================================================= */}

        <View className="mt-7 px-5">
          <Text className="text-[19px] font-bold text-[#16202A]">
            Dream Career Analysis
          </Text>

          <Text className="mt-1 text-[13px] leading-5 text-[#6B7684]">
            Compare your current profile with each selected career goal and
            understand the next useful step.
          </Text>
        </View>

        <View className="mx-5 mt-4">
          {dreamCareers.map((career) => {
            const Icon = career.icon;

            return (
              <View
                key={career.title}
                className="mb-3 overflow-hidden rounded-2xl border border-[#E6E9ED] bg-white"
              >
                <View className="p-4">
                  <View className="flex-row items-center">
                    <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#EAF1F7]">
                      <Icon size={21} color="#1A3A5C" />
                    </View>

                    <View className="ml-3 flex-1">
                      <Text className="text-[15px] font-bold text-[#16202A]">
                        {career.title}
                      </Text>

                      <Text className="mt-1 text-[10px] text-[#9AA4AF]">
                        Assessment needed
                      </Text>
                    </View>

                    <View className="rounded-full bg-[#FFF6DF] px-2.5 py-1">
                      <Text className="text-[9px] font-bold text-[#9A6B00]">
                        Explore
                      </Text>
                    </View>
                  </View>

                  <View className="mt-4 rounded-xl bg-[#F4F6F8] p-3">
                    <Text className="text-[11px] font-bold text-[#16202A]">
                      What this means
                    </Text>

                    <Text className="mt-1.5 text-[11px] leading-[18px] text-[#6B7684]">
                      {career.nextStep}
                    </Text>
                  </View>

                  <Text className="mt-4 text-[12px] font-bold text-[#16202A]">
                    Career overview
                  </Text>

                  <Text className="mt-1.5 text-[11px] leading-[18px] text-[#6B7684]">
                    {career.description}
                  </Text>

                  <View className="mt-4">
                    <View className="mb-3">
                      <Text className="text-[10px] font-bold text-[#16202A]">
                        Education or training route
                      </Text>

                      <Text className="mt-1 text-[10px] leading-[16px] text-[#6B7684]">
                        {career.education}
                      </Text>
                    </View>

                    <View className="mb-3">
                      <Text className="text-[10px] font-bold text-[#16202A]">
                        Field outlook
                      </Text>

                      <Text className="mt-1 text-[10px] leading-[16px] text-[#6B7684]">
                        {career.outlook}
                      </Text>
                    </View>

                    <View>
                      <Text className="text-[10px] font-bold text-[#16202A]">
                        Your next focus
                      </Text>

                      <Text className="mt-1 text-[10px] leading-[16px] text-[#6B7684]">
                        {career.focus}
                      </Text>
                    </View>
                  </View>

                  <Pressable
                    onPress={() =>
                      router.push(
                        `/student/career-encyclopedia/${encodeURIComponent(
                          career.title,
                        )}`,
                      )
                    }
                    className="mt-4 flex-row items-center justify-between rounded-xl border border-[#E2E5E9] px-3 py-2.5"
                  >
                    <Text className="text-[11px] font-semibold text-[#1A3A5C]">
                      Open in Career Encyclopedia
                    </Text>

                    <ChevronRight size={15} color="#1A3A5C" />
                  </Pressable>
                </View>
              </View>
            );
          })}
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
          {visibleCareers.map((career) => {
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
        {/* PERSONALISED INSIGHT */}
        {/* ================================================= */}

        <View className="mt-7 px-5">
          <Text className="text-[19px] font-bold text-[#16202A]">
            Personalised Insight
          </Text>

          <Text className="mt-1 text-[13px] leading-5 text-[#6B7684]">
            How your assessment profile connects with your career exploration.
          </Text>
        </View>

        <View className="mx-5 mt-4 rounded-2xl border border-[#E6E9ED] bg-white p-4">
          <Text className="text-[12px] leading-[20px] text-[#4F5B68]">
            Your strong reasoning and numerical abilities can support analytical
            and problem-solving work. These strengths can be useful when
            exploring technology, data and other structured career paths.
          </Text>

          <Text className="mt-4 text-[12px] leading-[20px] text-[#4F5B68]">
            For visually focused careers, practical exposure can help you test
            whether your interests and abilities develop further through real
            projects. For writing-oriented careers, consistent reading and
            writing practice can help strengthen language and communication
            skills.
          </Text>

          <Text className="mt-4 text-[12px] leading-[20px] text-[#4F5B68]">
            Your assessment should be treated as guidance rather than a final
            decision. Use career exploration, practical activities and
            conversations with mentors or counsellors to validate your next
            steps.
          </Text>
        </View>

        {/* ================================================= */}
        {/* WHY STRONGEST MATCHES FIT */}
        {/* ================================================= */}

        <View className="mt-7 px-5">
          <Text className="text-[19px] font-bold text-[#16202A]">
            Why Your Strongest Matches Fit
          </Text>

          <Text className="mt-1 text-[13px] leading-5 text-[#6B7684]">
            Personalised context for your leading assessment-based matches.
          </Text>
        </View>

        <View className="mx-5 mt-4 rounded-2xl border border-[#E6E9ED] bg-white p-4">
          <Text className="text-[12px] leading-[20px] text-[#4F5B68]">
            Your strong numerical and analytical abilities align with careers
            that involve structured problem solving, data and logical
            decision-making.
          </Text>

          <Text className="mt-4 text-[12px] leading-[20px] text-[#4F5B68]">
            Software development can make use of these abilities through coding,
            algorithms and system design. Data-focused roles can similarly use
            numerical reasoning for analysing information and identifying
            meaningful patterns.
          </Text>

          <Text className="mt-4 text-[12px] leading-[20px] text-[#4F5B68]">
            Careers involving a combination of physical systems and technology
            may also be worth exploring when your mechanical reasoning and
            numerical abilities are considered together.
          </Text>
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
                Future Growth Explorer
              </Text>

              <Text className="mt-0.5 text-[12px] text-[#6B7684]">
                Explore how improving specific aptitudes could change your
                career trajectory.
              </Text>
            </View>
          </View>
        </View>

        <View className="mx-5 mt-4 rounded-2xl border border-[#E6E9ED] bg-white p-4">
          <Text className="text-[12px] font-bold text-[#16202A]">
            Select a skill area to improve
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 12,
              paddingRight: 10,
            }}
          >
            {dimensions.map((dimension, index) => {
              const active = selectedGrowthDimension === index;

              return (
                <Pressable
                  key={dimension.name}
                  onPress={() => {
                    setSelectedGrowthDimension(index);
                    setImprovementAmount(0);
                  }}
                  className={`mr-2 rounded-full border px-3 py-2 ${
                    active
                      ? "border-[#1A3A5C] bg-[#EAF1F7]"
                      : "border-[#D6DBE1] bg-white"
                  }`}
                >
                  <Text
                    className={`text-[10px] font-semibold ${
                      active ? "text-[#1A3A5C]" : "text-[#6B7684]"
                    }`}
                  >
                    {dimension.name}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>

          <View className="mt-4 rounded-xl bg-[#F4F6F8] p-4">
            {selectedGrowthData ? (
              <>
                <View className="flex-row items-center justify-between">
                  <View className="flex-1 pr-3">
                    <Text className="text-[14px] font-bold text-[#16202A]">
                      {selectedGrowthData.name}
                    </Text>

                    <Text className="mt-1 text-[11px] text-[#6B7684]">
                      Current score
                    </Text>
                  </View>

                  <Text className="text-[24px] font-bold text-[#1A3A5C]">
                    {selectedGrowthData.score}%
                  </Text>
                </View>

                <View className="mt-4 h-2 overflow-hidden rounded-full bg-[#DDE2E7]">
                  <View
                    className="h-full rounded-full bg-[#1A3A5C]"
                    style={{
                      width: `${selectedGrowthData.score}%`,
                    }}
                  />
                </View>

                <Text className="mt-4 text-[11px] leading-[17px] text-[#6B7684]">
                  Select an improvement amount to explore how a stronger score
                  could affect your future career recommendations.
                </Text>

                <Text className="mt-5 text-[11px] font-bold text-[#16202A]">
                  Improvement Amount
                </Text>

                <View className="mt-3 flex-row">
                  {[10, 20, 30].map((amount) => {
                    const active = improvementAmount === amount;

                    return (
                      <Pressable
                        key={amount}
                        onPress={() => setImprovementAmount(amount)}
                        className={`mr-2 rounded-full border px-3 py-2 ${
                          active
                            ? "border-[#1A3A5C] bg-[#1A3A5C]"
                            : "border-[#D6DBE1] bg-white"
                        }`}
                      >
                        <Text
                          className={`text-[10px] font-bold ${
                            active ? "text-white" : "text-[#6B7684]"
                          }`}
                        >
                          +{amount}%
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              </>
            ) : (
              <View className="items-center py-6">
                <TrendingUp size={24} color="#1A3A5C" />

                <Text className="mt-2 text-[13px] font-bold text-[#16202A]">
                  Select a skill area
                </Text>

                <Text className="mt-1 text-center text-[11px] leading-[17px] text-[#6B7684]">
                  Choose an aptitude above to explore how improvement could
                  affect your future recommendations.
                </Text>
              </View>
            )}
          </View>

          <View className="mt-3 rounded-xl border border-[#D6DBE1] bg-[#1A3A5C] p-4">
            <Text className="text-[10px] font-semibold uppercase tracking-wide text-[#BFD4E6]">
              Current Top Career Match
            </Text>

            {selectedGrowthData && improvementAmount > 0 ? (
              <>
                <Text className="mt-2 text-[18px] font-bold text-white">
                  Explore stronger career alignment
                </Text>

                <Text className="mt-1 text-[11px] leading-[17px] text-[#DCE8F2]">
                  Projected {selectedGrowthData.name} score: {projectedScore}%
                </Text>

                <View className="mt-4 rounded-xl bg-white/10 p-3">
                  <Text className="text-[10px] text-[#BFD4E6]">
                    This simulation is exploratory and does not predict career
                    success.
                  </Text>
                </View>
              </>
            ) : (
              <>
                <Text className="mt-2 text-[18px] font-bold text-white">
                  Complete tests to see
                </Text>

                <Text className="mt-1 text-[11px] leading-[17px] text-[#DCE8F2]">
                  Select a skill area and improvement amount to explore your
                  future career recommendations.
                </Text>
              </>
            )}
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

          <View className="mt-3">
            {[
              "Explain my result in simple words.",
              "What are my top career matches?",
              "What should I improve first?",
              "Which subjects should I focus on now?",
            ].map((question) => (
              <Pressable
                key={question}
                onPress={() => router.push("/student/ai")}
                className="mb-2 rounded-xl border border-[#E2E5E9] bg-[#F9FAFB] px-3 py-2.5"
              >
                <Text className="text-[11px] font-medium text-[#4F5B68]">
                  {question}
                </Text>
              </Pressable>
            ))}
          </View>

          <Pressable
            onPress={() => router.push("/student/ai")}
            className="mt-1 flex-row items-center justify-center rounded-xl border border-[#1A3A5C] py-2.5"
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
    </View>
  );
}
