import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { getUserOwnFunc, getUserOwnMenu } from "../../services/login";
import { api } from "../../services/api.service";
import "./index.less";
import { Menu } from "../components/Menu";
import { LHeader } from "../components/Header";
import { LFooter } from "../components/Footer";

export const BaseLayout: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [MenuData, setMenuData] = useState([]);

  useEffect(() => {
    console.log("base layout");
    // getOwnData();
  }, []);

  const getOwnData = () => {
    // getUserOwnFunc().then((res: any) => {
    //   console.log(res, "res");
    // });
    // getUserOwnMenu().then((res: any) => {
    //   console.log(res, "res");
    //   setMenuData(res.Data);
    // });
  };

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <div className="base-layout">
      <div className="base-header">
        <LHeader></LHeader>
      </div>
      <div className="base-main">
        <div className="base-sidebar">
          <Menu></Menu>
        </div>
        <div className="base-content">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="base-footer">
        <LFooter></LFooter>
      </div>
    </div>
  );
};
