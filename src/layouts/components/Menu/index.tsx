import React, { useState } from "react";
// import "./index.less";
import {
  CBadge,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";

interface PropsType {
  Menu?: any[];
}
const MenuConfig = [
  {
    label: "Dashboard",
    name: "Dashboard",
    icon: undefined,
    children: undefined,
    route: "/Dashboard",
  },
  {
    label: "Products",
    name: "Products",
    icon: undefined,
    children: undefined,
    route: "/Products",
  },
  {
    label: "Licencees",
    name: "Licencees",
    icon: undefined,
    children: undefined,
    route: "/Licencees",
  },
  {
    label: "Downloads",
    name: "Downloads",
    icon: undefined,
    children: undefined,
    route: "/Downloads",
  },
  {
    label: "Support",
    name: "Support",
    icon: undefined,
    children: undefined,
    route: "/Support",
  },
  {
    label: "Administration",
    name: "Administration",
    icon: undefined,
    route: "/Administration",
    children: [
      { label: "Manage customers", name: "customers", icon: undefined, route: "/Administration/customer" },
      { label: "Manage licencees", name: "licencees", icon: undefined, route: "/Administration/licencees" },
      { label: "Manage products", name: "products", icon: undefined, route: "/Administration/products" },
    ],
  },
];
export const Menu: React.FC<PropsType> = (props) => {
  const [MenuData, setMenuData] = useState(MenuConfig);
  return (
    <CSidebar>
      {/* <CSidebarBrand>Sidebar Brand</CSidebarBrand> */}
      <CSidebarNav>
        {MenuData.map((el: any) => (
          <CNavItem href={"#" + el.route} key={el.name}>
            {el.label}
          </CNavItem>
        ))}
        {/* <CNavItem href="#">Nav item</CNavItem> */}
        {/* <CNavTitle>Nav Title</CNavTitle>

        <CNavItem href="#">


          With badge
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavItem> */}
        {/* <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> */}
        {/* <CNavGroup toggler="Nav dropdown">
          <CNavItem href="#">Nav dropdown item</CNavItem>
          <CNavItem href="#">Nav dropdown item</CNavItem>
        </CNavGroup> */}
      </CSidebarNav>
      {/* <CSidebarToggler /> */}
    </CSidebar>
  );
};
