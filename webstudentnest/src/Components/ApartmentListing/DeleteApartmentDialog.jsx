import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import { UseDeleteApartment } from '../../Hooks/AdminHooks/UseDeleteApartment';
import ErrorComp from '../PublicComp/ErrorComp';

export default function DeleteApartmentDialog({handleChangeDeleteDialogFlag,deleteDialogFlag,apartmentId}) {
  const mainColor = "#3f51b5"; 
  const hoverColor = "#5c6bc0";
  const cancelColor = "#000"; 

  let{DeleteApartment,loader,error}=UseDeleteApartment();

  return (
    <React.Fragment>
      <Dialog
        open={deleteDialogFlag}
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
          {"Are you sure you want to delete this apartment?"}
        </DialogTitle>

        <DialogContent></DialogContent>
        {error?<ErrorComp error={error || "no apartment found"}/>:""}

        <DialogActions sx={{ justifyContent: "space-between", px: 3, pb: 2 }}>
          <Button
             onClick={handleChangeDeleteDialogFlag}
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
         {loader?<Button
                              loading={true}
                              variant="outlined"
                              disabled
                            >
                              Disabled
                            </Button>:<Button
            autoFocus
            onClick={(e)=>{
                e.preventDefault();
                handleChangeDeleteDialogFlag();
                DeleteApartment(apartmentId)
            }}
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
          </Button>}
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}