import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function AdminSettingPage() {
  return (
    <form className=" mt-2 shadow-sm outline outline-1 outline-gray-200 sm:rounded-xl md:col-span-2">
      <div className="px-4 py-6 sm:p-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Full Name */}
          <div className="sm:col-span-6">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-900"
            >
              Full name
            </label>
            <div className="mt-2">
              <input
                id="fullName"
                name="fullName"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                  outline outline-1 outline-gray-300 
                  focus:outline-[#3f51b5] focus:outline-2"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                  outline outline-1 outline-gray-300 
                  focus:outline-[#3f51b5] focus:outline-2"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="sm:col-span-6">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="number"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                  outline outline-1 outline-gray-300 
                  focus:outline-[#3f51b5] focus:outline-2"
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div className="sm:col-span-6">
            <label
              htmlFor="birth"
              className="block text-sm font-medium text-gray-900"
            >
              Date of Birth
            </label>

            <div className="mt-2 grid grid-cols-1 relative">
              <select
                id="birth"
                name="birth"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-10 text-base text-gray-900
                  outline outline-1 outline-gray-300
                  focus:outline-[#3f51b5] focus:outline-2"
              >
                {Array.from(
                  { length: new Date().getFullYear() - 1950 + 1 },
                  (_, i) => 1950 + i
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 size-5 text-[#3f51b5]"
              />
            </div>
          </div>

          {/* Street Address */}
          <div className="col-span-full">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-900"
            >
              address
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                  outline outline-1 outline-gray-300 
                  focus:outline-[#3f51b5] focus:outline-2"
              />
            </div>
          </div>

          {/*  photo */}
          <div className="col-span-full">
            <label
              htmlFor="photo"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Photo
            </label>

            <div className="mt-2 flex items-center gap-x-3">
              <UserCircleIcon
                aria-hidden="true"
                className="h-14 w-14 text-[#3f51b5] flex-shrink-0"
              />
              {/* <img src='/logo.png' className='h-14 w-14 bg-amber-200'/> */}

              <label
                htmlFor="photo-upload"
                className="cursor-pointer rounded-md bg-[#3f51b5] px-3 py-2 text-sm font-semibold text-white shadow-sm
                 hover:bg-[#3546a0]
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f51b5]"
              >
                Upload
              </label>
              <input id="photo-upload" type="file" className="hidden" />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-end gap-x-6 border-t border-gray-200 px-4 py-4 sm:px-8">
        <button type="button" className="text-sm font-semibold text-gray-900">
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-md bg-[#3f51b5] px-4 py-2 text-sm font-semibold text-white shadow-sm 
            hover:bg-[#3546a0] 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f51b5]"
        >
          Save
        </button>
      </div>
    </form>
  );
}
