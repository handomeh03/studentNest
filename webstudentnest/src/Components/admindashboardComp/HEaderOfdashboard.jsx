import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext/UserContext";

export default function HeaderOfdashboard({ setSidebarOpen }) {
  let { user, userDispatch } = useUserContext();
  let navigate = useNavigate();

  const userNavigation = [
    { name: 'Your profile', href: 'setting' },
    { name: 'Sign out', href: '/userlogin' },
  ];

  return (
    <div className="lg:pl-72">
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-100 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 p-2.5 text-gray-500 hover:text-[#3f51b5] lg:hidden transition-colors"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>

        {/* Dashboard Title */}
        <h1 className="flex-1 text-lg font-bold text-gray-800 tracking-tight">
          Dashboard 
        </h1>

        {/* User menu */}
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <Menu as="div" className="relative">
            <MenuButton className="relative flex items-center p-1 rounded-full hover:bg-gray-50 transition-all">
              <span className="sr-only">Open user menu</span>
              <img
                alt={user?.user?.name}
                src="https://static.vecteezy.com/system/resources/previews/011/490/381/original/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg"
                className="h-10 w-10 rounded-full object-cover border-2 border-white ring-2 ring-[#3f51b5]/10 shadow-sm"
              />
              <span className="hidden lg:flex lg:items-center">
                <span className="ml-3 text-sm font-bold text-gray-700">
                  {user?.user?.name || "User"}
                </span>
                <ChevronDownIcon className="ml-1.5 h-4 w-4 text-gray-400" aria-hidden="true" />
              </span>
            </MenuButton>

            {/* Dropdown Menu */}
            <MenuItems
              className="absolute right-0 z-10 mt-2.5 w-44 origin-top-right rounded-xl bg-[#3f51b5] p-1.5 shadow-xl ring-1 ring-black/5 focus:outline-none"
            >
              <div className="py-1">
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    {({ focus }) => (
                      <button
                        onClick={() => {
                          if (item.name === "Sign out") {
                            sessionStorage.clear(); 
                            userDispatch({ type: "CLEAR_USER" });
                          }
                          navigate(item.href);
                        }}
                        className={`
                          w-full text-left block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors
                          ${focus ? 'bg-white/20 text-white' : 'text-indigo-50'}
                        `}
                      >
                        {item.name}
                      </button>
                    )}
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
}