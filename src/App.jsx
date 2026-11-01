import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import ListPage from "@/pages/ListPage";
import WritePage from "@/pages/WritePage";
import StatsPage from "@/pages/StatsPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ListPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
