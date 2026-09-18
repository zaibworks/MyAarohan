import { ImageBackground, ScrollView, Text, TextInput, View } from "react-native";

import CareerCard from "@/component/careerEncylo/CareerCard";
import { useRouter } from "expo-router";

type Career = {
  id: string;
  name: string;
  category: string;
  desc: string;
  icon: string;
  fitTags: string[];
  exams: string[];
  moreExams?: number;
};
const careerFields = [
  {
    title: "Arts, Media, Marketing and Entertainment",
    description: "The Artist's Haven and Creative Studios",
    image:
      "https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const careers: Career[] = [
  {
    id: "bacteriologist",
    name: "Bacteriologist",
    category: "Health",
    desc: "A Bacteriologist is a microbiology professional who studies bacteria, bacterial infections, antimicrobial resistance, food/water contamination, diagnostics, vaccines and microbial safety.",
    icon: "health",
    fitTags: [
      "You are curious about microbes, disease and laboratory investigation",
      "You can work carefully with samples, cultures and biosafety rules",
    ],
    exams: [
      "CUET-UG for B.Sc. Microbiology/Biotechnology/Life Sciences where used",
      "University-specific B.Sc. admission tests or merit lists",
    ],
    moreExams: 9,
  },

  {
    id: "cardiologist",
    name: "Cardiologist",
    category: "Health",
    desc: "A Cardiologist is a specialist doctor who diagnoses, treats and prevents diseases of the heart and blood vessels, including coronary artery disease, heart failure, arrhythmias and hypertension.",
    icon: "health",
    fitTags: [
      "You can commit to a long medical training pathway",
      "You are calm during emergencies and high-pressure decision making",
    ],
    exams: [
      "NEET-UG for MBBS admission",
      "MCC/state medical counselling for MBBS seats",
    ],
    moreExams: 6,
  },

  {
    id: "acupuncturist",
    name: "Acupuncturist",
    category: "Health",
    desc: "An acupuncturist uses fine needles at specific points as a complementary therapy, commonly for pain and wellness support, while following safety, hygiene and informed consent practices.",
    icon: "health",
    fitTags: [
      "You are careful with hygiene and client safety",
      "You are interested in anatomy, pain and complementary therapy",
    ],
    exams: [
      "NEET-UG for MBBS/BAMS/BHMS/BNYS/BPT-related health routes where applicable",
      "AIAPGET for AYUSH postgraduate routes where applicable",
    ],
    moreExams: 6,
  },

  {
    id: "microbiologist",
    name: "Microbiologist",
    category: "Health",
    desc: "A Microbiologist studies microorganisms such as bacteria, viruses, fungi and parasites to understand their behaviour, applications, effects on health and role in the environment.",
    icon: "health",
    fitTags: [
      "You enjoy laboratory experiments and scientific investigation",
      "You are interested in microorganisms and biological research",
    ],
    exams: [
      "CUET-UG for B.Sc. Microbiology and related life science programmes",
      "University-specific undergraduate admission tests or merit lists",
    ],
    moreExams: 7,
  },

  {
    id: "software-engineer",
    name: "Software Engineer",
    category: "Technology",
    desc: "A Software Engineer designs, develops, tests and maintains software applications, systems and digital products using programming languages and engineering practices.",
    icon: "technology",
    fitTags: [
      "You enjoy solving problems through logic and programming",
      "You like building digital products and learning new technologies",
    ],
    exams: [
      "JEE Main for B.Tech. Computer Science and related programmes",
      "CUET-UG for selected computer science undergraduate programmes",
    ],
    moreExams: 8,
  },

  {
    id: "data-scientist",
    name: "Data Scientist",
    category: "Technology",
    desc: "A Data Scientist uses statistics, programming, machine learning and analytical methods to discover patterns in data and help organisations make informed decisions.",
    icon: "technology",
    fitTags: [
      "You enjoy mathematics, statistics and analytical problem solving",
      "You are curious about patterns hidden inside large datasets",
    ],
    exams: [
      "JEE Main for relevant B.Tech. programmes",
      "CUET-UG for selected statistics, mathematics and computing programmes",
    ],
    moreExams: 7,
  },

  {
    id: "ux-designer",
    name: "UX Designer",
    category: "Design",
    desc: "A UX Designer researches user needs and creates useful, accessible and intuitive digital experiences by combining design thinking, research and visual communication.",
    icon: "design",
    fitTags: [
      "You notice how people interact with apps and digital products",
      "You enjoy combining creativity with practical problem solving",
    ],
    exams: [
      "NID DAT for selected design programmes",
      "UCEED for undergraduate design programmes where applicable",
    ],
    moreExams: 5,
  },

  {
    id: "architect",
    name: "Architect",
    category: "Design",
    desc: "An Architect plans and designs buildings, spaces and physical environments while considering functionality, safety, aesthetics, materials, sustainability and construction requirements.",
    icon: "design",
    fitTags: [
      "You enjoy designing spaces and thinking visually",
      "You are interested in geometry, structures and creative problem solving",
    ],
    exams: [
      "NATA for architecture admissions",
      "JEE Main Paper 2 for participating B.Arch programmes",
    ],
    moreExams: 4,
  },

  {
    id: "lawyer",
    name: "Lawyer",
    category: "Law",
    desc: "A Lawyer advises clients on legal matters, researches laws and regulations, prepares legal documents and represents individuals or organisations in legal proceedings.",
    icon: "law",
    fitTags: [
      "You enjoy reasoning, reading and analysing complex situations",
      "You can communicate arguments clearly and confidently",
    ],
    exams: [
      "CLAT for participating National Law Universities",
      "AILET for National Law University Delhi",
    ],
    moreExams: 5,
  },

  {
    id: "product-manager",
    name: "Product Manager",
    category: "Business",
    desc: "A Product Manager guides a product from identifying user problems to defining priorities, coordinating teams and delivering solutions that create meaningful value.",
    icon: "business",
    fitTags: [
      "You enjoy solving real-world problems and organising ideas",
      "You can communicate with different teams and make decisions",
    ],
    exams: [
      "CAT for management programmes at participating institutes",
      "XAT for selected management programmes",
    ],
    moreExams: 8,
  },
];

export default function CareerCards() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-[#F4F6F8]">
      {/* Hero */}
      <ImageBackground
        source={{ uri: careerFields[0].image }}
        resizeMode="cover"
        className="h-[290px] w-full"
      >
        {/* Dark overlay */}
        <View className="absolute inset-0 bg-[#101827]/75" />

        {/* Hero Content */}
        <View className="absolute bottom-10 left-5 right-5">
          <Text className="text-[30px] font-extrabold leading-[37px] text-white">
            {careerFields[0].title}
          </Text>

          <Text className="mt-1.5 text-[14px] font-semibold text-white/75">
            {careerFields[0].description}
          </Text>
        </View>
      </ImageBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-8"
        className="border-t-4 border-[#0845465d]"
      >
        {/* Main Content */}
        <View className="px-4 pt-5">
          {/* Search */}
          <TextInput
            placeholder="Filter careers..."
            placeholderTextColor="#9AA4AF"
            className="mb-5 h-[56px] rounded-[16px] border border-[#E2E5E9] bg-white px-4 text-[14px] text-[#16202A]"
          />

          {/* Career Cards */}
          {careers.map((career) => (
            <CareerCard key={career.id} career={career} onPress={() => router.push(`/student/(tabs)/career-encyclopedia/${career.id}`)} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
