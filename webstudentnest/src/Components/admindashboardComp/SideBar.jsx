import { XMarkIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react';
import { Link } from 'react-router-dom';

export default function SideBar({ sidebarOpen, setSidebarOpen, navigation, handleChangeNavigation }) {
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <>
      {/* Mobile Sidebar */}
      <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>

            {/* Sidebar Content (Mobile) */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#3f51b5] px-6 pb-4 ring-1 ring-white/10">
              <div className="flex h-16 shrink-0 items-center border-b border-white/10">
                <p className='text-white m-auto font-bold tracking-wider uppercase text-sm'>student Nest</p>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item, index) => (
                        <li key={item.name} onClick={() => handleChangeNavigation(index)}>
                          <Link
                            to={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-white/20 text-white'
                                : 'text-indigo-100 hover:bg-white/10 hover:text-white',
                              'group flex gap-x-3 rounded-lg p-2.5 text-sm font-semibold leading-6 transition-all'
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className={classNames(
                                item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                                'size-6 shrink-0'
                              )}
                            />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="mt-auto" onClick={() => handleChangeNavigation(10)}>
                    <Link
                      to="setting"
                      className="group -mx-2 flex gap-x-3 rounded-lg p-2.5 text-sm font-semibold leading-6 text-indigo-100 hover:bg-white/10 hover:text-white transition-all"
                    >
                      <Cog6ToothIcon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-indigo-200 group-hover:text-white"
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
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#3f51b5] px-6 pb-4 border-r border-white/10 shadow-xl">
          <div className="flex h-16 shrink-0 items-center border-b border-white/10">
            <p className='text-white m-auto font-bold tracking-wider uppercase text-sm'>student Nest</p>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item, index) => (
                    <li key={item.name} onClick={() => handleChangeNavigation(index)}>
                      <Link
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-white/20 text-white shadow-sm'
                            : 'text-indigo-100 hover:bg-white/10 hover:text-white',
                          'group flex gap-x-3 rounded-lg p-2.5 text-sm font-semibold leading-6 transition-all'
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={classNames(
                            item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                            'size-6 shrink-0'
                          )}
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto" onClick={() => handleChangeNavigation(10)}>
                <Link
                  to="setting"
                  className="group -mx-2 flex gap-x-3 rounded-lg p-2.5 text-sm font-semibold leading-6 text-indigo-100 hover:bg-white/10 hover:text-white transition-all"
                >
                  <Cog6ToothIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-indigo-200 group-hover:text-white"
                  />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}