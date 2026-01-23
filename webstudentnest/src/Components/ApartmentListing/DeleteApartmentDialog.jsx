import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Fade,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'; 
import ErrorComp from '../PublicComp/ErrorComp';
import { UseDeleteApartment } from '../../Hooks/AdminHooks/UseDeleteApartment';

export default function DeleteApartmentDialog({ handleChangeDeleteDialogFlag, deleteDialogFlag, apartmentId }) {
  const mainColor = "#d32f2f";
  const hoverColor = "#c62828";
  const cancelColor = "#546e7a"; 

  let { DeleteApartment, loader, error } = UseDeleteApartment();

  return (
    <React.Fragment>
      <Dialog
        open={deleteDialogFlag}
        TransitionComponent={Fade}
        aria-labelledby="alert-dialog-title"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "16px",
            padding: "10px",
            maxWidth: "400px"
          },
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              backgroundColor: 'rgba(211, 47, 47, 0.1)',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 10px',
            }}
          >
            <DeleteOutlineIcon sx={{ color: mainColor, fontSize: '35px' }} />
          </Box>
          <Typography variant="h6" fontWeight="bold">
            Confirm Deletion
          </Typography>
        </DialogTitle>

        <DialogContent sx={{ textAlign: 'center', py: 1 }}>
          <Typography variant="body1" color="textSecondary">
            Are you sure you want to delete this apartment? This action cannot be undone.
          </Typography>
        </DialogContent>

        {error ? <Box px={3}><ErrorComp error={error || "no apartment found"} /></Box> : ""}

        <DialogActions sx={{ justifyContent: "center", gap: 2, px: 3, pb: 3, pt: 2 }}>
          <Button
            onClick={handleChangeDeleteDialogFlag}
            sx={{
              color: cancelColor,
              fontWeight: 'bold',
              textTransform: "none",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              px: 3,
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            Cancel
          </Button>

          {loader ? (
            <Button 
              variant="outlined" 
              disabled 
              sx={{ borderRadius: "8px", px: 3, textTransform: "none" }}
            >
              Deleting...
            </Button>
          ) : (
            <Button
              autoFocus
              onClick={(e) => {
                e.preventDefault();
                handleChangeDeleteDialogFlag();
                DeleteApartment(apartmentId);
              }}
              sx={{
                backgroundColor: mainColor,
                color: "white",
                fontWeight: 'bold',
                textTransform: "none",
                borderRadius: "8px",
                px: 3,
                "&:hover": {
                  backgroundColor: hoverColor,
                },
              }}
            >
              Confirm
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}