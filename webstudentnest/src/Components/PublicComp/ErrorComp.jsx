import { XCircleIcon } from '@heroicons/react/20/solid'

export default function ErrorComp({ error }) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 my-6">
      
      <div className="mx-auto max-w-4xl rounded-lg border border-red-200 bg-red-50 p-4 shadow-sm transition-all">
        <div className="flex items-start">
      
          <div className="shrink-0">
            <XCircleIcon aria-hidden="true" className="h-5 w-5 text-red-500" />
          </div>
          
          <div className="ml-3 flex-1 md:flex md:justify-between">
            <div>
             
              <p className="mt-1 text-sm text-red-700 leading-relaxed">
                {error || "An unexpected error occurred. Please try again later."}
              </p>
            </div>
            
            
           
          </div>
        </div>
      </div>
    </div>
  )
}