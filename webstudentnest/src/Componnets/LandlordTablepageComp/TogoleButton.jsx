import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function TogoleButton({ tabs, handlechangeTogoleOnclick }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      {/* for mobile */}
      <div className="grid grid-cols-1 mt-2 sm:hidden">
        <select
          value={tabs.find((e)=>e.current==true).name}
          onChange={(e) => {
            const selectedName = e.target.value;
            const idx = tabs.findIndex((t) => t.name === selectedName);
            handlechangeTogoleOnclick(idx);
          }}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
        >
          {tabs.map((tab, index) => (
            <option key={index} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>

        
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500 dark:fill-gray-400"
        />
      </div>

      {/* for desktop */}
      <div className="hidden m-3 sm:block">
        <nav
          aria-label="Tabs"
          className="isolate flex divide-x divide-gray-200 rounded-lg bg-red shadow "
        >
          {tabs.map((tab, index) => (
            <a
              onClick={() => {
                handlechangeTogoleOnclick(index);
              }}
              key={tab.name}
              href={tab.href}
              aria-current={tab.current ? "page" : undefined}
              className={classNames(
                tab.current ? "text-indigo-500 " : "text-black  ",
                index === 0 ? "rounded-l-lg" : "",
                index === tabs.length - 1 ? "rounded-r-lg" : "",
                "group relative min-w-0 flex-1 overflow-hidden px-4 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10 "
              )}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current
                    ? "bg-indigo-500 dark:bg-indigo-400"
                    : "bg-transparent",
                  "absolute inset-x-0 bottom-0 h-0.5"
                )}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
