import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/dashboard/Sidebar";
import Topbar from "../components/layout/dashboard/Topbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Topbar />

        <main className="flex-1 bg-gray-100 p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;