import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import { UseEditStatusApartment } from "../../Hooks/AdminHooks/UseEditStatusApartment";
import { useState } from "react";
import ErrorComp from "../PublicComp/ErrorComp";

export default function EditStatusdialog({ editDialogFlag, handleChangeEditdialogflag, apartmentId }) {
  // Modern Color Palette
  const mainColor = "#4f46e5"; // Indigo
  const hoverColor = "#4338ca";

  const [verifed, setVerifed] = useState(true);
  const { editApartmentStatus, error, loader } = UseEditStatusApartment();

  return (
    <Dialog 
      open={editDialogFlag} 
      onClose={handleChangeEditdialogflag}
      fullWidth 
      maxWidth="xs"
      // Added a custom zIndex for the dialog and ensured the Menu appears on top
      sx={{ 
        zIndex: "12345675",
        "& .MuiPaper-root": { 
          borderRadius: "16px", 
          padding: "8px",
          boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)"
        } 
      }}
    >
      <DialogTitle sx={{ 
        textAlign: "center", 
        fontWeight: "800", 
        fontSize: "1.25rem",
        color: "#111827",
        pt: 3
      }}>
        Edit Property Status
      </DialogTitle>

      <DialogContent>
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.875rem', marginBottom: '24px' }}>
          Update the verification status for this apartment.
        </p>
        
        <form id="status-form">
          <TextField
            select
            fullWidth
            required
            id="status"
            name="status"
            label="Verification Status"
            variant="outlined"
            value={verifed}
            onChange={(e) => setVerifed(e.target.value)}
            // FIX: This ensures the dropdown menu appears ABOVE the dialog
            SelectProps={{
              MenuProps: {
                sx: { zIndex: "12345676" } 
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "&.Mui-focused fieldset": { borderColor: mainColor },
              },
              "& label.Mui-focused": { color: mainColor },
            }}
          >
            <MenuItem value={true} sx={{ py: 1.5, fontWeight: 500 }}>
              <span style={{ color: '#10b981', marginRight: '8px' }}>●</span> Verified
            </MenuItem>
            <MenuItem value={false} sx={{ py: 1.5, fontWeight: 500 }}>
              <span style={{ color: '#ef4444', marginRight: '8px' }}>●</span> Not Verified
            </MenuItem>
          </TextField>
        </form>
      </DialogContent>

      {error && (
        <div style={{ padding: '0 24px' }}>
          <ErrorComp error={error} />
        </div>
      )}

      <DialogActions sx={{ p: 3, pt: 1, justifyContent: "space-between" }}>
        <Button 
          onClick={handleChangeEditdialogflag} 
          sx={{ 
            color: "#6b7280", 
            fontWeight: '600', 
            textTransform: 'none',
            fontSize: '0.95rem',
            "&:hover": { backgroundColor: "#f3f4f6" }
          }}
        >
          Cancel
        </Button>
        
        {loader ? (
          <Button variant="contained" disabled sx={{ borderRadius: "10px", px: 4, backgroundColor: "#e5e7eb" }}>
            <CircularProgress size={20} sx={{ color: mainColor }} />
          </Button>
        ) : (
          <Button
            type="submit"
            form="status-form"
            variant="contained"
            disableElevation
            onClick={(e) => {
              e.preventDefault();
              editApartmentStatus(apartmentId, verifed, handleChangeEditdialogflag);
            }}
            sx={{
              backgroundColor: mainColor,
              borderRadius: "10px",
              px: 4,
              py: 1,
              fontWeight: '600',
              textTransform: 'none',
              fontSize: '0.95rem',
              "&:hover": { backgroundColor: hoverColor },
            }}
          >
            Save Changes
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}