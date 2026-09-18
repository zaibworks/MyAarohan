import { Href, Tabs, usePathname, useRouter } from "expo-router";
import {
  BarChart3,
  CalendarDays,
  ClipboardCheck,
  House,
  Sparkles,
} from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type tabsType = {
  name: String;
  route: Href;
  label: string;
  icon: React.ComponentType<{
    strokeWidth: number;
    size?: number;
    color?: string;
  }>;
};

const tabs: tabsType[] = [
  {
    name: "index",
    route: "/student",
    label: "Home",
    icon: House,
  },
  {
    name: "assessments",
    route: "/student/assessments",
    label: "Assessment",
    icon: ClipboardCheck,
  },
  {
    name: "ai",
    route: "/student/ai",
    label: "AARO AI",
    icon: Sparkles,
  },
  {
    name: "results",
    route: "/student/results",
    label: "Result",
    icon: BarChart3,
  },
  {
    name: "counselling",
    route: "/student/counselling",
    label: "Counselling",
    icon: CalendarDays,
  },
];

function CustomTabBar({ state }: any) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <SafeAreaView
      edges={["bottom"]}
      className="flex-row items-center justify-around border-t border-[#E2E5E9] bg-white px-4 py-3 pb-5"
    >
      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        const isActive =
          tab.name === "ai"
            ? pathname.startsWith("/student/ai")
            : state.index === index;
        const isAI = tab.name === "ai";

        return (
          <Pressable
            key={tab.name.toString()}
            onPress={() => router.push(tab.route)}
            className="flex-col items-center justify-center"
          >
            {isAI ? (
              <>
                {/* Special AI Button */}
                <View
                  className={`h-[44px] w-[44px] items-center justify-center rounded-full ${
                    isActive
                      ? "bg-[#1A3A5C] border-2 border-[#91c4f6] "
                      : "bg-[#EAF1F7] border-none"
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
        animation: "fade",
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
