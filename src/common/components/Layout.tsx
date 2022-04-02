import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { css } from "@emotion/react";
import { Dashboard, Logout, Menu, People } from "@mui/icons-material";
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
  color: #fff;
`;

const childContainerStyle = css`
  padding: 1rem;
`;

const navGroupStyles = css`
  flex-grow: 1;
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
      <Drawer variant="permanent" open={false} sx={{ width: "57px" }}>
        <List>
          <NavLink to="/">
            <Tooltip title="Dashboard" placement="right">
              <ListItem button>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
              </ListItem>
            </Tooltip>
          </NavLink>
          <NavLink to="/Characters">
            <Tooltip title="Characters" placement="right">
              <ListItem button>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
              </ListItem>
            </Tooltip>
          </NavLink>
          <Divider />
          <Tooltip title="Log Out" placement="right">
            <ListItem button onClick={() => setActiveUserId(null)}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
            </ListItem>
          </Tooltip>
        </List>
      </Drawer>
      <div css={childContainerStyle}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
