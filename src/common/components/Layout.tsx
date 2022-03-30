import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { Dashboard, Menu, People } from "@mui/icons-material";
import {
  Link,
  LinkProps,
  Outlet,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeUser, activeUserId } from "../../user/atoms";
import { regionDisplayName } from "../../user/utility";
import { isNil } from "ramda";

const containerStyle = css`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: #fff;
`;

const childContainerStyle = css`
  padding: 1rem;
`;

const NavLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

const Layout = () => {
  const [userId, setActiveUserId] = useRecoilState(activeUserId);
  const user = useRecoilValue(activeUser);
  return (
    <div css={containerStyle}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <NavLink to="/">
            <Dashboard />
          </NavLink>
          <NavLink to="/Characters">
            <People />
          </NavLink>
          <Button onClick={() => setActiveUserId(null)}>Logout</Button>
        </Toolbar>
      </AppBar>
      <div css={childContainerStyle}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
