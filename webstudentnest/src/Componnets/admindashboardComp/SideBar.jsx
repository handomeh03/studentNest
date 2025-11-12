import { XMarkIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react';
import { Link } from 'react-router-dom';
export default function SideBar({ sidebarOpen, setSidebarOpen, navigation,handleChangeNavigation }){
  
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
    return(
        <>
         {/* Mobile Sidebar */}
      <Dialog  open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div  className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div  className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                  </button>
                </div>
              </TransitionChild>

              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div style={{background:"#3f51b5"}} className="relative flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4 dark:bg-indigo-800 dark:ring-1 dark:ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="/logo.png"
                    className="h-16 w-auto"
                  />
                  <p className='text-white'>student Nest</p>
                </div>
                <nav className="flex flex-1 flex-col">
                  
                  {/* menu  */}
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item,index) => (
                          <li onClick={()=>{
                            handleChangeNavigation(index)
                          }} key={item.name}>
                            <Link
                              to={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-indigo-700 text-white dark:bg-indigo-950/25'
                                  : 'text-indigo-200 hover:bg-indigo-700 hover:text-white dark:text-indigo-100 dark:hover:bg-indigo-950/25',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current
                                    ? 'text-white'
                                    : 'text-indigo-200 group-hover:text-white dark:text-indigo-100',
                                  'size-6 shrink-0',
                                )}
                              />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                   

                   {/* for setting */}
                    <li className="mt-auto">
                      <Link
                        to={"/seeting"}
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white dark:text-indigo-100 dark:hover:bg-indigo-950/25"
                      >
                        <Cog6ToothIcon
                          aria-hidden="true"
                          className="size-6 shrink-0 text-indigo-200 group-hover:text-white dark:text-indigo-100"
                        />
                        Settings
                      </Link>
                    </li>


                  </ul>


                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        

      {/* Desktop Sidebar */}
       <div   className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div style={{background:"#3f51b5"}} className="relative flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4 dark:bg-indigo-800 dark:after:pointer-events-none dark:after:absolute dark:after:inset-y-0 dark:after:right-0 dark:after:w-px dark:after:bg-white/10">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="./logo.png"
                className="h-16 w-auto"
              />
              <p className='text-white'>student Nest</p>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">

                {/* menu */}
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item,index) => (
                      <li onClick={()=>{
                        handleChangeNavigation(index)
                      }} key={item.name}>
                        <Link
                          to={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-indigo-700 text-white dark:bg-indigo-950/25'
                              : 'text-indigo-200 hover:bg-indigo-700 hover:text-white dark:text-indigo-100 dark:hover:bg-indigo-950/25',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current
                                ? 'text-white'
                                : 'text-indigo-200 group-hover:text-white dark:text-indigo-100',
                              'size-6 shrink-0',
                            )}
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                

                {/*setting icon */}
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white dark:text-indigo-100 dark:hover:bg-indigo-950/25"
                  >
                    <Cog6ToothIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-indigo-200 group-hover:text-white dark:text-indigo-100"
                    />
                    Settings
                  </a>
                </li>





              </ul>
            </nav>
          </div>
        </div>


        </>
    );
}