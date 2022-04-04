import { css } from "@emotion/react";
import { useTheme } from "@mui/system";

const lineSegmentStyle = css`
  background-color: #2c2b31;
  height: 5px;
  flex-grow: 1;
  border-radius: 2px;
  display: flex;
  justify-content: flex-end;
`;

const activeStyle = css`
  background-color: #16ff3d;
`;

const halfStyle = css`
  background-color: #2c2b31;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  width: 51%;
  height: 100%;
  margin-right: -2px;
`;

type BonusLineSegmentProps = {
  active?: boolean;
  half?: boolean;
};
const BonusLineSegment = ({
  active = false,
  half = false,
}: BonusLineSegmentProps) => (
  <div css={[lineSegmentStyle, (active || half) && activeStyle]}>
    {half && <div css={halfStyle}></div>}
  </div>
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
  const overflow = bonus % 20;
  const segmentCount = (bonus - overflow) / 20;
  const hasHalf = overflow !== 0;
  return (
    <div css={containerStyle}>
      <div css={{ color: theme.palette.text.secondary, fontSize: ".9rem" }}>
        {title}
      </div>
      <div css={segmentContainerStyle}>
        {Array.from({ length: 5 }).map((x, i) => (
          <BonusLineSegment
            key={i}
            active={i < segmentCount}
            half={hasHalf && i === segmentCount}
          />
        ))}
      </div>
    </div>
  );
};

export default RestBonus;
