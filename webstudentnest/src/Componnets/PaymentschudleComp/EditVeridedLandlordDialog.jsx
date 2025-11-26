import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";

export default function EditVeridedLandlordDialog({EditVeridedLandlordFlag,handlechangeEditVeridedLandlordFlag,paymentId}) {
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
    <Dialog style={{ zIndex: "12345675" }} open={EditVeridedLandlordFlag}>
      <DialogTitle sx={{ color: "black", fontWeight: "bold" }}>
        verifed payment
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
          >
            <MenuItem value="verifed">verifed</MenuItem>
          </TextField>
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={handlechangeEditVeridedLandlordFlag} sx={{ color: mainColor }}>cancel</Button>
        <Button
          type="submit"
          form="subscription-form"
          sx={buttonStyle}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          edit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
