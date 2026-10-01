import AssessmentCard from "@/component/dashboard/AssessmentCard";
import CounsellingCard from "@/component/dashboard/CounsellingCard";
import GrowthKundliCard from "@/component/dashboard/GrowthKundliCard";
import HelpfulActionsCard from "@/component/dashboard/HelpfulActionsCard";
import LatestArticlesCard from "@/component/dashboard/LatestArticlesCard";
import NoticeBoard from "@/component/dashboard/NoticeBoard";
import StudentInformationCard from "@/component/dashboard/StudentInfoCard";
import Navbar from "@/component/Navbar";
import { ScrollView, View } from "react-native";

export default function StudentDashboard() {
  return (
    <View className="flex-1 bg-[#F4F6F8]">
      {/* ───────────────── Header ───────────────── */}
      <Navbar />

      {/* ───────────────── MainContent ───────────────── */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingTop: 10,
          paddingBottom: 24,
        }}
      >
        <View className="gap-[14px]">
          <StudentInformationCard />
          <AssessmentCard />
          <GrowthKundliCard />
          <CounsellingCard />
          <HelpfulActionsCard />
          <NoticeBoard />
          <LatestArticlesCard />
        </View>
      </ScrollView>
    </View>
  );
}
