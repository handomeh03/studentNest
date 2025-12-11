import { useNavigate } from "react-router-dom";

import { useUserContext } from "../../Context/UserContext/UserContext";

export default function ApartmentCard({bookedApartment,apartment,handleChangeShowDocumnetFlag,handleChangeEditDocumentDialog,handleChangeEditdetailFlag,handlechangeAddDocumentFlag,handlechageShowDetailsFlag,handleChangeEditdialogflag,handleChangeApartmentId,handleChangeDeleteDialogFlag}){
  const { user } = useUserContext();
  let navigatie=useNavigate();
    return(
         <div
       data-aos="fade-in"
        key={apartment.id}
        className="group relative bg-white rounded-2xl shadow-blue-200  overflow-hidden shadow-lg hover:shadow-blue-300 "
      >
        
        <div className="relative w-full h-64">
          <img
            src={apartment.imageSrc}
            alt={apartment.imageAlt}
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
          />
          
         {user?.role=="student" || user?.role=="" ||bookedApartment?"": <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
              apartment.propertyStatus === true
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {apartment.propertyStatus?"Verified":"Not Verified"}
          </span>}
        </div>

        
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition">
            <a href={apartment.href}>{apartment.name}</a>
          </h3>
          <p className="text-gray-500 text-sm mb-1">{apartment.location}</p>
          <p className="text-gray-500 text-sm mb-1">
            Rooms: {apartment.numberOfRoom} | Beds: {apartment.numberOfBed}
          </p>
          <p className="text-gray-500 text-sm mb-3">
            {apartment.isShared ? "join" : "not join"} | landlord: {apartment.landlordName}
          </p>

          
          <p className="text-xl font-extrabold text-gray-900 mb-4">
            {apartment.priceJD} JD <span className="text-sm font-normal">/ {apartment.rentTerm}</span>
          </p>

          
          <div className="flex gap-2 flex-wrap ">
        <div className="flex gap-2 flex-wrap m-auto">

  {user?.role=="student"|| user?.role=="landloard"||user?.role=="" ?"":<button onClick={()=>{
    handleChangeEditdialogflag();
    handleChangeApartmentId(apartment.id);
  }} className="flex-1 px-3 py-2 text-sm font-medium text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    Edit status
  </button>}


  {user?.role=="student" ||bookedApartment|| user?.role==""?"":<button onClick={()=>{
    handleChangeDeleteDialogFlag();
    handleChangeApartmentId(apartment.id);
  }} className="flex-1 px-3 py-2 text-sm font-medium text-white bg-[#3f51b5] hover:cursor-pointer rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    Delete
  </button>}

  {user?.role=="student" ||!bookedApartment|| user?.role==""?"":<button onClick={()=>{
    navigatie(`/landlordDashboard/apartemnt/${apartment.id}/leases`)
    handleChangeApartmentId(apartment.id);
  }} className="flex-1 px-3 py-2 text-sm font-medium hover:cursor-pointer text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    leases
  </button>}
  

  {user?.role=="student" ||bookedApartment|| user?.role==""?"":  <button onClick={()=>{
    handleChangeShowDocumnetFlag();
    handleChangeApartmentId(apartment.id);
  }} className="flex-1 px-3 py-2 text-sm  font-medium hover:cursor-pointer text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    Show Document
  </button>}



  {user?.role=="student" || user?.role=="admin" ||bookedApartment|| user?.role==""?"":<button onClick={()=>{
    handlechangeAddDocumentFlag();
    handleChangeApartmentId(apartment.id);
  }} className="flex-1 px-3 py-2 text-sm  font-medium hover:cursor-pointer text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    add Document
  </button>}


  {user?.role=="landloard" ||user?.role=="admin" ?"":<button onClick={()=>{
    
    handleChangeApartmentId(apartment.id);
  }} className="flex-1 px-3 py-2 text-sm  font-medium hover:cursor-pointer text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    request lease
  </button>}

  
  <button onClick={()=>{
    handlechageShowDetailsFlag();
    handleChangeApartmentId(apartment.id);
  }} className="flex-1 px-3 py-2 text-sm  font-medium hover:cursor-pointer text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    Show details
  </button>


   {user?.role=="student" ||bookedApartment || user?.role==""?"":<button onClick={()=>{
    handleChangeEditdetailFlag();
    handleChangeApartmentId(apartment.id);
  }} className="flex-1 px-3 py-2 text-sm  font-medium hover:cursor-pointer text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    edit detailts
  </button>}

 {user?.role=="student" ||bookedApartment|| user?.role==""?"":  <button onClick={()=>{
    handleChangeEditDocumentDialog();
    handleChangeApartmentId(apartment.id);
  }} className="flex-1 px-3 py-2 text-sm hover:cursor-pointer  font-medium text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    edit Document
  </button>}
 
</div>

            
          </div>
        </div>
      </div>
    );
}