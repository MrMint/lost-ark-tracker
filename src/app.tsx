import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { isNil } from "ramda";
import { HashRouter, Route, Routes } from "react-router-dom";
import UserSelect from "./user/components/UserSelect";
import Layout from "./common/components/Layout";
import { ThemeProvider, createTheme, Box } from "@mui/material";
import { SxProps } from "@mui/system";
import Dashboard from "./common/components/Dashboard";
import Authenticated from "./common/components/Authenticated";
import Characters from "./character/components/Characters";
import CharacterOverview from "./character/components/CharacterOverview";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "A",
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: "#2c2b31",
    },
  },
});

const boxStyles = {
  height: "100%",
  display: "flex",
  bgcolor: theme.palette.background.default,
} as SxProps;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={boxStyles}>
          <RecoilRoot>
            <HashRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Authenticated>
                      <Layout />
                    </Authenticated>
                  }
                >
                  <Route index element={<Dashboard />} />
                  <Route path="characters" element={<Characters />} />
                  <Route
                    path="characters/:id"
                    element={<CharacterOverview />}
                  />
                </Route>
                <Route path="/login" element={<UserSelect />} />
              </Routes>
            </HashRouter>
          </RecoilRoot>
        </Box>
      </ThemeProvider>
    </>
  );
}

const container = document.getElementById("root");
if (isNil(container)) throw Error("Could not find root");
const root = createRoot(container);
root.render(<App />);
