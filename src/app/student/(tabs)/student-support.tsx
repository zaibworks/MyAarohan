import { router } from "expo-router";
import {
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  Clock3,
  CreditCard,
  Info,
  Paperclip,
  Send,
  Zap,
} from "lucide-react-native";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

type Category = {
  id: string;
  title: string;
  description: string;
  hint: string;
  icon: any;
};

const categories: Category[] = [
  {
    id: "technical",
    title: "Technical",
    description: "Login, loading, bugs, mic, or browser help.",
    hint: "Usually replies within 2-4 hours",
    icon: Zap,
  },
  {
    id: "academic",
    title: "Academic",
    description: "Assessment, report, or career-content help.",
    hint: "Usually replies within 4-8 hours",
    icon: BookOpen,
  },
  {
    id: "counselling",
    title: "Counselling",
    description: "Booking, rescheduling, or counselling help.",
    hint: "Usually replies within 1 business day",
    icon: CalendarDays,
  },
  {
    id: "payment",
    title: "Payment",
    description: "Plans, receipts, access, refunds, or billing.",
    hint: "Usually replies within 4-8 hours",
    icon: CreditCard,
  },
  {
    id: "other",
    title: "Other",
    description: "Anything else the Aarohan team should review.",
    hint: "Usually replies within 1 business day",
    icon: Info,
  },
];

const urgencyOptions = [
  {
    id: "low",
    title: "Low",
    description: "General question or feedback.",
  },
  {
    id: "normal",
    title: "Normal",
    description: "I need help, but I am not blocked.",
  },
  {
    id: "high",
    title: "High",
    description: "Blocked from assessment, payment, or booked session.",
  },
];

function OptionCard({
  title,
  description,
  selected,
  onPress,
  Icon,
}: {
  title: string;
  description: string;
  selected: boolean;
  onPress: () => void;
  Icon?: any;
}) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-start gap-3 rounded-xl border p-3 ${
        selected ? "border-[#1A3A5C] bg-[#EAF1F7]" : "border-[#E2E5E9] bg-white"
      }`}
    >
      {Icon && (
        <View
          className={`h-[30px] w-[30px] items-center justify-center rounded-[9px] ${
            selected ? "bg-[#1A3A5C]" : "bg-[#F4F6F8]"
          }`}
        >
          <Icon
            size={15}
            strokeWidth={2}
            color={selected ? "#FFFFFF" : "#6B7684"}
          />
        </View>
      )}

      <View className="flex-1">
        <Text className="mb-0.5 text-[13px] font-bold text-[#16202A]">
          {title}
        </Text>

        <Text className="text-[11px] leading-4 text-[#6B7684]">
          {description}
        </Text>
      </View>

      <View
        className={`mt-0.5 h-[18px] w-[18px] items-center justify-center rounded-full border ${
          selected
            ? "border-[#1A3A5C] bg-[#1A3A5C]"
            : "border-[#E2E5E9] bg-white"
        }`}
      >
        {selected && <Check size={10} color="#FFFFFF" strokeWidth={3} />}
      </View>
    </Pressable>
  );
}

function Dropdown({
  placeholder,
  value,
  options,
  onSelect,
}: {
  placeholder: string;
  value: string | null;
  options: {
    id: string;
    title: string;
    description: string;
  }[];
  onSelect: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((option) => option.id === value);

  return (
    <View className="relative">
      <Pressable
        onPress={() => setOpen((prev) => !prev)}
        className={`min-h-[48px] flex-row items-center justify-between rounded-[11px] border bg-white px-3.5 ${
          open ? "border-[#1A3A5C]" : "border-[#E2E5E9]"
        }`}
      >
        <View className="flex-1">
          <Text
            className={`text-[13px] font-semibold ${
              selectedOption ? "text-[#16202A]" : "text-[#9AA4AF]"
            }`}
          >
            {selectedOption?.title ?? placeholder}
          </Text>

          {selectedOption && (
            <Text
              numberOfLines={1}
              className="mt-0.5 text-[10.5px] text-[#6B7684]"
            >
              {selectedOption.description}
            </Text>
          )}
        </View>

        <ChevronDown size={17} color="#6B7684" strokeWidth={2} />
      </Pressable>

      {open && (
        <View className="mt-1.5 overflow-hidden rounded-[11px] border border-[#E2E5E9] bg-white">
          {options.map((option, index) => {
            const selected = option.id === value;

            return (
              <Pressable
                key={option.id}
                onPress={() => {
                  onSelect(option.id);
                  setOpen(false);
                }}
                className={`flex-row items-center px-3.5 py-3 ${
                  index !== options.length - 1
                    ? "border-b border-[#E2E5E9]"
                    : ""
                } ${selected ? "bg-[#EAF1F7]" : "bg-white"}`}
              >
                <View className="flex-1">
                  <Text className="text-[13px] font-bold text-[#16202A]">
                    {option.title}
                  </Text>

                  <Text className="mt-0.5 text-[10.5px] leading-[15px] text-[#6B7684]">
                    {option.description}
                  </Text>
                </View>

                {selected && (
                  <View className="ml-2 h-[19px] w-[19px] items-center justify-center rounded-full bg-[#1A3A5C]">
                    <Check size={11} color="#FFFFFF" strokeWidth={3} />
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
}

export default function StudentSupport() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [selectedUrgency, setSelectedUrgency] = useState("normal");

  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const selectedCategoryData = categories.find(
    (category) => category.id === selectedCategory,
  );

  const handleSubmit = () => {
    if (!selectedCategory) {
      Alert.alert("Category required", "Please select a support category.");
      return;
    }

    if (!subject.trim()) {
      Alert.alert("Subject required", "Please enter a brief summary.");
      return;
    }

    if (!description.trim()) {
      Alert.alert("Description required", "Please describe your issue.");
      return;
    }

    Alert.alert(
      "Request submitted",
      "Your support request has been submitted successfully.",
    );
  };

  return (
    <View className="flex-1 bg-[#F4F6F8] ">
      {/* Top Bar */}
      <View className="flex-row items-center gap-3 bg-[#F4F6F8] px-4 pb-2 pt-14">
        <Pressable
          onPress={() => router.back()}
          className="h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#E2E5E9] bg-white"
        >
          {/* lucide-react-native back icon */}
          <ChevronLeft size={18} color="#6B7684" />
        </Pressable>
        <Text className="text-[1.6rem] font-bold text-[#16202A]">
          Student Support
        </Text>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 18,
          paddingTop: 4,
          paddingBottom: 24,
        }}
      >
        {/* Page Description */}
        <Text className="mb-[18px] text-xs text-[#6B7684]">
          Tell us the issue. We will route it to the right team.
        </Text>

        {/* Category */}
        <View className="mb-5">
          <Text className="mb-2.5 text-[12.5px] font-bold text-[#16202A]">
            Category <Text className="text-[#E74C3C]">*</Text>
          </Text>

          <Dropdown
            placeholder="Select a support category"
            value={selectedCategory}
            options={categories.map((category) => ({
              id: category.id,
              title: category.title,
              description: category.description,
            }))}
            onSelect={setSelectedCategory}
          />

          {/* Response time */}
          {selectedCategoryData && (
            <View className="mt-2.5 flex-row items-center gap-2 rounded-[10px] bg-[#EAF1F7] px-3 py-[9px]">
              <Clock3 size={14} color="#1A3A5C" />

              <Text className="flex-1 text-[11px] font-semibold text-[#1A3A5C]">
                {selectedCategoryData.hint}
              </Text>
            </View>
          )}
        </View>

        {/* Urgency */}
        <View className="mb-5">
          <Text className="mb-2.5 text-[12.5px] font-bold text-[#16202A]">
            Urgency <Text className="text-[#E74C3C]">*</Text>
          </Text>

          <Dropdown
            placeholder="Select urgency"
            value={selectedUrgency}
            options={urgencyOptions}
            onSelect={setSelectedUrgency}
          />
        </View>

        {/* Subject */}
        <View className="mb-5">
          <Text className="mb-2.5 text-[12.5px] font-bold text-[#16202A]">
            Subject <Text className="text-[#E74C3C]">*</Text>
          </Text>

          <TextInput
            value={subject}
            onChangeText={setSubject}
            maxLength={150}
            placeholder="Brief summary of your request"
            placeholderTextColor="#9AA4AF"
            className="rounded-[11px] border border-[#E2E5E9] bg-white px-3.5 py-3 text-sm text-[#16202A]"
          />

          <Text className="mt-1.5 text-right text-[10.5px] text-[#9AA4AF]">
            {subject.length}/150 characters
          </Text>
        </View>

        {/* Description */}
        <View className="mb-5">
          <Text className="mb-2.5 text-[12.5px] font-bold text-[#16202A]">
            Description <Text className="text-[#E74C3C]">*</Text>
          </Text>

          <TextInput
            value={description}
            onChangeText={setDescription}
            maxLength={2000}
            multiline
            textAlignVertical="top"
            placeholder="What happened? When did it happen? Add a screenshot or receipt if it helps."
            placeholderTextColor="#9AA4AF"
            className="min-h-[100px] rounded-[11px] border border-[#E2E5E9] bg-white px-3.5 py-3.5 text-sm text-[#16202A]"
          />

          <Text className="mt-1.5 text-right text-[10.5px] text-[#9AA4AF]">
            {description.length}/2000 characters
          </Text>
        </View>

        {/* Attachments */}
        <View className="mb-5">
          <Text className="mb-2.5 text-[12.5px] font-bold text-[#16202A]">
            Attachments
          </Text>

          <Pressable
            onPress={() =>
              Alert.alert(
                "Attachments",
                "File picker integration can be connected here.",
              )
            }
            className="flex-row items-center gap-2.5 rounded-[11px] border border-dashed border-[#E2E5E9] bg-white px-3.5 py-3"
          >
            <Paperclip size={17} color="#6B7684" />

            <Text className="text-[12.5px] font-semibold text-[#6B7684]">
              Choose files
            </Text>
          </Pressable>

          <Text className="mt-1.5 text-[10.5px] text-[#9AA4AF]">
            Optional. Up to 3 files, 5 MB each. PNG, JPG, or PDF.
          </Text>
        </View>

        {/* Submitting As */}
        <View className="mb-3 rounded-[13px] bg-[#F4F6F8] p-3.5">
          <Text className="mb-1.5 text-xs font-bold text-[#16202A]">
            Submitting as
          </Text>

          <Text className="text-[13px] font-bold text-[#16202A]">
            Harshit test
          </Text>

          <Text className="mt-0.5 text-[11.5px] text-[#6B7684]">
            harshit@myaarohan.com
          </Text>
        </View>

        {/* My Tickets */}
        <View className="rounded-[13px] bg-[#F4F6F8] p-3.5">
          <Text className="mb-2 text-xs font-bold text-[#16202A]">
            My tickets
          </Text>

          <View className="flex-row items-center gap-2.5">
            <CheckCircle2 size={22} color="#9AA4AF" />

            <Text className="flex-1 text-[11.5px] leading-[17px] text-[#6B7684]">
              No support tickets yet. They'll appear here once submitted.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action */}
      <View className="border-t border-[#E2E5E9] bg-[#F4F6F8] px-[18px] pb-5 pt-3">
        <Pressable
          onPress={handleSubmit}
          className="w-full flex-row items-center justify-center gap-2 rounded-xl bg-[#1A3A5C] py-3.5"
        >
          <Text className="text-sm font-bold text-white">Submit request</Text>

          <Send size={16} color="#FFFFFF" strokeWidth={2} />
        </Pressable>
      </View>
    </View>
  );
}
