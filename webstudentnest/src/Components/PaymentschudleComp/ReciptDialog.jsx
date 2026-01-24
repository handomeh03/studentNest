import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close"; 
import ErrorComp from "../PublicComp/ErrorComp";

export default function ReciptDialog({
  ReciptDialogFlag,
  handlechangesetReciptDialogflag,
  error,
  receipt,
}) {
  const mainColor = "#4f46e5"; 
  
 
  

  return (
    <Dialog
      open={ReciptDialogFlag}
      onClose={handlechangesetReciptDialogflag}
      fullWidth
      maxWidth="xs" 
      sx={{
        zIndex: "12345675",
        "& .MuiPaper-root": {
          borderRadius: "16px",
          padding: "8px",
          boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1)",
        },
      }}
    >
      
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pr: 1, pt: 1 }}>
        <DialogTitle sx={{ fontWeight: "800", fontSize: "1.2rem", color: "#111827" }}>
          Payment Receipt
        </DialogTitle>
        <IconButton onClick={handlechangesetReciptDialogflag} sx={{ color: "#9ca3af" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {error ? (
          <ErrorComp error={error} />
        ) : (
          <>
            <Typography variant="body2" sx={{ color: "#6b7280", mb: 3, textAlign: "center" }}>
              View the uploaded transaction proof below
            </Typography>

            <Box
              sx={{
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #e5e7eb",
                backgroundColor: "#f9fafb",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={receipt?.ReceiptUrl}
                alt="receipt-preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "450px",
                  objectFit: "contain",
                }}
              />
            </Box>
          </>
        )}
      </Box>

      
      <DialogActions sx={{ p: 2, justifyContent: "center" }}>
        <Button
          onClick={handlechangesetReciptDialogflag}
          variant="outlined"
          sx={{
            px: 4,
            py: 1,
            borderRadius: "10px",
            color: "#374151",
            borderColor: "#d1d5db",
            fontWeight: "600",
            textTransform: "none",
            "&:hover": {
              borderColor: mainColor,
              backgroundColor: "#f5f3ff",
              color: mainColor,
            },
          }}
        >
          Close Preview
        </Button>
      </DialogActions>
    </Dialog>
  );
}