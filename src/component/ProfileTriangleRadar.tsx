import { Text, View } from "react-native";
import Svg, {
  Circle,
  Line,
  Polygon,
} from "react-native-svg";

type ProfileScore = {
  name: string;
  score: number;
};

type Props = {
  profileScores: ProfileScore[];
};

const SIZE = 200;

const CENTER_X = SIZE / 2;
const CENTER_Y = 145;

const RADIUS = 100;

const GRID_LEVELS = 5;

const AXIS_ANGLES = [
  -Math.PI / 2,              // Quantitative - top
  Math.PI / 6,               // Verbal - bottom right
  (5 * Math.PI) / 6,         // Spatial - bottom left
];

function getPoint(
  index: number,
  radius: number
): [number, number] {
  const angle = AXIS_ANGLES[index];

  return [
    CENTER_X + Math.cos(angle) * radius,
    CENTER_Y + Math.sin(angle) * radius,
  ];
}

function getTrianglePoints(
  radius: number
): string {
  return [0, 1, 2]
    .map((index) => {
      const [x, y] = getPoint(index, radius);

      return `${x},${y}`;
    })
    .join(" ");
}

export default function ProfileTriangleRadar({
  profileScores,
}: Props) {
  const scoreMap = Object.fromEntries(
    profileScores.map((item) => [
      item.name.toLowerCase(),
      item.score,
    ])
  );

  const orderedNames = [
    "quantitative",
    "verbal",
    "spatial",
  ];

  const scorePoints = orderedNames
    .map((name, index) => {
      const score = scoreMap[name] ?? 0;

      const scoreRadius =
        (RADIUS * score) / 100;

      const [x, y] = getPoint(
        index,
        scoreRadius
      );

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <View
      style={{
        alignItems: "center",
        overflow: "visible",
      }}
    >
      <View
        style={{
          width: SIZE + 70,
          height: SIZE + 55,
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* RADAR */}

        <View
          style={{
            position: "absolute",
            left: 40,
            top: 0,
          }}
        >
          <Svg
            width={SIZE}
            height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
          >
            {/* GRID TRIANGLES */}

            {Array.from(
              { length: GRID_LEVELS },
              (_, index) => {
                const level = index + 1;

                return (
                  <Polygon
                    key={level}
                    points={getTrianglePoints(
                      (RADIUS / GRID_LEVELS) *
                        level
                    )}
                    fill="none"
                    stroke="#C9DCE8"
                    strokeWidth={
                      level === GRID_LEVELS
                        ? 6
                        : 3
                    }
                    strokeLinejoin="round"
                  />
                );
              }
            )}

            {/* AXIS LINES */}

            {[0, 1, 2].map((index) => {
              const [x, y] = getPoint(
                index,
                RADIUS
              );

              return (
                <Line
                  key={index}
                  x1={CENTER_X}
                  y1={CENTER_Y}
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
              fill="#16877F"
              fillOpacity={0.12}
              stroke="#16877F"
              strokeWidth={5}
              strokeLinejoin="round"
            />

            {/* SCORE POINTS */}

            {orderedNames.map(
              (name, index) => {
                const score =
                  scoreMap[name] ?? 0;

                const scoreRadius =
                  (RADIUS * score) / 100;

                const [x, y] =
                  getPoint(
                    index,
                    scoreRadius
                  );

                return (
                  <Circle
                    key={name}
                    cx={x}
                    cy={y}
                    r={7}
                    fill="#16877F"
                  />
                );
              }
            )}

            {/* CENTER POINT */}

            <Circle
              cx={CENTER_X}
              cy={CENTER_Y}
              r={4}
              fill="#16877F"
            />
          </Svg>
        </View>

        {/* QUANTITATIVE */}

        <Text
          style={{
            position: "absolute",
            top: 16,
            left: 0,
            width: SIZE + 80,
            textAlign: "center",
            fontSize: 12,
            color: "#263746",
          }}
        >
          quantitative
        </Text>

        {/* SPATIAL */}

        <Text
          style={{
            position: "absolute",
            left: -2,
            bottom: 42,
            fontSize: 12,
            color: "#263746",
          }}
        >
          spatial
        </Text>

        {/* VERBAL */}

        <Text
          style={{
            position: "absolute",
            right: -2,
            bottom: 42,
            fontSize: 12,
            color: "#263746",
          }}
        >
          verbal
        </Text>
      </View>
    </View>
  );
}