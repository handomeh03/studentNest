
import { useEffect } from "react";
import AOS from "aos";
export function Useaos(){
    useEffect(() => {
            AOS.init({ duration: 600 });
          }, []);
}