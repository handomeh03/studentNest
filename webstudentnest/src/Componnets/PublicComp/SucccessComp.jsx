import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function SuccessComp({measage,setSuccessFlag}) {
  return (
    <div className="rounded-md bg-green-200 p-4 md:w-1/2 m-auto lg:w-1/2 m-auto">
      <div className="flex">
        <div className="shrink-0">
          <CheckCircleIcon aria-hidden="true" className="size-5 text-green-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800 ">{measage} </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
            onClick={()=>{
                setSuccessFlag(false);
            }}
              type="button"
              className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:cursor-pointer hover:bg-green-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-green-50 dark:bg-transparent dle:ring-green-500 dark:focus-visible:ring-offset-1 "
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
