import { useRouter } from "expo-router";
import {
    BriefcaseBusiness,
    ChevronRight,
    Compass,
    Sparkles
} from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type DreamCareer = {
  title: string;
  icon: typeof BriefcaseBusiness;
  description: string;
  nextStep: string;
  education: string;
  outlook: string;
  focus: string;
};

const dreamCareers: DreamCareer[] = [
  {
    title: "Software Engineer",
    icon: BriefcaseBusiness,
    description:
      "A software engineer designs and builds digital systems, applications and software solutions.",
    nextStep:
      "Explore the field through small coding projects and compare related technology paths before committing to a long-term pathway.",
    education:
      "Computer Science, Software Engineering, BCA, B.Tech or related technical pathways can provide a foundation.",
    outlook:
      "Technology continues to offer diverse roles across software development, systems and digital products.",
    focus:
      "Strengthen logical reasoning, coding fundamentals, problem solving and consistent project practice.",
  },
  {
    title: "Photographer",
    icon: Compass,
    description:
      "A photographer creates images for news, documentary work, weddings, fashion, products, advertising, portraits and other visual communication.",
    nextStep:
      "Try practical photography activities and compare different areas such as portrait, product, travel or documentary photography.",
    education:
      "Fine arts, media studies, design, journalism or practical photography training can support this pathway.",
    outlook:
      "Portfolio quality, visual skills, technical practice and communication are important for building opportunities.",
    focus:
      "Develop composition, lighting, editing, visual storytelling and a strong portfolio.",
  },
  {
    title: "Book Writer",
    icon: Sparkles,
    description:
      "A book writer develops stories, ideas and long-form written content across different genres and subjects.",
    nextStep:
      "Write short stories or essays regularly, read across genres and seek feedback to develop your writing voice.",
    education:
      "There is no single fixed degree requirement; literature, journalism, communication and creative-writing pathways can help.",
    outlook:
      "Writing opportunities can span publishing, digital content, journalism, education and independent work.",
    focus:
      "Strengthen verbal reasoning, language ability, creativity, reading and consistent writing practice.",
  },
];

const DreamCareerCards = () => {
  const router = useRouter();
  return (
    <>
      <View className="mt-7 px-5">
        <Text className="text-[19px] font-bold text-[#16202A]">
          Dream Career Analysis
        </Text>

        <Text className="mt-1 text-[13px] leading-5 text-[#6B7684]">
          Compare your current profile with each selected career goal and
          understand the next useful step.
        </Text>
      </View>

    <View className="mx-5 mt-4">
  {dreamCareers.map((career, index) => {
    const Icon = career.icon;

    return (
      <View
        key={career.title}
        className="mb-4 overflow-hidden rounded-[20px] border border-[#F04444] bg-white"
      >
        <View className="px-3 py-3">
          {/* HEADER */}

          <View className="flex-row items-start justify-between">
            <View className="flex-1 pr-3">
              {/* RANK + CHOICE */}

              <View className="mb-1.5 flex-row items-center">
                <View className="mr-1.5 rounded-full bg-[#FDECEC] px-1.5 py-0.5">
                  <Text className="text-[8px] font-bold text-[#D93636]">
                    #{index + 1}
                  </Text>
                </View>

                <Text className="text-[9px] text-[#7B838C]">
                  {index === 0
                    ? "First choice"
                    : index === 1
                    ? "Second choice"
                    : "Third choice"}
                </Text>
              </View>

              {/* TITLE */}

              <Text className="text-[16px] font-medium text-[#263746]">
                {career.title}
              </Text>

              {/* ASSESSMENT STATUS */}

              <View className="mt-1.5 flex-row items-center">
                <Text className="mr-1 text-[11px] font-bold text-[#E33B3B]">
                  ⓘ
                </Text>

                <Text className="text-[9px] font-medium text-[#E33B3B]">
                  Assessment needed
                </Text>
              </View>
            </View>

            {/* PROFILE FIT */}

            <View className="items-center">
              <View className="h-8 w-8 items-center justify-center rounded-full border border-[#E6E9ED] bg-white">
                <Icon
                  size={14}
                  color="#6B7684"
                  strokeWidth={1.7}
                />
              </View>

              <Text className="mt-1 text-[7px] text-[#6B7684]">
                Profile fit
              </Text>
            </View>
          </View>

          {/* CAREER DESCRIPTION */}

          <Text className="mt-3 text-[9.5px] leading-[14px] text-[#68737E]">
            {career.description}
          </Text>

          {/* WHAT THIS MEANS */}

          <View className="mt-3 flex-row">
            {/* RED ACCENT LINE */}

            <View className="mr-2.5 w-[3px] rounded-full bg-[#E33B3B]" />

            <View className="flex-1">
              <Text className="text-[10px] font-semibold text-[#263746]">
                What this means
              </Text>

              <Text className="mt-1 text-[9.5px] leading-[14px] text-[#68737E]">
                {career.nextStep}
              </Text>
            </View>
          </View>

          {/* EDUCATION / TRAINING */}

          <View className="mt-3">
            <View className="flex-row items-start">
              <Text className="mr-1.5 text-[12px] text-[#E33B3B]">
                △
              </Text>

              <View className="flex-1">
                <Text className="text-[10px] font-semibold text-[#263746]">
                  Education or training route
                </Text>

                <Text className="mt-1 text-[9.5px] leading-[13px] text-[#68737E]">
                  {career.education}
                </Text>
              </View>
            </View>
          </View>

          {/* FIELD OUTLOOK */}

          <View className="mt-3">
            <View className="flex-row items-start">
              <Text className="mr-1.5 text-[12px] font-bold text-[#E33B3B]">
                →
              </Text>

              <View className="flex-1">
                <Text className="text-[10px] font-semibold text-[#263746]">
                  Field outlook
                </Text>

                <Text className="mt-1 text-[9.5px] leading-[13px] text-[#68737E]">
                  {career.outlook}
                </Text>
              </View>
            </View>
          </View>

          {/* NEXT FOCUS */}

          <View className="mt-3">
            <View className="flex-row items-start">
              <Text className="mr-1.5 text-[12px] font-bold text-[#E33B3B]">
                ⦿
              </Text>

              <View className="flex-1">
                <Text className="text-[10px] font-semibold text-[#263746]">
                  Your next focus
                </Text>

                <Text className="mt-1 text-[9.5px] leading-[13px] text-[#68737E]">
                  {career.focus}
                </Text>
              </View>
            </View>
          </View>

          {/* CAREER ENCYCLOPEDIA CTA */}

          <Pressable
            onPress={() =>
              router.push(
                `/student/career-encyclopedia/${encodeURIComponent(
                  career.title,
                )}`,
              )
            }
            className="mt-3 flex-row items-center justify-between rounded-[13px] border border-[#F5CACA] bg-[#FDECEC] px-2.5 py-2.5"
          >
            <View className="flex-row items-center">
              <View className="mr-2 h-3.5 w-3.5 rounded-[3px] border border-[#E33B3B]" />

              <View>
                <Text className="text-[9.5px] font-medium text-[#D93636]">
                  Open in Career Encyclopedia
                </Text>

                <Text className="mt-0.5 text-[9px] text-[#263746]">
                  {career.title}
                </Text>
              </View>
            </View>

            <Text className="text-[15px] font-bold text-[#E33B3B]">
              →
            </Text>
          </Pressable>
        </View>
      </View>
    );
  })}
</View>
    </>
  );
};

export default DreamCareerCards;
