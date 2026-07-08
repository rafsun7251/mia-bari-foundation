import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Members", path: "/dashboard/members" },
    { name: "Committees", path: "/dashboard/committees" },
    { name: "Events", path: "/dashboard/events" },
    { name: "Notices", path: "/dashboard/notices" },
    { name: "Gallery", path: "/dashboard/gallery" },
    { name: "Donations", path: "/dashboard/donations" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <aside className="w-64 bg-[#0B6E4F] text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-8">
        Mia Bari Foundation
      </h1>

      <nav className="space-y-2">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-white text-[#0B6E4F]"
                  : "hover:bg-white/10"
              }`
            }
          >
            {menu.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;