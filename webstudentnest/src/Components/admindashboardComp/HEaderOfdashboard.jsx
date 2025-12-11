import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext/UserContext";

export default function HeaderOfdashboard({ setSidebarOpen }) {
  let {user,userDispatch}=useUserContext();
  let navigate=useNavigate();


const userNavigation = [
      { name: 'Your profile', href: 'setting' },
      { name: 'Sign out', href: '/userlogin' },
    ]

  return (
    <div className="lg:pl-72">
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        {/* menu button */}
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 lg:hidden dark:text-gray-400 dark:hover:text-white"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6 text-blue-700" />
        </button>

        {/* Dashboard title */}
        <h1 className="flex-1 text-xl font-semibold text-gray-900 ">
          Dashboard
        </h1>

        {/* User menu */}
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <Menu as="div" className="relative">
            {/*photo */}
            <MenuButton className="relative flex items-center">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-12 w-12 rounded-full bg-gray-50 outline outline-1 -outline-offset-1 outline-black/5 dark:bg-gray-800 dark:outline-white/10"
              />
              <span className="hidden lg:flex lg:items-center">
                <span
                  aria-hidden="true"
                  className="ml-4 text-sm/6 font-semibold text-zinc-800 "
                >
                  {user?.name || "User"}
                </span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 text-gray-400 dark:text-gray-500"
                />
              </span>
            </MenuButton>


             {/* when you click on photo */}
            <MenuItems
              style={{ background: "#3f51b5" }}
              className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg outline outline-1 outline-gray-900/5 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
            >
              {userNavigation.map((item) => (
                <MenuItem key={item.name}>
                  <button
                    onClick={() => {
                      if (item.name === "Sign out") {
                        sessionStorage.removeItem("token");
                        sessionStorage.removeItem("user");
                        sessionStorage.removeItem("email");
                        userDispatch({ type: "CLEAR_USER"});
                      }
                      navigate(item.href);
                    }}
                    className="block px-3 py-1 text-sm/6 text-white data-[focus]:bg-blue-800  m-1 rounded-2xl data-[focus]:outline-none "
                  >
                    {item.name}
                  </button>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
}
