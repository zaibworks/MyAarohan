import { useRouter,Href } from "expo-router";
import Drawer from "expo-router/drawer";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  CreditCard,
  House,
  LogOut,
  Sparkles,
  MessagesSquare
} from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type MenuItem = {
  label: string;
  name: Href;
  icon: React.ComponentType<{
    size?: number;
    color?: string;
  }>;
};

function CustomDrawer({navigation}:any) {
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      label: "Home",
      name: "/student",
      icon: House,
    },
    {
      label: "Results",
      name: "/student/results",
      icon: BarChart3,
    },
    {
      label: "Assessments",
      name: "/student/assessments",
      icon: ClipboardCheck,
    },
    {
      label: "Counselling",
      name: "/student/counselling",
      icon: CalendarDays,
    },
    {
      label: "Aaro Ai",
      name: "/student/ai",
      icon: Sparkles,
    },
    {
      label: "Career Encyclopedia",
      name: "/student/career-encyclopedia",
      icon: BookOpen,
    },
    {
      label: "Student Support",
      name: "/student/student-support",
      icon: MessagesSquare,
    },
    {
      label: "Plans",
      name: "/student/plans",
      icon: CreditCard,
    },
  ];

  return (
    <View className="flex-1 bg-white px-5 pt-14 pb-2">
      {/* Header */}
      <View className="mb-4 flex-row items-center justify-between border-b border-[#EEF1F4] pb-4">
        <View className="flex-row items-center">
          {/* Avatar */}
          <View className="mr-3 h-12 w-12 items-center justify-center rounded-full bg-[#E8EEF5]">
            <Text className="text-lg font-semibold text-[#1A3A5C]">
              Z
            </Text>
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
              key={item.name.toString()}
              onPress={() => router.push(item.name)}
              className="mb-1 flex-row items-center rounded-xl px-3 py-3.5"
            >
              <Icon size={20} color="#5F6B76" />

              <Text className="ml-4 text-[15px] font-medium text-[#34404B]">
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Logout */}
      <Pressable
        onPress={() => router.replace("/auth/login")}
        className="mb-7 flex-row items-center rounded-xl px-3 pt-5"
      >
        <LogOut size={20} color="#D9534F" />

        <Text className="ml-4 text-[15px] font-medium text-[#D9534F]">
          Logout
        </Text>
      </Pressable>
    </View>
  );
}

export default function StudentLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStatusBarAnimation:'slide',
        drawerStyle: {
          display: "none",
          width: 300,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props}  />}
    >
      <Drawer.Screen name="(tabs)" options={{title: "Home"}}
      />
    </Drawer>
  );
}
