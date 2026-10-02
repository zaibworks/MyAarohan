import { Text, View } from "react-native";

import Svg, {
  Circle,
  Line,
  Polygon,
  Text as SvgText,
} from "react-native-svg";

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
    -Math.PI / 2 +
    (index * 2 * Math.PI) / 7;

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
      const [x, y] = getPoint(
        index,
        radius
      );

      return `${x},${y}`;
    })
    .join(" ");
}

export default function DimensionRadar({
  dimensions,
}: Props) {
  const scoreMap = Object.fromEntries(
    dimensions.map((item) => [
      item.name,
      item.score,
    ])
  );

  const scorePoints = dimensionsOrder
    .map((name, index) => {
      const score =
        scoreMap[name] ?? 0;

      const [x, y] = getPoint(
        index,
        (RADIUS * score) / 100
      );

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <View
      className="items-center"
      style={{
        overflow: "visible",
        zIndex: 999,
      }}
    >
      {/* RADAR + LABELS WRAPPER */}

      <View
        className="relative"
        style={{
          width: SIZE + 60,
          height: SIZE + 55,
          overflow: "visible",
        }}
      >
        {/* RADAR */}

        <View
          style={{
            position: "absolute",
            left: 30,
            top: 25,
          }}
        >
          <Svg
            width={SIZE}
            height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
          >
            {/* GRID */}

            {[1, 2, 3, 4, 5].map(
              (level) => (
                <Polygon
                  key={level}
                  points={getPolygonPoints(
                    (RADIUS /
                      GRID_LEVELS) *
                      level
                  )}
                  fill="none"
                  stroke="#C9DCE8"
                  strokeWidth={1.3}
                />
              )
            )}

            {/* AXIS LINES */}

            {dimensionsOrder.map(
              (_, index) => {
                const [x, y] =
                  getPoint(
                    index,
                    RADIUS
                  );

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
              }
            )}

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

            {dimensionsOrder.map(
              (name, index) => {
                const score =
                  scoreMap[name] ??
                  0;

                const scoreRadius =
                  (RADIUS * score) /
                  100;

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
                    r={5}
                    fill="#16A6DF"
                    stroke="#FFFFFF"
                    strokeWidth={2}
                  />
                );
              }
            )}

            {/* INTERNAL SCORE % */}

            {dimensionsOrder.map(
              (name, index) => {
                const score =
                  scoreMap[name] ??
                  0;

                const scoreRadius =
                  (RADIUS * score) /
                  100;

                const labelRadius =
                  Math.max(
                    scoreRadius - 10,
                    8
                  );

                const [x, y] =
                  getPoint(
                    index,
                    labelRadius
                  );

                return (
                 <SvgText
  key={`score-${name}`}
  x={x}
  y={y}
  fill="#263746"
  fontSize={10}
  fontWeight="700"
  textAnchor="middle"
  alignmentBaseline="middle"
>
  {score}%
</SvgText>
                );
              }
            )}

            {/* CENTER POINT */}

            <Circle
              cx={CENTER}
              cy={CENTER}
              r={4}
              fill="#16A6DF"
              stroke="#FFFFFF"
              strokeWidth={2}
            />
          </Svg>
        </View>

        {/* DIMENSION LABELS */}

        {dimensionsOrder.map(
          (name, index) => {
            const [x, y] =
              getPoint(
                index,
                RADIUS + 25
              );

            const angle =
              -Math.PI / 2 +
              (index * 2 * Math.PI) /
                7;

            let anchor:
              | "left"
              | "center"
              | "right" =
              "center";

            if (
              Math.cos(angle) >
              0.25
            ) {
              anchor = "right";
            } else if (
              Math.cos(angle) <
              -0.25
            ) {
              anchor = "right";
            }

            return (
              <Text
                key={name}
                style={{
                  position:
                    "absolute",

                  /*
                   * SVG 30px left + label
                   * position
                   */
                  left:
                    30 +
                    x -
                    (anchor ===
                    "center"
                      ? 0
                      : anchor ===
                        "right"
                      ? 80
                      : 0),

                  top:
                    25 +
                    y -
                    8,

                  width:
                    anchor ===
                    "center"
                      ? 70
                      : 110,

                  textAlign:
                    anchor ===
                    "center"
                      ? "center"
                      : anchor ===
                        "right"
                      ? "right"
                      : "left",

                  fontSize: 11,
                  fontWeight:
                    "700",
                  color:
                    "#34404B",

                  zIndex: 999,
                  elevation: 999,
                }}
                numberOfLines={1}
              >
                {name}
              </Text>
            );
          }
        )}
      </View>
    </View>
  );
}