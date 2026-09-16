import { useMemo, useRef, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  ChevronRight,
  CircleDollarSign,
  GraduationCap,
  Info,
  Landmark,
  MessageCircle,
  Search,
  Send,
  Sparkles,
  Users,
} from "lucide-react-native";
;
import SectionCard from "@/component/careerEncylo/SectionCard";
import InstituteCard from "@/component/careerEncylo/InstituteCard";
import { SafeAreaView } from "react-native-safe-area-context";

const careerDetails: Record<string, any> = {
  "art-dealer": {
    name: "Art Dealer",
    category: "Arts, Media & Entertainment",
    shortCategory: "Arts & Media",
    description:
      "Art dealers connect artists, collectors, galleries and institutions. They help discover, evaluate, present and sell artworks while building long-term relationships across the art market.",
    overview:
      "An art dealer works at the intersection of creativity and commerce. The role can involve sourcing artworks, researching artists, advising collectors, supporting exhibitions, negotiating transactions and coordinating the practical side of artwork sales.",
    places: [
      "Art galleries",
      "Auction houses",
      "Artist studios",
      "Museums",
      "Art fairs",
      "Cultural foundations",
      "Private collections",
      "Online art platforms",
      "Corporate art advisory",
      "Independent practice",
    ],
    environment:
      "Expect a mix of research, conversations, gallery visits, exhibitions, client meetings and behind-the-scenes coordination. The work is relationship-heavy and may involve irregular hours around openings, fairs and events.",
    fit: [
      "You enjoy art, visual culture and meeting people.",
      "You can build trust with clients and artists.",
      "You are comfortable with negotiation and sales.",
      "You notice quality, condition, style and provenance details.",
      "You can balance creative taste with commercial judgement.",
    ],
    technicalSkills: [
      "Art basics",
      "Gallery operations",
      "Artwork documentation",
      "Client database",
      "Sales support",
      "Exhibition assistance",
    ],
    softSkills: [
      "Professional communication",
      "Attention to detail",
      "Client handling",
      "Discretion",
      "Hospitality",
    ],
    archetypes: [
      {
        group: "ALCHEMISTS",
        name: "The Dream-Weaver",
        description:
          "High Openness + Creative Aptitude. You may naturally spot meaning, style and visual potential in ideas and artworks.",
        values: [
          ["Openness", "88%"],
          ["Creativity", "91%"],
        ],
      },
      {
        group: "CATALYSTS",
        name: "The Closer",
        description:
          "High Extraversion + Numerical Aptitude. You may be comfortable turning relationships into confident commercial decisions.",
        values: [
          ["Extraversion", "82%"],
          ["Numerical", "76%"],
        ],
      },
    ],
    typicalDay: [
      "Assist with gallery display, artwork handling and inventory.",
      "Prepare artist notes, captions and documentation.",
      "Support exhibitions, openings and art-fair events.",
      "Communicate with clients, collectors and buyers.",
      "Learn provenance, authenticity and artwork condition.",
      "Maintain records and coordinate packaging or shipping.",
    ],
    academicPath: [
      [
        "01",
        "Complete 10+2",
        "Build strong communication, general awareness and academic fundamentals.",
      ],
      [
        "02",
        "Choose a Degree / Diploma",
        "Consider fine arts, art history, design, business, commerce or related programs.",
      ],
      [
        "03",
        "Build Practical Experience",
        "Seek gallery, museum, auction-house or arts-organization internships.",
      ],
      [
        "04",
        "Learn the Business Side",
        "Develop sales, pricing, client management, documentation and negotiation skills.",
      ],
      [
        "05",
        "Consider Advanced Education",
        "A postgraduate qualification can deepen expertise in art history, curation or management.",
      ],
      [
        "06",
        "Understand Regulations",
        "Learn basics of contracts, taxes, provenance, copyright and art-market compliance.",
      ],
      [
        "07",
        "Build Industry Network",
        "Connect with artists, curators, galleries, collectors and cultural institutions.",
      ],
      [
        "08",
        "Start in an Entry Role",
        "Begin with gallery, sales, collections or research responsibilities and grow from there.",
      ],
    ],
    exams: [
      [
        "No mandatory national entrance exam",
        "Common route",
        "There is no single national exam required to become an art dealer. Institute requirements vary.",
      ],
      [
        "CUET UG",
        "Undergraduate",
        "Can be relevant for undergraduate programs offered by participating universities.",
      ],
      [
        "CUET PG",
        "Postgraduate",
        "May apply to selected postgraduate pathways depending on the university and program.",
      ],
      [
        "NID DAT / UCEED / CEED",
        "Design routes",
        "Relevant mainly when using design or visual-arts education as an adjacent pathway.",
      ],
      [
        "University-specific entrances",
        "Institute",
        "Some institutes use their own entrance tests, interviews, portfolios or selection processes.",
      ],
      [
        "CAT / XAT / CMAT / MAT / GMAT",
        "Business route",
        "Potentially useful for management education when targeting the commercial side of the art market.",
      ],
    ],
    certifications: [
      "Art History Coursework",
      "Art Appreciation",
      "Gallery Internship",
      "Museum Internship",
      "Art Market Training",
      "Collections Management",
    ],
    institutes: [
      {
        name: "Maharaja Sayajirao University of Baroda",
        course: "Faculty of Fine Arts",
        location: "Vadodara, Gujarat",
        type: "government",
      },
      {
        name: "College of Art, University of Delhi",
        course: "Fine Arts",
        location: "New Delhi",
        type: "government",
      },
      {
        name: "Banaras Hindu University",
        course: "Faculty of Visual Arts",
        location: "Varanasi, Uttar Pradesh",
        type: "government",
      },
      {
        name: "Srishti Manipal Institute",
        course: "Art, Design & Technology",
        location: "Bengaluru, Karnataka",
        type: "private",
      },
      {
        name: "FLAME University",
        course: "Creative Arts",
        location: "Pune, Maharashtra",
        type: "private",
      },
    ],
    stages: [
      ["01", "Gallery Intern", "Entry exposure"],
      ["02", "Gallery Associate", "Client support"],
      ["03", "Art Dealer", "Sales & advisory"],
      ["04", "Senior Art Dealer", "High-value work"],
      ["05", "Gallery Manager", "Leadership"],
    ],
  },
};

const fallbackCareer = {
  name: "Career Preview",
  category: "Career",
  shortCategory: "Career",
  description:
    "Explore this career and discover education pathways, skills and opportunities.",
  overview:
    "This is a UI prototype. Detailed career information can be connected later.",
  places: [],
  environment:
    "Career environment information will be connected to the real career data later.",
  fit: [],
  technicalSkills: [],
  softSkills: [],
  archetypes: [],
  typicalDay: [],
  academicPath: [],
  exams: [],
  certifications: [],
  institutes: [],
  stages: [],
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
    [careerId]
  );

  const filteredInstitutes = career.institutes.filter(
    (institute: any) =>
      instituteFilter === "all" || institute.type === instituteFilter
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
      `M.A.R.C.O.S: For ${career.name}, start by understanding the career pathway, build practical skills and gain relevant experience. In the real app, this response would be personalized using your assessment and profile.`
    );

    setAiInput("");
  };

  return (
    <SafeAreaView edges={['bottom']}
    className="flex-1 bg-[#F4F6F8]">
      {/* TODO: Existing MyAarohan TopBar goes here */}

      <View className="flex-row items-center border-b border-[#E2E5E9] bg-white px-4 py-3 pt-10">
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
                Based on your assessment and profile, these are the parts of
                the career that may align with you.
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
                      <View
                        key={label}
                        className="mb-2 flex-row items-center"
                      >
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
                <View
                  key={item[0]}
                  className="flex-row pb-4"
                >
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
              <Text className="mt-1 text-[10px] text-[#46515C]">
                • PM-USP
              </Text>
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
              Ask anything about this career — exams, skills, salary,
              education, institutes or your next step. The assistant already
              knows you are exploring{" "}
              <Text className="font-extrabold">{career.name}</Text>.
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
    </SafeAreaView>
  );
}