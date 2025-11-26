import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteLandlordDialog({deletelanlordFlag,handleChangeDeletelandlordDialog}) {
  const mainColor = "#3f51b5"; 
  const hoverColor = "#5c6bc0";
  const cancelColor = "#000"; 

  return (
    
      <Dialog
        open={deletelanlordFlag}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "12px",
            padding: "8px",
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            color: cancelColor,
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          {"Are you sure you want to delete this Landlord?"}
        </DialogTitle>

        

        <DialogActions sx={{ justifyContent: "space-between", px: 3, pb: 2 }}>
          <Button
             onClick={handleChangeDeletelandlordDialog}
            sx={{
              color: cancelColor,
              border: "1px solid #ccc",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            Cancel
          </Button>

          <Button
            autoFocus
           
            sx={{
              backgroundColor: mainColor,
              color: "white",
              textTransform: "none",
              "&:hover": {
                backgroundColor: hoverColor,
              },
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    
  );
}