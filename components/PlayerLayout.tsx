import Sidebar from "./Sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <div className="absolute top-0 left-0 w-60">
        <Sidebar />
      </div>
      <div className="ml-60 mb-24">
        <div className="h-[calc(100vh-96px)]">{children}</div>
      </div>
      <div className="absolute left-0 bottom-0">player</div>
    </div>
  );
};

export default PlayerLayout;
