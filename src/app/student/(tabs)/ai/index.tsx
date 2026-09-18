import { router } from "expo-router";
import {
  ArrowRight,
  Bot,
  ChevronRight,
  Clipboard,
  Clock3,
  Copy,
  Menu,
  Mic,
  Paperclip,
  Plus,
  Send,
  ThumbsUp,
  X,
} from "lucide-react-native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

type Message = {
  id: number;
  type: "user" | "ai";
  text: string;
};

type RecentChat = {
  id: number;
  title: string;
  meta: string;
  active?: boolean;
};

const suggestions = [
  {
    text: "What career options are suitable for me?",
    icon: Clock3,
  },
  {
    text: "Which subjects should I choose for my career?",
    icon: Clipboard,
  },
  {
    text: "What colleges should I consider after school?",
    icon: ArrowRight,
  },
];

const initialChats: RecentChat[] = [
  {
    id: 1,
    title: "What career options are suitable for me?",
    meta: "Today · AI Chat",
    active: true,
  },
  {
    id: 2,
    title: "What is the best college for computer science?",
    meta: "Yesterday · AI Chat",
  },
  {
    id: 3,
    title: "How should I prepare for JEE?",
    meta: "Yesterday · AI Chat",
  },
  {
    id: 4,
    title: "Software engineering career roadmap",
    meta: "2 days ago · AI Chat",
  },
  {
    id: 5,
    title: "Which subjects should I choose?",
    meta: "3 days ago · AI Chat",
  },
];

export default function AI() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [recentChats, setRecentChats] = useState(initialChats);

  const sendMessage = () => {
    const text = input.trim();

    if (!text) return;

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        type: "ai",
        text: "That's a great question. Based on your interests, academic background, and goals, I can help you explore suitable options step by step. Tell me a little about what you enjoy studying and the kind of work you imagine yourself doing.",
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, aiMessage]);
    }, 1100);
  };

  const startNewChat = () => {
    setMessages([]);
    setInput("");
    setIsTyping(false);
    setDrawerOpen(false);
  };

  const selectSuggestion = (text: string) => {
    setInput(text);
  };

  const selectRecentChat = (id: number) => {
    setRecentChats((prev) =>
      prev.map((chat) => ({
        ...chat,
        active: chat.id === id,
      })),
    );

    setDrawerOpen(false);
  };

  const openVoiceSession = () => {
    router.push("/student/(tabs)/ai/Voice");
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white pt-10"
      behavior={Platform.OS === "android" ? "padding" : undefined}
      keyboardVerticalOffset={0}
    >
      {/* =========================
          APP BAR
      ========================== */}

      <View className="h-[62px] flex-row items-center justify-between border-b border-[#e1e7eb] bg-white px-[16px]">
        <View className="min-w-0 flex-row items-center gap-[11px]">
          {/* Menu button */}

          <Pressable
            onPress={() => setDrawerOpen(true)}
            className="h-9 w-9 items-center justify-center rounded-[11px] border border-[#e1e7eb] bg-white"
          >
            <Menu size={18} color="#16202a" strokeWidth={2} />
          </Pressable>

          {/* AI brand */}

          <View className="min-w-0 flex-row items-center gap-[9px]">
            <View className="h-[36px] w-[36px] items-center justify-center rounded-[11px] bg-[#e5f5fa]">
              <Bot size={21} color="#087ca3" strokeWidth={1.8} />
            </View>

            <View className="min-w-0">
              <Text className="text-[15px] font-bold leading-[17px] text-[#16202a]">
                AARO AI
              </Text>

              <View className="mt-[3px] flex-row items-center gap-[5px]">
                <View className="h-[6px] w-[6px] rounded-full bg-[#1b8354]" />

                <Text className="text-[10.5px] text-[#607080]">
                  Career guidance assistant
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Voice Session */}

        <Pressable
          onPress={openVoiceSession}
          className="h-10 flex-row items-center justify-center rounded-full border border-[#E2E5E9] bg-white px-3"
        >
          <Mic size={16} color="#607080" strokeWidth={2} />

          <Text className="ml-1.5 text-[11px] font-semibold text-[#1A3A5C]">
            Voice
          </Text>
        </Pressable>
      </View>

      {/* =========================
          CHAT AREA
      ========================== */}

      <ScrollView
        className="flex-1 bg-[#fbfdfe]"
        contentContainerStyle={{
          paddingHorizontal: 14,
          paddingTop: 64,
          paddingBottom: 18,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* =========================
            WELCOME
        ========================== */}

        {messages.length === 0 && (
          <View className="items-center px-[6px] pb-5 pt-3">
            {/* AI icon */}

            <View className="mb-[14px] mt-2 h-[62px] w-[62px] items-center justify-center rounded-[19px] bg-[#eaf3f8]">
              <Bot size={32} color="#1a3a5c" strokeWidth={1.7} />
            </View>

            {/* Heading */}

            <Text className="mb-[6px] text-center text-[21px] font-bold text-[#16202a]">
              How can I help you?
            </Text>

            {/* Description */}

            <Text className="max-w-[290px] text-center text-[13px] leading-[20px] text-[#607080]">
              Ask me about careers, exams, colleges, subjects, skills, or your
              MyAarohan report.
            </Text>

            {/* =========================
                TEXT / VOICE OPTIONS
            ========================== */}
          </View>
        )}

        {/* =========================
            SUGGESTIONS
        ========================== */}

        {messages.length === 0 && (
          <View className="mb-[22px] mt-[5px] gap-2">
            {suggestions.map((suggestion) => {
              const Icon = suggestion.icon;

              return (
                <Pressable
                  key={suggestion.text}
                  onPress={() => selectSuggestion(suggestion.text)}
                  className="min-h-[55px] w-full flex-row items-center gap-[10px] rounded-[13px] border border-[#e1e7eb] bg-white px-[13px] py-3"
                  style={{
                    shadowColor: "#16202a",
                    shadowOpacity: 0.05,
                    shadowRadius: 8,
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    elevation: 1,
                  }}
                >
                  <View className="h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[#eaf3f8]">
                    <Icon size={15} color="#1a3a5c" strokeWidth={2} />
                  </View>

                  <Text className="flex-1 text-[12.5px] font-medium leading-[17px] text-[#16202a]">
                    {suggestion.text}
                  </Text>

                  <ChevronRight size={15} color="#97a3ad" strokeWidth={2} />
                </Pressable>
              );
            })}
          </View>
        )}

        {/* =========================
            MESSAGES
        ========================== */}

        <View>
          {messages.map((message) => (
            <View
              key={message.id}
              className={`mb-[18px] flex-row gap-[9px] ${
                message.type === "user" ? "justify-end" : ""
              }`}
            >
              {/* AI avatar */}

              {message.type === "ai" && (
                <View className="mt-[2px] h-[30px] w-[30px] items-center justify-center rounded-[10px] bg-[#087ca3]">
                  <Bot size={16} color="#ffffff" strokeWidth={1.8} />
                </View>
              )}

              <View
                className={`max-w-[82%] ${
                  message.type === "user" ? "items-end" : ""
                }`}
              >
                <View
                  className={`rounded-[15px] px-[13px] py-[11px] ${
                    message.type === "ai"
                      ? "rounded-tl-[5px] bg-[#e7f5fa]"
                      : "rounded-tr-[5px] border border-[#e1e7eb] bg-[#f3f6f8]"
                  }`}
                >
                  <Text
                    className={`text-[13px] leading-[20px] ${
                      message.type === "ai"
                        ? "text-[#31586d]"
                        : "text-[#16202a]"
                    }`}
                  >
                    {message.text}
                  </Text>
                </View>

                {/* Time */}

                <Text
                  className={`mt-[5px] px-[3px] text-[9.5px] text-[#97a3ad] ${
                    message.type === "user" ? "text-right" : ""
                  }`}
                >
                  {message.type === "ai" ? "AARO AI · Just now" : "Just now"}
                </Text>

                {/* AI actions */}

                {message.type === "ai" && (
                  <View className="mt-[7px] flex-row items-center gap-[5px]">
                    <Pressable className="h-[28px] w-[28px] items-center justify-center rounded-[8px] border border-[#e1e7eb] bg-white">
                      <Copy size={14} color="#97a3ad" strokeWidth={2} />
                    </Pressable>

                    <Pressable className="h-[28px] w-[28px] items-center justify-center rounded-[8px] border border-[#e1e7eb] bg-white">
                      <ThumbsUp size={14} color="#97a3ad" strokeWidth={2} />
                    </Pressable>

                    <Pressable className="h-[28px] w-[28px] items-center justify-center rounded-[8px] border border-[#e1e7eb] bg-white">
                      <ArrowRight size={14} color="#97a3ad" strokeWidth={2} />
                    </Pressable>
                  </View>
                )}
              </View>

              {/* User avatar */}

              {message.type === "user" && (
                <View className="order-2 mt-[2px] h-[30px] w-[30px] items-center justify-center rounded-full bg-[#1a3a5c]">
                  <Text className="text-[11px] font-bold text-white">Z</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* =========================
            TYPING
        ========================== */}

        {isTyping && (
          <View className="mb-[14px] flex-row items-start gap-[9px]">
            <View className="mt-[2px] h-[30px] w-[30px] items-center justify-center rounded-[10px] bg-[#087ca3]">
              <Bot size={16} color="#ffffff" strokeWidth={1.8} />
            </View>

            <View className="flex-row gap-1 rounded-[15px] rounded-tl-[5px] bg-[#e7f5fa] px-[14px] py-3">
              <View className="h-[5px] w-[5px] rounded-full bg-[#087ca3]" />
              <View className="h-[5px] w-[5px] rounded-full bg-[#087ca3]" />
              <View className="h-[5px] w-[5px] rounded-full bg-[#087ca3]" />
            </View>
          </View>
        )}
      </ScrollView>

      {/* =========================
          COMPOSER
      ========================== */}

      <View className="border-t border-[#e1e7eb] bg-white px-3 pb-[11px] pt-[9px]">
        <View className="min-h-[47px] flex-row items-end rounded-[15px] border border-[#cfd8df] bg-white p-[6px]">
          {/* Attachment */}

          <Pressable className="h-[34px] w-[34px] items-center justify-center rounded-[9px]">
            <Paperclip size={18} color="#607080" strokeWidth={2} />
          </Pressable>

          {/* Input */}

          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Ask about careers, exams, colleges..."
            placeholderTextColor="#97a3ad"
            multiline
            className="min-h-[34px] flex-1 px-[7px] py-2 text-[13px] leading-[18px] text-[#16202a]"
            style={{
              maxHeight: 100,
              textAlignVertical: "center",
            }}
            onSubmitEditing={() => {
              if (Platform.OS !== "ios") {
                sendMessage();
              }
            }}
          />

          {/* Send */}

          <Pressable
            onPress={sendMessage}
            disabled={!input.trim()}
            className={`h-[35px] w-[35px] items-center justify-center rounded-[10px] ${
              input.trim() ? "bg-[#1A3A5C]" : "bg-[#1A3A5C]/45"
            }`}
          >
            <Send size={17} color="#ffffff" strokeWidth={2} />
          </Pressable>
        </View>
      </View>

      {/* =========================
          CHAT HISTORY DRAWER
      ========================== */}

      {drawerOpen && (
        <>
          {/* Overlay */}

          <Pressable
            onPress={() => setDrawerOpen(false)}
            className="absolute inset-0 z-20 bg-[#0c1822]/40"
          />

          {/* Drawer */}

          <View className="absolute bottom-0 left-0 top-0 z-30 w-[82%] bg-white shadow-2xl">
            {/* Drawer top */}

            <View className="border-b border-[#e1e7eb] px-[15px] pb-3 pt-[39px]">
              <View className="mb-3 flex-row items-center justify-between">
                <Text className="text-[17px] font-bold text-[#16202a]">
                  AARO AI
                </Text>

                <Pressable
                  onPress={() => setDrawerOpen(false)}
                  className="h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#e1e7eb] bg-white"
                >
                  <X size={18} color="#607080" strokeWidth={2} />
                </Pressable>
              </View>

              <Pressable
                onPress={startNewChat}
                className="w-full flex-row items-center gap-[9px] rounded-[11px] bg-[#1a3a5c] px-[13px] py-[11px]"
              >
                <Plus size={16} color="#ffffff" strokeWidth={2} />

                <Text className="text-[13px] font-semibold text-white">
                  New chat
                </Text>
              </Pressable>
            </View>

            {/* Recent heading */}

            <Text className="px-[15px] pb-2 pt-4 text-[11px] font-bold uppercase tracking-[0.5px] text-[#97a3ad]">
              Recent chats
            </Text>

            {/* Recent chats */}

            <ScrollView
              className="flex-1 px-[9px]"
              showsVerticalScrollIndicator={false}
            >
              {recentChats.map((chat) => (
                <Pressable
                  key={chat.id}
                  onPress={() => selectRecentChat(chat.id)}
                  className={`mb-[3px] rounded-[11px] p-[11px] ${
                    chat.active ? "bg-[#eaf3f8]" : "bg-transparent"
                  }`}
                >
                  <Text
                    numberOfLines={1}
                    className="mb-1 text-[12.5px] text-[#16202a]"
                  >
                    {chat.title}
                  </Text>

                  <Text className="text-[10px] text-[#607080]">
                    {chat.meta}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </>
      )}
    </KeyboardAvoidingView>
  );
}
