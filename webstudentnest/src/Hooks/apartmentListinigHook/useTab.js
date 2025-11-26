import { useState } from "react";

export function UseTab(){
    const [tabs,setTabs]=useState([
              { name: 'All apartments',current:true },
              { name: 'verifed apartment',current:false},
              { name: 'not Verifed apartment',current:false },
              
        ]);
        return {tabs,setTabs};
}