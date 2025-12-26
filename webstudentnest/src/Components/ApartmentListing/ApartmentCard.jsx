import { useNavigate } from "react-router-dom";

import { useUserContext } from "../../Context/UserContext/UserContext"; 


export default function ApartmentCard({forall,bookedApartment,apartment,handleChangeShowDocumnetFlag,handleChangeEditDocumentDialog,handleChangeEditdetailFlag,handlechangeAddDocumentFlag,handlechageShowDetailsFlag,handleChangeEditdialogflag,handleChangeApartmentId,handleChangeDeleteDialogFlag}){
  const { user } = useUserContext();
  let navigatie=useNavigate();
    return(
         <div
       data-aos="fade-in"
        key={apartment?.apartmentId}
        className="group relative bg-white rounded-2xl shadow-blue-200  overflow-hidden shadow-lg hover:shadow-blue-300 "
      >
        
        <div className="relative w-full h-64">
          <img
            src={apartment.imageSrc ||"https://cdn.openart.ai/stable_diffusion/75ccca62ecffde343bf38fef8838cb3a4695a49a_2000x2000.webp"}
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
          />
          
         {user?.user?.role=="student" || user?.user?.role=="" ||bookedApartment || forall?"": <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
              apartment?.Verified === true
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {apartment.Verified?"Verified":"Not Verified"}
          </span>}
        </div>

        
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition">
            <a>{apartment?.title}</a>
          </h3>
          <p className="text-gray-500 text-sm mb-1">{apartment?.address}</p>
          <p className="text-gray-500 text-sm mb-1">
            Rooms: {apartment?.numberOfRoom} | Beds: {apartment?.numberOfBed}
          </p>
          <p className="text-gray-500 text-sm mb-3">
            {apartment?.isJoin==true ? "join" : "not join"} | landlord: {apartment?.landlordName}
          </p>

          
          <p className="text-xl font-extrabold text-gray-900 mb-4">
            {apartment?.price} JD <span className="text-sm font-normal">/ month</span>
          </p>

          
          <div className="flex gap-2 flex-wrap ">
        <div className="flex gap-2 flex-wrap m-auto">

  {user?.user?.role=="student"|| user?.user?.role=="landlord" ||forall ?"":<button onClick={()=>{
    handleChangeEditdialogflag();
    handleChangeApartmentId(apartment?.apartmentId);
  }} className="flex-1 w-30 p-3 text-sm font-medium text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    Edit status
  </button>}


  {user?.user?.role=="student" ||bookedApartment||user?.user?.role=="" ||forall?"":<button onClick={()=>{
    handleChangeDeleteDialogFlag();
    handleChangeApartmentId(apartment?.apartmentId);
  }} className="flex-1 w-30 p-3 text-sm font-medium text-white bg-[#3f51b5] hover:cursor-pointer rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    Delete
  </button>}

  {user?.user?.role=="student" ||!bookedApartment|| user?.user?.role=="" || forall?"":<button onClick={()=>{
    navigatie(`/landlordDashboard/apartemnt/${apartment?.apartmentId}/leases`)
    handleChangeApartmentId(apartment?.apartmentId);
  }} className="flex-1 w-30 p-3 text-sm font-medium hover:cursor-pointer text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    leases
  </button>}
  

  {user?.user?.role=="student" ||bookedApartment|| user?.user?.role==""||forall?"":  <button onClick={()=>{
    handleChangeShowDocumnetFlag();
    handleChangeApartmentId(apartment?.apartmentId);
  }} className="flex-1 w-30 p-3 text-sm  font-medium hover:cursor-pointer text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    Show Document
  </button>}



  {user?.user?.role=="student" || user?.user?.role=="admin" ||bookedApartment|| user?.user?.role=="" ||forall?"":<button onClick={()=>{
    handlechangeAddDocumentFlag();
    handleChangeApartmentId(apartment?.apartmentId);
  }} className="flex-1 w-30 p-3 text-sm  font-medium hover:cursor-pointer text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    add Document
  </button>}


  {user?.user?.role=="admin" || user?.user?.role=="landlord" ?"":<button onClick={()=>{
    
    handleChangeApartmentId(apartment?.apartmentId);
  }} className="flex-1 w-30 p-3 text-sm  font-medium hover:cursor-pointer text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    request lease
  </button>}

  
  <button onClick={()=>{
    handlechageShowDetailsFlag();
    handleChangeApartmentId(apartment?.apartmentId);
  }} className="flex-1  text-sm w-30 p-3  font-medium hover:cursor-pointer text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    Show details
  </button>


   {user?.user?.role=="student" ||bookedApartment || user?.user?.role=="admin" ||forall?"":<button onClick={()=>{
    handleChangeEditdetailFlag();
    handleChangeApartmentId(apartment?.apartmentId);
  }} className="flex-1 w-30 p-3 text-sm  font-medium hover:cursor-pointer text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    edit detailts
  </button>}

 {user?.user?.role=="student" ||bookedApartment|| user?.user?.role =="admin" || forall ?"":  <button onClick={()=>{
    handleChangeEditDocumentDialog();
    handleChangeApartmentId(apartment?.apartmentId);
  }} className="flex-1 w-30 p-3 text-sm hover:cursor-pointer  font-medium text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    edit Document
  </button>}
 
</div>

            
          </div>
        </div>
      </div>
    );
}