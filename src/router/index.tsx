import { Route, RouteProps, Routes } from "react-router-dom";
import { BaseLayout } from "../layouts/BaseLayout";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { Products } from "../pages/Products";
import { Licencees } from "../pages/Licencees";
import { Downloads } from "../pages/Downloads";
import { Support } from "../pages/Support";

const layoutRoute: any = [
  { path: "/Dashboard", element: Dashboard },
  { path: "/Products", element: Products },
  { path: "/Licencees", element: Licencees },
  { path: "/Downloads", element: Downloads },
  { path: "/Support", element: Support },
];

export const LXRoute: React.FC = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<BaseLayout />}>
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        {layoutRoute.map((el: any) => (
          <Route path={el.path} element={<el.element />} key={el.path} />
        ))}
      </Route>
      <Route path="/Login" element={<Login />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};
