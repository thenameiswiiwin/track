import Sidebar from './Sidebar';

const PlayerLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <div className="absolute top-0 left-0 w-64">
        <Sidebar />
      </div>
      <div className="ml-64 mb-24">{children}</div>
      <div className="absolute left-0 bottom-0">player</div>
    </div>
  );
};

export default PlayerLayout;
