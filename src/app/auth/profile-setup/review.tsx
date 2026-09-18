import { router } from "expo-router";
import {
    ArrowLeft,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    GraduationCap,
    Heart,
    Pencil,
    ShieldCheck,
    UserRound,
    UsersRound,
    FileWarning
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ReviewRowProps = {
  label: string;
  value?: string;
  optional?: boolean;
};

function ReviewRow({ label, value, optional = false }: ReviewRowProps) {
  const hasValue = value && value.trim().length > 0;

  return (
    <View className="flex-row border-b border-[#E6E9ED] py-3 last:border-b-0">
      <Text className="w-[42%] text-[13px] leading-5 text-[#6B7684]">
        {label}
      </Text>

      {hasValue ? (
        <Text className="flex-1 text-right text-[13px] font-medium leading-5 text-[#16202A]">
          {value}
        </Text>
      ) : (
        <Text className="flex-1 text-right text-[13px] italic leading-5 text-[#9AA4AF]">
          {optional ? "Not provided" : "Not provided"}
        </Text>
      )}
    </View>
  );
}

type SectionHeaderProps = {
  icon: React.ReactNode;
  title: string;
  onEdit: () => void;
};

function SectionHeader({ icon, title, onEdit }: SectionHeaderProps) {
  return (
    <View className="mb-3 flex-row items-center justify-between">
      <View className="flex-row items-center">
        <View className="h-9 w-9 items-center justify-center rounded-lg bg-[#EAF1F7]">
          {icon}
        </View>

        <Text className="ml-2.5 text-[15px] font-semibold text-[#16202A]">
          {title}
        </Text>
      </View>

      <Pressable
        onPress={onEdit}
        className="flex-row items-center rounded-lg bg-[#EAF1F7] px-2.5 py-2"
        hitSlop={6}
      >
        <Pencil size={13} color="#1A3A5C" strokeWidth={2.2} />

        <Text className="ml-1 text-[12px] font-semibold text-[#1A3A5C]">
          Edit
        </Text>
      </Pressable>
    </View>
  );
}

export default function ReviewScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleEditBasic = () => {
    router.push("/auth/profile-setup");
  };

  const handleEditGuardian = () => {
    router.push("/auth/profile-setup/guardian");
  };

  const handleEditAcademic = () => {
    router.push("/auth/profile-setup/academic");
  };

  const handleEditLifestyle = () => {
    router.push("/auth/profile-setup/lifestyle");
  };

  const handleSaveDraft = () => {
    // TODO: Connect this to shared profile state / backend later.
    console.log("Profile review draft saved");
  };

  const handleCompleteProfile = () => {
    // TODO: Submit profile data to backend.
    router.replace("/student/(tabs)");
  };

  return (
    <SafeAreaView edges={["bottom"]}
    className="flex-1 bg-[#F4F6F8]">
      {/* Top Bar */}
      <View className="border-b border-[#E2E5E9] bg-white pt-10">
        <View className="h-14 flex-row items-center px-4">
          <Pressable
            onPress={handleBack}
            className="mr-3 h-9 w-9 items-center justify-center rounded-lg"
            hitSlop={8}
          >
            <ArrowLeft size={21} color="#16202A" strokeWidth={2} />
          </Pressable>

          <Text className="text-[16px] font-semibold text-[#16202A]">
            Complete your profile
          </Text>
        </View>

        {/* Progress */}
        <View className="px-4 pb-4">
          <View className="mb-2 flex-row items-center justify-between">
            <Text className="text-[12px] font-medium text-[#6B7684]">
              Step 5 of 5
            </Text>

            <Text className="text-[12px] font-semibold text-[#1A3A5C]">
              100%
            </Text>
          </View>

          <View className="h-1.5 overflow-hidden rounded-full bg-[#E6E9ED]">
            <View className="h-full w-full rounded-full bg-[#1A3A5C]" />
          </View>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 20,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Heading */}
        <View className="mb-5">
          <Text className="text-[22px] font-semibold text-[#16202A]">
            Review and submit
          </Text>

          <Text className="mt-1.5 text-[14px] leading-5 text-[#6B7684]">
            Review every answer below before submitting. Tap Edit to make
            corrections.
          </Text>
        </View>

        {/* Basic Information */}
        <View className="mb-4 rounded-2xl border border-[#E2E5E9] bg-white p-4">
          <SectionHeader
            title="Basic information"
            icon={<UserRound size={18} color="#1A3A5C" strokeWidth={2} />}
            onEdit={handleEditBasic}
          />

          <View>
            <ReviewRow label="Full name" value="Salman Khan" />

            <ReviewRow label="Dream career 1" value="Software Engineer" />

            <ReviewRow label="Dream career 2" value="" optional />

            <ReviewRow label="Dream career 3" value="" optional />

            <ReviewRow label="Date of birth" value="10/10/2008" />

            <ReviewRow label="Age" value="17 years" />

            <ReviewRow label="Gender" value="" optional />

            <ReviewRow label="School" value="Not provided" />

            <ReviewRow label="Grade" value="12" />

            <ReviewRow label="State" value="Uttar Pradesh" />

            <ReviewRow label="Email" value="student@example.com" />
          </View>
        </View>

        {/* Guardian */}
        <View className="mb-4 rounded-2xl border border-[#E2E5E9] bg-white p-4">
          <SectionHeader
            title="Guardian"
            icon={<UsersRound size={18} color="#1A3A5C" strokeWidth={2} />}
            onEdit={handleEditGuardian}
          />

          {/* Guardian Card */}
          <View className="rounded-xl border border-[#E6E9ED] bg-[#FAFBFC] p-3.5">
            <View className="mb-3 flex-row items-center">
              <View className="h-10 w-10 items-center justify-center rounded-full bg-[#EAF1F7]">
                <Text className="text-[15px] font-semibold text-[#1A3A5C]">
                  M
                </Text>
              </View>

              <View className="ml-3 flex-1">
                <Text className="text-[14px] font-semibold text-[#16202A]">
                  Mother
                </Text>

                <Text className="mt-0.5 text-[12px] text-[#6B7684]">
                  Mother
                </Text>
              </View>
            </View>

            <View className="border-t border-[#E6E9ED] pt-2">
              <ReviewRow label="Phone" value="9876543210" />

              <ReviewRow label="Email" value="mother@example.com" />
            </View>
          </View>
        </View>

        {/* Academic */}
        <View className="mb-4 rounded-2xl border border-[#E2E5E9] bg-white p-4">
          <SectionHeader
            title="Academic history"
            icon={<GraduationCap size={18} color="#1A3A5C" strokeWidth={2} />}
            onEdit={handleEditAcademic}
          />

          <ReviewRow label="Overall score" value="85%" />

          {/* Subject */}
          <View className="mt-3 rounded-xl border border-[#E6E9ED] bg-[#FAFBFC] p-3.5">
            <View className="flex-row items-center">
              <View className="h-9 w-9 items-center justify-center rounded-lg bg-[#EAF1F7]">
                <BookOpen size={17} color="#1A3A5C" strokeWidth={2} />
              </View>

              <View className="ml-2.5 flex-1">
                <Text className="text-[14px] font-semibold text-[#16202A]">
                  Mathematics
                </Text>

                <Text className="mt-0.5 text-[12px] text-[#6B7684]">Score</Text>
              </View>

              <Text className="text-[14px] font-semibold text-[#1A3A5C]">
                99/100
              </Text>
            </View>
          </View>
        </View>

        {/* Lifestyle */}
        <View className="mb-4 rounded-2xl border border-[#E2E5E9] bg-white p-4">
          <SectionHeader
            title="Lifestyle"
            icon={<Heart size={18} color="#1A3A5C" strokeWidth={2} />}
            onEdit={handleEditLifestyle}
          />

          <ReviewRow label="Stream" value="Science" />

          <ReviewRow label="Career certainty" value="Somewhat sure" />

          <ReviewRow label="Fastest way to learn" value="Watching videos" />

          <ReviewRow label="Preferred work style" value="Mix of both" />

          <ReviewRow label="Study time" value="4 hours" />

          <ReviewRow label="Internet access" value="Full access" />

          <ReviewRow label="First-gen learner" value="No" />

          <ReviewRow label="Parents' education" value="Undergraduate" />

          {/* Extracurriculars */}
          <View className="mt-3">
            <Text className="mb-2 text-[12px] font-medium text-[#6B7684]">
              Extracurricular activities
            </Text>

            <View className="flex-row flex-wrap">
              {["Coding", "Sports", "Reading"].map((activity) => (
                <View
                  key={activity}
                  className="mb-2 mr-2 rounded-full bg-[#EAF1F7] px-3 py-1.5"
                >
                  <Text className="text-[12px] font-medium text-[#1A3A5C]">
                    {activity}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Completion Notice */}
        <View className="mb-3 rounded-xl border border-[#e9cfcf] bg-[#f7e6e6] p-4">
          <View className="flex-row">
            <FileWarning size={20} color="red" strokeWidth={2} />

            <View className="ml-2.5 flex-1">
              <Text className="text-[14px] font-semibold text-black">
               This can't be undone
              </Text>

              <Text className="mt-1 text-[12px] leading-5 text-[#8a3636]">
                Review your information carefully. You can edit any section
                before completing your profile. Once you submit, your answers are locked and can't be edited.
              </Text>
            </View>
          </View>
        </View>

        {/* Privacy / Safety */}
        <View className="mb-2 flex-row items-start px-1">
          <ShieldCheck size={16} color="#6B7684" strokeWidth={2} />

          <Text className="ml-2 flex-1 text-[11px] leading-4 text-[#6B7684]">
            Your profile information is used to personalize your career guidance
            and counselling experience.
          </Text>
        </View>
      </ScrollView>

      {/* Fixed Footer */}
      <View className="border-t border-[#E2E5E9] bg-[#F4F6F8] px-4 py-4">
        <View className="flex-row items-center justify-between">
          <Pressable onPress={handleSaveDraft} className="px-2 py-3">
            <Text className="text-[14px] font-medium text-[#6B7684]">
              Save draft
            </Text>
          </Pressable>

          <Pressable
            onPress={handleCompleteProfile}
            className="flex-row items-center rounded-xl bg-[#1A3A5C] px-5 py-3.5"
          >
            <Text className="text-[14px] font-semibold text-white">
              Complete profile
            </Text>

            <ChevronRight
              size={17}
              color="#FFFFFF"
              strokeWidth={2.5}
              className="ml-1"
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
