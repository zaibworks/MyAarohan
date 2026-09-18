import { router, useNavigation } from "expo-router";
import { Menu, Search, X } from "lucide-react-native";
import { useMemo, useState } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const careers = [
  {
    id: "art-dealer",
    name: "Art Dealer",
    category: "Arts & Media",
    desc: "Connects artists, collectors and galleries.",
    icon: "arts",
  },
  {
    id: "software-engineer",
    name: "Software Engineer",
    category: "Technology",
    desc: "Builds software products and digital systems.",
    icon: "technology",
  },
  {
    id: "ux-designer",
    name: "UX Designer",
    category: "Design",
    desc: "Designs useful and intuitive digital experiences.",
    icon: "design",
  },
  {
    id: "doctor",
    name: "Doctor",
    category: "Health",
    desc: "Diagnoses, treats and supports patient health.",
    icon: "health",
  },
  {
    id: "architect",
    name: "Architect",
    category: "Design",
    desc: "Plans buildings, spaces and physical environments.",
    icon: "design",
  },
  {
    id: "lawyer",
    name: "Lawyer",
    category: "Law",
    desc: "Advises clients and represents legal interests.",
    icon: "law",
  },
  {
    id: "product-manager",
    name: "Product Manager",
    category: "Business",
    desc: "Guides products from problem to useful solution.",
    icon: "business",
  },
  {
    id: "data-scientist",
    name: "Data Scientist",
    category: "Technology",
    desc: "Uses data, statistics and models to solve problems.",
    icon: "technology",
  },
];

const careerFields = [
  {
    title: "Arts, Media, Marketing & Entertainment",
    description:
      "Creative, cultural, communication and audience-focused careers.",
    category: "Arts & Media",
    image:
      "https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Technology & Computing",
    description:
      "Software, data, AI, cybersecurity and digital product careers.",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },

  {
    title: "Health & Wellness",
    description: "Healthcare, psychology, wellness and allied health pathways.",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },

  {
    title: "Business & Management",
    description: "Strategy, finance, operations, sales and entrepreneurship.",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  },

  {
    title: "Education and Training",
    description: "The Council of Educators and Mentors",
    category: "Education & Training",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  },

  {
    title: "Government Services",
    description: "The Halls of Governance and Administration",
    category: "Government Services",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
  },

  {
    title: "Management",
    description: "The Boardroom of Strategy and Leadership",
    category: "Management",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  },

  {
    title: "Public Policy, Law, and Safety",
    description: "The Courts of Justice and Policy",
    category: "Public Policy, Law & Safety",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
  },

  {
    title: "Aviation",
    description: "The World of Flight, Airports, and Aerospace",
    category: "Aviation",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
  },

  {
    title: "Sports",
    description: "The Arena of Performance, Coaching, and Competition",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function CareerEncyclopedia() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const navigate = useNavigation() as any;
  const filteredCareers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return careers.filter((career) => {
      const matchesCategory =
        activeCategory === "All" || career.category === activeCategory;

      const matchesSearch =
        !query ||
        career.name.toLowerCase().includes(query) ||
        career.desc.toLowerCase().includes(query) ||
        career.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const openCareer = (id: string) => {
    router.push(`/student/career-encyclopedia/${id}`);
  };

  return (
    <SafeAreaView edges={["bottom"]} className="flex-1 bg-[#F4F6F8]">
      {/* TODO: Existing MyAarohan TopBar goes here */}

      <View className="border-b border-[#E6E9ED] bg-white pt-10">
        <View className="h-[62px] flex-row items-center justify-between px-4">
          {/* Left */}
          <View className="flex-row items-center gap-3">
            <Pressable
              onPress={() => navigate.openDrawer()}
              className="h-9 w-9 items-center justify-center rounded-[10px] border border-[#E6E9ED] bg-white"
            >
              <Menu size={18} color="#16202A" strokeWidth={2} />
            </Pressable>
          </View>

          {/* Avatar */}
          <Pressable
            onPress={() => router.push("/student/profile")}
            className="h-[34px] w-[34px] items-center justify-center rounded-full bg-[#1A3A5C]"
          >
            <Text className="text-[14px] font-semibold text-white">Z</Text>
          </Pressable>
        </View>
      </View>

      <View className="border-b border-[#E2E5E9] bg-white px-4 py-4">
        <Text className="text-[10px] font-extrabold uppercase tracking-[1.2px] text-[#1A3A5C]">
          Explore your possibilities
        </Text>

        <Text className="mt-1.5 text-[27px] font-black tracking-[-0.7px] text-[#16202A]">
          Career Encyclopedia
        </Text>

        <Text className="mt-2 text-[13px] leading-[21px] text-[#6B7684]">
          Discover careers, pathways, skills and real-world opportunities.
        </Text>

        <View className="mt-4 h-[47px] flex-row items-center rounded-[14px] border border-[#E2E5E9] bg-white px-3 shadow-sm">
          <Search size={17} color="#9AA4AF" />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search careers..."
            placeholderTextColor="#9AA4AF"
            className="ml-2 flex-1 text-[13px] text-[#16202A]"
          />

          {search.length > 0 && (
            <Pressable onPress={() => setSearch("")}>
              <X size={17} color="#6B7684" />
            </Pressable>
          )}
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 18,
          paddingBottom: 30,
        }}
      >
        <View>
          <View className="mb-2.5 flex-row items-end justify-between">
            <Text className="text-[17px] font-extrabold tracking-[-0.25px] text-[#16202A]">
              Career fields
            </Text>

            <Text className="text-[11px] font-extrabold text-[#1A3A5C]">
              Explore all
            </Text>
          </View>

          {careerFields.map((field) => (
            <Pressable
              key={field.title}
              onPress={() => {
                router.push('/student/(tabs)/career-encyclopedia/career-cards')
                setActiveCategory(field.category);
                setSearch("");
              }}
              className="mb-3.5 overflow-hidden rounded-[20px] active:opacity-90"
            >
              <ImageBackground
                source={{ uri: field.image }}
                resizeMode="cover"
                className="h-[190px] w-full"
              >
                {/* Dark overlay */}
                <View className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <View className="absolute inset-x-0 bottom-0 p-4">
                  <Text className="text-[20px] font-extrabold leading-[25px] text-white">
                    {field.title}
                  </Text>

                  <Text className="mt-1 text-[13px] leading-[18px] text-white/85">
                    {field.description}
                  </Text>

                  <Text className="mt-4 text-[12px] font-extrabold tracking-[0.8px] text-white">
                    EXPLORE
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
