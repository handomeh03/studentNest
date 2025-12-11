import { useEffect, useState } from "react";
import { Useaos } from "../Hooks/publicHook/useaos";
import ApartmentCard from "../Components/ApartmentListing/ApartmentCard";

import DeleteApartmentDialog from "../Components/ApartmentListing/DeleteApartmentDialog";
import SearchuserComp from "../Components/ApartmentListing/SearchuserComp";
import TogoleButton from "../Components/LandlordTablepageComp/TogoleButton";
import { UseTab } from "../Hooks/apartmentListinigHook/useTab";
import { UseFilterapartment } from "../Hooks/apartmentListinigHook/useFilterApartment";
import { UsechangeApartment } from "../Hooks/apartmentListinigHook/usechangeApartment";
import ShowDocumentDialog from "../Components/ApartmentListing/ShowDocumentDialog";

import EditStatusdialog from "../Components/ApartmentListing/EditStatusdialog";
import Showdetailsdialog from "../Components/ApartmentListing/ShowdetailsDialog";
import AddDocumnetDialog from "../Components/ApartmentListing/AddDocumnetDialog";
import EditDetailsDialog from "../Components/ApartmentListing/editDetailsDialog";
import EditDocumentDialog from "../Components/ApartmentListing/EditDocumentDialog";
import { useUserContext } from "../Context/UserContext/UserContext";



export default function ApartmentListingAdmin({bookedApartment}) {

  // ال booked apartment يعني ال apremtnet ال محجوزة للlandlord وهي بس كفلاج
  Useaos();
  let{user}=useUserContext();

  //take it from props from the componnet that use
  const [apartments] = useState([
    {
      id: 1,
      name: "Sunset Apartment",
      imageSrc:
        "https://i.pinimg.com/originals/d0/be/c4/d0bec4fd88478b4fe139c30d85367ecc.jpg",
      imageAlt: "Sunset Apartment view",
      priceJD: 250,
      numberOfRoom: 3,
      numberOfBed: 2,
      location: "Amman, Abdali",
      rentTerm: "month",
      isShared: true,
      landlordName: "Ahmad Ali",
      propertyStatus: true,
      href: "#",
    },
    {
      id: 2,
      name: "City Center Flat",
      imageSrc:
        "https://i.pinimg.com/originals/d0/be/c4/d0bec4fd88478b4fe139c30d85367ecc.jpg",
      imageAlt: "City Center Flat view",
      priceJD: 350,
      numberOfRoom: 4,
      numberOfBed: 3,
      location: "Amman, City Center",
      rentTerm: "month",
      isShared: false,
      landlordName: "Sara Omar",
      propertyStatus: false,
      href: "#",
    },
    {
      id: 3,
      name: "Cozy Studio",
      imageSrc:
        "https://i.pinimg.com/originals/d0/be/c4/d0bec4fd88478b4fe139c30d85367ecc.jpg",
      imageAlt: "Cozy Studio view",
      priceJD: 180,
      numberOfRoom: 1,
      numberOfBed: 1,
      location: "Irbid, Downtown",
      rentTerm: "month",
      isShared: true,
      landlordName: "Khaled Nasser",
      propertyStatus: true,
      href: "#",
    },
    {
      id: 3,
      name: "Cozy Studio",
      imageSrc:
        "https://i.pinimg.com/originals/d0/be/c4/d0bec4fd88478b4fe139c30d85367ecc.jpg",
      imageAlt: "Cozy Studio view",
      priceJD: 180,
      numberOfRoom: 1,
      numberOfBed: 1,
      location: "Irbid, Downtown",
      rentTerm: "month",
      isShared: true,
      landlordName: "Khaled Nasser",
      propertyStatus: true,
      href: "#",
    },
    {
      id: 3,
      name: "Cozy Studio",
      imageSrc:
        "https://i.pinimg.com/originals/d0/be/c4/d0bec4fd88478b4fe139c30d85367ecc.jpg",
      imageAlt: "Cozy Studio view",
      priceJD: 180,
      numberOfRoom: 1,
      numberOfBed: 1,
      location: "Irbid, Downtown",
      rentTerm: "month",
      isShared: true,
      landlordName: "Khaled Nasser",
      propertyStatus: true,
      href: "#",
    },
  ]);

  let [editDialogFlag,seteditDialogFlag]=useState(false);
  let[deleteDialogFlag,setDeleteDialogFlag]=useState(false);
  let[showDocumentFLag,setShowDocumnetFlag]=useState(false);
  let[showdetailsFlag,setShowdetailsFlag]=useState(false);
  let[adddocumnetFlag,setAddDocumentFlag]=useState(false);
  let[editDetailsFlag,seteditdetailsFlag]=useState(false);
  let[editDocumentDialog,setEditDocumentDialog]=useState(false);
  let [apartmentId,setApartmentId]=useState(null);

  const [filteredApartments, setfilteredApartments] = useState(apartments);

  //tab for togole
  const {tabs,setTabs}=UseTab();

  //filter apartments
   const {verifiedApartment,notVerifiedApartment}=UseFilterapartment(apartments);

  // make change and set filter apartment in setfilterdapartment
  let{handlechangeApartment}=UsechangeApartment(tabs,apartments,verifiedApartment,notVerifiedApartment,setfilteredApartments);

   //when tabs change current make this function
  useEffect(() => {
          handlechangeApartment();
   }, [tabs]);

   // set togole all apartment when search
  function handlechangeTogoleWhenSearch(){
       setTabs(tabs.map((e)=>{
        if(e.name=="All apartments"){
          return {...e,current:true};
        }
        else{
          return {...e,current:false};
        }
       }))
}


// to change the current value to true when click
 function handlechangeTogoleOnclick(id){
   setTabs(tabs.map((e,tabindex)=>{
             if(tabindex==id){
                  return {...e,current:true};
                         }
             else{
                  return {...e,current:false}
                 }
           }))
}
  
  function handleChangeDeleteDialogFlag(){
    setDeleteDialogFlag((old)=>!old);
  }

  function handleChangeEditdialogflag(){
    seteditDialogFlag((old)=>!old);
  }
  function handleChangeShowDocumnetFlag(){
    setShowDocumnetFlag((old)=>!old);
  }
  function handlechageShowDetailsFlag(){
    setShowdetailsFlag((old)=>!old);
  }
  function handlechangeAddDocumentFlag(){
    setAddDocumentFlag((old)=>!old);
  }
   function handleChangeEditdetailFlag(){
    seteditdetailsFlag((old)=>!old);
  }

  function handleChangeEditDocumentDialog(){
    setEditDocumentDialog((old)=>!old);
  }
  function handleChangeApartmentId(id){
    setApartmentId(id);
  }
 
  return (
    <div className="bg-white">
     {bookedApartment?"": <SearchuserComp handlechangeApartment={handlechangeApartment} handlechangeTogoleWhenSearch={handlechangeTogoleWhenSearch}/>}
      {user?.role=="student" || user?.role=="" ||bookedApartment?"":<TogoleButton tabs={tabs} handlechangeTogoleOnclick={handlechangeTogoleOnclick} />}
      <div className="mx-auto max-w-7xl   sm:px-6 sm:py-5">
        <h4 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-8">
          Apartment Listings
        </h4>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredApartments.map((apartment, index) => (
            <ApartmentCard bookedApartment={bookedApartment} handleChangeApartmentId={handleChangeApartmentId} handleChangeShowDocumnetFlag={handleChangeShowDocumnetFlag} handleChangeEditDocumentDialog={handleChangeEditDocumentDialog} handleChangeEditdetailFlag={handleChangeEditdetailFlag} handlechangeAddDocumentFlag={handlechangeAddDocumentFlag} handlechageShowDetailsFlag={handlechageShowDetailsFlag} handleChangeEditdialogflag={handleChangeEditdialogflag} handleChangeDeleteDialogFlag={handleChangeDeleteDialogFlag} apartment={apartment} key={index} />
          ))}
        </div>
      </div>
      {user?.role=="student"?"": user?.role=="landlord" ?"": <EditStatusdialog editDialogFlag={editDialogFlag} handleChangeEditdialogflag={handleChangeEditdialogflag} apartmentId={apartmentId}/>}
      {user?.role=="student"?"":<DeleteApartmentDialog deleteDialogFlag={deleteDialogFlag} handleChangeDeleteDialogFlag={handleChangeDeleteDialogFlag} apartmentId={apartmentId}  />}
      {user?.role=="student"?"":<ShowDocumentDialog showDocumentFLag={showDocumentFLag} handleChangeShowDocumnetFlag={handleChangeShowDocumnetFlag} apartmentId={apartmentId}/>}
      <Showdetailsdialog showdetailsFlag={showdetailsFlag} handlechageShowDetailsFlag={handlechageShowDetailsFlag} apartmentId={apartmentId}/>
      {user?.role=="student" || user?.role=="admin" ?"":<AddDocumnetDialog adddocumnetFlag={adddocumnetFlag}  handlechangeAddDocumentFlag={handlechangeAddDocumentFlag}  apartmentId={apartmentId}/>}
      {user?.role=="student" || user?.role==""?"":<EditDetailsDialog editDetailsFlag={editDetailsFlag} handleChangeEditdetailFlag={handleChangeEditdetailFlag}/>}
      <EditDocumentDialog editDocumentDialog={editDocumentDialog} handleChangeEditDocumentDialog={handleChangeEditDocumentDialog}/>
    </div>
  );
}
