import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  GraduationCap,
  LibraryBig,
  Menu,
  MessagesSquare,
} from "lucide-react-native";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState<"assessments" | "quickActions">(
    "assessments",
  );

  const navigate = useNavigation() as any;

  return (
    <SafeAreaView className="flex-1 bg-[#F4F6F8]">
      <StatusBar style="dark" />

      {/* Header */}
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
          <View className="h-[34px] w-[34px] items-center justify-center rounded-full bg-[#1A3A5C]">
            <Text className="text-[14px] font-semibold text-white">J</Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-4 pt-[18px] pb-6"
        showsVerticalScrollIndicator={false}
      >
        {/* greeting  */}

        <Text className="text-[19px] font-bold text-[#16202A]">
          Hi, John 👋
        </Text>

        <Text className="mt-[2px] text-[12.5px] text-[#6B7684]">
          Here's where things stand
        </Text>

        <View className="mt-5 overflow-hidden rounded-2xl bg-[#1A3A5C] px-4 py-5">
          <Text className="text-[10px] font-semibold uppercase tracking-[1px] text-white/70">
            Next up
          </Text>

          <Text className="mt-2 text-[19px] font-bold text-white">
            Your report is ready
          </Text>

          <Text className="mt-2 text-[12.5px] leading-[19px] text-white/75">
            All 3 assessments are complete. View your personalised career report
            now.
          </Text>

          <Pressable
            className="mt-4 self-start rounded-[10px] bg-white px-4 py-2.5"
            onPress={() => {
              console.log("View report pressed");
            }}
          >
            <Text className="text-[12px] font-semibold text-[#1A3A5C]">
              View report
            </Text>
          </Pressable>
        </View>

        <View className="mt-4 flex-row overflow-hidden rounded-xl border border-[#E6E9ED] bg-white">
          {/* Profile */}
          <View className="flex-1 px-3 py-3">
            <Text className="text-[10px] text-[#6B7684]">Profile</Text>

            <Text className="mt-1 text-[12px] font-semibold text-[#16202A]">
              100% complete
            </Text>
          </View>

          {/* Divider */}
          <View className="my-3 w-[1px] bg-[#E6E9ED]" />

          {/* Assessments */}
          <View className="flex-1 px-3 py-3">
            <Text className="text-[10px] text-[#6B7684]">Assessments</Text>

            <Text className="mt-1 text-[12px] font-semibold text-[#16202A]">
              0 test credits
            </Text>
          </View>

          {/* Divider */}
          <View className="my-3 w-[1px] bg-[#E6E9ED]" />

          {/* Counselling */}
          <View className="flex-1 px-3 py-3">
            <Text className="text-[10px] text-[#6B7684]">Counselling</Text>

            <Text className="mt-1 text-[12px] font-semibold text-[#1B8354]">
              Eligible
            </Text>
          </View>
        </View>

        <View className="mt-5 flex-row rounded-[10px] border border-[#E6E9ED] bg-white p-1">
          <Pressable
            onPress={() => setActiveTab("assessments")}
            className={`flex-1 items-center rounded-[7px] ${activeTab === "assessments" ? "bg-[#1A3A5C]" : "bg-white"} py-2.5`}
          >
            <Text
              className={`text-[12px] font-semibold ${activeTab === "assessments" ? "text-white" : "text-[#6B7684]"}`}
            >
              Assessments
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setActiveTab("quickActions")}
            className={`flex-1 items-center rounded-[7px] ${activeTab === "quickActions" ? "bg-[#1A3A5C]" : "bg-white"} py-2.5`}
          >
            <Text
              className={`text-[12px] font-semibold ${activeTab === "quickActions" ? "text-white" : "text-[#6B7684]"}`}
            >
              Quick actions
            </Text>
          </Pressable>
        </View>

        {activeTab === "assessments" && (
          <>
            <View className="mt-5 flex-row items-center justify-between">
              <View>
                <Text className="text-[16px] font-bold text-[#16202A]">
                  Your assessments
                </Text>

                <Text className="mt-1 text-[11.5px] text-[#6B7684]">
                  Your completed assessments
                </Text>
              </View>

              <Pressable>
                <Text className="text-[11.5px] font-semibold text-[#1A3A5C]">
                  View all
                </Text>
              </Pressable>
            </View>
            <View className="mt-3 rounded-xl border border-[#E6E9ED] bg-white px-3.5 py-3.5">
              <View className="flex-row items-center justify-between">
                <View className="flex-1 pr-3">
                  <Text className="text-[14px] font-semibold text-[#16202A]">
                    Aptitude Test
                  </Text>

                  <Text className="mt-1 text-[11px] text-[#6B7684]">
                    45 min · Logic & patterns
                  </Text>
                </View>

                <View className="rounded-full bg-[#E6F7EE] px-2.5 py-1">
                  <Text className="text-[10px] font-semibold text-[#1B8354]">
                    Done
                  </Text>
                </View>
              </View>
            </View>
            <View className="mt-3 rounded-xl border border-[#E6E9ED] bg-white px-3.5 py-3.5">
              <View className="flex-row items-center justify-between">
                <View className="flex-1 pr-3">
                  <Text className="text-[14px] font-semibold text-[#16202A]">
                    Personality Test
                  </Text>

                  <Text className="mt-1 text-[11px] text-[#6B7684]">
                    10 min · Habits & workstyle
                  </Text>
                </View>

                <View className="rounded-full bg-[#E6F7EE] px-2.5 py-1">
                  <Text className="text-[10px] font-semibold text-[#1B8354]">
                    Done
                  </Text>
                </View>
              </View>
            </View>
            <View className="mt-3 rounded-xl border border-[#E6E9ED] bg-white px-3.5 py-3.5">
              <View className="flex-row items-center justify-between">
                <View className="flex-1 pr-3">
                  <Text className="text-[14px] font-semibold text-[#16202A]">
                    Interest Inventory
                  </Text>

                  <Text className="mt-1 text-[11px] text-[#6B7684]">
                    30 min · Activities you enjoy
                  </Text>
                </View>

                <View className="rounded-full bg-[#E6F7EE] px-2.5 py-1">
                  <Text className="text-[10px] font-semibold text-[#1B8354]">
                    Done
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}

        {activeTab === "quickActions" && (
          <View className="mt-6">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-[16px] font-bold text-[#16202A]">
                  Quick actions
                </Text>

                <Text className="mt-1 text-[11.5px] text-[#6B7684]">
                  Everything you need, in one place
                </Text>
              </View>
            </View>

            {/* Career Encyclopedia */}
            <Pressable
              className="mt-3 flex-row items-center rounded-xl border border-[#E6E9ED] bg-white px-3.5 py-3.5"
              onPress={() => console.log("Career Encyclopedia")}
            >
              <View className="h-10 w-10 items-center justify-center rounded-[10px] bg-[#EAF1F7]">
                <LibraryBig size={19} />
              </View>

              <View className="ml-3 flex-1">
                <Text className="text-[13px] font-semibold text-[#16202A]">
                  Career Encyclopedia
                </Text>

                <Text className="mt-1 text-[11px] text-[#6B7684]">
                  Explore careers & pathways
                </Text>
              </View>

              <Text className="text-[20px] text-[#9AA4AF]">›</Text>
            </Pressable>

            {/* Student Support */}
            <Pressable
              className="mt-2.5 flex-row items-center rounded-xl border border-[#E6E9ED] bg-white px-3.5 py-3.5"
              onPress={() => console.log("Student Support")}
            >
              <View className="h-10 w-10 items-center justify-center rounded-[10px] bg-[#EAF1F7]">
                <MessagesSquare size={19} strokeWidth={3} />
              </View>

              <View className="ml-3 flex-1">
                <Text className="text-[13px] font-semibold text-[#16202A]">
                  Student Support
                </Text>

                <Text className="mt-1 text-[11px] text-[#6B7684]">
                  Get help anytime
                </Text>
              </View>

              <Text className="text-[20px] text-[#9AA4AF]">›</Text>
            </Pressable>

            {/* Counselling Sessions */}
            <Pressable
              className="mt-2.5 flex-row items-center rounded-xl border border-[#E6E9ED] bg-white px-3.5 py-3.5"
              onPress={() => console.log("Counselling Sessions")}
            >
              <View className="h-10 w-10 items-center justify-center rounded-[10px] bg-[#EAF1F7]">
                <GraduationCap />
              </View>

              <View className="ml-3 flex-1">
                <Text className="text-[13px] font-semibold text-[#16202A]">
                  Counselling Sessions
                </Text>

                <Text className="mt-1 text-[11px] text-[#6B7684]">
                  Book mentorship
                </Text>
              </View>

              <Text className="text-[20px] text-[#9AA4AF]">›</Text>
            </Pressable>
          </View>
        )}

        <View className="mt-5 mb-0 flex-row items-center rounded-xl border border-[#E2E5E9] bg-white px-3.5 py-3.5">
          <View className="h-10 w-10 items-center justify-center rounded-full bg-[#EAF1F7]">
            <Text className="text-[17px]">🎓</Text>
          </View>

          <View className="ml-3 flex-1 pr-2">
            <Text className="text-[13px] font-semibold text-[#16202A]">
              1 mentorship session available
            </Text>

            <Text className="mt-1 text-[11px] text-[#6B7684]">
              Get personalised guidance from a counsellor
            </Text>
          </View>

          <Pressable
            onPress={() => console.log("View plans")}
            className="rounded-[9px] bg-[#1A3A5C] px-3 py-2"
          >
            <Text className="text-[11px] font-semibold text-white">
              View plans
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
