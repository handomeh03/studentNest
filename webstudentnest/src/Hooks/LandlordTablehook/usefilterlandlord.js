import { useMemo } from "react";

export function Usefilterlandlord(Landlords){
    const verifiedLandlords = useMemo(() => {
      return Landlords.filter((e) => e.adminVerifed === true);
    }, [Landlords]);
    
    const notVerifiedLandlords = useMemo(() => {
      return Landlords.filter((e) => e.adminVerifed === false);
    }, [Landlords]);

    return {verifiedLandlords,notVerifiedLandlords};
}