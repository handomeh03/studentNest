import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { UseEditLandlordStatus } from "../../Hooks/AdminHooks/UseEditLandlordStatus";
import ErrorComp from "../PublicComp/ErrorComp";

export default function EditlandlordDialog({editlandlordFlag,handleChangeEditLandlordFlag,landlordId}){
   const mainColor = "#3f51b5";
     const hoverColor = "#5c6bc0";
   
     const textFieldStyle = {
       "& label.Mui-focused": { color: mainColor },
       "& .MuiOutlinedInput-root": {
         "& fieldset": { borderColor: mainColor },
         "&:hover fieldset": { borderColor: hoverColor },
         "&.Mui-focused fieldset": { borderColor: mainColor },
       },
     };
   
     const buttonStyle = {
       backgroundColor: mainColor,
       color: "white",
       "&:hover": {
         backgroundColor: hoverColor,
       },
     };

     let [status,setStatus]=useState("true");
     const {editStatus,error,loader}=UseEditLandlordStatus();

     function onedit(e){
      e.preventDefault();
      console.log(status);
      editStatus(landlordId,status,handleChangeEditLandlordFlag);
     }
   
     return (
       <Dialog style={{ zIndex: "12345675" }} open={editlandlordFlag}>
         <DialogTitle sx={{ color: "black", fontWeight: "bold" }}>
           admin Verifed
         </DialogTitle>
   
         <DialogContent>
           <form id="subscription-form">
             <TextField
               select
               required
               margin="dense"
               id="adminVerifed"
               name="adminVerifed"
               label="admin Verifed"
               variant="outlined"
               value={status}
               onChange={(e)=>{setStatus(e.target.value)}}
               sx={{
                 ...textFieldStyle,
                 width: {
                   xs: "12rem",
                   sm: "14rem",
                   md: "16rem",
                   lg: "20rem",
                 },
                 m: 1,
               }}
               SelectProps={{
                 MenuProps: {
                   container: document.body,
                   disablePortal: true,
                 },
               }}
             >
               <MenuItem value="true">verifed</MenuItem>
               <MenuItem value="false">not verifed</MenuItem>
             </TextField>
           </form>
         </DialogContent>
         {error?<ErrorComp erorr={error}/>:""}
   
         <DialogActions>
           <Button onClick={handleChangeEditLandlordFlag} sx={{ color: mainColor }}>cancel</Button>
           {loader?<Button
                     loading={true}
                     variant="outlined"
                     disabled
                   >
                     Disabled
                   </Button>:<Button
             type="submit"
             form="subscription-form"
             sx={buttonStyle}
             onClick={onedit}
             
           >
             edit
           </Button>}
           
         </DialogActions>
       </Dialog>
     );
}