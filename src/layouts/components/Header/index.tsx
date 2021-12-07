import { cilExitToApp, cilGroup, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import React from "react";
import "./index.less";
interface PropsType {
  name?: any;
}
export const LHeader: React.FC<PropsType> = (props) => {
  return (
    <div className="LHeader">
      <div className="portal">
        <div className="logo">
          <img src="assets/img/logo.png" alt="" />
        </div>
        <div className="lx-title  tal">
          <span className="bold7 title">LX</span>&nbsp;Product Portal
        </div>
      </div>
      <div className="user">
        <div className="icons">
          <CIcon icon={cilGroup} size="xxl" />
          <CIcon icon={cilUser} size="xxl" />
          <CIcon icon={cilExitToApp} size="xxl" />
        </div>
      </div>
    </div>
  );
};
