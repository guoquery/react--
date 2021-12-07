import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { api } from "./services/api.service";
import { LXRoute } from "./router";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // if (!api.token || api.token === "") {
    //   navigate("/Login");
    // } else {
    // }
  }, [navigate]);
  return <LXRoute></LXRoute>;
}

export default App;
