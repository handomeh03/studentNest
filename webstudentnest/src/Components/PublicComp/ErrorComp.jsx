import { XCircleIcon } from '@heroicons/react/20/solid'
export default function ErrorComp({erorr}){
    return(
       <div className="rounded-md   bg-red-200 p-4 md:w-1/2 m-auto lg:w-1/2 m-auto">
      <div className="flex">
        <div className="shrink-0">
          <XCircleIcon aria-hidden="true" className="size-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800 ">
            {erorr}
          </h3>
          
        </div>
      </div>
    </div>
    );
}