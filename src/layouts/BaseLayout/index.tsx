import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { getUserOwnFunc, getUserOwnMenu } from "../../services/login";
import { api } from "../../services/api.service";

export const BaseLayout: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [MenuData, setMenuData] = useState([]);
  useEffect(() => {
    if (!api.token || api.token === "") {
      // navigate("/login");
    } else {
      getOwnData();
    }
  }, [navigate]);
  useEffect(() => {
    getOwnData();
  }, []);

  const getOwnData = () => {
    // getUserOwnFunc().then((res: any) => {
    //   console.log(res, "res");
    // });
    getUserOwnMenu().then((res: any) => {
      console.log(res, "res");
      setMenuData(res.Data);
    });
  };

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return <div>base layout</div>;
};
