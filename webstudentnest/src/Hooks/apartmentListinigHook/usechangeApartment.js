export function UsechangeApartment(tabs,apartments,verifiedApartment,notVerifiedApartment,setfilteredApartments){
     
 function handlechangeApartment() {
  const clickTab = tabs.find((e) => e.current === true);
  let apartment = apartments;

  if (clickTab?.name === 'verifed apartment') {
    apartment = verifiedApartment;
  } else if (clickTab?.name === 'not Verifed apartment') {
    apartment = notVerifiedApartment;
  }

  
  setfilteredApartments(apartment);
}
return{handlechangeApartment};
}