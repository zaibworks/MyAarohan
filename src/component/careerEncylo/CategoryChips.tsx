import { Pressable, ScrollView, Text } from "react-native";

type Props = {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
};

export default function CategoryChips({
  categories,
  activeCategory,
  onChange,
}: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 12 }}
    >
      {categories.map((category) => {
        const active = category === activeCategory;

        return (
          <Pressable
            key={category}
            onPress={() => onChange(category)}
            className={`mr-2 rounded-full border px-3 py-2 ${
              active
                ? "border-[#1A3A5C] bg-[#1A3A5C]"
                : "border-[#E2E5E9] bg-white"
            }`}
          >
            <Text
              className={`text-[11px] font-bold ${
                active ? "text-white" : "text-[#6B7684]"
              }`}
            >
              {category}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}