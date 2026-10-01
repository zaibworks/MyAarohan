import React from "react";
import { Text, View } from "react-native";
import { Newspaper } from "lucide-react-native";

export default function LatestArticlesCard() {
  return (
    <View className="w-full rounded-[23px] border border-[#E2E5E9] bg-white px-[11px] py-[11px]">
      {/* Header */}
      <View className="flex-row items-center">
        <View className="h-[38px] w-[38px] items-center justify-center rounded-[8px] bg-[#DDF3F7]">
          <Newspaper size={21} color="#1A3A5C" />
        </View>

        <View className="ml-[8px] flex-1">
          <Text className="text-[16px] font-medium leading-[17px] text-[#303030]">
            Latest articles
          </Text>

          <Text className="mt-[1px] text-[11px] leading-[12px] text-[#7A838D]">
            New career guidance from MyAarohan
          </Text>
        </View>

        <Text className="text-[10px] font-medium text-[#2872B8]">
          View all
        </Text>
      </View>

      {/* Article 1 */}
      <ArticleItem
        title="Top High-Salary Career Options for Girls After 10th and 12th"
      />

      {/* Article 2 */}
      <ArticleItem
        title="Engineering Without JEE: List of Top Government & Private Colleges"
      />

      {/* Article 3 */}
      <ArticleItem
        title="The Sequence Error in School Counselling?"
      />
    </View>
  );
}

function ArticleItem({
  title,
}: {
  title: string;
}) {
  return (
    <View className="mt-[8px] h-[68px] flex-row items-center rounded-[14px] border border-[#E2E5E9] px-[8px]">
      {/* Image Placeholder */}
      <View className="h-[48px] w-[48px] rounded-[10px] bg-[#D9DDE2]" />

      {/* Content */}
      <View className="ml-[8px] flex-1">
        <Text className="text-[8px] font-medium uppercase leading-[10px] text-[#079B68]">
          CAREER
        </Text>

        <Text
          numberOfLines={2}
          className="mt-[1px] text-[9px] font-medium leading-[11px] text-[#303030]"
        >
          {title}
        </Text>

        <Text className="mt-[3px] text-[8px] leading-[10px] text-[#8A929B]">
          2 May 2026
        </Text>
      </View>
    </View>
  );
}