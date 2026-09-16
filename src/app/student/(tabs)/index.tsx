import Navbar from "@/component/Navbar";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileText,
  UserRound,
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useState } from "react";

type DashboardState =
  "profile-incomplete" | "ready-for-assessment" | "report-ready" | "exploring";

export default function StudentDashboard() {
  const router = useRouter();
  const [first, setfirst] = useState(100)

  /*
   * ============================================================
   * CHANGE ONLY THIS VALUE TO TEST DIFFERENT DASHBOARD STATES
   * ============================================================
   */

  const dashboardState: DashboardState = "profile-incomplete";

  /*
   * ============================================================
   * DEMO DATA
   * ============================================================
   */

  const profileCompletion = 76;
  const assessmentsAvailable = 1;
  const counsellingAvailable = 1;

  const profileCompleted = profileCompletion >= 100;

  /*
   * ============================================================
   * HERO CONFIGURATION
   * ============================================================
   */

  const hero = {
    "profile-incomplete": {
      eyebrow: "GET STARTED",
      title: "Complete your profile",
      description:
        "Finish your profile to unlock assessments, counselling, and personalised career guidance.",
      button: "Continue profile",
      onPress: () => router.push("/student/profile-setup"),
    },

    "ready-for-assessment": {
      eyebrow: "YOUR NEXT STEP",
      title: "Your assessment is ready",
      description:
        "Discover your strengths, interests, and career direction through your assessment.",
      button: "Start assessment",
      onPress: () => router.push("/student/(tabs)/assessments"),
    },

    "report-ready": {
      eyebrow: "YOUR REPORT",
      title: "Your report is ready",
      description:
        "Your assessment is completed. View your personalised career report now.",
      button: "View report",
      onPress: () => router.push("/student/results"),
    },

    exploring: {
      eyebrow: "KEEP EXPLORING",
      title: "Continue your career journey",
      description:
        "Explore your results, discover careers, and find the next step that works for you.",
      button: "Explore careers",
      onPress: () => router.push("/student/career-encyclopedia"),
    },
  }[dashboardState];

  /*
   * ============================================================
   * NEXT STEP CONFIGURATION
   * ============================================================
   */

  const nextStep = {
    "profile-incomplete": {
      icon: UserRound,
      title: "Complete your profile",
      description:
        "Add the remaining details so MyAarohan can personalise your career guidance.",
      button: "Continue profile",
      onPress: () => router.push("/student/profile-setup"),
    },

    "ready-for-assessment": {
      icon: ClipboardCheck,
      title: "Take your assessment",
      description:
        "Your profile is complete. Start your assessment to discover more about your career fit.",
      button: "Start assessment",
      onPress: () => router.push("/student/(tabs)/assessments"),
    },

    "report-ready": {
      icon: FileText,
      title: "Explore your career report",
      description:
        "Review your strengths, career fit, and personalised recommendations.",
      button: "View report",
      onPress: () => router.push("/student/results"),
    },

    exploring: {
      icon: Compass,
      title: "Discover career options",
      description:
        "Browse careers, pathways, skills, and real-world opportunities.",
      button: "Open Career Encyclopedia",
      onPress: () => router.push("/student/career-encyclopedia"),
    },
  }[dashboardState];

  const NextStepIcon = nextStep.icon;

  return (
    <View className="flex-1 bg-[#F4F6F8]">
      <StatusBar style="dark" />

      {/* ========================================================
          NAVBAR
      ======================================================== */}

      <Navbar />

      <ScrollView
        className="flex-1"
        contentContainerClassName="px-4 pt-4 pb-6"
        showsVerticalScrollIndicator={false}
      >
        {/* ======================================================
            HERO
        ====================================================== */}

        <View className="overflow-hidden rounded-2xl bg-[#1A3A5C] px-4 py-5">
          <Text className="text-[10px] font-semibold uppercase tracking-[1px] text-white/65">
            {hero.eyebrow}
          </Text>

          <Text className="mt-2 text-[20px] font-bold leading-[26px] text-white">
            {hero.title}
          </Text>

          <Text className="mt-2 max-w-[330px] text-[12.5px] leading-[19px] text-white/75">
            {hero.description}
          </Text>

          <Pressable
            onPress={hero.onPress}
            className="mt-4 flex-row items-center self-start rounded-[10px] bg-white px-4 py-2.5"
          >
            <Text className="text-[12px] font-semibold text-[#1A3A5C]">
              {hero.button}
            </Text>

            <ArrowRight
              size={14}
              color="#1A3A5C"
              strokeWidth={2.5}
              style={{ marginLeft: 6 }}
            />
          </Pressable>
        </View>

        {/* ======================================================
            STATUS SUMMARY
        ====================================================== */}

        <View className="mt-4 overflow-hidden rounded-xl border border-[#E2E5E9] bg-white">
          {/* PROFILE */}
          {!profileCompleted && (
            <>
              <Pressable
                onPress={() => router.push("/student/profile-setup")}
                className="flex-row items-center px-3.5 py-3.5"
              >
                <View className="h-9 w-9 items-center justify-center rounded-full bg-[#EAF1F7]">
                  <UserRound size={18} color="#1A3A5C" strokeWidth={2.2} />
                </View>

                <View className="ml-3 flex-1">
                  <Text className="text-[11px] text-[#6B7684]">Profile</Text>

                  <Text className="mt-0.5 text-[13px] font-semibold text-[#16202A]">
                    {profileCompletion}% complete
                  </Text>
                </View>

                <View className="mr-3 h-1.5 w-16 overflow-hidden rounded-full bg-[#E6E9ED]">
                  <View
                    className="h-full rounded-full bg-[#1A3A5C]"
                    style={{
                      width: `${profileCompletion}%`,
                    }}
                  />
                </View>

                <ArrowRight size={16} color="#9AA4AF" strokeWidth={2} />
              </Pressable>

              <View className="ml-3.5 h-px bg-[#E6E9ED]" />
            </>
          )}

          {/* ASSESSMENTS */}

          <Pressable
            disabled={!profileCompleted}
            onPress={() => router.push("/student/(tabs)/assessments")}
            className="flex-row items-center px-3.5 py-3.5"
          >
            <View
              className={`h-9 w-9 items-center justify-center rounded-full ${
                profileCompleted ? "bg-[#EAF1F7]" : "bg-[#F1F3F5]"
              }`}
            >
              <ClipboardCheck
                size={18}
                color={profileCompleted ? "#1A3A5C" : "#9AA4AF"}
                strokeWidth={2.2}
              />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-[11px] text-[#6B7684]">Assessments</Text>

              <Text
                className={`mt-0.5 text-[13px] font-semibold ${
                  profileCompleted ? "text-[#16202A]" : "text-[#9AA4AF]"
                }`}
              >
                {profileCompleted
                  ? `${assessmentsAvailable} available`
                  : "Complete profile first"}
              </Text>
            </View>

            {profileCompleted && (
              <ArrowRight size={16} color="#9AA4AF" strokeWidth={2} />
            )}
          </Pressable>

          <View className="ml-3.5 h-px bg-[#E6E9ED]" />

          {/* COUNSELLING */}

          <Pressable
            disabled={!profileCompleted}
            onPress={() => router.push("/student/counselling")}
            className="flex-row items-center px-3.5 py-3.5"
          >
            <View
              className={`h-9 w-9 items-center justify-center rounded-full ${
                profileCompleted ? "bg-[#EAF1F7]" : "bg-[#F1F3F5]"
              }`}
            >
              <CalendarDays
                size={18}
                color={profileCompleted ? "#1A3A5C" : "#9AA4AF"}
                strokeWidth={2.2}
              />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-[11px] text-[#6B7684]">Counselling</Text>

              <Text
                className={`mt-0.5 text-[13px] font-semibold ${
                  profileCompleted ? "text-[#16202A]" : "text-[#9AA4AF]"
                }`}
              >
                {profileCompleted
                  ? `${counsellingAvailable} available`
                  : "Complete profile first"}
              </Text>
            </View>

            {profileCompleted && (
              <ArrowRight size={16} color="#9AA4AF" strokeWidth={2} />
            )}
          </Pressable>
        </View>

        {/* ======================================================
            YOUR NEXT STEP
        ====================================================== */}

        <View className="mt-6">
          <Text className="text-[16px] font-bold text-[#16202A]">
            Your next step
          </Text>

          <Text className="mt-1 text-[11.5px] text-[#6B7684]">
            Based on your current progress
          </Text>

          <View className="mt-3 rounded-xl border border-[#E2E5E9] bg-white p-4">
            <View className="flex-row items-start">
              <View className="h-10 w-10 items-center justify-center rounded-full bg-[#EAF1F7]">
                <NextStepIcon size={19} color="#1A3A5C" strokeWidth={2.2} />
              </View>

              <View className="ml-3 flex-1">
                <Text className="text-[13px] font-semibold text-[#16202A]">
                  {nextStep.title}
                </Text>

                <Text className="mt-1 text-[11.5px] leading-[18px] text-[#6B7684]">
                  {nextStep.description}
                </Text>
              </View>
            </View>

            <Pressable
              onPress={nextStep.onPress}
              className="mt-4 flex-row items-center justify-center rounded-[10px] bg-[#1A3A5C] py-3"
            >
              <Text className="text-[12px] font-semibold text-white">
                {nextStep.button}
              </Text>

              <ArrowRight
                size={15}
                color="#FFFFFF"
                strokeWidth={2.5}
                style={{ marginLeft: 6 }}
              />
            </Pressable>
          </View>
        </View>

        {/* ======================================================
            AVAILABLE TOOLS
            Only shown before profile completion.
            These don't require profile completion.
        ====================================================== */}

        {!profileCompleted && (
          <View className="mt-6">
            <Text className="text-[15px] font-bold text-[#16202A]">
              Explore MyAarohan
            </Text>

            <Text className="mt-1 text-[11.5px] text-[#6B7684]">
              You can explore these tools while completing your profile.
            </Text>

            <View className="mt-3 flex-row">
              {/* Career Encyclopedia */}
              <Pressable
                onPress={() => router.push("/student/career-encyclopedia")}
                className="mr-2 flex-1 rounded-xl border border-[#E2E5E9] bg-white p-3.5"
              >
                <View className="h-9 w-9 items-center justify-center rounded-full bg-[#EAF1F7]">
                  <Compass size={18} color="#1A3A5C" strokeWidth={2.2} />
                </View>

                <Text className="mt-3 text-[12px] font-semibold text-[#16202A]">
                  Career Encyclopedia
                </Text>

                <Text className="mt-1 text-[10.5px] leading-[16px] text-[#6B7684]">
                  Explore careers and pathways.
                </Text>
              </Pressable>

              {/* Plans */}
              <Pressable
                onPress={() => router.push("/student/plans")}
                className="ml-1 mr-1 flex-1 rounded-xl border border-[#E2E5E9] bg-white p-3.5"
              >
                <View className="h-9 w-9 items-center justify-center rounded-full bg-[#EAF1F7]">
                  <BarChart3 size={18} color="#1A3A5C" strokeWidth={2.2} />
                </View>

                <Text className="mt-3 text-[12px] font-semibold text-[#16202A]">
                  Plans
                </Text>

                <Text className="mt-1 text-[10.5px] leading-[16px] text-[#6B7684]">
                  View available plans.
                </Text>
              </Pressable>

              {/* Support */}
              <Pressable
                onPress={() => router.push("/student/student-support")}
                className="ml-2 flex-1 rounded-xl border border-[#E2E5E9] bg-white p-3.5"
              >
                <View className="h-9 w-9 items-center justify-center rounded-full bg-[#EAF1F7]">
                  <CheckCircle2 size={18} color="#1A3A5C" strokeWidth={2.2} />
                </View>

                <Text className="mt-3 text-[12px] font-semibold text-[#16202A]">
                  Support
                </Text>

                <Text className="mt-1 text-[10.5px] leading-[16px] text-[#6B7684]">
                  Get help when needed.
                </Text>
              </Pressable>
            </View>
          </View>
        )}

        {/* ======================================================
            COMPLETED PROFILE STATE
        ====================================================== */}

        {profileCompleted && dashboardState === "exploring" && (
          <View className="mt-3 flex-row items-center rounded-xl border border-[#E2E5E9] bg-white px-4 py-3.5">
            <View className="h-9 w-9 items-center justify-center rounded-full bg-[#E6F7EE]">
              <CheckCircle2 size={18} color="#1B8354" strokeWidth={2.2} />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-[12.5px] font-semibold text-[#16202A]">
                You're all caught up
              </Text>

              <Text className="mt-1 text-[11px] text-[#6B7684]">
                No immediate actions are pending.
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
