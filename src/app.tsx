import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { isNil } from "ramda";
import { HashRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import UserSelect from "./user/components/UserSelect";
import Layout from "./common/components/Layout";
import { ThemeProvider, createTheme, Box } from "@mui/material";
import { SxProps } from "@mui/system";
import Dashboard from "./common/components/Dashboard";
import Authenticated from "./common/components/Authenticated";
import Characters from "./character/components/Characters";

const theme = createTheme({
  typography: {
    fontFamily: "A",
  },
  palette: {
    mode: "dark",
  },
});

const boxStyles = {
  height: "100%",
  fontFamily: "A",
  display: "flex",
  bgcolor: "#2c2b31",
} as SxProps;

function App() {
  return (
    <>
      <CssBaseline />
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
                  {/* <Route path="/characters/{id}" element={<Dashboard />} /> */}
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
