import React from "react";
import {
  ScrollView,
  Text,
  View,
} from "react-native";

const cards = [
  {
    value: "16.67%",
    label: "Overall Aptitude\nScore",
    bg: "#E8F4FF",
    border: "#2990FF",
  },
  {
    value: "Mechanical\nReasoning ",
    label: "Strongest Aptitude",
    bg: "#EAF9EE",
    border: "#16C75A",
  },
  {
    value: "Versatile\nGeneralist",
    label: "Your Profile Type",
    bg: "#F1EDFF",
    border: "#8B5CF6",
  },
  {
    value: "Openness",
    label: "Your Personality\nTrait",
    bg: "#FFF8DF",
    border: "#FF9D00",
  },
  {
    value: "N/A",
    label: "Top Interest",
    bg: "#FFF0F6",
    border: "#FF5C9D",
  },
  {
    value: "Software\nEngineer",
    label: "Your Dream Career",
    bg: "#E8F6FF",
    border: "#00A9E8",
  },
];

export default function SummaryCards() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        gap: 18,
        marginTop:10
      }}
    >
      {cards.map((card, index) => (
        <View
          key={index}
          className="h-[150px] w-[166px] justify-between rounded-[30px] px-[14px] py-[20px]"
          style={{
            backgroundColor: card.bg,
            borderWidth: 1,
            borderColor: card.border,
          }}
        >
          <Text
            className="text-[22px] font-normal leading-[28px] text-[#243447]"
            numberOfLines={2}
          >
            {card.value}
          </Text>

          <Text className="text-[14px] leading-[19px] text-[#6B7684]">
            {card.label}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}