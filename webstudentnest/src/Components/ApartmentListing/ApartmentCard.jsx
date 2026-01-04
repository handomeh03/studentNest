import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext/UserContext"; 
import { Eye, Trash2, FileText, Settings, PlusCircle, Edit3, MapPin, Bed, Home, CheckCircle2, AlertCircle, User, Users } from "lucide-react";

export default function ApartmentCard({forall, bookedApartment, apartment, handleChangeShowDocumnetFlag, handleChangeEditDocumentDialog, handleChangeEditdetailFlag, handlechangeAddDocumentFlag, handlechageShowDetailsFlag, handleChangeEditdialogflag, handleChangeApartmentId, handleChangeDeleteDialogFlag}){
  const { user } = useUserContext();
  let navigatie = useNavigate();

  const buttonBaseClass = "cursor-pointer flex items-center justify-center gap-2 p-3 text-[11px] font-bold rounded-xl transition-all active:scale-95 border h-11 w-full";

  return (
    <div
      data-aos="fade-up"
      key={apartment?.apartmentId}
      className="group relative bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden"
    >
      
      {/* Image Section */}
      <div className="relative w-full h-60 overflow-hidden">
        <img
          src={apartment?.apartmentPhoto[0]?.photoUrl || "https://cdn.openart.ai/stable_diffusion/75ccca62ecffde343bf38fef8838cb3a4695a49a_2000x2000.webp"}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          alt="Apartment"
        />
        
        
        
        {user?.user?.role === "student" || user?.user?.role === "" || bookedApartment || forall ? "" : 
          <div className={`absolute top-4 left-4 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-1 ${
            apartment?.isVerified === true ? "bg-green-500/90 text-white" : "bg-red-500/90 text-white"
          }`}>
            {apartment.isVerified ? <CheckCircle2 size={12}/> : <AlertCircle size={12}/>}
            {apartment.isVerified ? "Verified" : "Not Verified"}
          </div>
        }

        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-xl">
           <span className="text-[#3f51b5] font-black text-xl">{apartment?.price} JD</span>
           <span className="text-gray-400 text-[10px] font-medium"> /month</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-1 truncate group-hover:text-[#3f51b5] transition-colors leading-tight">
          {apartment?.title}
        </h3>

        {/* Landlord Name */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">
            <User size={12} className="text-gray-400" />
            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-tight">Landlord:</span>
            <span className="text-[11px] font-bold text-[#3f51b5] truncate max-w-[120px]">
              {apartment?.landlordName || "Owner"}
            </span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mb-5 flex items-center gap-2 font-medium">
           <MapPin size={16} className="text-[#3f51b5] shrink-0" />
           <span className="truncate">{apartment?.address}</span>
        </p>
        
        {/* Features Row */}
        <div className="flex flex-wrap gap-3 mb-6 pb-5 border-b border-gray-50">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 rounded-lg text-[#3f51b5]"><Home size={16}/></div>
            <span className="text-sm text-gray-600 font-medium"><b>{apartment?.numberOfRoom}</b> Rooms</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-50 rounded-lg text-[#3f51b5]"><Bed size={16}/></div>
            <span className="text-sm text-gray-600 font-medium"><b>{apartment?.numberOfBed}</b> Beds</span>
          </div>
          {/* IsJoin Status inside features */}
          <div className="flex items-center gap-2">
             <div className={`p-2 rounded-lg ${apartment?.isJoin ? 'bg-purple-50 text-purple-600' : 'bg-orange-50 text-orange-600'}`}>
                <Users size={16}/>
             </div>
             <span className="text-sm text-gray-600 font-medium">{apartment?.isJoin ? "join" : "not join"}</span>
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          {user?.user?.role=="student"|| user?.user?.role=="landlord" ||forall ?"":
            <button onClick={()=>{ handleChangeEditdialogflag(); handleChangeApartmentId(apartment?.apartmentId); }} 
              className={`${buttonBaseClass} text-amber-700 bg-amber-50 border-amber-100 hover:bg-amber-100`}>
              <Settings size={14}/> Status
            </button>
          }

          {user?.user?.role=="student" ||bookedApartment||user?.user?.role=="" ||forall?"":
            <button onClick={()=>{ handleChangeDeleteDialogFlag(); handleChangeApartmentId(apartment?.apartmentId); }} 
              className={`${buttonBaseClass} text-red-600 bg-red-50 border-red-100 hover:bg-red-100`}>
              <Trash2 size={14}/> Delete
            </button>
          }

          {user?.user?.role=="student" ||!bookedApartment|| user?.user?.role=="" || forall?"":
            <button onClick={()=>{ navigatie(`/landlordDashboard/apartemnt/${apartment?.apartmentId}/leases`); handleChangeApartmentId(apartment?.apartmentId); }} 
              className={`${buttonBaseClass} text-indigo-700 bg-indigo-50 border-indigo-100 hover:bg-indigo-100`}>
              <FileText size={14}/> Leases
            </button>
          }

          {user?.user?.role=="student" ||bookedApartment|| user?.user?.role==""||forall?"":
            <button onClick={()=>{ handleChangeShowDocumnetFlag(); handleChangeApartmentId(apartment?.apartmentId); }} 
              className={`${buttonBaseClass} text-blue-700 bg-blue-50 border-blue-100 hover:bg-blue-100`}>
              <FileText size={14}/> Show Doc
            </button>
          }

          {user?.user?.role=="student" || user?.user?.role=="admin" ||bookedApartment|| user?.user?.role=="" ||forall?"":
            <button onClick={()=>{ handlechangeAddDocumentFlag(); handleChangeApartmentId(apartment?.apartmentId); }} 
              className={`${buttonBaseClass} text-green-700 bg-green-50 border-green-100 hover:bg-green-100`}>
              <PlusCircle size={14}/> Add Doc
            </button>
          }

          {user?.user?.role=="student" ||bookedApartment || user?.user?.role=="admin" ||forall?"":
            <button onClick={()=>{ handleChangeEditdetailFlag(); handleChangeApartmentId(apartment?.apartmentId); }} 
              className={`${buttonBaseClass} text-gray-700 bg-gray-100 border-gray-200 hover:bg-gray-200`}>
              <Edit3 size={14}/> Edit Info
            </button>
          }

          {user?.user?.role=="student" ||bookedApartment|| user?.user?.role =="admin" || forall ?"":
            <button onClick={()=>{ handleChangeEditDocumentDialog(); handleChangeApartmentId(apartment?.apartmentId); }} 
              className={`${buttonBaseClass} text-gray-700 bg-gray-100 border-gray-200 hover:bg-gray-200`}>
              <Edit3 size={14}/> Edit Doc
            </button>
          }

          {user?.user?.role=="admin" || user?.user?.role=="landlord" ?"":
            <button onClick={()=>{ handleChangeApartmentId(apartment?.apartmentId); }} 
              className="cursor-pointer col-span-2 flex items-center justify-center gap-2 p-3 text-xs font-bold text-[#3f51b5] border-2 border-[#3f51b5] rounded-xl hover:bg-indigo-50 transition-all active:scale-95 h-11">
              Request Lease
            </button>
          }

          {bookedApartment ?"":  
            <button onClick={()=>{ handlechageShowDetailsFlag(); handleChangeApartmentId(apartment?.apartmentId); }} 
              className="cursor-pointer col-span-2 flex items-center justify-center gap-2 p-3 text-xs font-bold text-white bg-[#3f51b5] rounded-xl shadow-lg hover:bg-[#303f9f] transition-all active:scale-95 h-11">
              <Eye size={18}/> Show Details
            </button>
          }
        </div>
      </div>
    </div>
  );
}