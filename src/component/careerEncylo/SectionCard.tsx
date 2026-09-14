import { ReactNode } from "react";
import { View } from "react-native";

type Props = {
  children: ReactNode;
};

export default function SectionCard({ children }: Props) {
  return (
    <View className="rounded-[17px] border border-[#E2E5E9] bg-white p-3.5">
      {children}
    </View>
  );
}