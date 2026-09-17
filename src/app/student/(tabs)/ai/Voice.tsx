import { useRouter } from "expo-router";
import {
  ArrowLeft,
  MessageCircle,
  Mic,
  MicOff,
  PhoneOff,
  Sparkles,
  Volume2,
} from "lucide-react-native";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AaroVoice() {
  const SESSION_DURATION = 10 * 60;

  const [secondsLeft, setSecondsLeft] = useState(SESSION_DURATION);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (!sessionStarted || secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setSessionStarted(false);
          setIsListening(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [sessionStarted, secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds,
  ).padStart(2, "0")}`;

  const startSession = () => {
    setSecondsLeft(SESSION_DURATION);
    setSessionStarted(true);
    setIsListening(true);
  };

  const endSession = () => {
    setSessionStarted(false);
    setIsListening(false);
  };
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#F7F9FA]">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-between border-b border-[#E2E5E9] bg-white px-5 py-3.5">
          <Pressable
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-full"
          >
            <ArrowLeft size={21} color="#1A3A5C" strokeWidth={2} />
          </Pressable>

          <View className="items-center">
            <Text className="text-[16px] font-bold text-[#16202A]">
              Aaro AI
            </Text>

            <View className="mt-0.5 flex-row items-center">
              <View
                className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
                  sessionStarted ? "bg-[#1B8354]" : "bg-[#9AA4AF]"
                }`}
              />

              <Text className="text-[10px] text-[#6B7684]">
                {sessionStarted ? "Session active" : "Voice counselling"}
              </Text>
            </View>
          </View>

        <Pressable
  onPress={() => router.push("/student/ai")}
  className="h-10 flex-row items-center justify-center rounded-full border border-[#E2E5E9] bg-white px-3"
>
  <MessageCircle
    size={16}
    color="#1A3A5C"
    strokeWidth={2}
  />

  <Text className="ml-1.5 text-[11px] font-semibold text-[#1A3A5C]">
    Text
  </Text>
</Pressable>
        </View>

        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 18,
            paddingTop: 22,
            paddingBottom: 28,
          }}
        >
          {/* Intro */}
          <View className="items-center">
            <View className="mb-5 h-[92px] w-[92px] items-center justify-center rounded-full bg-[#EAF1F7]">
              <View className="h-[68px] w-[68px] items-center justify-center rounded-full bg-[#1A3A5C]">
                <Sparkles size={29} color="#FFFFFF" strokeWidth={1.8} />
              </View>
            </View>

            <Text className="text-[25px] font-extrabold text-[#16202A]">
              Talk to Aaro
            </Text>

            <Text className="mt-2 max-w-[330px] text-center text-[13px] leading-[20px] text-[#6B7684]">
              A supportive voice space for career choices, study stress,
              confidence, and questions you may want to prepare for a counselor.
            </Text>
          </View>
          {/* Session Area */}
          <View className="flex-1 items-center justify-center py-8">
            {/* Timer */}
            <View className="mb-5 rounded-full bg-white px-6 py-2.5">
              <Text
                className={`text-[24px] font-extrabold ${
                  secondsLeft <= 60 ? "text-[#C43D3D]" : "text-[#16202A]"
                }`}
              >
                {formattedTime}
              </Text>
            </View>

            {/* Status */}
            <View className="mb-6 flex-row items-center">
              {sessionStarted ? (
                <>
                  <View className="mr-2 h-2 w-2 rounded-full bg-[#1B8354]" />

                  <Text className="text-[12px] font-semibold text-[#607080]">
                    {isListening
                      ? "Listening to you..."
                      : "Aaro is speaking..."}
                  </Text>
                </>
              ) : (
                <Text className="text-[12px] font-medium text-[#9AA4AF]">
                  Your session is ready
                </Text>
              )}
            </View>

            {/* Voice Button */}
            <Pressable
              onPress={
                sessionStarted
                  ? () => setIsListening((prev) => !prev)
                  : startSession
              }
              className={`h-[88px] w-[88px] items-center justify-center rounded-full ${
                sessionStarted ? "bg-[#1A3A5C]" : "bg-[#1A3A5C]"
              }`}
            >
              {sessionStarted ? (
                isListening ? (
                  <Mic size={30} color="#FFFFFF" strokeWidth={2} />
                ) : (
                  <Volume2 size={30} color="#FFFFFF" strokeWidth={2} />
                )
              ) : (
                <Mic size={30} color="#FFFFFF" strokeWidth={2} />
              )}
            </Pressable>

            <Text className="mt-4 text-[12px] font-semibold text-[#607080]">
              {sessionStarted
                ? isListening
                  ? "Tap to pause"
                  : "Tap to speak"
                : "Tap to start session"}
            </Text>
          </View>

          {/* Session Information */}
          <View className="mb-5 flex-row items-center justify-center">
            <View className="h-px flex-1 bg-[#E2E5E9]" />

            <Text className="mx-3 text-[10px] font-semibold uppercase  tracking-[0.5px] text-[#9AA4AF]">
              10 minute session
            </Text>

            <View className="h-px flex-1 bg-[#E2E5E9]" />
          </View>

          {/* End Session */}
          {sessionStarted && (
            <Pressable
              onPress={endSession}
              className="mb-3 flex-row items-center justify-center rounded-[13px] border border-[#E2E5E9] bg-white py-3.5"
            >
              <PhoneOff size={17} color="#C43D3D" />

              <Text className="ml-2 text-[13px] font-semibold text-[#C43D3D]">
                End session
              </Text>
            </Pressable>
          )}

          {/* Microphone Hint */}
          <View className="flex-row items-center justify-center">
            {sessionStarted ? (
              <>
                {isListening ? (
                  <Mic size={13} color="#9AA4AF" />
                ) : (
                  <MicOff size={13} color="#9AA4AF" />
                )}

                <Text className="ml-1.5 text-[10.5px] text-[#9AA4AF]">
                  Speak naturally — Aaro will listen
                </Text>
              </>
            ) : (
              <Text className="text-center text-[10.5px] text-[#9AA4AF]">
                You can start a fresh session whenever you need support
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
