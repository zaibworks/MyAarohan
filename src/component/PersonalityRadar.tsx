import Svg, {
  Circle,
  Line,
  Polygon,
  Text as SvgText,
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

export default function PersonalityRadar({
  traits,
}: Props) {
  const size = 290;
  const center = 145;
  const radius = 105;

  const getPoint = (
    index: number,
    value: number
  ) => {
    const angle =
      (-90 + index * 72) * (Math.PI / 180);

    const r = radius * (value / 100);

    return {
      x: center + Math.cos(angle) * r,
      y: center + Math.sin(angle) * r,
    };
  };

  const getGridPoints = (
    percentage: number
  ) => {
    return traitsOrder
      .map((_, index) => {
        const point = getPoint(
          index,
          percentage
        );

        return `${point.x},${point.y}`;
      })
      .join(" ");
  };

  const traitPoints = traitsOrder
    .map((name, index) => {
      const trait = traits.find(
        (item) => item.name === name
      );

      const point = getPoint(
        index,
        trait?.score ?? 0
      );

      return `${point.x},${point.y}`;
    })
    .join(" ");

  return (
    <View className="items-center">
      <View className="relative h-[290px] w-[290px]">

        <Svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* OUTER GRID */}

          <Polygon
            points={getGridPoints(100)}
            fill="none"
            stroke="#D9E2EA"
            strokeWidth="2"
          />

          {/* GRID RINGS */}

          {[80, 60, 40, 20].map((level) => (
            <Polygon
              key={level}
              points={getGridPoints(level)}
              fill="none"
              stroke="#D9E2EA"
              strokeWidth="1.4"
            />
          ))}

          {/* AXIS */}

          {traitsOrder.map((_, index) => {
            const point = getPoint(index, 100);

            return (
              <Line
                key={index}
                x1={center}
                y1={center}
                x2={point.x}
                y2={point.y}
                stroke="#D9E2EA"
                strokeWidth="1.3"
              />
            );
          })}

          {/* SCORE AREA */}

          <Polygon
            points={traitPoints}
            fill="#8B63D9"
            fillOpacity="0.16"
            stroke="#8B63D9"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* SCORE POINTS */}

          {traitsOrder.map((name, index) => {
            const trait = traits.find(
              (item) => item.name === name
            );

            const point = getPoint(
              index,
              trait?.score ?? 0
            );

            return (
              <Circle
                key={name}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="#8B63D9"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
            );
          })}

          {/* SCORE % */}

          {traitsOrder.map((name, index) => {
            const trait = traits.find(
              (item) => item.name === name
            );

            const score = trait?.score ?? 0;

            const point = getPoint(
              index,
              Math.max(score - 9, 0)
            );

            return (
              <SvgText
                key={`score-${name}`}
                x={point.x}
                y={point.y}
                fill="#1F2937"
                fontSize="10"
                fontWeight="700"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {score}%
              </SvgText>
            );
          })}
        </Svg>

        {/* OPENNESS */}

        <Text className="absolute left-[108px] top-[16px] text-[12px] text-[#34445A]">
          Openness
        </Text>

        {/* CONSCIENTIOUSNESS */}

        <Text className="absolute right-[-42px] top-[92px] text-[12px] text-[#34445A]">
          Conscientiousness
        </Text>

        {/* EXTRAVERSION */}

        <Text className="absolute bottom-[37px] right-[2px] text-[12px] text-[#34445A]">
          Extraversion
        </Text>

        {/* AGREEABLENESS */}

        <Text className="absolute bottom-[37px] left-[8px] text-[12px] text-[#34445A]">
          Agreeableness
        </Text>

        {/* NEUROTICISM */}

        <Text className="absolute left-[-10px] top-[92px] text-[12px] text-[#34445A]">
          Neuroticism
        </Text>
      </View>
    </View>
  );
}