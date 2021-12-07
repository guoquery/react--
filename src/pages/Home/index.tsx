import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../../services/api.service";
export const Home: React.FC = () => {
  if (!api.token) {
    return <Navigate to="/Login"></Navigate>;
  }
  return <div className="home">home</div>;
};
