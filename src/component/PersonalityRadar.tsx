import Svg, {
  Circle,
  Line,
  Polygon,
} from "react-native-svg";
import { Text, View } from "react-native";

type PersonalityTrait = {
  name: string;
  score: number;
  level: string;
  description: string;
};

type Props = {
  traits: PersonalityTrait[];
};

const traitsOrder = [
  "Openness",
  "Conscientiousness",
  "Extraversion",
  "Agreeableness",
  "Neuroticism",
];

export default function PersonalityRadar({ traits }: Props) {
  const size = 280;
  const center = 140;
  const radius = 108;

  const getPoint = (index: number, value: number) => {
    const angle = (-90 + index * 72) * (Math.PI / 180);

    const r = radius * (value / 100);

    return {
      x: center + Math.cos(angle) * r,
      y: center + Math.sin(angle) * r,
    };
  };

  const getGridPoints = (percentage: number) => {
    return traitsOrder
      .map((_, index) => {
        const point = getPoint(index, percentage);

        return `${point.x},${point.y}`;
      })
      .join(" ");
  };

  const traitPoints = traitsOrder
    .map((name, index) => {
      const trait = traits.find((item) => item.name === name);

      const score = trait?.score ?? 0;

      const point = getPoint(index, score);

      return `${point.x},${point.y}`;
    })
    .join(" ");

  return (
    <View className="items-center py-3">
      <View className="relative h-[280px] w-[280px]">

        {/* RADAR CHART */}

        <Svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Outer pentagon */}
          <Polygon
            points={getGridPoints(100)}
            fill="none"
            stroke="#CBDCE7"
            strokeWidth="2"
          />

          {/* 80% ring */}
          <Polygon
            points={getGridPoints(80)}
            fill="none"
            stroke="#D8E4EB"
            strokeWidth="1.5"
          />

          {/* 60% ring */}
          <Polygon
            points={getGridPoints(60)}
            fill="none"
            stroke="#D8E4EB"
            strokeWidth="1.5"
          />

          {/* 40% ring */}
          <Polygon
            points={getGridPoints(40)}
            fill="none"
            stroke="#D8E4EB"
            strokeWidth="1.5"
          />

          {/* 20% ring */}
          <Polygon
            points={getGridPoints(20)}
            fill="none"
            stroke="#D8E4EB"
            strokeWidth="1.5"
          />

          {/* Axis lines */}
          {traitsOrder.map((_, index) => {
            const point = getPoint(index, 100);

            return (
              <Line
                key={index}
                x1={center}
                y1={center}
                x2={point.x}
                y2={point.y}
                stroke="#CBDCE7"
                strokeWidth="1.5"
              />
            );
          })}

          {/* User score polygon */}
          <Polygon
            points={traitPoints}
            fill="#7C5CDB"
            fillOpacity="0.10"
            stroke="#7C5CDB"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Score points */}
          {traitsOrder.map((name, index) => {
            const trait = traits.find((item) => item.name === name);

            const point = getPoint(
              index,
              trait?.score ?? 0
            );

            return (
              <Circle
                key={name}
                cx={point.x}
                cy={point.y}
                r="5"
                fill="#7C5CDB"
                stroke="white"
                strokeWidth="2"
              />
            );
          })}
        </Svg>

        {/* TOP */}
        <Text className="absolute left-[97px] top-[-2px] text-[12px] font-extrabold text-[#34445A]">
          Openness
        </Text>

        {/* TOP RIGHT */}
        <Text className="absolute right-[-8px] top-[65px] text-[12px] font-extrabold text-[#34445A]">
          Conscientiousness
        </Text>

        {/* BOTTOM RIGHT */}
        <Text className="absolute bottom-[25px] right-[0px] text-[12px] font-extrabold text-[#34445A]">
          Extraversion
        </Text>

        {/* BOTTOM LEFT */}
        <Text className="absolute bottom-[25px] left-[5px] text-[12px] font-extrabold text-[#34445A]">
          Agreeableness
        </Text>

        {/* TOP LEFT */}
        <Text className="absolute left-[-3px] top-[65px] text-[12px] font-extrabold text-[#34445A]">
          Neuroticism
        </Text>
      </View>
    </View>
  );
}