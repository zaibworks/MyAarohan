import { router } from "expo-router";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Mail,
  Phone,
  Plus,
  Trash2,
  UserRound,
} from "lucide-react-native";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
   KeyboardAvoidingView,
    Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const primary = "#1A3A5C";

const relations = [
  "Father",
  "Mother",
  "Guardian",
  "Grandfather",
  "Grandmother",
  "Brother",
  "Sister",
  "Other",
];

type Guardian = {
  id: number;
  name: string;
  relation: string;
  phone: string;
  email: string;
};

export default function GuardianProfile() {
  const [guardians, setGuardians] = useState<Guardian[]>([
    {
      id: 1,
      name: "",
      relation: "",
      phone: "",
      email: "",
    },
  ]);

  const [activeGuardian, setActiveGuardian] = useState(1);
  const [showRelationPicker, setShowRelationPicker] = useState<number | null>(
    null,
  );

  const updateGuardian = (
    id: number,
    field: keyof Guardian,
    value: string,
  ) => {
    setGuardians((current) =>
      current.map((guardian) =>
        guardian.id === id
          ? {
              ...guardian,
              [field]: value,
            }
          : guardian,
      ),
    );
  };

  const addGuardian = () => {
    const newId =
      guardians.length > 0
        ? Math.max(...guardians.map((guardian) => guardian.id)) + 1
        : 1;

    setGuardians((current) => [
      ...current,
      {
        id: newId,
        name: "",
        relation: "",
        phone: "",
        email: "",
      },
    ]);

    setActiveGuardian(newId);
  };

  const removeGuardian = (id: number) => {
    if (guardians.length === 1) {
      return;
    }

    setGuardians((current) =>
      current.filter((guardian) => guardian.id !== id),
    );

    if (activeGuardian === id) {
      const remaining = guardians.filter(
        (guardian) => guardian.id !== id,
      );

      if (remaining.length > 0) {
        setActiveGuardian(remaining[0].id);
      }
    }
  };

  const handleContinue = () => {
    const primaryGuardian = guardians[0];

    if (!primaryGuardian.name.trim()) {
      return;
    }

    if (!primaryGuardian.relation) {
      return;
    }

    if (!primaryGuardian.phone.trim()) {
      return;
    }

    if (!primaryGuardian.email.trim()) {
      return;
    }

    router.push("/auth/profile-setup/marks");
  };

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      className="flex-1 bg-[#F4F6F8]"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        className="flex-1"
      >
      {/* Header */}
      <View className="border-b border-[#E2E5E9] bg-white px-5 pb-3 pt-3">
        <View className="flex-row items-center">
          <Pressable
            onPress={() => router.back()}
            className="mr-3 h-9 w-9 items-center justify-center rounded-[10px] active:bg-[#F4F6F8]"
          >
            <ArrowLeft
              size={21}
              color="#16202A"
              strokeWidth={2}
            />
          </Pressable>

          <View className="flex-1">
            <Text className="text-[16px] font-bold text-[#16202A]">
              Complete your profile
            </Text>

            <Text className="mt-0.5 text-[11px] text-[#6B7684]">
              Step 4 of 8 · Your guardian
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 22,
          paddingBottom: 30,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Progress */}
        <View className="mb-7">
          <View className="mb-2 flex-row items-center justify-between">
            <Text className="text-[12px] font-medium text-[#6B7684]">
              Your profile
            </Text>

            <Text className="text-[12px] font-semibold text-[#1A3A5C]">
              50% complete
            </Text>
          </View>

          <View className="h-[5px] overflow-hidden rounded-full bg-[#E2E5E9]">
            <View
              className="h-full rounded-full"
              style={{
                width: "50%",
                backgroundColor: primary,
              }}
            />
          </View>
        </View>

        {/* Heading */}
        <View className="mb-7">
          <Text className="text-[25px] font-extrabold tracking-[-0.4px] text-[#16202A]">
            Your guardian
          </Text>

          <Text className="mt-2 max-w-[335px] text-[13px] leading-5 text-[#6B7684]">
            Add the details of a parent or guardian who can support your
            career journey.
          </Text>
        </View>

        {guardians.map((guardian, index) => {
          const isActive = activeGuardian === guardian.id;

          return (
            <View
              key={guardian.id}
              className="mb-5"
            >
              {/* Guardian Header */}
              <View className="mb-3 flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <View className="mr-2 h-7 w-7 items-center justify-center rounded-full bg-[#EAF1F7]">
                    <UserRound
                      size={15}
                      color={primary}
                      strokeWidth={2}
                    />
                  </View>

                  <Text className="text-[14px] font-bold text-[#16202A]">
                    Guardian {index + 1}
                  </Text>

                  {index === 0 && (
                    <View className="ml-2 rounded-full bg-[#FFF6DF] px-2 py-0.5">
                      <Text className="text-[8px] font-bold text-[#9A6B00]">
                        REQUIRED
                      </Text>
                    </View>
                  )}
                </View>

                {guardians.length > 1 && (
                  <Pressable
                    onPress={() => removeGuardian(guardian.id)}
                    className="h-8 w-8 items-center justify-center rounded-[9px] active:bg-[#FDECEC]"
                  >
                    <Trash2
                      size={16}
                      color="#B33A3A"
                      strokeWidth={1.9}
                    />
                  </Pressable>
                )}
              </View>

              {/* Name */}
              <View className="mb-4">
                <Text className="mb-2 text-[12.5px] font-semibold text-[#16202A]">
                  Guardian name
                </Text>

                <TextInput
                  value={guardian.name}
                  onFocus={() => setActiveGuardian(guardian.id)}
                  onChangeText={(text) =>
                    updateGuardian(
                      guardian.id,
                      "name",
                      text,
                    )
                  }
                  placeholder="Enter guardian name"
                  placeholderTextColor="#9AA4AF"
                  className="h-12 rounded-[11px] border border-[#E2E5E9] bg-white px-3.5 text-[14px] text-[#16202A]"
                />
              </View>

              {/* Relation */}
              <View className="mb-4">
                <Text className="mb-2 text-[12.5px] font-semibold text-[#16202A]">
                  Relationship
                </Text>

                <Pressable
                  onPress={() => {
                    setActiveGuardian(guardian.id);
                    setShowRelationPicker(guardian.id);
                  }}
                  className="h-12 flex-row items-center justify-between rounded-[11px] border border-[#E2E5E9] bg-white px-3.5"
                >
                  <Text
                    className={`text-[14px] ${
                      guardian.relation
                        ? "text-[#16202A]"
                        : "text-[#9AA4AF]"
                    }`}
                  >
                    {guardian.relation || "Select relationship"}
                  </Text>

                  <ChevronDown
                    size={18}
                    color="#9AA4AF"
                    strokeWidth={1.9}
                  />
                </Pressable>
              </View>

              {/* Phone */}
              <View className="mb-4">
                <Text className="mb-2 text-[12.5px] font-semibold text-[#16202A]">
                  Phone number
                </Text>

                <View className="h-12 flex-row items-center rounded-[11px] border border-[#E2E5E9] bg-white px-3">
                  <Phone
                    size={17}
                    color="#6B7684"
                    strokeWidth={1.9}
                  />

                  <Text className="ml-2 mr-1 text-[13px] font-semibold text-[#6B7684]">
                    +91
                  </Text>

                  <TextInput
                    value={guardian.phone}
                    onFocus={() =>
                      setActiveGuardian(guardian.id)
                    }
                    onChangeText={(text) =>
                      updateGuardian(
                        guardian.id,
                        "phone",
                        text.replace(/\D/g, "").slice(0, 10),
                      )
                    }
                    placeholder="Enter phone number"
                    placeholderTextColor="#9AA4AF"
                    keyboardType="number-pad"
                    maxLength={10}
                    className="flex-1 text-[14px] text-[#16202A]"
                  />
                </View>
              </View>

              {/* Email */}
              <View>
                <Text className="mb-2 text-[12.5px] font-semibold text-[#16202A]">
                  Email
                </Text>

                <View className="h-12 flex-row items-center rounded-[11px] border border-[#E2E5E9] bg-white px-3">
                  <Mail
                    size={17}
                    color="#6B7684"
                    strokeWidth={1.9}
                  />

                  <TextInput
                    value={guardian.email}
                    onFocus={() =>
                      setActiveGuardian(guardian.id)
                    }
                    onChangeText={(text) =>
                      updateGuardian(
                        guardian.id,
                        "email",
                        text,
                      )
                    }
                    placeholder="Enter email address"
                    placeholderTextColor="#9AA4AF"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="ml-2 flex-1 text-[14px] text-[#16202A]"
                  />
                </View>
              </View>

              {isActive && (
                <Text className="mt-2 text-[10.5px] text-[#9AA4AF]">
                  Guardian information can be updated later.
                </Text>
              )}
            </View>
          );
        })}

        {/* Add Guardian */}
        <Pressable
          onPress={addGuardian}
          className="mb-5 h-[46px] flex-row items-center justify-center rounded-[11px] border border-dashed border-[#B9C3CD] bg-white active:bg-[#F8FAFB]"
        >
          <Plus
            size={17}
            color={primary}
            strokeWidth={2}
          />

          <Text className="ml-2 text-[13px] font-semibold text-[#1A3A5C]">
            Add another guardian
          </Text>
        </Pressable>

        {/* Info */}
        <View className="rounded-[11px] bg-[#EAF1F7] px-3.5 py-3">
          <Text className="text-[11px] leading-4 text-[#6B7684]">
            Guardian details help us understand the support available to
            you during your education and career journey.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Action */}
      <View className="border-t border-[#E2E5E9] bg-white px-5 py-3.5">
        <Pressable
          onPress={handleContinue}
          className="h-[52px] w-full flex-row items-center justify-center rounded-[12px] bg-[#1A3A5C] active:opacity-90"
        >
          <Text className="mr-2 text-[14px] font-bold text-white">
            Continue
          </Text>

          <ChevronRight
            size={17}
            color="#FFFFFF"
            strokeWidth={2.5}
          />
        </Pressable>
      </View>

      {/* Relationship Picker */}
      {showRelationPicker !== null && (
        <View className="absolute inset-0">
          <Pressable
            onPress={() => setShowRelationPicker(null)}
            className="flex-1 justify-end bg-black/30"
          >
            <Pressable
              onPress={() => {}}
              className="max-h-[75%] rounded-t-[24px] bg-white px-4 pb-8 pt-5"
            >
              <View className="mb-4">
                <Text className="text-[18px] font-bold text-[#16202A]">
                  Select relationship
                </Text>

                <Text className="mt-1 text-[11px] text-[#6B7684]">
                  Choose your relationship with this guardian.
                </Text>
              </View>

              <ScrollView showsVerticalScrollIndicator={false}>
                {relations.map((relation) => {
                  const selected =
                    guardians.find(
                      (item) =>
                        item.id === showRelationPicker,
                    )?.relation === relation;

                  return (
                    <Pressable
                      key={relation}
                      onPress={() => {
                        updateGuardian(
                          showRelationPicker,
                          "relation",
                          relation,
                        );

                        setShowRelationPicker(null);
                      }}
                      className={`mb-2 rounded-[10px] border px-4 py-3.5 ${
                        selected
                          ? "border-[#1A3A5C] bg-[#EAF1F7]"
                          : "border-[#E2E5E9] bg-white"
                      }`}
                    >
                      <Text
                        className={`text-[14px] ${
                          selected
                            ? "font-semibold text-[#1A3A5C]"
                            : "text-[#16202A]"
                        }`}
                      >
                        {relation}
                      </Text>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </Pressable>
          </Pressable>
        </View>
      )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}