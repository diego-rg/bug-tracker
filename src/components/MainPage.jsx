import DesktopSidebar from "./DesktopSidebar";
import MobileNabvar from "./MobileNavbar";
import MobileSidebar from "./MobileSidebar";

const MainPage = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <DesktopSidebar />
      <MobileSidebar />
      <MobileNabvar />
    </div>
  );
};

export default MainPage;
