import React from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="h-screen grid grid-cols-12">
      {/* Sidebar */}
      <aside className="col-span-2 bg-gray-800 text-white flex flex-col justify-between p-4">
        <div>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className={`block px-4 py-2 rounded ${
                    location.pathname === "/"
                      ? "bg-blue-500"
                      : "hover:bg-blue-500"
                  }`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/medications"
                  className={`block px-4 py-2 rounded ${
                    location.pathname === "/medications"
                      ? "bg-blue-500"
                      : "hover:bg-blue-500"
                  }`}
                >
                  Medications List
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button className="w-full py-2 bg-blue-700 hover:bg-blue-500 rounded">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="col-span-10 bg-gray-100 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;
