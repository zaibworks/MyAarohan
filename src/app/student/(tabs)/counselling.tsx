import { router, useNavigation } from "expo-router";
import {
  Calendar,
  CalendarDays,
  CalendarPlus,
  ChevronRight,
  Headphones,
  History,
  Menu,
  Plus,
  ShieldCheck,
  Ticket,
} from "lucide-react-native";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/component/Navbar";

type SessionType = "mentorship" | "expert";
type ActionType = "book" | "sessions";

const dates = [
  { day: "TODAY", number: "25" },
  { day: "WED", number: "26" },
  { day: "THU", number: "27" },
  { day: "FRI", number: "28" },
  { day: "SAT", number: "29" },
];

const timeSlots = [
  { time: "10:00 AM", disabled: false },
  { time: "11:30 AM", disabled: false },
  { time: "01:00 PM", disabled: false },
  { time: "03:30 PM", disabled: false },
  { time: "05:00 PM", disabled: false },
  { time: "06:30 PM", disabled: true },
];

export default function Mentorship() {
  const [sessionType, setSessionType] = useState<SessionType>("mentorship");

  const [action, setAction] = useState<ActionType>("book");

  const [selectedDate, setSelectedDate] = useState("TODAY");

  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  const [toast, setToast] = useState("");

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2200);
  };

  const handleSessionType = (type: SessionType) => {
    setSessionType(type);

    if (type === "expert") {
      showToast("Expert counselling selected");
    } else {
      showToast("Mentorship session selected");
    }
  };

  const handleDate = (day: string) => {
    setSelectedDate(day);
    showToast(`${day} selected`);
  };

  const handleTime = (time: string) => {
    setSelectedTime(time);
  };
  const navigate = useNavigation() as any;

  return (
    <View 
    className="flex-1 bg-[#F4F6F8]">
      {/* Top Bar */}

           <Navbar/>

      {/* Scrollable Content */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 16,
          paddingBottom: 24,
        }}
      >
        <View className="bg-[#F4F6F8] pr-4 pb-3 pt-5">
          <Text className="text-[24px] font-bold tracking-[-0.4px] text-[#16202A]">
            Mentorship
          </Text>
        </View>

        {/* Intro */}
        <View className="mb-[14px]">
          <Text className="mb-1.5 text-[17px] font-bold leading-[22px] text-[#16202A]">
            Career guidance, when you need it.
          </Text>

          <Text className="max-w-[340px] text-[12.5px] leading-[19px] text-[#6B7684]">
            Use your report to book mentorship or expert counselling.
          </Text>
        </View>

        {/* Session Type Switcher */}
        <View className="mb-[13px] flex-row rounded-[13px] border border-[#E6E9ED] bg-white p-1">
          <Pressable
            onPress={() => handleSessionType("mentorship")}
            className={`flex-1 flex-row items-center justify-center rounded-[9px] px-2 py-2.5 ${
              sessionType === "mentorship" ? "bg-[#1A3A5C]" : "bg-transparent"
            }`}
          >
            <Headphones
              size={17}
              color={sessionType === "mentorship" ? "#FFFFFF" : "#6B7684"}
              strokeWidth={2}
            />

            <Text
              className={`ml-[7px] text-[12px] font-semibold ${
                sessionType === "mentorship" ? "text-white" : "text-[#6B7684]"
              }`}
            >
              Mentorship Session
            </Text>
          </Pressable>

          <Pressable
            onPress={() => handleSessionType("expert")}
            className={`flex-1 flex-row items-center justify-center rounded-[9px] px-2 py-2.5 ${
              sessionType === "expert" ? "bg-[#1A3A5C]" : "bg-transparent"
            }`}
          >
            <ShieldCheck
              size={17}
              color={sessionType === "expert" ? "#FFFFFF" : "#6B7684"}
              strokeWidth={2}
            />

            <Text
              className={`ml-[7px] text-[12px] font-semibold ${
                sessionType === "expert" ? "text-white" : "text-[#6B7684]"
              }`}
            >
              Expert Session
            </Text>
          </Pressable>
        </View>

        {/* Available Credit */}
        <View className="mb-3 flex-row items-center gap-3 rounded-[15px] border border-[#E6E9ED] bg-white px-[14px] py-[13px]">
          <View className="h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-[#EAF1F7]">
            <Ticket size={20} color="#1A3A5C" strokeWidth={2} />
          </View>

          <View className="flex-1">
            <Text className="mb-[3px] text-[12.5px] font-bold text-[#16202A]">
              Available sessions
            </Text>

            <Text className="text-[11px] text-[#6B7684]">
              {sessionType === "mentorship"
                ? "Mentorship sessions remaining"
                : "Expert sessions remaining"}
            </Text>
          </View>

          <View className="h-[34px] min-w-[34px] items-center justify-center rounded-[10px] bg-[#E6F7EE] px-2">
            <Text className="text-[14px] font-extrabold text-[#1B8354]">
              {sessionType === "mentorship" ? "1" : "0"}
            </Text>
          </View>
        </View>

        {/* Plans */}
        <Pressable
          onPress={() => {
            router.push("/student/plans");
          }}
          className="mb-4 w-full flex-row items-center gap-[9px] rounded-[12px] border border-[#E6E9ED] bg-white px-[13px] py-[11px]"
        >
          <Plus size={17} color="#1A3A5C" strokeWidth={2.2} />

          <Text className="text-[12px] font-bold text-[#1A3A5C]">
            View counselling plans
          </Text>

          <View className="flex-1" />

          <ChevronRight size={16} color="#1A3A5C" strokeWidth={2} />
        </Pressable>

        {/* Action Tabs */}
        <View className="mb-[14px] flex-row gap-2">
          <Pressable
            onPress={() => setAction("book")}
            className={`flex-1 flex-row items-center justify-center gap-[7px] rounded-[12px] border px-2 py-2.5 ${
              action === "book"
                ? "border-[#1A3A5C] bg-[#EAF1F7]"
                : "border-[#E6E9ED] bg-white"
            }`}
          >
            <CalendarPlus
              size={16}
              color={action === "book" ? "#1A3A5C" : "#6B7684"}
              strokeWidth={2}
            />

            <Text
              className={`text-[11.5px] font-bold ${
                action === "book" ? "text-[#1A3A5C]" : "text-[#6B7684]"
              }`}
            >
              Book Session
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setAction("sessions")}
            className={`flex-1 flex-row items-center justify-center gap-[7px] rounded-[12px] border px-2 py-2.5 ${
              action === "sessions"
                ? "border-[#1A3A5C] bg-[#EAF1F7]"
                : "border-[#E6E9ED] bg-white"
            }`}
          >
            <History
              size={16}
              color={action === "sessions" ? "#1A3A5C" : "#6B7684"}
              strokeWidth={2}
            />

            <Text
              className={`text-[11.5px] font-bold ${
                action === "sessions" ? "text-[#1A3A5C]" : "text-[#6B7684]"
              }`}
            >
              My Sessions
            </Text>
          </Pressable>
        </View>

        {/* BOOK SESSION */}
        {action === "book" && (
          <View className="mb-[14px] rounded-[16px] border border-[#E6E9ED] bg-white p-[15px]">
            {/* Section Heading */}
            <View className="mb-[5px] flex-row items-center gap-2">
              <CalendarDays size={18} color="#1A3A5C" strokeWidth={2} />

              <Text className="text-[14px] font-bold text-[#16202A]">
                Select Your Session
              </Text>
            </View>

            <Text className="mb-[14px] text-[11.5px] leading-[17px] text-[#6B7684]">
              Select an available date and time slot to book your career
              mentorship. You'll be assigned to an available counselor.
            </Text>

            {/* Available Dates */}
            <Text className="mb-[7px] text-[11px] font-bold text-[#6B7684]">
              Available dates
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mb-[14px]"
            >
              <View className="flex-row gap-2">
                {dates.map((date) => {
                  const isActive = selectedDate === date.day;

                  return (
                    <Pressable
                      key={date.day}
                      onPress={() => handleDate(date.day)}
                      className={`min-w-[62px] rounded-[11px] border px-1.5 py-2 text-center ${
                        isActive
                          ? "border-[#1A3A5C] bg-[#1A3A5C]"
                          : "border-[#E6E9ED] bg-white"
                      }`}
                    >
                      <Text
                        className={`mb-[3px] text-center text-[10px] ${
                          isActive ? "text-white" : "text-[#9AA4AF]"
                        }`}
                      >
                        {date.day}
                      </Text>

                      <Text
                        className={`text-center text-[14px] font-bold ${
                          isActive ? "text-white" : "text-[#16202A]"
                        }`}
                      >
                        {date.number}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </ScrollView>

            {/* Available Time Slots */}
            <Text className="mb-[7px] text-[11px] font-bold text-[#6B7684]">
              Available time slots
            </Text>

            <View className="mb-[13px] flex-row flex-wrap gap-2">
              {timeSlots.map((slot) => {
                const isActive = selectedTime === slot.time;

                return (
                  <Pressable
                    key={slot.time}
                    disabled={slot.disabled}
                    onPress={() => handleTime(slot.time)}
                    className={`w-[31.5%] rounded-[10px] border px-1 py-[9px] ${
                      slot.disabled
                        ? "border-[#E6E9ED] bg-white opacity-40"
                        : isActive
                          ? "border-[#1A3A5C] bg-[#EAF1F7]"
                          : "border-[#E6E9ED] bg-white"
                    }`}
                  >
                    <Text
                      className={`text-center text-[10.5px] ${
                        slot.disabled
                          ? "text-[#6B7684] line-through"
                          : isActive
                            ? "font-bold text-[#1A3A5C]"
                            : "text-[#6B7684]"
                      }`}
                    >
                      {slot.time}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* Confirm */}
            <Pressable
              onPress={() => showToast("Session booking request submitted")}
              className="w-full items-center justify-center rounded-[11px] bg-[#1A3A5C] py-3"
            >
              <Text className="text-[12px] font-bold text-white">
                Confirm & Book Session
              </Text>
            </Pressable>
          </View>
        )}

        {/* MY SESSIONS */}
        {action === "sessions" && (
          <View className="mt-1">
            <View className="mb-[9px] flex-row items-center justify-between">
              <Text className="text-[14px] font-bold text-[#16202A]">
                Counselling Sessions
              </Text>

              <Text className="text-[9px] font-extrabold tracking-[0.6px] text-[#9AA4AF]">
                {sessionType === "mentorship"
                  ? "MENTORSHIP SESSIONS"
                  : "EXPERT SESSIONS"}
              </Text>
            </View>

            {/* Session 1 */}
            <View className="mb-2 flex-row items-center gap-2.5 rounded-[14px] border border-[#E6E9ED] bg-white p-3">
              <View className="h-9 w-9 items-center justify-center rounded-[11px] bg-[#EAF1F7]">
                <Calendar size={18} color="#1A3A5C" strokeWidth={2} />
              </View>

              <View className="flex-1">
                <Text className="mb-[3px] text-[12px] font-bold text-[#16202A]">
                  Career Mentorship
                </Text>

                <Text className="text-[10.5px] text-[#6B7684]">
                  No upcoming session
                </Text>
              </View>

              <View className="rounded-full bg-[#E6F7EE] px-2 py-1.5">
                <Text className="text-[9.5px] font-bold text-[#1B8354]">
                  Available
                </Text>
              </View>
            </View>

            {/* Session 2 */}
            <View className="mb-2 flex-row items-center gap-2.5 rounded-[14px] border border-[#E6E9ED] bg-white p-3">
              <View className="h-9 w-9 items-center justify-center rounded-[11px] bg-[#EAF1F7]">
                <Headphones size={18} color="#1A3A5C" strokeWidth={2} />
              </View>

              <View className="flex-1">
                <Text className="mb-[3px] text-[12px] font-bold text-[#16202A]">
                  Expert Counselling
                </Text>

                <Text className="text-[10.5px] text-[#6B7684]">
                  Book when you're ready
                </Text>
              </View>

              <View className="rounded-full bg-[#E6F7EE] px-2 py-1.5">
                <Text className="text-[9.5px] font-bold text-[#1B8354]">
                  Eligible
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
