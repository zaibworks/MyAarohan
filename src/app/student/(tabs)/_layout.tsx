import { Tabs } from "expo-router";
import {
  ClipboardCheck,
  House,
  Sparkles,
  UserRound,
} from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

const tabs = [
  {
    name: "index",
    label: "Dashboard",
    icon: House,
  },
  {
    name: "assessments",
    label: "Assessments",
    icon: ClipboardCheck,
  },
  {
    name: "ai",
    label: "AI Chat",
    icon: Sparkles,
  },
  {
    name: "profile",
    label: "Profile",
    icon: UserRound,
  },
];

function CustomTabBar({ state, navigation }: any) {
  return (
    <View className="flex-row items-center justify-around bg-white border-t border-[#E2E5E9] px-4 py-3 pb-5">
      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        const isActive = state.index === index;

        return (
          <Pressable
            key={tab.name}
            onPress={() => navigation.navigate(tab.name)}
            className="flex-1 items-center"
          >
            <Icon size={22} color={isActive ? "#1A3A5C" : "#9AA4AF"} />

            <Text
              className={
                isActive
                  ? "mt-1 text-xs font-semibold text-[#1A3A5C]"
                  : "mt-1 text-xs text-[#9AA4AF]"
              }
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
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
      <Tabs.Screen name="index" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="assessments" options={{ title: "Assessments" }} />
      <Tabs.Screen name="ai" options={{ title: "Ai Chat" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
