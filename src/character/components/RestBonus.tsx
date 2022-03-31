import { css } from "@emotion/react";
import { useTheme } from "@mui/system";

const lineSegmentStyle = css`
  background-color: #2c2b31;
  height: 5px;
  flex-grow: 1;
  border-radius: 2px;
`;

const activeStyle = css`
  background-color: #16ff3d;
`;

type BonusLineSegmentProps = {
  active?: boolean;
};
const BonusLineSegment = ({ active = false }: BonusLineSegmentProps) => (
  <div css={[lineSegmentStyle, active && activeStyle]}></div>
);

type RestBonusProps = {
  title: string;
  bonus: number;
};

const containerStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const segmentContainerStyle = css`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const RestBonus = ({ title, bonus }: RestBonusProps) => {
  const theme = useTheme();
  return (
    <div css={containerStyle}>
      <div css={{ color: theme.palette.text.secondary, fontSize: ".9rem" }}>
        {title}
      </div>
      <div css={segmentContainerStyle}>
        {Array.from({ length: bonus }).map((x, i) => (
          <BonusLineSegment key={i} active />
        ))}
        {Array.from({ length: 5 - bonus }).map((x, i) => (
          <BonusLineSegment key={i} />
        ))}
      </div>
    </div>
  );
};

export default RestBonus;
