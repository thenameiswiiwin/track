import Image from "next/image";
import SidebarNav from "./SidebarNav";
import SidebarPlaylists from "./SidebarPlaylists";

const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-96px)] w-full bg-black px-1 text-gray-400">
      <div className="h-full overflow-hidden py-5 px-2">
        <div className="mb-7 flex items-center px-3">
          <Image src="/logo.svg" height={30} width={60} alt="track logo" />
          <h1 className="ml-3 font-mono text-3xl font-bold italic text-green-500">
            Track
          </h1>
        </div>
        <SidebarNav />
        <div className="m-2 bg-gray-800 py-[1px]" />
        <SidebarPlaylists />
      </div>
    </div>
  );
};

export default Sidebar;
