import Svg, {
  Circle,
  Line,
  Polygon,
  Text as SvgText,
} from "react-native-svg";
import { View } from "react-native";

type Dimension = {
  name: string;
  score: number;
};

type Props = {
  dimensions: Dimension[];
};

const SIZE = 290;
const CENTER = SIZE / 2;
const RADIUS = 105;

const GRID_LEVELS = 5;

const dimensionsOrder = [
  "Mechanical",
  "Verbal",
  "Perceptual",
  "Spatial",
  "Numerical",
  "Abstract",
  "Language",
];

function getPoint(
  index: number,
  radius: number
): [number, number] {
  const angle =
    -Math.PI / 2 + (index * 2 * Math.PI) / 7;

  return [
    CENTER + Math.cos(angle) * radius,
    CENTER + Math.sin(angle) * radius,
  ];
}

function getPolygonPoints(
  radius: number
): string {
  return dimensionsOrder
    .map((_, index) => {
      const [x, y] = getPoint(index, radius);
      return `${x},${y}`;
    })
    .join(" ");
}

export default function DimensionRadar({
  dimensions,
}: Props) {
  const scoreMap = Object.fromEntries(
    dimensions.map((item) => [item.name, item.score])
  );

  const scorePoints = dimensionsOrder
    .map((name, index) => {
      const score = scoreMap[name] ?? 0;

      const [x, y] = getPoint(
        index,
        (RADIUS * score) / 100
      );

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <View className="items-center">
      <Svg
        width={SIZE}
        height={SIZE + 35}
        viewBox={`0 0 ${SIZE} ${SIZE + 35}`}
      >
        {/* GRID */}

        {[1, 2, 3, 4, 5].map((level) => (
          <Polygon
            key={level}
            points={getPolygonPoints(
              (RADIUS / GRID_LEVELS) * level
            )}
            fill="none"
            stroke="#C9DCE8"
            strokeWidth={1.3}
          />
        ))}

        {/* AXIS LINES */}

        {dimensionsOrder.map((_, index) => {
          const [x, y] = getPoint(index, RADIUS);

          return (
            <Line
              key={index}
              x1={CENTER}
              y1={CENTER}
              x2={x}
              y2={y}
              stroke="#D6E3EB"
              strokeWidth={1}
            />
          );
        })}

        {/* SCORE AREA */}

        <Polygon
          points={scorePoints}
          fill="#159FE3"
          stroke="#159FE3"
          strokeWidth={3}
          strokeLinejoin="round"
          fillOpacity={0.12}
        />

        {/* SCORE POINTS */}

        {dimensionsOrder.map((name, index) => {
          const score = scoreMap[name] ?? 0;

          const [x, y] = getPoint(
            index,
            (RADIUS * score) / 100
          );

          return (
            <Circle
              key={name}
              cx={x}
              cy={y}
              r={5}
              fill="#16A6DF"
              stroke="#FFFFFF"
              strokeWidth={2}
            />
          );
        })}

        {/* CENTER POINT */}

        <Circle
          cx={CENTER}
          cy={CENTER}
          r={4}
          fill="#16A6DF"
          stroke="#FFFFFF"
          strokeWidth={2}
        />

        {/* LABELS */}

        {dimensionsOrder.map((name, index) => {
          const [x, y] = getPoint(
            index,
            RADIUS + 25
          );

          const angle =
            -Math.PI / 2 +
            (index * 2 * Math.PI) / 7;

          let anchor:
            | "start"
            | "middle"
            | "end" = "middle";

          if (Math.cos(angle) > 0.25) {
            anchor = "start";
          } else if (Math.cos(angle) < -0.25) {
            anchor = "end";
          }

          return (
            <SvgText
              key={name}
              x={x}
              y={y}
              fill="#34404B"
              fontSize={11}
              fontWeight="700"
              textAnchor={anchor}
              alignmentBaseline="middle"
            >
              {name}
            </SvgText>
          );
        })}
      </Svg>
    </View>
  );
}