import { Bell, Search } from "lucide-react";

const Topbar = () => {
  return (
   <div className="h-16 fixed top-0 left-0 right-0 z-50 flex items-center justify-between rounded-md px-6 bg-[#1E1B4B]
                   bg-[radial-gradient(circle_at_center,_#4338CA_0%,_#1E1B4B_0%)]">
      <div className="flex items-center gap-3 text-white font-semibold">
        <span className="text-lg">Workspace</span>
        <select className="bg-white/15 text-white text-xs px-4 py-1  rounded-full  outline-none cursor-pointer">
          <option className="text-black">Workspace 1</option>
          <option className="text-black">Workspace 2</option>
        </select>
      </div>
      <div className="flex items-center bg-[#423c7a] px-4 py-2 rounded-md w-[420px] backdrop-blur">
        <Search size={16} className="text-white mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm text-white placeholder-gray-300 w-full"
        />
        <span className="text-xs text-gray-300 ml-2">⌘K</span>
      </div>
      <div className="flex items-center gap-4">
        <Bell size={18} className="text-white" />
        <div className="w-8 h-8 rounded-full bg-white text-indigo-600 flex items-center justify-center text-sm font-bold">
          GK
        </div>
      </div>
    </div>
  );
};
export default Topbar;