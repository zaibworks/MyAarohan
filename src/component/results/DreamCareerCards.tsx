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
        {dreamCareers.map((career) => {
          const Icon = career.icon;

          return (
            <View
              key={career.title}
              className="mb-3 overflow-hidden rounded-2xl border border-[#E6E9ED] bg-white"
            >
              <View className="p-4">
                <View className="flex-row items-center">
                  <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#EAF1F7]">
                    <Icon size={21} color="#1A3A5C" />
                  </View>

                  <View className="ml-3 flex-1">
                    <Text className="text-[15px] font-bold text-[#16202A]">
                      {career.title}
                    </Text>

                    <Text className="mt-1 text-[10px] text-[#9AA4AF]">
                      Assessment needed
                    </Text>
                  </View>

                  <View className="rounded-full bg-[#FFF6DF] px-2.5 py-1">
                    <Text className="text-[9px] font-bold text-[#9A6B00]">
                      Explore
                    </Text>
                  </View>
                </View>

                <View className="mt-4 rounded-xl bg-[#F4F6F8] p-3">
                  <Text className="text-[11px] font-bold text-[#16202A]">
                    What this means
                  </Text>

                  <Text className="mt-1.5 text-[11px] leading-[18px] text-[#6B7684]">
                    {career.nextStep}
                  </Text>
                </View>

                <Text className="mt-4 text-[12px] font-bold text-[#16202A]">
                  Career overview
                </Text>

                <Text className="mt-1.5 text-[11px] leading-[18px] text-[#6B7684]">
                  {career.description}
                </Text>

                <View className="mt-4">
                  <View className="mb-3">
                    <Text className="text-[10px] font-bold text-[#16202A]">
                      Education or training route
                    </Text>

                    <Text className="mt-1 text-[10px] leading-[16px] text-[#6B7684]">
                      {career.education}
                    </Text>
                  </View>

                  <View className="mb-3">
                    <Text className="text-[10px] font-bold text-[#16202A]">
                      Field outlook
                    </Text>

                    <Text className="mt-1 text-[10px] leading-[16px] text-[#6B7684]">
                      {career.outlook}
                    </Text>
                  </View>

                  <View>
                    <Text className="text-[10px] font-bold text-[#16202A]">
                      Your next focus
                    </Text>

                    <Text className="mt-1 text-[10px] leading-[16px] text-[#6B7684]">
                      {career.focus}
                    </Text>
                  </View>
                </View>

                <Pressable
                  onPress={() =>
                    router.push(
                      `/student/career-encyclopedia/${encodeURIComponent(
                        career.title,
                      )}`,
                    )
                  }
                  className="mt-4 flex-row items-center justify-between rounded-xl border border-[#E2E5E9] px-3 py-2.5"
                >
                  <Text className="text-[11px] font-semibold text-[#1A3A5C]">
                    Open in Career Encyclopedia
                  </Text>

                  <ChevronRight size={15} color="#1A3A5C" />
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
