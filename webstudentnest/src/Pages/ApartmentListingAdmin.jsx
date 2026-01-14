import { useEffect, useState } from "react";
import { Useaos } from "../Hooks/publicHook/useaos";
import ApartmentCard from "../Components/ApartmentListing/ApartmentCard";

import DeleteApartmentDialog from "../Components/ApartmentListing/DeleteApartmentDialog";
import SearchuserComp from "../Components/ApartmentListing/SearchuserComp";
import TogoleButton from "../Components/LandlordTablepageComp/TogoleButton";
import { UseTab } from "../Hooks/apartmentListinigHook/useTab";
import { UseFilterapartment } from "../Hooks/apartmentListinigHook/useFilterApartment";
import { UsechangeApartment } from "../Hooks/apartmentListinigHook/usechangeApartment";


import EditStatusdialog from "../Components/ApartmentListing/EditStatusdialog";

import AddDocumnetDialog from "../Components/ApartmentListing/AddDocumnetDialog";
import EditDetailsDialog from "../Components/ApartmentListing/editDetailsDialog";
import EditDocumentDialog from "../Components/ApartmentListing/EditDocumentDialog";
import { useUserContext } from "../Context/UserContext/UserContext";
import ErrorComp from "../Components/PublicComp/ErrorComp";
import ShowDocumentContainer from "../Components/ApartmentListing/ShowdocumentContainer";
import ShowdetailsContainer from "../Components/ApartmentListing/ShowdetailsContainer";



export default function ApartmentListingAdmin({randomApartment,bookedApartment,forall,Apartments,error}) {

  // ال booked apartment يعني ال apremtnet ال محجوزة للlandlord وهي بس كفلاج
  Useaos();
  let{user}=useUserContext();

  
  

  let [editDialogFlag,seteditDialogFlag]=useState(false);
  let[deleteDialogFlag,setDeleteDialogFlag]=useState(false);
  let[showDocumentFLag,setShowDocumnetFlag]=useState(false);
  let[showdetailsFlag,setShowdetailsFlag]=useState(false);
  let[adddocumnetFlag,setAddDocumentFlag]=useState(false);
  let[editDetailsFlag,seteditdetailsFlag]=useState(false);
  let[editDocumentDialog,setEditDocumentDialog]=useState(false);
  let [apartmentId,setApartmentId]=useState(null);

  const [filteredApartments, setfilteredApartments] = useState(Apartments || []);

  //tab for togole
  const {tabs,setTabs}=UseTab();

  //filter apartments
   const {verifiedApartment,notVerifiedApartment}=UseFilterapartment(Apartments||[]);

  // make change and set filter apartment in setfilterdapartment
  let{handlechangeApartment}=UsechangeApartment(tabs,Apartments,verifiedApartment,notVerifiedApartment,setfilteredApartments);

   //when tabs change current make this function
  useEffect(() => {
          handlechangeApartment();
   }, [tabs,Apartments]);

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
   <div>
  {error ? (
    <ErrorComp error={error || "No Apartment Found"} />
  ) : (
    <div className="bg-white">
      
      {!bookedApartment && !forall && !randomApartment&& (
        <SearchuserComp
          handlechangeApartment={handlechangeApartment}
          handlechangeTogoleWhenSearch={handlechangeTogoleWhenSearch}
        />
      )}

      
      {(user?.user?.role !== "student" && user?.user?.role !== "" && !bookedApartment && !forall) && (
        <TogoleButton tabs={tabs} handlechangeTogoleOnclick={handlechangeTogoleOnclick} />
      )}

      
      <div className="mx-auto max-w-7xl sm:px-6 sm:py-5">
        {filteredApartments&&filteredApartments.length === 0 ? (
          <div className="mt-2 sm:mt-0"><ErrorComp error={"No Apartment Found"} /></div>
        ) : (
          <>
           
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredApartments?.map((apartment, index) => (
                <ApartmentCard
                  forall={forall}
                  bookedApartment={bookedApartment}
                  handleChangeApartmentId={handleChangeApartmentId}
                  handleChangeShowDocumnetFlag={handleChangeShowDocumnetFlag}
                  handleChangeEditDocumentDialog={handleChangeEditDocumentDialog}
                  handleChangeEditdetailFlag={handleChangeEditdetailFlag}
                  handlechangeAddDocumentFlag={handlechangeAddDocumentFlag}
                  handlechageShowDetailsFlag={handlechageShowDetailsFlag}
                  handleChangeEditdialogflag={handleChangeEditdialogflag}
                  handleChangeDeleteDialogFlag={handleChangeDeleteDialogFlag}
                  apartment={apartment}
                  key={index}
                />
              ))}
            </div>
          </>
        )}
      </div>

      
      {user?.role !== "student" && user?.role !== "admin" && (
        <>
          {editDialogFlag? <EditStatusdialog
           key={apartmentId} 
            editDialogFlag={editDialogFlag}
            handleChangeEditdialogflag={handleChangeEditdialogflag}
            apartmentId={apartmentId}
          />:""}
         {deleteDialogFlag? <DeleteApartmentDialog
         key={apartmentId} 
            deleteDialogFlag={deleteDialogFlag}
            handleChangeDeleteDialogFlag={handleChangeDeleteDialogFlag}
            apartmentId={apartmentId}
          />:""}
          {showDocumentFLag? <ShowDocumentContainer
            key={apartmentId} 
            showDocumentFLag={showDocumentFLag}
            handleChangeShowDocumnetFlag={handleChangeShowDocumnetFlag}
            apartmentId={apartmentId}
          />:""}
         
        </>
      )}

      {showdetailsFlag?  <ShowdetailsContainer
        key={apartmentId} 
        showdetailsFlag={showdetailsFlag}
        handlechageShowDetailsFlag={handlechageShowDetailsFlag}
        apartmentId={apartmentId}
      />:""}
       
      {user?.role !== "student" && user?.role !== "" && (
        <>
        {adddocumnetFlag? <AddDocumnetDialog
        key={apartmentId} 
            adddocumnetFlag={adddocumnetFlag}
            handlechangeAddDocumentFlag={handlechangeAddDocumentFlag}
            apartmentId={apartmentId}
          />:""}
         {editDetailsFlag?  <EditDetailsDialog
          key={apartmentId} 
            editDetailsFlag={editDetailsFlag}
            handleChangeEditdetailFlag={handleChangeEditdetailFlag}
            apartmentId={apartmentId}
          />:""}
        
        </>
      )}

      {editDocumentDialog? <EditDocumentDialog
      key={apartmentId} 
        editDocumentDialog={editDocumentDialog}
        handleChangeEditDocumentDialog={handleChangeEditDocumentDialog}
        apartmentId={apartmentId}
      />:""}
     
    </div>
  )}
</div>

  );
}
