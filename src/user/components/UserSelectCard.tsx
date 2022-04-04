import { Avatar, Paper } from "@mui/material";
import { css } from "@emotion/react";
import { User } from "../types";
import { useSetRecoilState } from "recoil";
import { activeUserId } from "../atoms";

const cardStyle = css`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 150px;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

const nameStyle = css`
  font-size: 2rem;
  margin-top: 1rem;
  font-weight: 300;
`;

type UserSelectProps = {
  user: User;
};

const UserSelectCard = ({ user }: UserSelectProps) => {
  const setActiveUserId = useSetRecoilState(activeUserId);
  const handleClick = (userId: string) => {
    setActiveUserId(userId);
  };
  return (
    <Paper key={user.id} css={cardStyle} onClick={() => handleClick(user.id)}>
      <Avatar
        alt={user.name}
        src={`https://robohash.org/${user.id}.png?set=set1&size=300x300`}
        sx={{ height: "100px", width: "100px", bgcolor: "#CAC4CE" }}
      />
      <div css={nameStyle}>{user.name}</div>
    </Paper>
  );
};

export default UserSelectCard;
