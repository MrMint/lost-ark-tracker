import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";
import { activeUserId, usersState } from "../atoms";
import CreateUser from "./CreateUser";
import UserSelectCard from "./UserSelectCard";
import { isNil } from "ramda";
import { LoginState } from "../../common/types";
import { useEffect } from "react";

const UserSelect = () => {
  const users = useRecoilValue(usersState);
  const userId = useRecoilValue(activeUserId);
  const navigate = useNavigate();
  const location = useLocation() as { state: LoginState };

  useEffect(() => {
    if (!isNil(userId)) {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  }, [userId]);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        spacing={3}
        sx={{ padding: "1rem" }}
      >
        {users.map((user) => (
          <Grid key={user.id} item>
            <UserSelectCard user={user} />
          </Grid>
        ))}
        <Grid key="CreateUser" item>
          <CreateUser />
        </Grid>
      </Grid>
    </>
  );
};

export default UserSelect;
