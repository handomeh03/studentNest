export function UseChangeTogoleWhenSearch(tabs,setTabs){
    function handlechangeTogoleWhenSearch(){
       setTabs(tabs.map((e)=>{
        if(e.name=="All landlords"){
          return {...e,current:true};
        }
        else{
          return {...e,current:false};
        }
       }))
}
return {handlechangeTogoleWhenSearch};
}