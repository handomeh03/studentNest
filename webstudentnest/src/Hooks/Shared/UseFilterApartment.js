import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";

export function useFilterApartment() {
let{apartmentDispatch}=UseApatment();
  const filterApartment = async ( isJoin, university, price, age) => {
   
    const params = new URLSearchParams();
    if (isJoin !== undefined) params.append("isJoin", isJoin);
    if (university) params.append("university", university);
    if (price) params.append("price", price);
    if (age) params.append("age", age);

    try {
        console.log(params);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/apartments/search/filter?${params.toString()}`
      );

      const data = await response.json();

      if (response.ok) {
        console.log(data);
          apartmentDispatch({type:"getApartments",payload:data});
      }else{
        throw new Error(data.error)
      }      
    } catch (err) {
      console.log(err.message);
    } 
  };

  return { filterApartment };
}