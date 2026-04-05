import { NavLink } from "react-router-dom";
import { sidebarOptions } from "./SidebarOptions";

const Sidebar = () => {
  return (
    <div className="w-64 h-[calc(100vh-64px)]  mt-16 bg-gray-100 border-r p-4 flex flex-col">
      
      <div className="flex-1 overflow-y-auto space-y-6 scrollbar-hide">
        {sidebarOptions.map((section, i) => (
          <div key={i}>
            
            <p className="text-xs text-gray-400 font-semibold mb-2">
              {section.section}
            </p>

            <div className="space-y-1">
              {section.items.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={idx}
                    to={item.route}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded text-sm transition ${
                        isActive
                          ? "bg-indigo-100 text-primary font-medium"
                          : "text-gray-700 hover:bg-gray-200"
                      }`
                    }
                  >
                    <Icon size={18} />
                    {item.label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;