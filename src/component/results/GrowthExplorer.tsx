import { View, Text,ScrollView,Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { TrendingUp } from 'lucide-react-native';

type Dimension = {
  name: string;
  score: number;
  short: string;
};

const dimensions: Dimension[] = [
  {
    name: "Verbal",
    score: 80,
    short: "VER",
  },
  {
    name: "Numerical",
    score: 76,
    short: "NUM",
  },
  {
    name: "Abstract",
    score: 84,
    short: "ABS",
  },
  {
    name: "Spatial",
    score: 71,
    short: "SPA",
  },
  {
    name: "Mechanical",
    score: 68,
    short: "MEC",
  },
  {
    name: "Perceptual",
    score: 79,
    short: "PER",
  },
  {
    name: "Language",
    score: 86,
    short: "LAN",
  },
];

const GrowthExplorer = () => {


    const [selectedGrowthDimension, setSelectedGrowthDimension] = useState<
    number | null
  >(null);
  const [improvementAmount, setImprovementAmount] = useState(0);

  const selectedGrowthData =
    selectedGrowthDimension !== null
      ? dimensions[selectedGrowthDimension]
      : null;

  const projectedScore = selectedGrowthData
    ? Math.min(selectedGrowthData.score + improvementAmount, 100)
    : 0;

  return (
   <>
   
        <View className="mt-7 px-5">
          <View className="flex-row items-center">
            <View className="h-9 w-9 items-center justify-center rounded-xl bg-[#EAF1F7]">
              <TrendingUp size={19} color="#1A3A5C" />
            </View>

            <View className="ml-2.5 flex-1">
              <Text className="text-[19px] font-bold text-[#16202A]">
                Future Growth Explorer
              </Text>

              <Text className="mt-0.5 text-[12px] text-[#6B7684]">
                Explore how improving specific aptitudes could change your
                career trajectory.
              </Text>
            </View>
          </View>
        </View>

        <View className="mx-5 mt-4 rounded-2xl border border-[#E6E9ED] bg-white p-4">
          <Text className="text-[12px] font-bold text-[#16202A]">
            Select a skill area to improve
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 12,
              paddingRight: 10,
            }}
          >
            {dimensions.map((dimension, index) => {
              const active = selectedGrowthDimension === index;

              return (
                <Pressable
                  key={dimension.name}
                  onPress={() => {
                    setSelectedGrowthDimension(index);
                    setImprovementAmount(0);
                  }}
                  className={`mr-2 rounded-full border px-3 py-2 ${
                    active
                      ? "border-[#1A3A5C] bg-[#EAF1F7]"
                      : "border-[#D6DBE1] bg-white"
                  }`}
                >
                  <Text
                    className={`text-[10px] font-semibold ${
                      active ? "text-[#1A3A5C]" : "text-[#6B7684]"
                    }`}
                  >
                    {dimension.name}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>

          <View className="mt-4 rounded-xl bg-[#F4F6F8] p-4">
            {selectedGrowthData ? (
              <>
                <View className="flex-row items-center justify-between">
                  <View className="flex-1 pr-3">
                    <Text className="text-[14px] font-bold text-[#16202A]">
                      {selectedGrowthData.name}
                    </Text>

                    <Text className="mt-1 text-[11px] text-[#6B7684]">
                      Current score
                    </Text>
                  </View>

                  <Text className="text-[24px] font-bold text-[#1A3A5C]">
                    {selectedGrowthData.score}%
                  </Text>
                </View>

                <View className="mt-4 h-2 overflow-hidden rounded-full bg-[#DDE2E7]">
                  <View
                    className="h-full rounded-full bg-[#1A3A5C]"
                    style={{
                      width: `${selectedGrowthData.score}%`,
                    }}
                  />
                </View>

                <Text className="mt-4 text-[11px] leading-[17px] text-[#6B7684]">
                  Select an improvement amount to explore how a stronger score
                  could affect your future career recommendations.
                </Text>

                <Text className="mt-5 text-[11px] font-bold text-[#16202A]">
                  Improvement Amount
                </Text>

                <View className="mt-3 flex-row">
                  {[10, 20, 30].map((amount) => {
                    const active = improvementAmount === amount;

                    return (
                      <Pressable
                        key={amount}
                        onPress={() => setImprovementAmount(amount)}
                        className={`mr-2 rounded-full border px-3 py-2 ${
                          active
                            ? "border-[#1A3A5C] bg-[#1A3A5C]"
                            : "border-[#D6DBE1] bg-white"
                        }`}
                      >
                        <Text
                          className={`text-[10px] font-bold ${
                            active ? "text-white" : "text-[#6B7684]"
                          }`}
                        >
                          +{amount}%
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              </>
            ) : (
              <View className="items-center py-6">
                <TrendingUp size={24} color="#1A3A5C" />

                <Text className="mt-2 text-[13px] font-bold text-[#16202A]">
                  Select a skill area
                </Text>

                <Text className="mt-1 text-center text-[11px] leading-[17px] text-[#6B7684]">
                  Choose an aptitude above to explore how improvement could
                  affect your future recommendations.
                </Text>
              </View>
            )}
          </View>

          <View className="mt-3 rounded-xl border border-[#D6DBE1] bg-[#1A3A5C] p-4">
            <Text className="text-[10px] font-semibold uppercase tracking-wide text-[#BFD4E6]">
              Current Top Career Match
            </Text>

            {selectedGrowthData && improvementAmount > 0 ? (
              <>
                <Text className="mt-2 text-[18px] font-bold text-white">
                  Explore stronger career alignment
                </Text>

                <Text className="mt-1 text-[11px] leading-[17px] text-[#DCE8F2]">
                  Projected {selectedGrowthData.name} score: {projectedScore}%
                </Text>

                <View className="mt-4 rounded-xl bg-white/10 p-3">
                  <Text className="text-[10px] text-[#BFD4E6]">
                    This simulation is exploratory and does not predict career
                    success.
                  </Text>
                </View>
              </>
            ) : (
              <>
                <Text className="mt-2 text-[18px] font-bold text-white">
                  Complete tests to see
                </Text>

                <Text className="mt-1 text-[11px] leading-[17px] text-[#DCE8F2]">
                  Select a skill area and improvement amount to explore your
                  future career recommendations.
                </Text>
              </>
            )}
          </View>
        </View>
   </>
  )
}

export default GrowthExplorer