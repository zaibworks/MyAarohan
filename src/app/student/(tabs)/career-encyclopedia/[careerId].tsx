import { useMemo, useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View
} from "react-native";

import { router, useLocalSearchParams } from "expo-router";
import {
  ArrowLeft,
  BookOpen,
  Check,
  CircleDollarSign,
  Landmark,
  Send,
  Sparkles,
} from "lucide-react-native";

import InstituteCard from "@/component/careerEncylo/InstituteCard";
import SectionCard from "@/component/careerEncylo/SectionCard";
import { SafeAreaView } from "react-native-safe-area-context";

const careerDetails: Record<string, any> = {
  bacteriologist: {
    name: "Bacteriologist",
    category: "Health and Wellness",
    shortCategory: "Health",
    description:
      "A bacteriologist is a microbiology professional who studies bacteria, bacterial infections, antimicrobial resistance, food and water contamination, diagnostics, vaccines and microbial safety.",

    overview:
      "Bacteriologists study bacteria and how they interact with humans, animals, food, water and the environment. Their work can involve laboratory research, identifying microorganisms, studying infections, testing antimicrobial resistance and supporting diagnostic, pharmaceutical, food-safety or public-health work.",

    places: [
      "Medical laboratories",
      "Research laboratories",
      "Hospitals",
      "Universities",
      "Pharmaceutical companies",
      "Biotechnology companies",
      "Food testing laboratories",
      "Water testing laboratories",
      "Public health laboratories",
      "Government research institutes",
    ],

    environment:
      "The work is usually laboratory-focused and requires careful handling of samples, cultures and scientific equipment. Depending on the role, bacteriologists may spend time performing experiments, analysing results, maintaining laboratory records and following strict hygiene and biosafety procedures.",

    fit: [
      "You are curious about microbes, disease and laboratory investigation.",
      "You can work carefully with samples, cultures and biosafety rules.",
      "You enjoy biology, chemistry and scientific problem-solving.",
      "You are comfortable following detailed laboratory procedures.",
      "You can patiently analyse observations and experimental results.",
    ],

    technicalSkills: [
      "Microbiology",
      "Bacterial culture",
      "Microscopy",
      "Laboratory techniques",
      "Sample analysis",
      "Data interpretation",
      "Biosafety procedures",
      "Scientific documentation",
    ],

    softSkills: [
      "Attention to detail",
      "Scientific curiosity",
      "Patience",
      "Analytical thinking",
      "Problem solving",
      "Team collaboration",
      "Clear communication",
    ],

    archetypes: [
      {
        group: "INVESTIGATORS",
        name: "The Microbe Detective",
        description:
          "High Curiosity + Analytical Thinking. You may enjoy investigating microorganisms, identifying patterns and understanding why biological processes behave differently.",
        values: [
          ["Curiosity", "91%"],
          ["Analytical", "88%"],
        ],
      },

      {
        group: "PRECISIONISTS",
        name: "The Lab Specialist",
        description:
          "High Attention to Detail + Patience. You may naturally prefer careful procedures, accurate observations and methodical laboratory work.",
        values: [
          ["Precision", "94%"],
          ["Patience", "86%"],
        ],
      },
    ],

    typicalDay: [
      "Collect, prepare and label biological samples.",
      "Grow and observe bacterial cultures using laboratory techniques.",
      "Use microscopes and other laboratory equipment.",
      "Record experimental observations and laboratory results.",
      "Analyse bacterial characteristics and test results.",
      "Follow laboratory hygiene and biosafety procedures.",
      "Prepare reports and communicate findings with the research or medical team.",
    ],

    academicPath: [
      [
        "01",
        "Complete 10+2",
        "Science with Biology is generally the relevant school foundation for microbiology and life-science pathways.",
      ],
      [
        "02",
        "Choose an Undergraduate Degree",
        "Consider B.Sc. Microbiology, Biotechnology, Life Sciences or another relevant biological-science program.",
      ],
      [
        "03",
        "Build Laboratory Skills",
        "Develop practical knowledge of microbiology, microscopy, bacterial culture and laboratory safety.",
      ],
      [
        "04",
        "Gain Practical Experience",
        "Look for laboratory projects, internships, research assistant opportunities or academic practical work.",
      ],
      [
        "05",
        "Consider Postgraduate Study",
        "M.Sc. Microbiology, Biotechnology or related specialisations can support research and specialist roles.",
      ],
      [
        "06",
        "Develop a Specialisation",
        "Explore areas such as clinical microbiology, food microbiology, environmental microbiology or antimicrobial resistance.",
      ],
      [
        "07",
        "Build Research Experience",
        "Participate in research projects, laboratory studies, publications or scientific conferences where possible.",
      ],
      [
        "08",
        "Enter the Professional Field",
        "Start with laboratory, research, quality-control, diagnostic or microbiology-related roles and progress with experience.",
      ],
    ],

    exams: [
      [
        "CUET UG",
        "Undergraduate",
        "Can be relevant for undergraduate programs at participating universities offering microbiology, biotechnology or related life-science courses.",
      ],
      [
        "University-specific entrance",
        "Institute",
        "Some universities may use their own entrance tests, merit-based admission or other selection processes.",
      ],
      [
        "NEET UG",
        "Medical route",
        "Relevant for medical education pathways such as MBBS rather than the typical B.Sc. microbiology route.",
      ],
      [
        "CUET PG",
        "Postgraduate",
        "Can be relevant for selected postgraduate microbiology, biotechnology and life-science programs.",
      ],
      [
        "University-specific PG entrance",
        "Postgraduate",
        "Individual universities may conduct their own entrance examinations or admission processes.",
      ],
    ],

    certifications: [
      "Microbiology Laboratory Training",
      "Molecular Biology",
      "Clinical Microbiology",
      "Biosafety Training",
      "Food Microbiology",
      "Quality Control",
      "Bioinformatics Basics",
      "Research Methodology",
    ],

    institutes: [
      {
        name: "University of Delhi",
        course: "Life Sciences / Related Life Science Programs",
        location: "New Delhi",
        type: "government",
      },
      {
        name: "Banaras Hindu University",
        course: "Life Sciences / Related Biological Science Programs",
        location: "Varanasi, Uttar Pradesh",
        type: "government",
      },
      {
        name: "University of Hyderabad",
        course: "Life Sciences / Biological Sciences",
        location: "Hyderabad, Telangana",
        type: "government",
      },
      {
        name: "Amity University",
        course: "Microbiology / Biotechnology",
        location: "Noida, Uttar Pradesh",
        type: "private",
      },
      {
        name: "Manipal Academy of Higher Education",
        course: "Microbiology / Life Sciences",
        location: "Manipal, Karnataka",
        type: "private",
      },
    ],

    stages: [
      ["01", "Laboratory Trainee", "Build practical skills"],
      ["02", "Lab Assistant", "Sample & lab support"],
      ["03", "Microbiology Professional", "Independent laboratory work"],
      ["04", "Senior Microbiologist", "Specialised responsibilities"],
      ["05", "Research / Lab Lead", "Research & leadership"],
    ],
  },
};

export default function CareerDetail() {
  const { careerId } = useLocalSearchParams<{ careerId: string }>();

  const scrollRef = useRef<ScrollView>(null);

  const [instituteFilter, setInstituteFilter] = useState<
    "all" | "government" | "private"
  >("all");

  const [aiInput, setAiInput] = useState("");
  const [aiReply, setAiReply] = useState("");

  const career = useMemo(
    () => careerDetails[careerId ?? ""] ?? fallbackCareer,
    [careerId],
  );

  const filteredInstitutes = career.institutes.filter(
    (institute: any) =>
      instituteFilter === "all" || institute.type === instituteFilter,
  );

  const scrollToSection = (offset: number) => {
    scrollRef.current?.scrollTo({
      y: offset,
      animated: true,
    });
  };

  const askAI = () => {
    const question = aiInput.trim();

    if (!question) return;

    setAiReply(
      `M.A.R.C.O.S: For ${career.name}, start by understanding the career pathway, build practical skills and gain relevant experience. In the real app, this response would be personalized using your assessment and profile.`,
    );

    setAiInput("");
  };

  return (
    <View className="flex-1 bg-[#F4F6F8]">
      {/* TODO: Existing MyAarohan TopBar goes here */}

      <View className="flex-row items-center border-b border-[#E2E5E9] bg-white px-4 py-3 pt-14">
        <Pressable
          onPress={() => router.back()}
          className="h-9 w-9 items-center justify-center rounded-[11px] border border-[#E2E5E9] bg-white"
        >
          <ArrowLeft size={18} color="#1A3A5C" />
        </Pressable>

        <View className="ml-3 flex-1">
          <Text className="text-[15px] font-extrabold text-[#16202A]">
            Career Encyclopedia
          </Text>

          <Text className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.8px] text-[#6B7684]">
            Career details
          </Text>
        </View>
      </View>

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 35,
        }}
      >
        {/* HERO */}

        <View className="border-b border-[#E2E5E9] bg-white px-4 pb-4 pt-4">
          <Pressable onPress={() => router.back()}>
            <Text className="text-[10px] text-[#6B7684]">
              Career Encyclopedia
              <Text> / </Text>
              {career.shortCategory}
            </Text>
          </Pressable>

          <View className="mt-3 flex-row items-start">
            <View className="h-[55px] w-[55px] items-center justify-center rounded-2xl bg-[#EAF0F5]">
              <BookOpen size={27} color="#1A3A5C" />
            </View>

            <View className="ml-3 flex-1">
              <View className="self-start rounded-full bg-[#EDF3F7] px-2.5 py-1">
                <Text className="text-[9px] font-extrabold uppercase text-[#1A3A5C]">
                  {career.category}
                </Text>
              </View>

              <Text className="mt-1.5 text-[27px] font-black leading-[30px] tracking-[-0.7px] text-[#16202A]">
                {career.name}
              </Text>
            </View>
          </View>

          <Text className="mt-3 text-[12px] leading-[20px] text-[#6B7684]">
            {career.description}
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-3"
          >
            <Pressable
              onPress={() => scrollToSection(260)}
              className="mr-2 rounded-[10px] border border-[#E2E5E9] bg-white px-2.5 py-2"
            >
              <Text className="text-[10px] font-extrabold text-[#1A3A5C]">
                Your Fit
              </Text>
            </Pressable>

            <Pressable
              onPress={() => scrollToSection(750)}
              className="mr-2 rounded-[10px] border border-[#E2E5E9] bg-white px-2.5 py-2"
            >
              <Text className="text-[10px] font-extrabold text-[#1A3A5C]">
                Education
              </Text>
            </Pressable>

            <Pressable
              onPress={() => scrollToSection(1700)}
              className="rounded-[10px] border border-[#E2E5E9] bg-white px-2.5 py-2"
            >
              <Text className="text-[10px] font-extrabold text-[#1A3A5C]">
                Institutes
              </Text>
            </Pressable>
          </ScrollView>
        </View>

        <View className="px-4">
          {/* OVERVIEW */}

          <View className="mt-5">
            <Text className="mb-2.5 text-[17px] font-extrabold tracking-[-0.25px] text-[#16202A]">
              Career overview
            </Text>

            <SectionCard>
              <Text className="text-[12px] leading-[20px] text-[#6B7684]">
                {career.overview}
              </Text>
            </SectionCard>
          </View>

          {/* WORK ENVIRONMENT */}

          <View className="mt-6">
            <Text className="mb-2.5 text-[17px] font-extrabold text-[#16202A]">
              Work environment
            </Text>

            <SectionCard>
              <Text className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.8px] text-[#1A3A5C]">
                Places of work
              </Text>

              <View className="flex-row flex-wrap">
                {career.places.map((place: string) => (
                  <View
                    key={place}
                    className="mb-1.5 mr-1.5 rounded-[9px] border border-[#E2E5E9] bg-[#FAFBFC] px-2.5 py-2"
                  >
                    <Text className="text-[10px] font-bold text-[#43505D]">
                      {place}
                    </Text>
                  </View>
                ))}
              </View>

              <View className="mt-2.5">
                <Text className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.8px] text-[#1A3A5C]">
                  What it feels like
                </Text>

                <Text className="text-[11px] leading-[17px] text-[#6B7684]">
                  {career.environment}
                </Text>
              </View>

              <View className="mt-2.5 border-t border-[#EEF0F2] pt-2.5">
                <View className="flex-row justify-between">
                  <Text className="text-[11px] text-[#6B7684]">
                    Entrepreneurship
                  </Text>

                  <Text className="text-[11px] font-extrabold text-[#1B8354]">
                    Yes
                  </Text>
                </View>
              </View>

              <View className="mt-2 border-t border-[#EEF0F2] pt-2.5">
                <View className="flex-row justify-between">
                  <Text className="text-[11px] text-[#6B7684]">
                    Differently-abled friendly
                  </Text>

                  <Text className="text-[11px] font-extrabold text-[#1B8354]">
                    Yes*
                  </Text>
                </View>
              </View>
            </SectionCard>
          </View>

          {/* FIT */}

          <View className="mt-6" nativeID="fit">
            <View className="rounded-[18px] border border-[#D9E4EC] bg-[#F2F7FA] p-[15px]">
              <View className="flex-row items-start justify-between">
                <View className="flex-1">
                  <Text className="text-[10px] font-extrabold uppercase tracking-[1px] text-[#1A3A5C]">
                    Personalized for you
                  </Text>

                  <Text className="mt-1 text-[16px] font-black text-[#1A3A5C]">
                    Is this career for you?
                  </Text>
                </View>

                <View className="rounded-full bg-[#E6F7EE] px-2.5 py-1.5">
                  <Text className="text-[10px] font-extrabold text-[#1B8354]">
                    Strong fit
                  </Text>
                </View>
              </View>

              <Text className="mt-1.5 text-[11px] leading-[17px] text-[#6B7684]">
                Based on your assessment and profile, these are the parts of the
                career that may align with you.
              </Text>

              <View className="mt-3">
                {career.fit.map((item: string) => (
                  <View key={item} className="mb-2 flex-row items-start">
                    <View className="mr-2 mt-0.5 h-[17px] w-[17px] items-center justify-center rounded-full bg-[#E6F7EE]">
                      <Check size={11} color="#1B8354" />
                    </View>

                    <Text className="flex-1 text-[11px] leading-[16px] text-[#34404B]">
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* SKILLS */}

          <View className="mt-6">
            <Text className="mb-2.5 text-[17px] font-extrabold text-[#16202A]">
              Core skills
            </Text>

            <SectionCard>
              <Text className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.8px] text-[#1A3A5C]">
                Technical skills
              </Text>

              <View className="flex-row flex-wrap">
                {career.technicalSkills.map((skill: string) => (
                  <View
                    key={skill}
                    className="mb-1.5 mr-1.5 rounded-[9px] border border-[#E2E5E9] bg-[#FAFBFC] px-2.5 py-2"
                  >
                    <Text className="text-[10px] font-bold text-[#43505D]">
                      {skill}
                    </Text>
                  </View>
                ))}
              </View>

              <Text className="mb-2 mt-3 text-[10px] font-extrabold uppercase tracking-[0.8px] text-[#1A3A5C]">
                Soft skills
              </Text>

              <View className="flex-row flex-wrap">
                {career.softSkills.map((skill: string) => (
                  <View
                    key={skill}
                    className="mb-1.5 mr-1.5 rounded-[9px] border border-[#E2E5E9] bg-[#FAFBFC] px-2.5 py-2"
                  >
                    <Text className="text-[10px] font-bold text-[#43505D]">
                      {skill}
                    </Text>
                  </View>
                ))}
              </View>
            </SectionCard>
          </View>

          {/* PERSONALITY */}

          <View className="mt-6">
            <Text className="mb-2.5 text-[17px] font-extrabold text-[#16202A]">
              Personality archetypes
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {career.archetypes.map((archetype: any) => (
                <View
                  key={archetype.name}
                  className="mr-2.5 w-[245px] rounded-2xl border border-[#E2E5E9] bg-white p-3"
                >
                  <Text className="text-[9px] font-black tracking-[1px] text-[#7350A8]">
                    {archetype.group}
                  </Text>

                  <Text className="mt-1 text-[15px] font-black text-[#16202A]">
                    {archetype.name}
                  </Text>

                  <Text className="mt-1.5 text-[11px] leading-[17px] text-[#6B7684]">
                    {archetype.description}
                  </Text>

                  <View className="mt-3">
                    {archetype.values.map(([label, value]: string[]) => (
                      <View key={label} className="mb-2 flex-row items-center">
                        <Text className="w-[72px] text-[9px] text-[#6B7684]">
                          {label}
                        </Text>

                        <View className="h-[5px] flex-1 overflow-hidden rounded-full bg-[#EEEAF4]">
                          <View
                            style={{
                              width: value as `${number}%`,
                              height: "100%",
                              backgroundColor: "#8B70B8",
                            }}
                            className="rounded-full"
                          />
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* TYPICAL DAY */}

          <View className="mt-6">
            <Text className="mb-2.5 text-[17px] font-extrabold text-[#16202A]">
              What you will do on a typical day
            </Text>

            <SectionCard>
              {career.typicalDay.map((item: string, index: number) => (
                <View
                  key={item}
                  className={`flex-row ${
                    index !== career.typicalDay.length - 1
                      ? "border-b border-[#EEF0F2]"
                      : ""
                  } py-2.5`}
                >
                  <View className="mr-2.5 mt-1.5 h-[7px] w-[7px] rounded-full bg-[#1A3A5C]" />

                  <Text className="flex-1 text-[11px] leading-[17px] text-[#3D4853]">
                    {item}
                  </Text>
                </View>
              ))}
            </SectionCard>
          </View>

          {/* ACADEMIC PATH */}

          <View className="mt-6" nativeID="academic">
            <Text className="mb-2.5 text-[17px] font-extrabold text-[#16202A]">
              Academic path
            </Text>

            <SectionCard>
              <Text className="text-[10px] font-extrabold uppercase tracking-[0.8px] text-[#1A3A5C]">
                Stream
              </Text>

              <Text className="mb-4 mt-2 text-[12px] leading-[19px] text-[#6B7684]">
                Complete 10+2 in any stream. Humanities, Commerce and Science
                can all lead into relevant degree, business or art-market
                pathways.
              </Text>

              {career.academicPath.map((item: string[]) => (
                <View key={item[0]} className="flex-row pb-4">
                  <View className="mr-2.5 h-[33px] w-[33px] items-center justify-center rounded-full border border-[#D9E2EA] bg-[#EEF3F7]">
                    <Text className="text-[9px] font-black text-[#1A3A5C]">
                      {item[0]}
                    </Text>
                  </View>

                  <View className="flex-1 pt-0.5">
                    <Text className="text-[12px] font-extrabold text-[#16202A]">
                      {item[1]}
                    </Text>

                    <Text className="mt-1 text-[10.5px] leading-[16px] text-[#6B7684]">
                      {item[2]}
                    </Text>
                  </View>
                </View>
              ))}
            </SectionCard>
          </View>

          {/* ENTRANCE EXAMS */}

          <View className="mt-6">
            <Text className="mb-2.5 text-[17px] font-extrabold text-[#16202A]">
              Entrance exams
            </Text>

            {career.exams.map((exam: string[]) => (
              <View
                key={exam[0]}
                className="mb-2 rounded-[14px] border border-[#E2E5E9] bg-white p-3"
              >
                <View className="flex-row justify-between">
                  <Text className="flex-1 text-[11px] font-extrabold text-[#16202A]">
                    {exam[0]}
                  </Text>

                  <Text className="ml-2 text-[8px] font-black uppercase tracking-[0.6px] text-[#1A3A5C]">
                    {exam[1]}
                  </Text>
                </View>

                <Text className="mt-1.5 text-[10.5px] leading-[16px] text-[#6B7684]">
                  {exam[2]}
                </Text>
              </View>
            ))}
          </View>

          {/* CERTIFICATIONS */}

          <View className="mt-6">
            <Text className="mb-2.5 text-[17px] font-extrabold text-[#16202A]">
              Helpful certifications
            </Text>

            <SectionCard>
              <View className="flex-row flex-wrap">
                {career.certifications.map((item: string) => (
                  <View
                    key={item}
                    className="mb-1.5 mr-1.5 rounded-[9px] border border-[#E2E5E9] bg-[#FAFBFC] px-2.5 py-2"
                  >
                    <Text className="text-[10px] font-bold text-[#43505D]">
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            </SectionCard>
          </View>

          {/* SCHOLARSHIPS */}

          <View className="mt-6">
            <View className="rounded-[15px] border border-[#D7EEE1] bg-[#F4FBF7] p-3">
              <View className="flex-row items-center">
                <View className="h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#E6F7EE]">
                  <CircleDollarSign size={17} color="#1B8354" />
                </View>

                <Text className="ml-2.5 text-[12px] font-extrabold text-[#16202A]">
                  Scholarships
                </Text>
              </View>

              <Text className="mt-2 text-[10px] leading-[15px] text-[#6B7684]">
                Explore government and institute-specific support. Eligibility
                changes by scheme and student profile.
              </Text>

              <Text className="mt-2 text-[10px] text-[#46515C]">
                • National Scholarship Portal
              </Text>
              <Text className="mt-1 text-[10px] text-[#46515C]">• PM-USP</Text>
              <Text className="mt-1 text-[10px] text-[#46515C]">
                • Post-Matric Scholarship schemes
              </Text>
            </View>

            <View className="mt-2.5 rounded-[15px] border border-[#DCE8F1] bg-[#F4F8FB] p-3">
              <View className="flex-row items-center">
                <View className="h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#EAF0F5]">
                  <Landmark size={17} color="#1A3A5C" />
                </View>

                <Text className="ml-2.5 text-[12px] font-extrabold text-[#16202A]">
                  Education loans
                </Text>
              </View>

              <Text className="mt-2 text-[10px] leading-[15px] text-[#6B7684]">
                Loan availability, interest and eligibility depend on the
                lender, institute and student profile.
              </Text>

              <Text className="mt-2 text-[10px] text-[#46515C]">
                • PM-Vidyalaxmi
              </Text>
              <Text className="mt-1 text-[10px] text-[#46515C]">
                • Vidya Lakshmi
              </Text>
              <Text className="mt-1 text-[10px] text-[#46515C]">
                • Bank education loans
              </Text>
              <Text className="mt-1 text-[10px] text-[#46515C]">
                • State education-loan schemes
              </Text>
            </View>
          </View>

          {/* INSTITUTES */}

          <View className="mt-6" nativeID="institutes">
            <Text className="mb-2.5 text-[17px] font-extrabold text-[#16202A]">
              Where can you study?
            </Text>

            <View className="mb-2.5 flex-row">
              {(["all", "government", "private"] as const).map((type) => {
                const active = instituteFilter === type;

                return (
                  <Pressable
                    key={type}
                    onPress={() => setInstituteFilter(type)}
                    className={`mr-2 rounded-[9px] border px-2.5 py-2 ${
                      active
                        ? "border-[#1A3A5C] bg-[#1A3A5C]"
                        : "border-[#E2E5E9] bg-white"
                    }`}
                  >
                    <Text
                      className={`text-[10px] font-extrabold capitalize ${
                        active ? "text-white" : "text-[#6B7684]"
                      }`}
                    >
                      {type}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* Illustrative map */}
            <View className="relative h-[205px] overflow-hidden rounded-2xl border border-[#CBD5DE] bg-[#EAF0EE]">
              <View className="absolute left-[20%] top-[23%]">
                <Text className="text-[8px] font-extrabold text-[#687975]">
                  Rajasthan
                </Text>
              </View>

              <View className="absolute left-[55%] top-[19%]">
                <Text className="text-[8px] font-extrabold text-[#687975]">
                  Uttar Pradesh
                </Text>
              </View>

              <View className="absolute left-[66%] top-[57%]">
                <Text className="text-[8px] font-extrabold text-[#687975]">
                  West Bengal
                </Text>
              </View>

              <View className="absolute left-[34%] top-[77%]">
                <Text className="text-[8px] font-extrabold text-[#687975]">
                  Gujarat
                </Text>
              </View>

              <View className="absolute left-[60%] top-[82%]">
                <Text className="text-[8px] font-extrabold text-[#687975]">
                  Karnataka
                </Text>
              </View>

              {[
                ["48%", "31%"],
                ["60%", "55%"],
                ["35%", "66%"],
                ["72%", "72%"],
                ["43%", "46%"],
              ].map(([left, top], index) => (
                <View
                  key={index}
                  style={{
                    left: left as any,
                    top: top as any,
                    transform: [{ rotate: "-45deg" }],
                  }}
                  className="absolute h-[18px] w-[18px] rounded-full rounded-bl-[2px] bg-[#1A3A5C]"
                />
              ))}

              <View className="absolute bottom-2.5 left-2.5 rounded-lg border border-[#D9E0E4] bg-white px-2 py-1.5">
                <Text className="text-[8px] text-[#6B7684]">
                  Illustrative locations • Tap institute for details
                </Text>
              </View>
            </View>

            <View className="mt-2.5">
              {filteredInstitutes.map((institute: any) => (
                <InstituteCard key={institute.name} {...institute} />
              ))}
            </View>
          </View>

          {/* INVESTMENT */}

          <View className="mt-6">
            <Text className="mb-2.5 text-[17px] font-extrabold text-[#16202A]">
              Course investment
            </Text>

            <View className="rounded-2xl border border-[#E2E5E9] bg-white p-3.5">
              <Text className="text-[9px] font-extrabold uppercase tracking-[0.9px] text-[#6B7684]">
                Estimated education investment
              </Text>

              <Text className="mt-1.5 text-[25px] font-black tracking-[-0.8px] text-[#1A3A5C]">
                ₹5L – ₹10L+
              </Text>

              <Text className="mt-1 text-[9.5px] leading-[14px] text-[#6B7684]">
                Estimated range across relevant education pathways.
              </Text>

              <Text className="mt-2 text-[9.5px] leading-[14px] text-[#6B7684]">
                This is an indicative estimate, not a guaranteed fee. Actual
                cost varies by course, institute, city, duration and level.
              </Text>
            </View>
          </View>

          {/* ROI */}

          <View className="mt-5">
            <Text className="mb-2.5 text-[17px] font-extrabold text-[#16202A]">
              Return on investment
            </Text>

            <View className="rounded-2xl border border-[#DCE6EE] bg-[#F7FAFC] p-3.5">
              <Text className="text-[9px] font-extrabold uppercase tracking-[0.9px] text-[#6B7684]">
                Illustrative long-term ROI
              </Text>

              <Text className="mt-1.5 text-[25px] font-black tracking-[-0.8px] text-[#1A3A5C]">
                5×
              </Text>

              <Text className="mt-1 text-[9.5px] text-[#6B7684]">
                Illustrative long-term estimate — around 4 years.
              </Text>

              <Text className="mt-2 text-[9.5px] leading-[14px] text-[#6B7684]">
                Actual results depend on institute, role, experience, market
                conditions and individual performance.
              </Text>
            </View>
          </View>

          {/* PROGRESSION */}

          <View className="mt-6">
            <View className="mb-2.5 flex-row items-end justify-between">
              <Text className="text-[17px] font-extrabold text-[#16202A]">
                Career progression
              </Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {career.stages.map((stage: string[], index: number) => (
                <View
                  key={stage[1]}
                  className={`mr-2.5 w-[158px] rounded-[15px] border p-3 ${
                    index === 0
                      ? "border-[#B8C9D7] bg-[#F6F9FB]"
                      : "border-[#E2E5E9] bg-white"
                  }`}
                >
                  <Text className="text-[9px] font-black text-[#1A3A5C]">
                    {stage[0]}
                  </Text>

                  <Text className="mt-2 text-[12px] font-extrabold text-[#16202A]">
                    {stage[1]}
                  </Text>

                  <Text className="mt-1 text-[9.5px] leading-[14px] text-[#6B7684]">
                    {stage[2]}
                  </Text>

                  <View className="mt-2.5 h-1 overflow-hidden rounded-full bg-[#E9EDF1]">
                    {index === 0 && (
                      <View className="h-full w-[75%] rounded-full bg-[#1A3A5C]" />
                    )}
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* AI */}

          <View className="mb-4 mt-6 rounded-[18px] border border-[#d5deec] bg-[#f9fbfe] p-3.5">
            <View className="flex-row items-center">
              <View className="h-[39px] w-[39px] items-center justify-center rounded-xl bg-[#ecf5fa]">
                <Sparkles size={20} color="#1A3A5C" />
              </View>

              <View className="ml-2.5 flex-1">
                <Text className="text-[14px] font-black text-[#16202A]">
                  AI Career Assistant
                </Text>

                <Text className="mt-0.5 text-[9px] font-extrabold text-[#1A3A5C]">
                  Powered by M.A.R.C.O.S — AARO AI
                </Text>
              </View>
            </View>

            <Text className="mt-2 text-[10.5px] leading-[16px] text-[#706b84]">
              Ask anything about this career — exams, skills, salary, education,
              institutes or your next step. The assistant already knows you are
              exploring <Text className="font-extrabold">{career.name}</Text>.
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="my-2.5"
            >
              {[
                "What should I study after 12th?",
                "What skills should I build first?",
                "Is this career a good fit for me?",
              ].map((suggestion) => (
                <Pressable
                  key={suggestion}
                  onPress={() => setAiInput(suggestion)}
                  className="mr-1.5 rounded-[9px] border border-[#E2DCEE] bg-white px-2 py-1.5"
                >
                  <Text className="text-[9px] font-bold text-[#424071]">
                    {suggestion}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>

            <View className="flex-row items-center rounded-xl border border-[#DCD4E8] bg-white p-1.5">
              <TextInput
                value={aiInput}
                onChangeText={setAiInput}
                placeholder="Ask anything about this career..."
                placeholderTextColor="#9AA4AF"
                className="flex-1 px-1.5 text-[10px] text-[#16202A]"
                onSubmitEditing={askAI}
              />

              <Pressable
                onPress={askAI}
                className="h-[31px] w-[31px] items-center justify-center rounded-[9px] bg-[#1A3A5C]"
              >
                <Send size={15} color="white" />
              </Pressable>
            </View>

            {aiReply ? (
              <View className="mt-2 rounded-[11px] border border-[#E4DEED] bg-white p-2.5">
                <Text className="text-[10px] leading-[15px] text-[#53666a]">
                  {aiReply}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
