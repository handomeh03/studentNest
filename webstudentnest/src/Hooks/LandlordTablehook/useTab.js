import { useState } from "react";

export function UseTab(){
    const [tabs,setTabs]=useState([
          { name: 'All landlords',current:true },
          { name: 'verifed Landlord',current:false},
          { name: 'not Verifed landlord',current:false },
          
    ]);
    return {tabs,setTabs}
}