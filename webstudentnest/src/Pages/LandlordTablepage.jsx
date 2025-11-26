import HeadOfTable from "../Componnets/LandlordTablepageComp/HeadOfTable";
import RowOfTable from "../Componnets/LandlordTablepageComp/RowOfTable";
import SearchuserComp from "../Componnets/LandlordTablepageComp/SearchuserCom";
import "aos/dist/aos.css";
import { Useaos } from "../Hooks/publicHook/useaos";

import { useEffect, useState } from "react";
import { Uselandlord } from "../Hooks/LandlordTablehook/useLandlord";
import { Usefilterlandlord } from "../Hooks/LandlordTablehook/usefilterlandlord";
import { UseChangeTogoleWhenSearch } from "../Hooks/LandlordTablehook/useChangeTogolewhenSearch";
import { UsechangeTogole } from "../Hooks/LandlordTablehook/useChangeTogole";
import { UseLandlordTab } from "../Hooks/LandlordTablehook/useTab";
import { UseChangeLandlordAfterFilter } from "../Hooks/LandlordTablehook/useChangeLandlordAfterFilter";
import TogoleButton from "../Componnets/LandlordTablepageComp/TogoleButton";
import EditlandlordDialog from "../Componnets/LandlordTablepageComp/editLandlordDialog";
import DeleteLandlordDialog from "../Componnets/LandlordTablepageComp/DeletelandlordDialog";


export default function LandlordTablepage(){

Useaos();

const[landlordId,setLandlordId]=useState(null);

const[editlandlordFlag,seteditLandlordFlag]=useState(false);
const[deletelanlordFlag,setDeleteLandlordFLag]=useState(false);

const {Landlords}=Uselandlord();
const [filteredLandlords, setFilteredLandlords] = useState(Landlords);
let{tabs,setTabs}=UseLandlordTab();

//filter the landlord
let {verifiedLandlords,notVerifiedLandlords}=Usefilterlandlord(Landlords);

//store the landlord after filter to display when click
let {handlechangeLandlords}=UseChangeLandlordAfterFilter(tabs,Landlords,verifiedLandlords,notVerifiedLandlords,setFilteredLandlords);


//excute the filteration when tab change
useEffect(() => {
  handlechangeLandlords();
}, [tabs]);

//when search of all landlord set togole all landlord
let{handlechangeTogoleWhenSearch}=UseChangeTogoleWhenSearch(tabs,setTabs);
// when click on togle change the color
let{handlechangeTogoleOnclick}=UsechangeTogole(tabs,setTabs);

function handleChangeEditLandlordFlag(){
  seteditLandlordFlag((old)=>!old);
}
function handleChangeDeletelandlordDialog(){
  setDeleteLandlordFLag((old)=>!old);
}

    return(
     <div data-aos="fade-in" className="px-4 p-3.5 sm:px-6 lg:px-8">
       <SearchuserComp handlechangeTogoleWhenSearch={handlechangeTogoleWhenSearch} handlechangeLandlords={handlechangeLandlords}/>
     

        <TogoleButton tabs={tabs} handlechangeTogoleOnclick={handlechangeTogoleOnclick}/>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
               <HeadOfTable/>  

              <tbody className="divide-y divide-gray-200   ">
                {filteredLandlords.map((landlord,index) => (
                  <RowOfTable key={index} landlord={landlord} handleChangeDeletelandlordDialog={handleChangeDeletelandlordDialog} handleChangeEditLandlordFlag={handleChangeEditLandlordFlag} setLandlordId={setLandlordId}/>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
      <EditlandlordDialog editlandlordFlag={editlandlordFlag} handleChangeEditLandlordFlag={handleChangeEditLandlordFlag} landlordId={landlordId}/>
      <DeleteLandlordDialog deletelanlordFlag={deletelanlordFlag} handleChangeDeletelandlordDialog={handleChangeDeletelandlordDialog} landlordId={landlordId} />
    </div>
    );
}