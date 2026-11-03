import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";


import Login from "./pages/Login";
import Main from "./pages/main";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
);
