import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";

export default function EditlandlordDialog({editlandlordFlag,handleChangeEditLandlordFlag}){
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
               <MenuItem value="verifed">verifed</MenuItem>
               <MenuItem value="notverifed">not verifed</MenuItem>
             </TextField>
           </form>
         </DialogContent>
   
         <DialogActions>
           <Button onClick={handleChangeEditLandlordFlag} sx={{ color: mainColor }}>cancel</Button>
           <Button
             type="submit"
             form="subscription-form"
             sx={buttonStyle}
             
           >
             edit
           </Button>
         </DialogActions>
       </Dialog>
     );
}