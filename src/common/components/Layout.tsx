import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Theme,
  Tooltip,
  useTheme,
} from "@mui/material";
import { css } from "@emotion/react";
import { Dashboard, Logout, People } from "@mui/icons-material";
import {
  Link,
  LinkProps,
  Outlet,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeUser, activeUserId } from "../../user/atoms";

const containerStyle = css`
  display: flex;
  flex-grow: 1;
  color: #fff;
`;

const childContainerStyle = css`
  padding: 1rem;
`;

const navBarStyle = (theme: Theme) => css`
  display: flex;
  width: 57px;
  overflow: hidden;
  background-color: ${theme.palette.background.paper};
`;

const NavLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const theme = useTheme();
  return (
    <div>
      <Link
        style={{
          color: match
            ? theme.palette.text.primary
            : theme.palette.text.secondary,
        }}
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
  const theme = useTheme();
  return (
    <div css={containerStyle}>
      <div css={navBarStyle(theme)}>
        <List sx={{ width: "57px" }}>
          <NavLink to="/">
            <Tooltip title="Dashboard" placement="right">
              <ListItem button>
                <ListItemIcon sx={{ color: "inherit" }}>
                  <Dashboard />
                </ListItemIcon>
              </ListItem>
            </Tooltip>
          </NavLink>
          <NavLink to="/Characters">
            <Tooltip title="Characters" placement="right">
              <ListItem button>
                <ListItemIcon sx={{ color: "inherit" }}>
                  <People />
                </ListItemIcon>
              </ListItem>
            </Tooltip>
          </NavLink>
          <Divider />
          <Tooltip title="Log Out" placement="right">
            <ListItem button onClick={() => setActiveUserId(null)}>
              <ListItemIcon sx={{ color: "inherit" }}>
                <Logout />
              </ListItemIcon>
            </ListItem>
          </Tooltip>
        </List>
      </div>
      <div css={childContainerStyle}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
