import Image from "next/image";
import NavbarMenu from "./_navbar-menu";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
            width={30}
            height={30}
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Treasury Hub
          </span>
        </a>

        <NavbarMenu />
      </div>
    </nav>
  );
};

export default Navbar;
