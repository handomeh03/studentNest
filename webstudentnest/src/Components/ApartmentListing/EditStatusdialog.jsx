import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import { UseEditStatusApartment } from "../../Hooks/AdminHooks/UseEditStatusApartment";
import { useState } from "react";
import ErrorComp from "../PublicComp/ErrorComp";



export default function EditStatusdialog({editDialogFlag,handleChangeEditdialogflag,apartmentId}) {
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
  let [verifed,setVerifed]=useState(true);
  let {editApartmentStatus,error,loader}=UseEditStatusApartment();


  return (
    <Dialog style={{ zIndex: "12345675" }} open={editDialogFlag}>
      <DialogTitle sx={{ color: "black", fontWeight: "bold" }}>
       Edit Status
      </DialogTitle>

      <DialogContent>
        <form id="subscription-form">
         

        <TextField
  select
  required
  margin="dense"
  id="status"
  name="status"
  label="status"
  variant="outlined"
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
  value={verifed}
  onChange={(e)=>{
    setVerifed(e.target.value);
  }}
>
  <MenuItem value={true}>verifed</MenuItem>
  <MenuItem value={false}>Not verifed </MenuItem>
  
</TextField>

        </form>
      </DialogContent>

      {error?<ErrorComp error={error}/>:""}

      <DialogActions>
        <Button onClick={handleChangeEditdialogflag} sx={{ color: mainColor }}>cancel</Button>
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
          onClick={(e)=>{
          
            handleChangeEditdialogflag();
            e.preventDefault();
            editApartmentStatus(apartmentId,verifed);
          }}
        >
          edit
        </Button>}
        
      </DialogActions>
    </Dialog>
  );
}

