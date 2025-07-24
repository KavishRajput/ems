import { LayoutDashboard, Users, UserRoundPlus } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  const links = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard /> },
    { name: "Employees", path: "/employee", icon: <Users /> },
    { name: "Add Employees", path: "/add_employee", icon: <UserRoundPlus /> },
  ];

  return (
    <>
    <div className="w-60 h-screen bg-gray-900 text-white p-6 sticky top-0">
      <h1 className="text-4xl font-bold mb-4">EMS</h1>
      <hr className="border-gray-700 mb-4" />
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index} className="text-xl">
            <NavLink
             to={link.path} className={({ isActive }) => `flex items-center gap-3 p-2 rounded hover:bg-gray-700 ${ isActive ? 'bg-gray-700' : ''}`}>{link.icon}{link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
        </>
  );
};
