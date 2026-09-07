import { useRouter } from "expo-router";
import { Brain, ChevronRight, Radar, Users } from "lucide-react-native";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    icon: Brain,
    title: "AI-powered assessments",
    description:
      "Discover your strengths with smart, data-backed career assessments built around you",
    label: "Personalized for you",
  },
  {
    icon: Radar,
    title: "Personalized Growth Kundlis",
    description:
      "Get a hyper-personalised roadmap that maps your potential to real career paths",
    label: "Built around your potential",
  },
  {
    icon: Users,
    title: "Expert counsellor guidance",
    description:
      "Explore careers and make confident, data-backed decisions with expert mentors",
    label: "Guidance when you need it",
  },
];

const Onboarding = () => {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);

  const isLastSlide = currentIndex === slides.length - 1;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;

    const index = Math.round(offsetX / width);

    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    if (!isLastSlide) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      router.replace("/auth/login");
    }
  };

  const handleSkip = () => {
    router.replace("/auth/login");
  };

  const handleDotPress = (index: number) => {
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <View className="flex-1 bg-white">
      {/* Top Navigation */}
      <View className="items-end px-8 pt-10">
        <Pressable onPress={handleSkip} className="px-0.5 py-1.5">
          <Text className="text-[1.2rem] font-semibold text-[#6B7684]">
            Skip
          </Text>
        </Pressable>
      </View>

      {/* Slides */}
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => {
          const Icon = item.icon;

          return (
            <View
              style={{ width }}
              className="flex-1 items-center justify-center px-8"
            >
              {/* Icon */}
              <View className="mb-7 h-24 w-24 items-center justify-center rounded-[24px] bg-[#EAF1F7]">
                <Icon size={46} color="#1A3A5C" strokeWidth={2} />
              </View>

              {/* Title */}
              <Text className="mb-2.5 text-center text-[22px] font-extrabold leading-7 text-[#16202A]">
                {item.title}
              </Text>

              {/* Description */}
              <Text className="max-w-[280px] text-center text-[14px] leading-[22px] text-[#6B7684]">
                {item.description}
              </Text>

              {/* Feature Label */}
              <View className="mt-5 flex-row items-center rounded-full border border-[#E2E5E9] bg-[#F4F6F8] px-3 py-1.5">
                <View className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#1A3A5C]" />

                <Text className="text-[10.5px] font-semibold text-[#6B7684]">
                  {item.label}
                </Text>
              </View>
            </View>
          );
        }}
      />

      {/* Bottom Section */}
      <View className="px-5 pb-[26px]">
        {/* Pagination Dots */}
        <View className="mb-5 flex-row items-center justify-center gap-1.5">
          {slides.map((_, index) => {
            const isActive = index === currentIndex;

            return (
              <Pressable
                key={index}
                onPress={() => handleDotPress(index)}
                className={`h-1.5 rounded-full ${
                  isActive ? "w-[22px] bg-[#1A3A5C]" : "w-1.5 bg-[#E2E5E9]"
                }`}
              />
            );
          })}
        </View>

        {/* Primary Button */}
        <Pressable
          onPress={handleNext}
          className="h-[52px] w-full  flex-row items-center justify-center rounded-2xl bg-[#1A3A5C] active:opacity-80"
        >
          <Text className="mr-2 text-[14.5px] font-bold text-white">
            {isLastSlide ? "Get started" : "Next"}
          </Text>

          <ChevronRight size={17} color="#FFFFFF" strokeWidth={2.5} />
        </Pressable>
      </View>
    </View>
  );
};

export default Onboarding;
