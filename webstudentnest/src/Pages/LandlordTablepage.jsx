import HeadOfTable from "../Componnets/LandlordTablepageComp/HeadOfTable";
import RowOfTable from "../Componnets/LandlordTablepageComp/RowOfTable";
import SearchuserComp from "../Componnets/LandlordTablepageComp/SearchuserCom";
import "aos/dist/aos.css";
import { Useaos } from "../Hooks/publicHook/useaos";
import TogoleButton from "../Componnets/LandlordTablepageComp/TogoleButton";
import { useEffect, useState } from "react";
import { Uselandlord } from "../Hooks/LandlordTablehook/useLandlord";
import { Usefilterlandlord } from "../Hooks/LandlordTablehook/usefilterlandlord";
import { UseChangeTogoleWhenSearch } from "../Hooks/LandlordTablehook/useChangeTogolewhenSearch";
import { UsechangeTogole } from "../Hooks/LandlordTablehook/useChangeTogole";
import { UseTab } from "../Hooks/LandlordTablehook/useTab";
import { UseChangeLandlordAfterFilter } from "../Hooks/LandlordTablehook/useChangeLandlordAfterFilter";


export default function LandlordTablepage(){
Useaos();

const {Landlords}=Uselandlord();
const [filteredLandlords, setFilteredLandlords] = useState(Landlords);
let{tabs,setTabs}=UseTab();

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


    return(
     <div data-aos="fade-in" className="px-4 p-3.5 sm:px-6 lg:px-8">
       <SearchuserComp handlechangeTogoleWhenSearch={handlechangeTogoleWhenSearch} handlechangeLandlords={handlechangeLandlords}/>
     

        <TogoleButton tabs={tabs} handlechangeTogoleOnclick={handlechangeTogoleOnclick} handlechangeLandlords={handlechangeLandlords}/>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
               <HeadOfTable/>  

              <tbody className="divide-y divide-gray-200   ">
                {filteredLandlords.map((landlord,index) => (
                  <RowOfTable key={index} landlord={landlord}/>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>

    </div>
    );
}