import { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";
import {
  ArrowLeft,
  Pencil,
  Plus,
  Trash2,
  UsersRound,
  X,
  ChevronDown,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const primary = "#1A3A5C";

const relations = ["Mother", "Father", "Guardian", "Other"];

type Guardian = {
  id: number;
  name: string;
  relation: string;
  phone: string;
  email: string;
};

export default function GuardianScreen() {
  const [guardians, setGuardians] = useState<Guardian[]>([]);

  const [showGuardianSheet, setShowGuardianSheet] = useState(false);

  const [guardianName, setGuardianName] = useState("");
  const [guardianRelation, setGuardianRelation] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [guardianEmail, setGuardianEmail] = useState("");

  const [showRelationPicker, setShowRelationPicker] = useState(false);

  const [editingGuardianId, setEditingGuardianId] = useState<number | null>(
    null
  );

  const [errors, setErrors] = useState({
    name: "",
    relation: "",
    phone: "",
    email: "",
  });

  const resetGuardianForm = () => {
    setGuardianName("");
    setGuardianRelation("");
    setGuardianPhone("");
    setGuardianEmail("");
    setEditingGuardianId(null);

    setErrors({
      name: "",
      relation: "",
      phone: "",
      email: "",
    });
  };

  const closeGuardianSheet = () => {
    setShowGuardianSheet(false);
    setShowRelationPicker(false);
    resetGuardianForm();
  };

  const openAddGuardian = () => {
    resetGuardianForm();
    setShowGuardianSheet(true);
  };

  const openEditGuardian = (guardian: Guardian) => {
    setEditingGuardianId(guardian.id);
    setGuardianName(guardian.name);
    setGuardianRelation(guardian.relation);
    setGuardianPhone(guardian.phone);
    setGuardianEmail(guardian.email);

    setErrors({
      name: "",
      relation: "",
      phone: "",
      email: "",
    });

    setShowGuardianSheet(true);
  };

  const validateGuardian = () => {
    const newErrors = {
      name: "",
      relation: "",
      phone: "",
      email: "",
    };

    if (!guardianName.trim()) {
      newErrors.name = "Guardian name is required.";
    }

    if (!guardianRelation) {
      newErrors.relation = "Please select a relation.";
    }

    if (!guardianPhone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(guardianPhone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number.";
    }

    if (!guardianEmail.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(guardianEmail)) {
      newErrors.email = "Enter a valid email address.";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  };

  const saveGuardian = () => {
    if (!validateGuardian()) {
      return;
    }

    if (editingGuardianId !== null) {
      setGuardians((prev) =>
        prev.map((guardian) =>
          guardian.id === editingGuardianId
            ? {
                ...guardian,
                name: guardianName.trim(),
                relation: guardianRelation,
                phone: guardianPhone,
                email: guardianEmail.trim(),
              }
            : guardian
        )
      );
    } else {
      const newGuardian: Guardian = {
        id: Date.now(),
        name: guardianName.trim(),
        relation: guardianRelation,
        phone: guardianPhone,
        email: guardianEmail.trim(),
      };

      setGuardians((prev) => [...prev, newGuardian]);
    }

    closeGuardianSheet();
  };

  const deleteGuardian = (id: number) => {
    setGuardians((prev) =>
      prev.filter((guardian) => guardian.id !== id)
    );
  };

  const handleSaveDraft = () => {
    // Draft persistence will be connected with shared profile state.
  };

  const handleContinue = () => {
    router.push("/auth/profile-setup/academic");
  };

  return (
    <SafeAreaView edges={["bottom"]}
    className="flex-1 bg-[#F4F6F8]">
      {/* Top Bar */}
      <View className="border-b border-[#E2E5E9] bg-white px-4 pb-3 pt-10">
        <View className="flex-row items-center">
          <Pressable
            onPress={() => router.back()}
            className="mr-3 h-9 w-9 items-center justify-center rounded-[10px]"
          >
            <ArrowLeft size={21} color="#16202A" strokeWidth={2} />
          </Pressable>

          <Text className="text-[16px] font-semibold text-[#16202A]">
            Complete your profile
          </Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 18,
          paddingBottom: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Progress */}
        <View className="mb-6">
          <View className="mb-2 flex-row items-center justify-between">
            <Text className="text-[13px] font-medium text-[#6B7684]">
              Step 2 of 5
            </Text>

            <Text className="text-[13px] font-semibold text-[#1A3A5C]">
              50%
            </Text>
          </View>

          <View className="h-1.5 overflow-hidden rounded-full bg-[#E2E5E9]">
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
        <View className="mb-6">
          <Text className="text-[24px] font-bold text-[#16202A]">
            Guardian details
          </Text>

          <Text className="mt-1.5 text-[14px] leading-5 text-[#6B7684]">
            Helps us contact the right person for account, safety, or
            counselling updates. We won't contact them for marketing without
            permission.
          </Text>
        </View>

        {/* Add Guardian */}
        <Pressable
          onPress={openAddGuardian}
          className="mb-4 flex-row items-center justify-center rounded-[10px] border border-dashed border-[#1A3A5C] bg-[#EAF1F7] py-3.5"
        >
          <Plus size={19} color={primary} strokeWidth={2.2} />

          <Text className="ml-2 text-[14px] font-semibold text-[#1A3A5C]">
            Add guardian
          </Text>
        </Pressable>

        {/* Empty State */}
        {guardians.length === 0 ? (
          <View className="items-center rounded-[12px] border border-[#E2E5E9] bg-white px-5 py-10">
            <View className="mb-3 h-12 w-12 items-center justify-center rounded-full bg-[#EAF1F7]">
              <UsersRound size={23} color={primary} />
            </View>

            <Text className="text-[15px] font-semibold text-[#16202A]">
              No guardian added yet.
            </Text>

            <Text className="mt-1 text-center text-[13px] leading-5 text-[#9AA4AF]">
              You can add a parent or guardian using the button above.
            </Text>
          </View>
        ) : (
          <View className="gap-3">
            {guardians.map((guardian) => (
              <View
                key={guardian.id}
                className="rounded-[12px] border border-[#E2E5E9] bg-white p-4"
              >
                <View className="flex-row items-start">
                  {/* Avatar */}
                  <View className="mr-3 h-11 w-11 items-center justify-center rounded-full bg-[#EAF1F7]">
                    <Text className="text-[16px] font-bold text-[#1A3A5C]">
                      {guardian.name.charAt(0).toUpperCase()}
                    </Text>
                  </View>

                  {/* Details */}
                  <View className="flex-1">
                    <Text className="text-[15px] font-semibold text-[#16202A]">
                      {guardian.name}
                    </Text>

                    <Text className="mt-0.5 text-[12px] font-medium text-[#1A3A5C]">
                      {guardian.relation}
                    </Text>

                    <Text className="mt-2 text-[12px] leading-5 text-[#6B7684]">
                      {guardian.phone}
                    </Text>

                    <Text className="text-[12px] leading-5 text-[#6B7684]">
                      {guardian.email}
                    </Text>
                  </View>

                  {/* Actions */}
                  <View className="ml-2 flex-row">
                    <Pressable
                      onPress={() => openEditGuardian(guardian)}
                      className="mr-2 h-8 w-8 items-center justify-center rounded-[8px] bg-[#F4F6F8]"
                    >
                      <Pencil size={15} color="#6B7684" />
                    </Pressable>

                    <Pressable
                      onPress={() => deleteGuardian(guardian.id)}
                      className="h-8 w-8 items-center justify-center rounded-[8px] bg-[#FDECEC]"
                    >
                      <Trash2 size={15} color="#B33A3A" />
                    </Pressable>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Fixed Footer */}
      <View className="border-t border-[#E2E5E9] bg-[#F4F6F8] px-4 py-4">
        <View className="flex-row items-center gap-3">
          <Pressable
            onPress={handleSaveDraft}
            className="h-12 flex-1 items-center justify-center rounded-[10px] border border-[#D6DBE1] bg-white"
          >
            <Text className="text-[14px] font-semibold text-[#1A3A5C]">
              Save draft
            </Text>
          </Pressable>

          <Pressable
            onPress={handleContinue}
            className="h-12 flex-1 items-center justify-center rounded-[10px]"
            style={{
              backgroundColor: primary,
            }}
          >
            <Text className="text-[14px] font-semibold text-white">
              Continue
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Add / Edit Guardian Bottom Sheet */}
      <Modal
        visible={showGuardianSheet}
        transparent
        animationType="slide"
        onRequestClose={closeGuardianSheet}
      >
        <View className="flex-1 justify-end bg-black/30">
          <View className="max-h-[90%] rounded-t-[24px] bg-white px-4 pb-8 pt-5">
            {/* Sheet Header */}
            <View className="mb-5 flex-row items-center justify-between">
              <Text className="text-[18px] font-bold text-[#16202A]">
                {editingGuardianId !== null
                  ? "Edit guardian"
                  : "Add guardian"}
              </Text>

              <Pressable
                onPress={closeGuardianSheet}
                className="h-9 w-9 items-center justify-center rounded-full bg-[#F4F6F8]"
              >
                <X size={18} color="#6B7684" />
              </Pressable>
            </View>

            <ScrollView
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 12,
              }}
            >
              {/* Name */}
              <View className="mb-4">
                <Text className="mb-2 text-[13px] font-semibold text-[#16202A]">
                  Name
                </Text>

                <TextInput
                  value={guardianName}
                  onChangeText={(text) => {
                    setGuardianName(text);

                    if (errors.name) {
                      setErrors((prev) => ({
                        ...prev,
                        name: "",
                      }));
                    }
                  }}
                  placeholder="Guardian's full name"
                  placeholderTextColor="#9AA4AF"
                  className={`h-12 rounded-[10px] border bg-white px-3.5 text-[14px] text-[#16202A] ${
                    errors.name
                      ? "border-[#E74C3C]"
                      : "border-[#E2E5E9]"
                  }`}
                />

                {errors.name ? (
                  <Text className="mt-1.5 text-[12px] text-[#E74C3C]">
                    {errors.name}
                  </Text>
                ) : null}
              </View>

              {/* Relation */}
              <View className="mb-4">
                <Text className="mb-2 text-[13px] font-semibold text-[#16202A]">
                  Relation
                </Text>

                <Pressable
                  onPress={() =>
                    setShowRelationPicker(!showRelationPicker)
                  }
                  className={`h-12 flex-row items-center justify-between rounded-[10px] border bg-white px-3.5 ${
                    errors.relation
                      ? "border-[#E74C3C]"
                      : "border-[#E2E5E9]"
                  }`}
                >
                  <Text
                    className={`text-[14px] ${
                      guardianRelation
                        ? "text-[#16202A]"
                        : "text-[#9AA4AF]"
                    }`}
                  >
                    {guardianRelation || "Select relation"}
                  </Text>

                  <ChevronDown size={18} color="#9AA4AF" />
                </Pressable>

                {showRelationPicker && (
                  <View className="mt-1 overflow-hidden rounded-[10px] border border-[#E2E5E9] bg-white">
                    {relations.map((relation) => (
                      <Pressable
                        key={relation}
                        onPress={() => {
                          setGuardianRelation(relation);
                          setShowRelationPicker(false);

                          setErrors((prev) => ({
                            ...prev,
                            relation: "",
                          }));
                        }}
                        className="border-b border-[#E2E5E9] px-3.5 py-3 last:border-b-0"
                      >
                        <Text className="text-[14px] text-[#16202A]">
                          {relation}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                )}

                {errors.relation ? (
                  <Text className="mt-1.5 text-[12px] text-[#E74C3C]">
                    {errors.relation}
                  </Text>
                ) : null}
              </View>

              {/* Phone */}
              <View className="mb-4">
                <Text className="mb-2 text-[13px] font-semibold text-[#16202A]">
                  Phone
                </Text>

                <TextInput
                  value={guardianPhone}
                  onChangeText={(text) => {
                    const numericValue = text
                      .replace(/\D/g, "")
                      .slice(0, 10);

                    setGuardianPhone(numericValue);

                    if (errors.phone) {
                      setErrors((prev) => ({
                        ...prev,
                        phone: "",
                      }));
                    }
                  }}
                  placeholder="10-digit mobile number"
                  placeholderTextColor="#9AA4AF"
                  keyboardType="phone-pad"
                  maxLength={10}
                  className={`h-12 rounded-[10px] border bg-white px-3.5 text-[14px] text-[#16202A] ${
                    errors.phone
                      ? "border-[#E74C3C]"
                      : "border-[#E2E5E9]"
                  }`}
                />

                <Text className="mt-2 text-[12px] leading-4 text-[#9AA4AF]">
                  Use a 10-digit Indian mobile number.
                </Text>

                {errors.phone ? (
                  <Text className="mt-1.5 text-[12px] text-[#E74C3C]">
                    {errors.phone}
                  </Text>
                ) : null}
              </View>

              {/* Email */}
              <View className="mb-5">
                <Text className="mb-2 text-[13px] font-semibold text-[#16202A]">
                  Email
                </Text>

                <TextInput
                  value={guardianEmail}
                  onChangeText={(text) => {
                    setGuardianEmail(text);

                    if (errors.email) {
                      setErrors((prev) => ({
                        ...prev,
                        email: "",
                      }));
                    }
                  }}
                  placeholder="guardian@example.com"
                  placeholderTextColor="#9AA4AF"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  className={`h-12 rounded-[10px] border bg-white px-3.5 text-[14px] text-[#16202A] ${
                    errors.email
                      ? "border-[#E74C3C]"
                      : "border-[#E2E5E9]"
                  }`}
                />

                <Text className="mt-2 text-[12px] leading-4 text-[#9AA4AF]">
                  Required for at least one parent or guardian.
                </Text>

                {errors.email ? (
                  <Text className="mt-1.5 text-[12px] text-[#E74C3C]">
                    {errors.email}
                  </Text>
                ) : null}
              </View>

              {/* Save Guardian */}
              <Pressable
                onPress={saveGuardian}
                className="h-12 items-center justify-center rounded-[10px]"
                style={{
                  backgroundColor: primary,
                }}
              >
                <Text className="text-[14px] font-semibold text-white">
                  {editingGuardianId !== null
                    ? "Update guardian"
                    : "Save guardian"}
                </Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}