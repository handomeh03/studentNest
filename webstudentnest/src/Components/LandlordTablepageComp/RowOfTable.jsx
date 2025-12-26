export default function RowOfTable({landlord,setLandlordId,handleChangeEditLandlordFlag,handleChangeDeletelandlordDialog}){
    return(
         <tr key={landlord.userId}>
                     <td className="whitespace-nowrap px-3 py-5  text-sm  ">
                      <div className="text-balck ">{landlord?.user?.userId.slice(30)}</div>
                      
                    </td>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="size-11 shrink-0">
                          <img
                            alt=""
                            src={landlord?.user?.photo ||"https://static.vecteezy.com/system/resources/previews/011/490/381/original/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg"}
                            className="size-11 rounded-full "
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-black">{landlord?.user?.name}</div>
                          <div className="mt-1 text-gray-600 ">{landlord?.user?.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm  ">
                      <div className="text-balck ">{landlord?.user?.dateOfBirth}</div>
                      
                    </td>
                    
                     <td className="whitespace-nowrap px-3 py-5 text-sm  ">
                      <div className="text-balck ">{landlord?.user?.phoneNumber}</div>
                      
                    </td>
                     <td className="whitespace-nowrap px-3 py-5 text-sm  ">
                      <div className="text-balck ">{landlord?.user?.address || "null"}</div>
                      
                    </td>

                    <td className="whitespace-nowrap px-3 py-5 text-sm ">
                      {
                        landlord?.user?.emailVerfied? <span className="inline-flex items-center rounded-md bg-green-800 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ">
                        Yes
                      </span>: <span className="inline-flex items-center rounded-md bg-red-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ">
                        No
                      </span>
                      }
                     
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm  ">
                      {
                        landlord?.verifiedLandlord ? <span className="inline-flex items-center rounded-md bg-green-800 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ">
                        Yes
                      </span>: <span className="inline-flex items-center rounded-md bg-red-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ">
                        No
                      </span>
                      }
                     
                    </td>

                    <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
                      {landlord?.user?.role}
                    </td>
                     <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
                      {landlord?.landlordGovId || landlord?.LandlordGovId}
                    </td>
                     <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
                      {landlord?.cliQAccount}
                    </td>
                     <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
                      <a target="_blank" rel="noopener noreferrer"  href={landlord?.document}>
                         <img  className="w-full" width={50} src={landlord?.document}/>
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
                      {
                      // landlord?.user?.createdAt.split("T")[0] ||landlord?.user?.createAt ||
                       "5-5-2025"}
                    </td>
                    <td className="whitespace-nowrap flex gap-3 py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <button onClick={()=>{
                        handleChangeEditLandlordFlag();
                        setLandlordId(landlord?.user?.userId);
                      }} className=" hover:cursor-pointer hover:text-green-500  text-green-800 ">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                       </svg>
                      </button>
                        <button onClick={()=>{
                          handleChangeDeletelandlordDialog();
                          setLandlordId(landlord?.user?.userId);

                        }} className=" hover:cursor-pointer hover:text-red-500  text-red-600 ">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                       </svg>

                      </button>
                      
                    </td>
          </tr>
    );
}