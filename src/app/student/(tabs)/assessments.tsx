import Navbar from "@/component/Navbar";
import { useNavigation, useRouter } from "expo-router";
import {
  CheckSquare,
  ChevronRight,
  ClipboardList,
  Heart,
  UserRound
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Assessments() {
  const credit = 1;
  const navigate = useNavigation() as any;
  const router = useRouter();

  const attempts = [
    {
      id: 1,
      date: "20 Aug 2026, 5:08 PM",
      result: "Aptitude 86% · STEM - Mechanical/Civil",
    },
    {
      id: 2,
      date: "18 Aug 2026, 4:32 PM",
      result: "Aptitude 79% · STEM - Computer Science",
    },
    {
      id: 3,
      date: "15 Aug 2026, 6:15 PM",
      result: "Aptitude 91% · STEM - Engineering",
    },
    {
      id: 4,
      date: "12 Aug 2026, 3:47 PM",
      result: "Aptitude 74% · Commerce - Finance/Business",
    },
    {
      id: 5,
      date: "08 Aug 2026, 5:26 PM",
      result: "Aptitude 82% · Humanities - Psychology",
    },
    {
      id: 6,
      date: "04 Aug 2026, 4:11 PM",
      result: "Aptitude 88% · STEM - Mechanical/Civil",
    },
  ];
  return (
    <View className="flex-1 bg-[#F4F6F8]">
      <Navbar />
      <View className="flex-1 px-[18px] pt-4 pb-6">
        {/* Page Header */}
        <View className="mb-4">
          <Text className="text-[20px] font-extrabold text-[#16202A]">
            Assessments
          </Text>

          <Text className="mt-1 text-[12px] text-[#6B7684]">
            Take a new attempt or revisit a past one
          </Text>
        </View>

        {/* Start New Attempt Card */}
        <View className="mb-[22px] rounded-[18px] border border-[#E3DDF9] bg-[#e7f3ff] p-[18px]">
          {/* Card Header */}
          <View className="mb-4 flex-row items-center">
            <View className="h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-[#1A3A5C]">
              <CheckSquare size={22} color="#FFFFFF" strokeWidth={2} />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-[15px] font-extrabold text-[#16202A]">
                Start a new attempt
              </Text>

              <Text className="mt-0.5 text-[11.5px] text-[#6B7684]">
                Same 3 modules, fresh results
              </Text>
            </View>
          </View>

          {/* Modules */}
          <View className="mb-4 flex-row gap-2">
            {/* Aptitude */}
            <View className="flex-1 items-center rounded-xl border border-[#EEE BFA] bg-white px-2 py-[11px]">
              <View className="mb-1.5 h-[26px] w-[26px] items-center justify-center rounded-lg bg-[#d1e6fc72]">
                <ClipboardList size={14} color="#1A3A5C" />
              </View>

              <Text className="text-center text-[10px] font-bold leading-[13px] text-[#16202A]">
                Aptitude
              </Text>

              <Text className="mt-0.5 text-[9px] text-[#1A3A5C]">45 min</Text>
            </View>

            {/* Personality */}
            <View className="flex-1 items-center rounded-xl border border-[#EEEBFA] bg-white px-2 py-[11px]">
              <View className="mb-1.5 h-[26px] w-[26px] items-center justify-center rounded-lg bg-[#c6dffa72]">
                <UserRound size={14} color="#1A3A5C" />
              </View>

              <Text className="text-center text-[10px] font-bold leading-[13px] text-[#16202A]">
                Personality
              </Text>

              <Text className="mt-0.5 text-[9px] text-[#9AA4AF]">10 min</Text>
            </View>

            {/* Interest */}
            <View className="flex-1 items-center rounded-xl border border-[#EEEBFA] bg-white px-2 py-[11px]">
              <View className="mb-1.5 h-[26px] w-[26px] items-center justify-center rounded-lg bg-[#c6dffa72]">
                <Heart size={14} color="#1A3A5C" />
              </View>

              <Text className="text-center text-[10px] font-bold leading-[13px] text-[#16202A]">
                Interest
              </Text>

              <Text className="mt-0.5 text-[9px] text-[#9AA4AF]">30 min</Text>
            </View>
          </View>

          {/* Credits */}
          <View className="mb-3.5 flex-row items-center justify-between px-0.5">
            <Text className="text-[11.5px] text-[#6B7684]">
              You have{" "}
              <Text className="font-extrabold text-[#16202A]">{credit}</Text>{" "}
              test credits
            </Text>

            <Pressable>
              <Text className="text-[11px] font-bold text-[#1A3A5C]]">
                View plans
              </Text>
            </Pressable>
          </View>

          {/* Start Button */}
          <Pressable
            onPress={()=>router.push('/student/assessments/instructions')}
            className={`w-full flex-row items-center justify-center rounded-xl ${credit > 0 ? "bg-[#1A3A5C]" : "bg-[#bfc9d4]"}  py-3.5`}
          >
            <Text
              className={`text-[13.5px] font-bold ${credit > 0 ? "text-white" : " text-[#284c73]"}`}
            >
              Start assessment
            </Text>

            <ChevronRight size={15} color="#9AA4AF" strokeWidth={2.5} />
          </Pressable>
        </View>

        {/* Attempt History Header */}
        <View className="mb-3 flex-row items-center justify-between">
          <Text className="text-[11.5px] font-bold uppercase tracking-[0.5px] text-[#9AA4AF]">
            Attempt history
          </Text>

          <Pressable>
            <Text className="text-[11.5px] font-bold text-[#1A3A5C]">
              View all
            </Text>
          </Pressable>
        </View>

        {/* ScrollArea  */}
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Attempt Card */}
          {attempts.map((attempt) => (
            <Pressable
              key={attempt.id}
              className="mb-2.5 flex-row items-center rounded-[14px] border border-[#E2E5E9] bg-white px-3.5 py-[13px]"
              onPress={() => {
                console.log("Selected attempt:", attempt.id);
              }}
            >
              {/* Attempt Number */}
              <View className="h-9 w-9 items-center justify-center rounded-[11px] bg-[#E6F7EE]">
                <Text className="text-[11px] font-extrabold text-[#1B8354]">
                  #{attempt.id}
                </Text>
              </View>

              {/* Attempt Info */}
              <View className="ml-3 flex-1">
                <Text className="text-[12.5px] font-bold text-[#16202A]">
                  {attempt.date}
                </Text>

                <Text
                  className="mt-0.5 text-[11px] text-[#6B7684]"
                  numberOfLines={1}
                >
                  {attempt.result}
                </Text>
              </View>

              <ChevronRight size={15} color="#9AA4AF" strokeWidth={2} />
            </Pressable>
          ))}

          {/* Empty Hint */}
          <Text className="py-2 text-center text-[11px] text-[#1A3A5C]">
            View More
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
