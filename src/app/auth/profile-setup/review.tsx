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
    router.push("/auth/profile-setup/complete");
  };

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      className="flex-1 bg-[#F4F6F8]"
    >
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
            Everything looks good? Review your information once before
            completing your profile.
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
          <ReviewRow
            label="Full name"
            value="Aarav Sharma"
          />

          <ReviewRow
            label="Date of birth"
            value="14 August 2008"
          />

          <ReviewRow
            label="Gender"
            value="Male"
          />
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
          <ReviewRow
            label="School"
            value="Delhi Public School, Lucknow"
          />

          <ReviewRow
            label="Grade / Class"
            value="Class 12"
          />

          <ReviewRow
            label="State"
            value="Uttar Pradesh"
          />

          <ReviewRow
            label="Email"
            value="aarav.sharma@gmail.com"
          />
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
            value="Software Engineer"
          />

          <ReviewRow
            label="Dream career 2"
            value="Data Scientist"
          />

          <ReviewRow
            label="Dream career 3"
            value="Product Manager"
          />

          <ReviewRow
            label="Direction"
            value="Very confident"
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
            value="Rajesh Sharma"
          />

          <ReviewRow
            label="Relationship"
            value="Father"
          />

          <ReviewRow
            label="Phone"
            value="+91 98765 43210"
          />

          <ReviewRow
            label="Email"
            value="rajesh.sharma@gmail.com"
          />

          <View className="mt-1 rounded-[10px] bg-[#F4F6F8] px-3 py-2">
            <Text className="text-[10px] font-semibold text-[#6B7684]">
              1 guardian added
            </Text>
          </View>
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
            value="86%"
          />

          <View className="mt-1 rounded-xl bg-[#F4F6F8] p-3">
            <Text className="mb-2 text-[10px] font-bold uppercase tracking-[0.4px] text-[#9AA4AF]">
              Subject scores
            </Text>

            <View className="flex-row items-center justify-between border-b border-[#E2E5E9] pb-2">
              <Text className="text-[11px] font-semibold text-[#16202A]">
                Mathematics
              </Text>

              <Text className="text-[11px] font-bold text-[#1A3A5C]">
                91 / 100
              </Text>
            </View>

            <View className="flex-row items-center justify-between border-b border-[#E2E5E9] py-2">
              <Text className="text-[11px] font-semibold text-[#16202A]">
                Physics
              </Text>

              <Text className="text-[11px] font-bold text-[#1A3A5C]">
                84 / 100
              </Text>
            </View>

            <View className="flex-row items-center justify-between border-b border-[#E2E5E9] py-2">
              <Text className="text-[11px] font-semibold text-[#16202A]">
                Chemistry
              </Text>

              <Text className="text-[11px] font-bold text-[#1A3A5C]">
                82 / 100
              </Text>
            </View>

            <View className="flex-row items-center justify-between border-b border-[#E2E5E9] py-2">
              <Text className="text-[11px] font-semibold text-[#16202A]">
                English
              </Text>

              <Text className="text-[11px] font-bold text-[#1A3A5C]">
                88 / 100
              </Text>
            </View>

            <View className="flex-row items-center justify-between pt-2">
              <Text className="text-[11px] font-semibold text-[#16202A]">
                Computer Science
              </Text>

              <Text className="text-[11px] font-bold text-[#1A3A5C]">
                93 / 100
              </Text>
            </View>
          </View>
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
            value="Science"
          />

          <ReviewRow
            label="Learning style"
            value="Hands-on"
          />

          <ReviewRow
            label="Study time"
            value="2–3 hours"
          />

          <ReviewRow
            label="Internet"
            value="Good access"
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
            value="Hybrid"
          />

          <View className="mb-3">
            <Text className="mb-1.5 w-[42%] text-[11px] text-[#9AA4AF]">
              Activities
            </Text>

            <View className="flex-row flex-wrap">
              {[
                "Cricket",
                "Coding",
                "Chess",
                "Music",
                "Public Speaking",
              ].map((activity) => (
                <View
                  key={activity}
                  className="mb-1.5 mr-1.5 rounded-full bg-[#EAF1F7] px-2.5 py-1"
                >
                  <Text className="text-[10px] font-semibold text-[#1A3A5C]">
                    {activity}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <ReviewRow
            label="First generation"
            value="No"
          />

          <ReviewRow
            label="Father's education"
            value="Graduate"
          />

          <ReviewRow
            label="Mother's education"
            value="Postgraduate"
          />
        </ReviewSection>

        {/* Registration note */}
        <View className="mt-1 rounded-xl border border-[#D6DBE1] bg-[#EEF3F7] px-3.5 py-3">
          <Text className="text-[11px] leading-[16px] text-[#6B7684]">
            Your registration information such as your name, date of birth,
            school and contact details is already associated with your
            account.
          </Text>
        </View>

        {/* Final warning */}
        <View className="mt-3 flex-row items-start rounded-xl border border-[#F3CACA] bg-[#FDECEC] px-3.5 py-3">
          <View className="mr-2.5 mt-0.5 h-[22px] w-[22px] items-center justify-center rounded-full bg-[#F8D7D7]">
            <Text className="text-[12px] font-bold text-[#B33A3A]">
              !
            </Text>
          </View>

          <Text className="flex-1 text-[11px] leading-[16px] text-[#B33A3A]">
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
            Complete Profile
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