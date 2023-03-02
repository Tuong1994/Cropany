import React from "react";
import * as Components from "./Components";
import * as Page from "./Page";
import { Routes, Route } from "react-router-dom";
import "./Style/main.scss";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <Components.Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <Routes>
        <Route path="/" element={<Page.Home isOpen={isOpen} />}>
          <Route path="/staff" element={<Page.Staff.List />} />
        </Route>
        <Route path="/staff/add" element={<Page.Staff.Add />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
