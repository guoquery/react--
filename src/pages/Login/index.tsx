import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api.service";
import { getToken } from "../../services/login";
import { CButton, CForm, CFormLabel, CFormInput } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cibFacebook, cibGoogle, cibMicrosoft, cibGithub } from "@coreui/icons";
import "./index.less";
import { LInput } from "../../components/LInput";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [submitDisable, setSubmitDisable] = useState(false);
  useEffect(() => {
    // console.log("login");
    setSubmitDisable(!Object.values(formData).every((el: any) => el));
    // login();
  }, [formData]);

  const login = () => {
    if (submitDisable) {
      return;
    }
    getToken(formData).then((res: any) => {
      if (res.result === 1) {
        api.token = "res.access_token";
        navigate("/Dashboard");
      }
    });
  };
  const onInputChange = (e: { target: { value: string } } | undefined, name: string) => {
    if (e) {
      setFormData({ ...formData, ...{ [name]: e.target.value } });
    }
  };
  return (
    <div className="lx-login lx-page">
      <div className="logo">
        <img src="assets/img/logo.png" alt="" />
      </div>
      <div className="lx-login-title  tal">
        <span className="bold7 title">LX</span>&nbsp;Product Portal
      </div>
      <div className="lx-login-content">
        <div className="login-content">
          <div className="title">Login</div>
          <div className="form">
            <CForm className="row g-3">
              <LInput
                type="text"
                label="UserName"
                onChange={(e) => onInputChange(e, "userNameOrEmailAddress")}
              ></LInput>
              <LInput type="password" label="Password" onChange={(e) => onInputChange(e, "password")}></LInput>
              <div className="submit g-3">
                <div className="forgot">Forgot password ?</div>
                <div className="login">
                  <CButton color="secondary" onClick={login} disabled={submitDisable}>
                    Login
                  </CButton>
                </div>
              </div>
            </CForm>
          </div>
          <div className="bottom">
            <div className="others">Alternatively login with</div>
            <div className="icons">
              <CIcon icon={cibFacebook} size="xxl" />
              <CIcon icon={cibGoogle} size="xxl" />
              <CIcon icon={cibMicrosoft} size="xxl" />
              <CIcon icon={cibGithub} size="xxl" />
            </div>
          </div>
        </div>
        <div className="signUp-content">
          <div className="signUp-title title">Sign Up</div>
          <div className="tips">
            <p>
              The company provides Internet technical services and network services, including domain name registration
              and website hosting services, to its member users. For the description of the relevant services provided
              by the company, please refer to the introduction of related products and services on this website.
            </p>
          </div>
          <div className="bottom">
            <CButton color="secondary">Request Account</CButton>
          </div>
        </div>
      </div>
    </div>
  );
};
