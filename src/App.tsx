import React from "react";
import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { Login } from "./pages/Login";
import { Welcome } from "./pages/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}></Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
