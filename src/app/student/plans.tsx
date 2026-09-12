import { useNavigation, useRouter } from "expo-router";
import {
  ArrowRight,
  Brain,
  Check,
  Compass,
  Info,
  Menu,
  UsersRound,
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";

type Plan = {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  saving: string;
  description: string;
  features: string[];
  icon: typeof Brain;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    id: "assessment",
    name: "360° AI Career Assessment",
    price: "₹699",
    originalPrice: "₹999",
    saving: "Save 30%",
    description: "Start or retake the 3-part career assessment.",
    icon: Brain,
    features: [
      "Aptitude, personality, and interest modules",
      "Interactive result with AI recommendations",
      "3-month AI career mentor access",
      "3-month career encyclopedia access",
    ],
  },
  {
    id: "mentorship",
    name: "360° Career Mentorship",
    price: "₹1,499",
    originalPrice: "₹2,999",
    saving: "Save 50%",
    description: "Add a counsellor session after your assessment.",
    icon: UsersRound,
    featured: true,
    features: [
      "Everything in AI Career Assessment",
      "30-minute 1:1 career mentorship session",
      "6-month AI career mentor access",
      "6-month career encyclopedia access",
    ],
  },
  {
    id: "complete",
    name: "360° Complete Career Discovery",
    price: "₹1,999",
    originalPrice: "₹3,999",
    saving: "Save 50%",
    description: "A deeper report review with longer counselling access.",
    icon: Compass,
    features: [
      "Everything in AI Career Assessment",
      "60-minute 1:1 mentorship session",
      "12-month AI career mentor access",
      "12-month career encyclopedia access",
      "Expert review of your assessment report",
    ],
  },
];

export default function Plans() {
  const handleChoosePlan = (plan: Plan) => {
    // Payment / plan confirmation flow will be connected here later.
    console.log("Selected plan:", plan.id);
  };

  const navigate = useNavigation() as any;

  const router = useRouter();

  return (
    <View className="flex-1 bg-[#F4F6F8]">
      {/* Existing app top bar goes here */}
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 32,
        }}
      >
        {/* Page Header */}
        <View className="px-5 pt-5">
          <Text className="text-[26px] font-bold text-[#16202A]">
            Choose Your Program
          </Text>

          <Text className="mt-1.5 text-[13px] leading-5 text-[#6B7684]">
            Choose the right career support for you. Compare plans and unlock
            the guidance you need.
          </Text>
        </View>

        {/* Plans */}
        <View className="mt-5 px-5">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <View
                key={plan.id}
                className={`mb-3.5 overflow-hidden rounded-2xl border bg-white ${
                  plan.featured ? "border-[#1A3A5C]" : "border-[#E6E9ED]"
                }`}
              >
                {/* Featured Header */}
                {plan.featured && (
                  <View className="flex-row items-center justify-center bg-[#1A3A5C] px-3 py-2">
                    <Text className="text-[10px] font-bold uppercase tracking-[1px] text-white">
                      Most Popular
                    </Text>
                  </View>
                )}

                <View className="p-4">
                  {/* Plan Header */}
                  <View className="flex-row items-start">
                    <View
                      className={`h-11 w-11 items-center justify-center rounded-xl ${
                        plan.featured ? "bg-[#EAF1F7]" : "bg-[#F4F6F8]"
                      }`}
                    >
                      <Icon size={21} color="#1A3A5C" strokeWidth={2} />
                    </View>

                    <View className="ml-3 flex-1 pr-2">
                      <Text className="text-[15px] font-bold leading-5 text-[#16202A]">
                        {plan.name}
                      </Text>
                    </View>

                    <View className="rounded-full bg-[#E6F7EE] px-2.5 py-1">
                      <Text className="text-[10px] font-bold text-[#1B8354]">
                        {plan.saving}
                      </Text>
                    </View>
                  </View>

                  {/* Price */}
                  <View className="mt-4 flex-row items-baseline">
                    <Text className="text-[24px] font-extrabold text-[#1A3A5C]">
                      {plan.price}
                    </Text>

                    <Text className="ml-2 text-[13px] text-[#9AA4AF] line-through">
                      {plan.originalPrice}
                    </Text>
                  </View>

                  <Text className="mt-0.5 text-[10.5px] text-[#9AA4AF]">
                    inc GST
                  </Text>

                  {/* Description */}
                  <View className="mt-3 rounded-xl bg-[#F4F6F8] px-3 py-2.5">
                    <Text className="text-[12px] leading-[18px] text-[#6B7684]">
                      {plan.description}
                    </Text>
                  </View>

                  {/* Features */}
                  <View className="mt-4">
                    {plan.features.map((feature) => (
                      <View key={feature} className="mb-2 flex-row items-start">
                        <View className="mt-0.5 h-4 w-4 items-center justify-center rounded-full bg-[#E6F7EE]">
                          <Check size={10} color="#1B8354" strokeWidth={3} />
                        </View>

                        <Text className="ml-2 flex-1 text-[12px] leading-[17px] text-[#16202A]">
                          {feature}
                        </Text>
                      </View>
                    ))}
                  </View>

                  {/* Choose Button */}
                  <Pressable
                    onPress={() => handleChoosePlan(plan)}
                    className={`mt-2.5 flex-row items-center justify-center rounded-xl py-3 ${
                      plan.featured
                        ? "bg-[#1A3A5C]"
                        : "border border-[#1A3A5C] bg-white"
                    }`}
                  >
                    <Text
                      className={`text-[13px] font-bold ${
                        plan.featured ? "text-white" : "text-[#1A3A5C]"
                      }`}
                    >
                      Choose Plan
                    </Text>

                    <ArrowRight
                      size={15}
                      color={plan.featured ? "#FFFFFF" : "#1A3A5C"}
                      strokeWidth={2.2}
                      style={{ marginLeft: 6 }}
                    />
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>

        {/* Current Next Step */}
        <View className="mx-5 mt-1 flex-row rounded-2xl border border-[#E6E9ED] bg-white p-3.5">
          <View className="h-9 w-9 items-center justify-center rounded-xl bg-[#EAF1F7]">
            <ArrowRight size={17} color="#1A3A5C" strokeWidth={2} />
          </View>

          <View className="ml-3 flex-1">
            <Text className="text-[13px] font-bold text-[#16202A]">
              Your current next step
            </Text>

            <Text className="mt-1 text-[11px] leading-[17px] text-[#6B7684]">
              Start Aptitude Test. Plans are optional unless you need another
              assessment or more sessions.
            </Text>
          </View>
        </View>

        {/* Payment Activation */}
        <View className="mx-5 mt-2.5 flex-row rounded-2xl border border-[#E6E9ED] bg-white p-3.5">
          <View className="h-9 w-9 items-center justify-center rounded-xl bg-[#F4F6F8]">
            <Info size={17} color="#1A3A5C" strokeWidth={2} />
          </View>

          <View className="ml-3 flex-1">
            <Text className="text-[13px] font-bold text-[#16202A]">
              Payment activation
            </Text>

            <Text className="mt-1 text-[11px] leading-[17px] text-[#6B7684]">
              Choose a plan first. Pay only after opening its instructions.
            </Text>
          </View>
        </View>

        {/* Small footer */}
        <View className="items-center px-8 pt-6">
          <Text className="text-center text-[10px] leading-[16px] text-[#9AA4AF]">
            You can choose a plan whenever you need additional assessments,
            mentorship or career guidance.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
