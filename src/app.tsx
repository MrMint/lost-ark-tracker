import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import { HashRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import UserSelect from "./user/components/UserSelect";
import Layout from "./common/components/Layout";

function App() {
  return (
    <>
      <CssBaseline />
      <RecoilRoot>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<UserSelect />} />
            </Route>
          </Routes>
        </HashRouter>
      </RecoilRoot>
    </>
  );
}

render(<App />, document.body);
