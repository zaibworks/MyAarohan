import { router, useNavigation } from "expo-router";
import { Menu, Search, X } from "lucide-react-native";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

import CareerCard from "@/component/careerEncylo/CareerCard";
import CategoryChips from "@/component/careerEncylo/CategoryChips";

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

const categories = [
  "All",
  "Arts & Media",
  "Technology",
  "Health",
  "Business",
  "Science",
  "Law",
  "Design",
];

const careerFields = [
  {
    title: "Arts, Media, Marketing & Entertainment",
    description:
      "Creative, cultural, communication and audience-focused careers.",
    category: "Arts & Media",
  },
  {
    title: "Technology & Computing",
    description:
      "Software, data, AI, cybersecurity and digital product careers.",
    category: "Technology",
  },
  {
    title: "Health & Wellness",
    description: "Healthcare, psychology, wellness and allied health pathways.",
    category: "Health",
  },
  {
    title: "Business & Management",
    description: "Strategy, finance, operations, sales and entrepreneurship.",
    category: "Business",
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
    <View className="flex-1 bg-[#F4F6F8]">
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

        <View className="mt-3">
          <CategoryChips
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
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
                setActiveCategory(field.category);
                setSearch("");
              }}
              className="mb-2.5 rounded-[17px] border border-[#E2E5E9] bg-white p-3.5 active:opacity-70"
            >
              <Text className="text-[14px] font-extrabold text-[#1A3A5C]">
                {field.title}
              </Text>

              <Text className="mt-1 text-[11px] leading-[16px] text-[#6B7684]">
                {field.description}
              </Text>
            </Pressable>
          ))}
        </View>

        <View className="mt-3">
          <View className="mb-2.5 flex-row items-end justify-between">
            <Text className="text-[17px] font-extrabold tracking-[-0.25px] text-[#16202A]">
              Popular careers
            </Text>

            <Text className="text-[11px] font-extrabold text-[#1A3A5C]">
              {filteredCareers.length}{" "}
              {filteredCareers.length === 1 ? "career" : "careers"}
            </Text>
          </View>

          {filteredCareers.length > 0 ? (
            filteredCareers.map((career) => (
              <CareerCard
                key={career.id}
                career={career}
                onPress={() => openCareer(career.id)}
              />
            ))
          ) : (
            <View className="items-center rounded-[17px] border border-[#E2E5E9] bg-white px-5 py-8">
              <Text className="text-[13px] font-extrabold text-[#16202A]">
                No careers found
              </Text>

              <Text className="mt-2 text-center text-[12px] leading-[18px] text-[#6B7684]">
                Try another search or category.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
