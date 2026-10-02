import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import {
  ArrowRight,
  Bot,
  MessageCircle,
  SquareMenu,
  X,
} from "lucide-react-native";
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type AaroAiModalProps = {
  visible: boolean;
  onClose: () => void;
};

const suggestions = [
  {
    icon: "◯",
    text: "Tell me more about this career",
  },
  {
    icon: "▯",
    text: "What exams do I need?",
  },
  {
    icon: "→",
    text: "What skills should I learn?",
  },
];

export default function AaroAiModal({ visible }: AaroAiModalProps) {
  const router = useRouter();
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View className="flex-1 items-center justify-center px-[18px]">
        {/* Blurred background */}
        <BlurView intensity={2} tint="light" className="absolute inset-0" />

        {/* Slight overlay for readability */}
        <View className="absolute inset-0 bg-[#1A3A5C]/15" />

        {/* Main Modal */}
        <SafeAreaView
          edges={["bottom"]}
          className="w-full h-screen max-w-[360px] overflow-hidden rounded-[24px] bg-white relative"
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.15,
            shadowRadius: 20,
            elevation: 12,
          }}
        >
          {/* Header */}
          <View className="h-[70px] flex-row items-center border-b border-[#E2E5E9] px-[14px]">
            {/* Close */}
            <Pressable
              onPress={() => router.back()}
              className="h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#F0F4F8]"
            >
              <X size={19} color="#1A3A5C" strokeWidth={1.8} />
            </Pressable>

            {/* Header Icon */}
            <View className="ml-[9px] h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-[#EAF1F7]">
              <MessageCircle size={19} color="#1A3A5C" strokeWidth={1.8} />
            </View>

            {/* Title */}
            <View className="ml-[9px] flex-1">
              <Text className="text-[14px] font-medium text-[#1A3A5C]">
                AARO AI
              </Text>

              <View className="mt-[2px] flex-row items-center">
                <View className="mr-[4px] h-[6px] w-[6px] rounded-full bg-[#25B866]" />

                <Text className="text-[10px] text-[#6B7684]">
                  Career guidance assistant
                </Text>
              </View>
            </View>

            {/* Header right decoration */}

            <SquareMenu size={30} strokeWidth={1} color={"black"} />
          </View>

          {/* Content */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 14,
              paddingTop: 22,
              paddingBottom: 14,
            }}
          >
            {/* Bot */}
            <View className="items-center">
              <View className="h-[62px] w-[62px] items-center justify-center rounded-[16px] bg-[#EAF1F7]">
                <Bot size={34} color="#1A3A5C" strokeWidth={1.7} />
              </View>
            </View>

            {/* Greeting */}
            <Text className="mt-[16px] text-center text-[19px] font-medium text-[#16202A]">
              How can I help you?
            </Text>

            <Text className="mt-[6px] px-[12px] text-center text-[10px] leading-[15px] text-[#7A838D]">
              Ask me about careers, exams, colleges,
              {"\n"}
              subjects, skills, or your MyAarohan report.
            </Text>

            {/* Try asking */}
            <Text className="mt-[13px] text-[10px] font-medium text-[#7A838D]">
              Try asking
            </Text>

            {/* Suggestions */}
            <View className="mt-[5px]">
              {suggestions.map((item, index) => (
                <Pressable
                  key={index}
                  className="mb-[7px] h-[44px] flex-row items-center rounded-[11px] border border-[#DCE3EA] bg-white px-[7px]"
                  onPress={() => {
                    console.log(item.text);
                  }}
                >
                  {/* Icon */}
                  <View className="h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[#EAF1F7]">
                    <Text className="text-[16px] text-[#1A3A5C]">
                      {item.icon}
                    </Text>
                  </View>

                  {/* Text */}
                  <Text className="ml-[8px] flex-1 text-[10px] text-[#405064]">
                    {item.text}
                  </Text>

                  <Text className="mr-[3px] text-[12px] text-[#6B7684]">›</Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>

          {/* Input */}
          <View className="mb-8">
            <View className="mt-[42px] h-[42px] flex-row items-center rounded-[10px] border border-[#CBD6E1] bg-white px-[7px] mx-3">
              <TextInput
                placeholder="Ask about careers, exams, colleges..."
                placeholderTextColor="#9AA4AF"
                className="flex-1 text-[10px] text-[#16202A]"
              />

              <Pressable
                className="h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-[#1A3A5C]"
                onPress={() => {
                  console.log("Send message");
                }}
              >
                <ArrowRight size={16} color="#FFFFFF" strokeWidth={2} />
              </Pressable>
            </View>

            {/* Disclaimer */}
            <Text className="mt-[9px] text-center text-[8px] text-[#9AA4AF]">
              AARO AI can make mistakes
            </Text>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
}
