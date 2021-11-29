import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api.service";
import { getToken } from "../../services/login";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("BaseLayout");
    login();
  });
  const login = () => {
    getToken({
      grant_type: "password",
      username: "pngsolid",
      password: "Solid@777",
    }).then((res: any) => {
      api.token = res.access_token;
      // navigate("/");
      console.log("res", res);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};
