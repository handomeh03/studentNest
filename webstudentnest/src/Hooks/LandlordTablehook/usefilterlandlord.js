import { useMemo } from "react";

export function Usefilterlandlord(Landlords){
  //  Landlords = Landlords || JSON.parse(sessionStorage.getItem("Landlords"))||[];

    const verifiedLandlords = useMemo(() => {   
      return Landlords.filter((e) => e?.verifiedLandlord === true);
    }, [Landlords]);
    
    const notVerifiedLandlords = useMemo(() => {
      return Landlords.filter((e) => e?.verifiedLandlord === false);
    }, [Landlords]);

    return {verifiedLandlords,notVerifiedLandlords};
}