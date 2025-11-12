export function UseChangeLandlordAfterFilter(tabs,Landlords,verifiedLandlords,notVerifiedLandlords,setFilteredLandlords){
    function handlechangeLandlords() {
  const clickTab = tabs.find((e) => e.current === true);
  let landlord = Landlords;

  if (clickTab?.name === 'verifed Landlord') {
    landlord = verifiedLandlords;
  } else if (clickTab?.name === 'not Verifed landlord') {
    landlord = notVerifiedLandlords;
  }

  
  setFilteredLandlords(landlord);
}
return{handlechangeLandlords};
}