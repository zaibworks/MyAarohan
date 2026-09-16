import { Tabs } from "expo-router";
import {
  BarChart3,
  CalendarDays,
  ClipboardCheck,
  House,
  Sparkles,
} from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const tabs = [
  {
    name: "index",
    label: "Home",
    icon: House,
  },
  {
    name: "assessments",
    label: "Assessment",
    icon: ClipboardCheck,
  },
  {
    name: "ai",
    label: "Aaro Ai",
    icon: Sparkles,
  },
  {
    name: "results",
    label: "Result",
    icon: BarChart3,
  },
  {
    name: "counselling",
    label: "Counselling",
    icon: CalendarDays,
  },
];

function CustomTabBar({ state, navigation }: any) {
  return (
    <SafeAreaView
      edges={["bottom"]}
      className="flex-row items-center justify-around border-t border-[#E2E5E9] bg-white px-4 py-3 pb-5"
    >
      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        const isActive = state.index === index;
        const isAI = tab.name === "ai";

        return (
          <Pressable
            key={tab.name}
            onPress={() => navigation.navigate(tab.name)}
            className="flex-col items-center justify-center"
          >
            {isAI ? (
              <>
                {/* Special AI Button */}
                <View
                  className={`h-[42px] w-[42px] items-center justify-center rounded-full ${
                    isActive ? "bg-[#1A3A5C]" : "bg-[#EAF1F7]"
                  }`}
                >
                  <Icon
                    size={21}
                    color={isActive ? "#FFFFFF" : "#1A3A5C"}
                    strokeWidth={2.3}
                  />
                </View>

                <Text
                  className={
                    isActive
                      ? "mt-1 text-xs font-semibold text-[#1A3A5C]"
                      : "mt-1 text-xs font-medium text-[#6B7684]"
                  }
                >
                  {tab.label}
                </Text>
              </>
            ) : (
              <>
                {/* Normal Tabs */}
                <Icon
                  size={22}
                  color={isActive ? "#1A3A5C" : "#9AA4AF"}
                  strokeWidth={isActive ? 2.4 : 2}
                />

                <Text
                  className={
                    isActive
                      ? "mt-1 text-xs font-semibold text-[#1A3A5C]"
                      : "mt-1 text-xs text-[#9AA4AF]"
                  }
                >
                  {tab.label}
                </Text>
              </>
            )}
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: "none",
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="assessments" options={{ title: "Assessment" }} />
      <Tabs.Screen name="ai" options={{ title: "Aaro Ai" }} />
      <Tabs.Screen name="results" options={{ title: "Result" }} />
      <Tabs.Screen name="counselling" options={{ title: "Counselling" }} />
    </Tabs>
  );
}
