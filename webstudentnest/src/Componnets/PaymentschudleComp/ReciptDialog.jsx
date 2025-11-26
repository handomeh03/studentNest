import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
export default function ReciptDialog({ReciptDialogFlag,handlechangesetReciptDialogflag,paymentId}) {
     const mainColor = "#3f51b5";   
   
  return (
     <Dialog
      open={ReciptDialogFlag}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 2,
          "@media (max-width:600px)": { p: 1 },
        },
      }}
    >
    <div className="flex justify-center mt-4">
      <img
        src={"https://www.shutterstock.com/shutterstock/photos/2271572825/display_1500/stock-vector-set-of-realistic-sales-receipts-cash-receipts-bummy-silent-store-receipt-with-a-barcode-account-2271572825.jpg"}
        alt="receipt-preview"
        className="rounded-md shadow-md object-cover w-full max-w-xs h-100 sm:h-120"
      />
    </div>
     <DialogActions sx={{ justifyContent: "space-between", p: 2 }}>
            <Button
             onClick={handlechangesetReciptDialogflag}
              sx={{ color: mainColor, fontWeight: "bold", textTransform: "none" }}
            >
              close
            </Button>
          </DialogActions>
    </Dialog>
    
  );
}
