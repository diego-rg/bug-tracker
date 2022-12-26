import SidebarMenu from "./SidebarMenu";

const MobileSidebar = (props) => {
  if (props.openMenu && window.innerWidth < 768) {
    return (
      <nav className="fixed inset-y-0 shadow-md z-20 flex-shrink-0 w-40 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden">
        <SidebarMenu />
      </nav>
    );
  }
};

export default MobileSidebar;
