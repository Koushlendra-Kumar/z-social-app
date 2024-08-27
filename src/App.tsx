import Feed from "./components/Feed";
import SideNav from "./components/SideNav";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="flex max-w-full justify-center bg-slate-50 text-slate-900">
      <div className="no-scrollbar viewport-h h-[100svh] min-w-16 overflow-scroll border-r border-gray-300 md:block lg:ml-5 lg:min-w-64">
        <SideNav />
      </div>
      <div className="no-scrollbar viewport-h h-[100svh] grow overflow-scroll border-r border-gray-300 lg:max-w-2xl">
        <Feed />
      </div>
      <div className="hidden min-h-screen border-gray-300 md:block md:min-w-52 lg:min-w-80">
        <Widgets />
      </div>
    </div>
  );
}

export default App;
