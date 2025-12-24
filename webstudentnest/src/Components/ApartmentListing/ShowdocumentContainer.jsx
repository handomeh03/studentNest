import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";
import { UseGetDocument } from "../../Hooks/AdminHooks/UseGetDocument";
import Loader from "../PublicComp/Loader";
import ShowDocumentDialog from "./ShowDocumentDialog";

export default function ShowDocumentContainer({showDocumentFLag,handleChangeShowDocumnetFlag,apartmentId}){

    let {loader,error}=UseGetDocument(apartmentId);  
      let {document}=UseApatment();
      
      if(loader){
        return <Loader/>
      }
    return(
         <ShowDocumentDialog error={error} document={document} showDocumentFLag={showDocumentFLag} handleChangeShowDocumnetFlag={handleChangeShowDocumnetFlag} apartmentId={apartmentId}/>
    );
}