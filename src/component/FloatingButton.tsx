import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  Pressable,
} from "react-native";
import { Bot } from "lucide-react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const SIZE = 58;
const SIDE_MARGIN = 16;

export default function FloatingButton() {
  const leftPosition = SIDE_MARGIN;
  const rightPosition = width - SIZE - SIDE_MARGIN;
  const router  = useRouter()

  // Animated position
  const panX = useRef(
    new Animated.Value(rightPosition)
  ).current;

  // Normal number — current position track karne ke liye
  const currentX = useRef(rightPosition);

  // Gesture start hone par X yahan save hoga
  const startX = useRef(rightPosition);

  const panResponder = useRef(
    PanResponder.create({
      // Tap par immediately responder mat bano
      onStartShouldSetPanResponder: () => false,

      // Sirf horizontal drag par activate hoga
      onMoveShouldSetPanResponder: (_, gesture) => {
        return (
          Math.abs(gesture.dx) > 8 &&
          Math.abs(gesture.dx) > Math.abs(gesture.dy)
        );
      },

      onPanResponderGrant: () => {
        startX.current = currentX.current;
      },

      onPanResponderMove: (_, gesture) => {
        const newX = Math.max(
          leftPosition,
          Math.min(
            rightPosition,
            startX.current + gesture.dx
          )
        );

        currentX.current = newX;
        panX.setValue(newX);
      },

      onPanResponderRelease: (_, gesture) => {
        const finalX = Math.max(
          leftPosition,
          Math.min(
            rightPosition,
            startX.current + gesture.dx
          )
        );

        const targetX =
          finalX < width / 2
            ? leftPosition
            : rightPosition;

        currentX.current = targetX;

        Animated.spring(panX, {
          toValue: targetX,
          useNativeDriver: true,
          tension: 80,
          friction: 8,
        }).start();
      },
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        position: "absolute",
        top: "27%",
        zIndex: 999,
        elevation: 20,
        transform: [
          { translateX: panX },
          { translateY: -SIZE / 2 },
        ],
      }}
    >
      <Pressable
        onPress={() => {
          router.push('/student/AaroAiModal')
        }}
        className="h-[55px] w-[54px] items-center justify-center rounded-full bg-[#1A3A5C]"
      >
        <Bot
          size={24}
          color="#FFFFFF"
          strokeWidth={2}
        />
      </Pressable>
    </Animated.View>
  );
}