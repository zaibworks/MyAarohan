import { useRouter } from "expo-router";
import {
  ArrowLeft,
  BriefcaseBusiness,
  ChevronRight,
  Edit3,
  GraduationCap,
  Heart,
  School,
  Sparkles,
  UserRound,
  UsersRound,
  CircleAlert 
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ReviewSectionProps = {
  icon: React.ReactNode;
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
};

const ReviewSection = ({
  icon,
  title,
  onEdit,
  children,
}: ReviewSectionProps) => {
  return (
    <View className="mb-3 rounded-2xl border border-[#E2E5E9] bg-white p-4">
      <View className="mb-3 flex-row items-center">
        <View className="mr-3 h-[36px] w-[36px] items-center justify-center rounded-[11px] bg-[#EAF1F7]">
          {icon}
        </View>

        <Text className="flex-1 text-[14px] font-extrabold text-[#16202A]">
          {title}
        </Text>

        <Pressable
          onPress={onEdit}
          className="flex-row items-center rounded-lg px-2 py-1 active:opacity-70"
        >
          <Edit3 size={13} color="#1A3A5C" strokeWidth={2} />

          <Text className="ml-1 text-[11px] font-bold text-[#1A3A5C]">
            Edit
          </Text>
        </Pressable>
      </View>

      {children}
    </View>
  );
};

const ReviewRow = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <View className="mb-2 flex-row">
      <Text className="w-[42%] text-[11px] text-[#9AA4AF]">
        {label}
      </Text>

      <Text className="flex-1 text-[11.5px] font-medium leading-[16px] text-[#16202A]">
        {value}
      </Text>
    </View>
  );
};

const Review = () => {
  const router = useRouter();

  const handleCompleteProfile = () => {
    router.replace("/student/(tabs)");
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-[#F4F6F8]">
      {/* Header */}
      <View className="border-b border-[#E2E5E9] bg-white px-[22px] pb-4 pt-3">
        <View className="flex-row items-center">
          <Pressable
            onPress={() => router.back()}
            className="mr-3 h-[38px] w-[38px] items-center justify-center rounded-xl bg-[#F4F6F8] active:opacity-70"
          >
            <ArrowLeft size={19} color="#1A3A5C" strokeWidth={2.2} />
          </Pressable>

          <View className="flex-1">
            <Text className="text-[16px] font-extrabold text-[#16202A]">
              Complete your profile
            </Text>

            <Text className="mt-0.5 text-[11px] font-medium text-[#6B7684]">
              Step 8 of 8 · Review
            </Text>
          </View>

          <Text className="text-[11px] font-bold text-[#1A3A5C]">
            100%
          </Text>
        </View>

        {/* Progress */}
        <View className="mt-3 h-[4px] overflow-hidden rounded-full bg-[#E2E5E9]">
          <View className="h-full w-full rounded-full bg-[#1A3A5C]" />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 22,
          paddingTop: 24,
          paddingBottom: 32,
        }}
      >
        {/* Intro */}
        <View className="mb-6">
          <Text className="text-[23px] font-extrabold tracking-[-0.4px] text-[#16202A]">
            Review your profile
          </Text>

          <Text className="mt-2 max-w-[335px] text-[12px] leading-[18px] text-[#6B7684]">
            Take a quick look at your information before completing your
            profile.
          </Text>
        </View>

        {/* About You */}
        <ReviewSection
          title="About You"
          icon={
            <UserRound
              size={18}
              color="#1A3A5C"
              strokeWidth={2}
            />
          }
          onEdit={() => router.push("/auth/profile-setup")}
        >
          <ReviewRow label="Full name" value="Your registered name" />
          <ReviewRow label="Date of birth" value="Your date of birth" />
          <ReviewRow label="Gender" value="Not selected" />
        </ReviewSection>

        {/* Your School */}
        <ReviewSection
          title="Your School"
          icon={
            <School
              size={18}
              color="#1A3A5C"
              strokeWidth={2}
            />
          }
          onEdit={() => router.push("/auth/profile-setup/school")}
        >
          <ReviewRow label="School" value="Your school name" />
          <ReviewRow label="Grade / Class" value="Your class" />
          <ReviewRow label="State" value="Your state" />
          <ReviewRow label="Email" value="Your email address" />
        </ReviewSection>

        {/* Your Future */}
        <ReviewSection
          title="Your Future"
          icon={
            <Sparkles
              size={18}
              color="#1A3A5C"
              strokeWidth={2}
            />
          }
          onEdit={() => router.push("/auth/profile-setup/future")}
        >
          <ReviewRow
            label="Dream career 1"
            value="Your first career choice"
          />
          <ReviewRow
            label="Dream career 2"
            value="Your second career choice"
          />
          <ReviewRow
            label="Dream career 3"
            value="Your third career choice"
          />
          <ReviewRow
            label="Direction"
            value="Your career confidence"
          />
        </ReviewSection>

        {/* Your Guardian */}
        <ReviewSection
          title="Your Guardian"
          icon={
            <UsersRound
              size={18}
              color="#1A3A5C"
              strokeWidth={2}
            />
          }
          onEdit={() => router.push("/auth/profile-setup/guardian")}
        >
          <ReviewRow
            label="Guardian"
            value="Guardian information"
          />
          <ReviewRow
            label="Relationship"
            value="Guardian relationship"
          />
          <ReviewRow
            label="Phone"
            value="Guardian phone number"
          />
          <ReviewRow
            label="Email"
            value="Guardian email"
          />
        </ReviewSection>

        {/* Your Marks */}
        <ReviewSection
          title="Your Marks"
          icon={
            <GraduationCap
              size={18}
              color="#1A3A5C"
              strokeWidth={2}
            />
          }
          onEdit={() => router.push("/auth/profile-setup/marks")}
        >
          <ReviewRow
            label="Overall result"
            value="Your overall score / percentage"
          />
          <ReviewRow
            label="Subjects"
            value="Your subject-wise scores"
          />
          <ReviewRow
            label="Maximum marks"
            value="Your maximum marks"
          />
        </ReviewSection>

        {/* How You Learn */}
        <ReviewSection
          title="How You Learn"
          icon={
            <Heart
              size={18}
              color="#1A3A5C"
              strokeWidth={2}
            />
          }
          onEdit={() => router.push("/auth/profile-setup/learning")}
        >
          <ReviewRow
            label="Stream"
            value="Your academic stream"
          />
          <ReviewRow
            label="Learning style"
            value="Your preferred learning style"
          />
          <ReviewRow
            label="Study time"
            value="Your daily study hours"
          />
          <ReviewRow
            label="Internet"
            value="Your internet access"
          />
        </ReviewSection>

        {/* Your World */}
        <ReviewSection
          title="Your World"
          icon={
            <BriefcaseBusiness
              size={18}
              color="#1A3A5C"
              strokeWidth={2}
            />
          }
          onEdit={() => router.push("/auth/profile-setup/world")}
        >
          <ReviewRow
            label="Work preference"
            value="Your preferred work environment"
          />
          <ReviewRow
            label="Activities"
            value="Your extracurricular activities"
          />
          <ReviewRow
            label="First generation"
            value="Your schooling background"
          />
          <ReviewRow
            label="Parents"
            value="Parents' education"
          />
        </ReviewSection>

        {/* Submission Note */}
        <View className="mt-3 flex-row items-start rounded-xl border border-[#ff000013] bg-[#FDECEC] px-3.5 py-3">
 <View className="mr-2.5 h-[22px] w-[22px] items-center justify-center rounded-full bg-[#F8D7D7]">
  <CircleAlert
    size={14}
    color="#B33A3A"
    strokeWidth={2.2}
  />
</View>

  <Text className="flex-1 text-[11px] leading-[16px] text-[#846b6b]">
    Please check your information carefully before submitting. Once
    completed, your profile information cannot be changed or undone.
  </Text>
</View>
      </ScrollView>

      {/* Bottom Action */}
      <View className="border-t border-[#E2E5E9] bg-white px-[22px] pb-3 pt-3">
        <Pressable
          onPress={handleCompleteProfile}
          className="h-[52px] w-full flex-row items-center justify-center rounded-xl bg-[#1A3A5C] active:opacity-90"
        >
          <Text className="mr-2 text-[14px] font-bold text-white">
           Submit Profile
          </Text>

          <ChevronRight
            size={17}
            color="#FFFFFF"
            strokeWidth={2.5}
          />
        </Pressable>

        <Text className="mt-2 text-center text-[10px] text-[#9AA4AF]">
          You can review your information before completing.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Review;