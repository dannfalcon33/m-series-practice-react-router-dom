import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Page } from "./pages/Page";
import { Home } from "./components/Home";
import { PAGES_DATA } from "./constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Page content={PAGES_DATA.about} />} />
          <Route path="team" element={<Page content={PAGES_DATA.team} />} />
          <Route
            path="productions"
            element={<Page content={PAGES_DATA.productions} />}
          />
          <Route path="plans" element={<Page content={PAGES_DATA.plans} />} />
          <Route path="watch" element={<Page content={PAGES_DATA.watch} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
