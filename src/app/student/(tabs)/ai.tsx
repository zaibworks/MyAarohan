import { MessageCircle, Mic } from "lucide-react-native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Chat from "../../../component/ai/Chat";
import Voice from "../../../component/ai/Voice";

function Compnent() {
  const [mode, setMode] = useState<"text" | "voice">("text");

  return (
    <View className="flex-1 bg-white">
      <View className="mx-5 mt-4 flex-row rounded-full border border-[#DCE5EC] bg-[#F5F8FA] p-1">
        {/* Text */}
        <Pressable
          onPress={() => setMode("text")}
          className={`flex-1 flex-row items-center justify-center rounded-full py-3 ${
            mode === "text" ? "bg-white" : ""
          }`}
        >
          <MessageCircle
            size={19}
            color={mode === "text" ? "#1A3A5C" : "#526273"}
          />

          <Text
            className={`ml-2 text-[16px] font-semibold ${
              mode === "text" ? "text-[#1A3A5C]" : "text-[#526273]"
            }`}
          >
            Text
          </Text>
        </Pressable>

        {/* Voice */}
        <Pressable
          onPress={() => setMode("voice")}
          className={`flex-1 flex-row items-center justify-center rounded-full py-3 ${
            mode === "voice" ? "bg-white" : ""
          }`}
        >
          <Mic size={19} color={mode === "voice" ? "#1A3A5C" : "#526273"} />

          <Text
            className={`ml-2 text-[16px] font-semibold ${
              mode === "voice" ? "text-[#1A3A5C]" : "text-[#526273]"
            }`}
          >
            Voice
          </Text>
        </Pressable>
      </View>
      {mode === "text" ? <Chat /> : <Voice />}
    </View>
  );
}

const ai = () => {
  return <Chat />;
};

export default ai;
