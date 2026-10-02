import { View, Text } from 'react-native'
import React from 'react'
import ProfileTriangleRadar from '../ProfileTriangleRadar'


const profileScores=[
     { name: "Quantitative", score: 76 },
              { name: "Verbal", score: 1 },
              { name: "Spatial", score: 1 },
]

const lables = [
      "Technology",
                "Management",
                "Entrepreneurship",
                "Education",
]

const ProfileCluster = () => {
  return (
    <>
  
    <View className="mt-7 px-5">
          <Text className="text-[19px] font-bold text-[#16202A]">
            Profile Cluster & Factor Analysis
          </Text>

          <Text className="mt-1 text-[13px] leading-5 text-[#6B7684]">
            A broader view of how your assessment dimensions come together.
          </Text>
        </View>

        <View className="mx-5 mt-4 rounded-2xl border border-[#E6E9ED] bg-white p-4">
          <View className="rounded-xl bg-[#1A3A5C] p-4">
            <Text className="text-[10px] font-bold uppercase tracking-wider text-[#BFD4E6]">
              Your Profile Cluster
            </Text>

            <Text className="mt-1.5 text-[20px] font-bold text-white">
              Versatile Generalist
            </Text>

            <Text className="mt-1 text-[11px] leading-[17px] text-[#DCE8F2]">
              Balanced across multiple aptitudes with the flexibility to explore
              different career directions.
            </Text>
          </View>

          <View className="mt-4">
            <Text className="text-[12px] font-bold text-[#16202A]">
              Aligned Career Families
            </Text>

            <View className="mt-2 flex-row flex-wrap">
              {lables.map((family) => (
                <View
                  key={family}
                  className="mb-2 mr-2 rounded-full bg-[#EAF1F7] px-3 py-1.5"
                >
                  <Text className="text-[10px] font-bold text-[#1A3A5C]">
                    {family}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View className="mt-5">
            <Text className="text-[12px] font-bold text-[#16202A]">
              Core Factor Scores
            </Text>

            <ProfileTriangleRadar profileScores={profileScores}/>

            {profileScores.map((factor) => (
              <View key={factor.name} className="mt-3">
                <View className="flex-row items-center justify-between">
                  <Text className="text-[11px] font-medium text-[#6B7684]">
                    {factor.name}
                  </Text>

                  <Text className="text-[11px] font-bold text-[#1A3A5C]">
                    {factor.score}
                  </Text>
                </View>

                <View className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#E6E9ED]">
                  <View
                    className="h-full rounded-full bg-[#1A3A5C]"
                    style={{
                      width: `${factor.score}%`,
                    }}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
          </>
  )
}

export default ProfileCluster