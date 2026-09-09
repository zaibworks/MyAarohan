import Drawer from "expo-router/drawer";

export default function StudetnLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
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
      <Drawer.Screen name="settings" options={{ title: "Settings" }} />
    </Drawer>
  );
}
