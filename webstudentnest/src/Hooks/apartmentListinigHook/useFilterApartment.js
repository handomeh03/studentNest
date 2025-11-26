import { useMemo } from "react";

export function UseFilterapartment(apartments){
      const verifiedApartment = useMemo(() => {
              return apartments.filter((e) => e.propertyStatus === true);
            }, [apartments]);
            
            const notVerifiedApartment = useMemo(() => {
              return apartments.filter((e) => e.propertyStatus === false);
            }, [apartments]);

         return {verifiedApartment,notVerifiedApartment};   
        
}