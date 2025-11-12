export function UsechangeTogole(tabs,setTabs){
 function handlechangeTogoleOnclick(id){
   setTabs(tabs.map((e,tabindex)=>{
             if(tabindex==id){
                  return {...e,current:true};
                         }
             else{
                  return {...e,current:false}
                 }
           }))
}
return{handlechangeTogoleOnclick};
}