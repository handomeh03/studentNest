import { useMemo } from "react";

export function UseFilterapartment(apartments){
      const verifiedApartment = useMemo(() => {
              return apartments.filter((e) => e?.isVerified === true);
            }, [apartments]);
            
            const notVerifiedApartment = useMemo(() => {
              return apartments.filter((e) => e?.isVerified === false);
            }, [apartments]);

         return {verifiedApartment,notVerifiedApartment};   
        
}