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
import FloatingButton from "@/component/FloatingButton";
import SummaryCards from "@/component/results/SummaryCards";
import ProfileCluster from "@/component/results/ProfileCluster";
import DreamCareerCards from "@/component/results/DreamCareerCards";
import GrowthExplorer from "@/component/results/GrowthExplorer";

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

const weaknesses=[
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
          ]

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





export default function DetailedResult() {
  const { attemptId } = useLocalSearchParams<{
    attemptId: string;
  }>();

  const router = useRouter();

  

  return (
    <View className="flex-1 bg-[#F4F6F8]">
      <Navbar />
           <FloatingButton/>

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
        {/* Summary Cards */}
       
              <SummaryCards/>

      
        {/* APTITUDE PROFILE */}

        <View className="mt-7 px-5">
          <Text className="text-[19px] font-bold text-[#16202A]">
            Your Aptitude Profile
          </Text>

          <Text className="mt-1 text-[13px] leading-5 text-[#6B7684]">
            Your performance across seven core aptitude dimensions.
          </Text>
        </View>

        <View className="mx-5 mt-4 rounded-2xl border border-[#E6E9ED] bg-white p-4 ">
          <AptitudeRadar dimensions={dimensions}/>
        </View>

        {/* STRENGTHS + IMPROVEMENTS */}
        

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

        {/* PERSONALITY TRAIT */}

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

        <ProfileCluster/>

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
          {weaknesses.map((item) => (
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
 
 {/* DreamCareerAnalysis  */}
     <DreamCareerCards/>

      

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

        {/* GROWTH EXPLORER */}
                <GrowthExplorer/>


        {/* RECOMMENDATION */}
    
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
      
        {/* FOOTER */}
     

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
