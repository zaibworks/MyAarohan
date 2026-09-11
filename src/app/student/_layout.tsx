import { useRouter } from "expo-router";
import Drawer from "expo-router/drawer";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  CreditCard,
  LogOut,
  Settings
} from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

function CustomDrawer({ navigation }: any) {
  const menuItems = [
    {
      label: "Results",
      route: "results",
      icon: BarChart3,
    },
    {
      label: "Counselling Sessions",
      route: "counselling",
      icon: CalendarDays,
    },
    {
      label: "Career Encyclopedia",
      route: "career-encyclopedia",
      icon: BookOpen,
    },
    {
      label: "Plans",
      route: "plans",
      icon: CreditCard,
    },
  ];

  const router = useRouter();
  return (
    <View className="flex-1 bg-white px-5 pt-14 pb-2">
      {/* Header */}
      <View className="mb-4 flex-row items-center justify-between  pb-4 border-b border-[#EEF1F4]">
        <View className="flex-row items-center">
          {/* Avatar */}
          <View className="mr-3 h-12 w-12 items-center justify-center rounded-full bg-[#E8EEF5]">
            <Text className="text-lg font-semibold text-[#1A3A5C]">Z</Text>
          </View>

          {/* Student Info */}
          <View>
            <Text className="text-base font-semibold text-[#17212B]">
              Mohammad Zaib
            </Text>

            <Text className="mt-0.5 text-xs text-[#8A949E]">
              zaibfr4@gmail.com
            </Text>
          </View>
        </View>
      </View>

      {/* Menu Items */}
      <View className="flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Pressable
              key={item.route}
              onPress={() => navigation.navigate(item.route)}
              className="mb-1 flex-row items-center rounded-xl px-3 py-3.5"
            >
              <Icon size={20} color="#5F6B76" />

              <Text className="ml-4 text-[15px] font-medium text-[#34404B]">
                {item.label}
              </Text>
            </Pressable>
          );
        })}
        <Pressable
          className="mb-1 flex-row items-center rounded-xl py-3.5 border-t border-[#EEF1F4] px-3 pt-5 "
          onPress={() => router.push("/student/settings")}
        >
          <Settings size={20} color="#5F6B76" />

          <Text className="ml-4 text-[15px] font-medium text-[#34404B]">
            Settings
          </Text>
        </Pressable>
      </View>

      {/* Logout */}
      <Pressable className="mb-7 flex-row items-center rounded-xl  px-3 pt-5">
        <LogOut size={20} color="#D9534F" />

        <Text className="ml-4 text-[15px] font-medium text-[#D9534F]">
          Logout
        </Text>
      </Pressable>
    </View>
  );
}

export default function StudetnLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          display: "none",
          width: 300,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="(tabs)" options={{ title: "Home" }} />
      <Drawer.Screen name="results" options={{ title: "Results" }} />
      <Drawer.Screen name="counselling" options={{ title: "Counsellling" }} />
      <Drawer.Screen
        name="career-encyclopedia"
        options={{ title: "Career Encyclopedia " }}
      />
      <Drawer.Screen
        name="student-support"
        options={{ title: "Student Support" }}
      />
      <Drawer.Screen name="plans" options={{ title: "Plans" }} />
    </Drawer>
  );
}
