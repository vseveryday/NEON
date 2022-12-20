import { Outlet } from "react-router-dom";
import { Header } from "../../../../paut_ldap/src/components/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
