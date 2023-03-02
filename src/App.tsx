import React from "react";
import * as Components from "./Components";
import * as Page from "./Page";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <Route path="/staff/edit" element={<Page.Staff.Edit />} />
      </Routes>

      <ToastContainer />
    </React.Fragment>
  );
};

export default App;
