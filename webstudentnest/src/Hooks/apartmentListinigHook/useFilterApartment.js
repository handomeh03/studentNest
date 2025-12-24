import { useMemo } from "react";

export function UseFilterapartment(apartments){
      const verifiedApartment = useMemo(() => {
              return apartments.filter((e) => e?.Verified === true);
            }, [apartments]);
            
            const notVerifiedApartment = useMemo(() => {
              return apartments.filter((e) => e?.Verified === false);
            }, [apartments]);

         return {verifiedApartment,notVerifiedApartment};   
        
}