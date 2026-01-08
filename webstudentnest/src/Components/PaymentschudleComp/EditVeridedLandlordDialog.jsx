import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorComp from "../PublicComp/ErrorComp"; // Using your shared error component
import { UseEditLandlordVerifedForPayment } from "../../Hooks/LandlordHook/UseEditLandolrdVerifedForPayment";

export default function EditVeridedLandlordDialog({
  EditVeridedLandlordFlag,
  handlechangeEditVeridedLandlordFlag,
  paymentId,
  leaseId
}) {
  const mainColor = "#4f46e5"; // Indigo 600
  const hoverColor = "#4338ca"; // Indigo 700

  const [status, setStatus] = useState("Accept");
  const { EditLandlordVerifed, loader, error } = UseEditLandlordVerifedForPayment();

  function handleSubmit() {
    EditLandlordVerifed(leaseId,paymentId, status, handlechangeEditVeridedLandlordFlag);
  }

  return (
    <Dialog
      open={EditVeridedLandlordFlag}
      onClose={handlechangeEditVeridedLandlordFlag}
      fullWidth
      maxWidth="xs"
      sx={{
        zIndex: "12345675",
        "& .MuiPaper-root": {
          borderRadius: "16px",
          padding: "8px",
          boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "800",
          fontSize: "1.25rem",
          color: "#111827",
          pt: 3,
        }}
      >
        Verify Payment
      </DialogTitle>

      <DialogContent>
        <p style={{ textAlign: "center", color: "#6b7280", fontSize: "0.875rem", marginBottom: "24px" }}>
          Update the verification status for this landlord payment
        </p>

        <form id="landlord-verify-form">
          <TextField
            select
            fullWidth
            required
            id="status"
            name="status"
            label="Payment Status"
            variant="outlined"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            SelectProps={{
              MenuProps: {
                sx: { zIndex: "12345676" }, 
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
            <MenuItem value="Accept" sx={{ py: 1.5, fontWeight: 500 }}>
              <span style={{ color: "#10b981", marginRight: "8px" }}>●</span> Accept
            </MenuItem>
            <MenuItem value="Reject" sx={{ py: 1.5, fontWeight: 500 }}>
              <span style={{ color: "#ef4444", marginRight: "8px" }}>●</span> Reject
            </MenuItem>
          </TextField>
        </form>
      </DialogContent>

      {error && (
        <div style={{ padding: "0 24px" }}>
          <ErrorComp error={error} />
        </div>
      )}

      <DialogActions sx={{ p: 3, pt: 1, justifyContent: "space-between" }}>
        <Button
          onClick={handlechangeEditVeridedLandlordFlag}
          sx={{
            color: "#6b7280",
            fontWeight: "600",
            textTransform: "none",
            fontSize: "0.95rem",
            "&:hover": { backgroundColor: "#f3f4f6" },
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
            form="landlord-verify-form"
            variant="contained"
            disableElevation
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            sx={{
              backgroundColor: mainColor,
              borderRadius: "10px",
              px: 4,
              py: 1,
              fontWeight: "600",
              textTransform: "none",
              fontSize: "0.95rem",
              "&:hover": { backgroundColor: hoverColor },
            }}
          >
            Confirm Edit
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}