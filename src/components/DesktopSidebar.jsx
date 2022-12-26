import SidebarMenu from "./SidebarMenu";

const DesktopSidebar = (props) => {
  return (
    <nav className="sticky inset-y-0 left-0 h-screen shadow-md z-10 hidden w-44 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
      <SidebarMenu setShowCreateBug={props.setShowCreateBug} />
    </nav>
  );
};

export default DesktopSidebar;
