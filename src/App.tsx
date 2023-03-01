import * as Page from "./Page";
import { Routes, Route } from "react-router-dom";
import "./Style/main.scss";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Page.Home />}>
        <Route path="/staff" element={<Page.Staff.List />} />
      </Route>
    </Routes>
  );
};

export default App;
