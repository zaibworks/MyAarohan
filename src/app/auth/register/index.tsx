import { useRouter } from "expo-router";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronRight,
  LockIcon,
} from "lucide-react-native";
import React, { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [isClassPickerOpen, setIsClassPickerOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",

    day: "",
    month: "",
    year: "",

    schoolName: "",
    classStandard: "",

    phone: "",
    email: "",
    couponCode: "",
  });

  const router = useRouter();

  const classOptions = [
    { label: "Class 6", value: "6" },
    { label: "Class 7", value: "7" },
    { label: "Class 8", value: "8" },
    { label: "Class 9", value: "9" },
    { label: "Class 10", value: "10" },
    { label: "Class 11", value: "11" },
    { label: "Class 12", value: "12" },
  ];

  const validateStep = () => {
    if (currentStep === 0) {
      if (!formData.firstName.trim()) {
        return "First name is required.";
      }

      if (!formData.lastName.trim()) {
        return "Last name is required.";
      }
    }

    if (currentStep === 1) {
      if (!formData.day.trim()) {
        return "Day is required.";
      }

      if (!formData.month.trim()) {
        return "Month is required.";
      }

      if (!formData.year.trim()) {
        return "Year is required.";
      }
    }

    if (currentStep === 2) {
      if (!formData.schoolName.trim()) {
        return "School name is required.";
      }

      if (!formData.classStandard.trim()) {
        return "Class / standard is required.";
      }
    }

    if (currentStep === 3) {
      if (!formData.phone.trim()) {
        return "Phone number is required.";
      }

      if (!formData.email.trim()) {
        return "Email is required.";
      }
    }

    return null;
  };

    const finishRegistration=()=>{
    setErrorMessage("")
    router.replace('/auth/register/complete')
  }

  const handleNext = () => {

    setErrorMessage("");
    const error = validateStep();

    if (error) {
      setErrorMessage(error);
      return;
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      return;
    }
   

    handleRegistration();
  };

  const handleRegistration = () => {
    console.log("Registration data:", formData);
  };

  return (
    <SafeAreaView edges={["bottom"]}
    className="flex-1 bg-white">
      {/* Top Bar  */}
      <View className="flex-row items-center gap-3 px-9 pt-16">
        <Pressable
          onPress={() => {
            if (currentStep > 0) {
              setCurrentStep(currentStep - 1);
            } else {
              router.back();
            }
          }}
          className="h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#E2E5E9]"
        >
          <ArrowLeft size={18} color="#16202A" strokeWidth={2} />
        </Pressable>
        <View>
          <Text className="text-[12.5px] font-bold text-[#16202A]">
            Step {currentStep + 1} of 4
          </Text>

          <Text className="mt-[2px] text-[10.5px] text-[#9AA4AF]">
            Your profile
          </Text>
        </View>
      </View>

      {/* Progress Bar  */}

      <View className="px-5 pb-3 pt-3">
        <View className="h-1  w-full  overflow-hidden rounded-full bg-[#E2E5E9]">
          <View
            className=" h-full rounded-full bg-[#1A3A5C]"
            style={{ width: `${((currentStep + 1) / 4) * 100}%` }}
          />
        </View>

        <View className="mt-1.5 flex-row items-center justify-between">
          <Text className="text-[10.5px] text-[#9AA4AF]">
            {Math.round(((currentStep + 1) / 4) * 100)}% complete
          </Text>

          <Text className="text-[10.5px] text-[#9AA4AF]">4 steps</Text>
        </View>
      </View>

      {currentStep === 0 && (
        <>
          <View className="px-6 pb-1 pt-1">
            <Text className="mb-[3px] text-[19px] font-extrabold text-[#16202A]">
              Basic info
            </Text>

            <Text className="text-[12.5px] text-[#6B7684]">
              Tell us a little about yourself
            </Text>
          </View>
          {/* Form Area  */}

          <View className="flex-1 px-6 pt-3">
            <View className="mb-[15px]">
              <Text className="mb-1.5 text-[12.5px] font-semibold text-[#6B7684]">
                First name
              </Text>

              <TextInput
                value={formData.firstName}
                onChangeText={(value) =>
                  setFormData({ ...formData, firstName: value })
                }
                placeholder="John"
                placeholderTextColor="#9AA4AF"
                className="h-12 w-full rounded-[11px] border border-[#E2E5E9] px-[13px] text-[14px] text-[#16202A]"
              />
            </View>

            <View className="mb-[15px]">
              <Text className="mb-1.5 text-[12.5px] font-semibold text-[#6B7684]">
                Last name
              </Text>

              <TextInput
                value={formData.lastName}
                onChangeText={(value) =>
                  setFormData({ ...formData, lastName: value })
                }
                placeholder="Doe"
                placeholderTextColor="#9AA4AF"
                className="h-12 w-full rounded-[11px] border border-[#E2E5E9] px-[13px] text-[14px] text-[#16202A]"
              />
            </View>

            <View className="mb-[15px]">
              <Text className="mb-1.5 text-[12.5px] font-semibold text-[#6B7684]">
                Middle name
                <Text className="text-[11px] font-normal text-[#9AA4AF]">
                  {" "}
                  (optional)
                </Text>
              </Text>

              <TextInput
                value={formData.middleName}
                placeholder="Optional"
                placeholderTextColor="#9AA4AF"
                className="h-12 w-full rounded-[11px] border border-[#E2E5E9] px-[13px] text-[14px] text-[#16202A]"
              />
            </View>
            {errorMessage && (
              <View className="mt-3 self-center flex-row items-center gap-2 rounded-[6px] border border-[#F3CACA] bg-[#FDECEC] px-5 py-2.5">
                <Text className="text-[15px] text-[#E74C3C]">!</Text>

                <Text className="flex-1 text-[11.5px] text-[#E74C3C]">
                  {errorMessage}
                </Text>
              </View>
            )}
          </View>
        </>
      )}

      {currentStep === 1 && (
        <>
          <View className="px-6 pb-1 pt-1">
            <Text className="mb-[3px] text-[19px] font-extrabold text-[#16202A]">
              Date of birth
            </Text>

            <Text className="text-[12.5px] text-[#6B7684]">
              This will be your login password
            </Text>
          </View>

          <View className="flex-1 px-6 pt-3">
            <View className="flex-row gap-2">
              <View className="flex-[0.9]">
                <Text className="mb-1.5 text-[12.5px] font-semibold text-[#6B7684]">
                  Day
                </Text>

                <TextInput
                  value={formData.day}
                  onChangeText={(value) =>
                    setFormData({ ...formData, day: value })
                  }
                  placeholder="DD"
                  placeholderTextColor="#9AA4AF"
                  keyboardType="number-pad"
                  maxLength={2}
                  className="h-12 w-full rounded-[11px] border border-[#E2E5E9] px-2 text-center text-[14px] text-[#16202A]"
                />
              </View>

              <View className="flex-[0.9]">
                <Text className="mb-1.5 text-[12.5px] font-semibold text-[#6B7684]">
                  Month
                </Text>

                <TextInput
                  value={formData.month}
                  onChangeText={(value) =>
                    setFormData({ ...formData, month: value })
                  }
                  placeholder="MM"
                  placeholderTextColor="#9AA4AF"
                  keyboardType="number-pad"
                  maxLength={2}
                  className="h-12 w-full rounded-[11px] border border-[#E2E5E9] px-2 text-center text-[14px] text-[#16202A]"
                />
              </View>

              <View className="flex-[1.4]">
                <Text className="mb-1.5 text-[12.5px] font-semibold text-[#6B7684]">
                  Year
                </Text>

                <TextInput
                  value={formData.year}
                  onChangeText={(value) =>
                    setFormData({ ...formData, year: value })
                  }
                  placeholder="YYYY"
                  placeholderTextColor="#9AA4AF"
                  keyboardType="number-pad"
                  maxLength={4}
                  className="h-12 w-full rounded-[11px] border border-[#E2E5E9] px-2 text-center text-[14px] text-[#16202A]"
                />
              </View>
            </View>
            <View className="mt-[15px] flex-row items-start gap-2 rounded-[10px] bg-[#EAF1F7] px-3 py-2.5">
              <View className="pt-1.5">
                <LockIcon size={14} color="#1A3A5C" />
              </View>
              <Text className="flex-1 text-[11px] leading-[16px] text-[#6B7684]">
                Your date of birth will be used as your login password. Keep it
                private.
              </Text>
            </View>
            {errorMessage && (
              <View className="mt-3 self-center flex-row items-center gap-2 rounded-[6px] border border-[#F3CACA] bg-[#FDECEC] px-5 py-2.5">
                <Text className="text-[15px] text-[#E74C3C]">!</Text>

                <Text className="flex-1 text-[11.5px] text-[#E74C3C]">
                  {errorMessage}
                </Text>
              </View>
            )}
          </View>
        </>
      )}

      {currentStep === 2 && (
        <>
          <View className="px-6 pb-1 pt-1">
            <Text className="mb-[3px] text-[19px] font-extrabold text-[#16202A]">
              Academic info
            </Text>

            <Text className="text-[12.5px] text-[#6B7684]">
              Tell us where you currently study
            </Text>
          </View>

          <View className="flex-1 px-6 pt-3">
            <View className="mb-[15px]">
              <Text className="mb-1.5 text-[12.5px] font-semibold text-[#6B7684]">
                School name
              </Text>

              <TextInput
                value={formData.schoolName}
                onChangeText={(value) =>
                  setFormData({ ...formData, schoolName: value })
                }
                placeholder="Enter your school name"
                placeholderTextColor="#9AA4AF"
                className="h-14 w-full rounded-[11px] border border-[#E2E5E9] px-[13px] text-[14px] text-[#16202A]"
              />
            </View>

            <View>
              <Text className="mb-1.5 text-[12.5px] font-semibold text-[#6B7684]">
                Class / standard
              </Text>
              <Pressable
                onPress={() => setIsClassPickerOpen(true)}
                className="h-12 flex-row items-center justify-between rounded-[11px] border border-[#E2E5E9] bg-white px-3"
              >
                <Text
                  className={
                    formData.classStandard
                      ? "text-[14px] text-[#16202A]"
                      : "text-[14px] text-[#9AA4AF]"
                  }
                >
                  {formData.classStandard
                    ? `Class ${formData.classStandard}`
                    : "Select your class"}
                </Text>

                <ChevronDown size={18} color="#6B7684" strokeWidth={2} />
              </Pressable>
            </View>
            {errorMessage && (
              <View className="mt-3 self-center flex-row items-center gap-2 rounded-[6px] border border-[#F3CACA] bg-[#FDECEC] px-5 py-2.5">
                <Text className="text-[15px] text-[#E74C3C]">!</Text>

                <Text className="flex-1 text-[11.5px] text-[#E74C3C]">
                  {errorMessage}
                </Text>
              </View>
            )}
          </View>
        </>
      )}

      {currentStep === 3 && (
        <>
          <View className="px-6 pb-1 pt-1">
            <Text className="mb-[3px] text-[19px] font-extrabold text-[#16202A]">
              Contact details
            </Text>

            <Text className="text-[12.5px] text-[#6B7684]">
              Add your contact information to finish
            </Text>
          </View>

          <View className="flex-1 px-6 pt-3">
            <View className="mb-[15px]">
              <Text className="mb-1.5 text-[12.5px] font-semibold text-[#6B7684]">
                Phone number
              </Text>

              <TextInput
                value={formData.phone}
                onChangeText={(value) =>
                  setFormData({ ...formData, phone: value })
                }
                placeholder="9876543210"
                placeholderTextColor="#9AA4AF"
                keyboardType="phone-pad"
                maxLength={10}
                className="h-12 w-full rounded-[11px] border border-[#E2E5E9] px-[13px] text-[14px] text-[#16202A]"
              />
            </View>

            <View className="mb-[15px]">
              <Text className="mb-1.5 text-[12.5px] font-semibold text-[#6B7684]">
                Email
              </Text>

              <TextInput
                value={formData.email}
                onChangeText={(value) =>
                  setFormData({ ...formData, email: value })
                }
                placeholder="john@example.com"
                placeholderTextColor="#9AA4AF"
                keyboardType="email-address"
                autoCapitalize="none"
                className="h-12 w-full rounded-[11px] border border-[#E2E5E9] px-[13px] text-[14px] text-[#16202A]"
              />
            </View>

            <View>
              <Text className="mb-1.5 text-[12.5px] font-semibold text-[#6B7684]">
                Coupon code
                <Text className="text-[11px] font-normal text-[#9AA4AF]">
                  {" "}
                  (optional)
                </Text>
              </Text>

              <TextInput
                value={formData.couponCode}
                onChangeText={(value) =>
                  setFormData({ ...formData, couponCode: value })
                }
                placeholder="Optional"
                placeholderTextColor="#9AA4AF"
                autoCapitalize="characters"
                className="h-12 w-full rounded-[11px] border border-[#E2E5E9] px-[13px] text-[14px] text-[#16202A]"
              />
            </View>
            {errorMessage && (
              <View className="mt-3 self-center flex-row items-center gap-2 rounded-[6px] border border-[#F3CACA] bg-[#FDECEC] px-5 py-2.5">
                <Text className="text-[15px] text-[#E74C3C]">!</Text>

                <Text className="flex-1 text-[11.5px] text-[#E74C3C]">
                  {errorMessage}
                </Text>
              </View>
            )}
          </View>
        </>
      )}
      {/* Botttom buttons  */}

      <View className="px-6 pb-5 pt-3">
        <Pressable
          onPress={
            currentStep === 3 ? () => router.replace("/auth/register/complete") : handleNext
          }
          className="h-[52px] w-full flex-row items-center justify-center gap-2 rounded-xl bg-[#1A3A5C]"
        >
          <Text className="text-[14.5px] font-bold text-white">
            {currentStep === 3 ? "Complete registration" : "Next"}
          </Text>

          {currentStep === 3 ? (
            <Check size={16} color="#FFFFFF" strokeWidth={2.5} />
          ) : (
            <ChevronRight size={16} color="#FFFFFF" strokeWidth={2.5} />
          )}
        </Pressable>
      </View>
      <Modal
        visible={isClassPickerOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsClassPickerOpen(false)}
      >
        <Pressable
          className="flex-1 justify-center bg-black/30 px-6"
          onPress={() => setIsClassPickerOpen(false)}
        >
          <Pressable
            className="overflow-hidden rounded-2xl bg-white"
            onPress={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <View className="border-b border-[#E2E5E9] px-4 py-4">
              <Text className="text-[16px] font-semibold text-[#16202A]">
                Select your class
              </Text>

              <Text className="mt-1 text-[12px] text-[#6B7684]">
                Choose your current class / standard
              </Text>
            </View>

            {/* Options */}
            <View className="py-1.5">
              {classOptions.map((option) => {
                const isSelected = formData.classStandard === option.value;

                return (
                  <Pressable
                    key={option.value}
                    onPress={() => {
                      setFormData({
                        ...formData,
                        classStandard: option.value,
                      });

                      setIsClassPickerOpen(false);
                    }}
                    className="mx-2 flex-row items-center justify-between rounded-[10px] px-3 py-3.5"
                  >
                    <Text
                      className={
                        isSelected
                          ? "text-[14px] font-medium text-[#1A3A5C]"
                          : "text-[14px] text-[#16202A]"
                      }
                    >
                      {option.label}
                    </Text>

                    {isSelected && (
                      <Check size={18} color="#1A3A5C" strokeWidth={2.5} />
                    )}
                  </Pressable>
                );
              })}
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default Register;
