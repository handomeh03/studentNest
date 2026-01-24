import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  IconButton,
  Alert,
  Fade
} from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ErrorComp from "../PublicComp/ErrorComp";
import { UseCreateLease } from "../../Hooks/StudentHooks/UseCreateLease";

export default function CreateLeaseDialog({
  leaseReqId,
  createLeaseFlag,
  handleChangeCreateLeaseFlag,
}) {
  const mainColor = "#3f51b5";
  const hoverColor = "#283593";

  let { loader, error, createLease } = UseCreateLease();

  const handleSubmit = () => {
    createLease(leaseReqId,handleChangeCreateLeaseFlag);
  };

  return (
    <Dialog
      open={createLeaseFlag}
      onClose={handleChangeCreateLeaseFlag}
      TransitionComponent={Fade}
      transitionDuration={400}
      maxWidth="xs"
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "16px",
          padding: "12px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
        },
      }}
    >
      
      <IconButton
        onClick={handleChangeCreateLeaseFlag}
        sx={{ position: 'absolute', right: 16, top: 16, color: '#9e9e9e' }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <DialogTitle sx={{ textAlign: 'center', pt: 3 }}>
        <Box
          sx={{
            backgroundColor: 'rgba(63, 81, 181, 0.1)',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
          }}
        >
          <InfoOutlinedIcon sx={{ color: mainColor, fontSize: '32px' }} />
        </Box>
        <Typography variant="h6" fontWeight="800" sx={{ color: '#1a237e' }}>
          Create New Lease
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ textAlign: 'center', pb: 0 }}>
        <Typography variant="body1" sx={{ color: '#546e7a', mb: 3 }}>
          Are you sure you want to finalize the lease for this apartment?
        </Typography>

        
        <Alert 
          severity="info" 
          variant="outlined"
          sx={{ 
            borderRadius: '12px', 
            textAlign: 'left',
            borderColor: '#e3f2fd',
            backgroundColor: '#fafafa',
            '& .MuiAlert-icon': { color: mainColor }
          }}
        >
          <Typography variant="caption" sx={{ lineHeight: 1.6, color: '#455a64', fontWeight: 500 }}>
            <strong>Note:</strong> Your lease status remains <b>'Pending'</b> until the first payment. 
            Late payments may result in losing your reservation.
          </Typography>
        </Alert>

        {error && (
          <Box mt={2}>
            <ErrorComp error={error || "Could not create lease"} />
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", gap: 2, px: 3, py: 4 }}>
        <Button
          onClick={handleChangeCreateLeaseFlag}
          variant="text"
          sx={{
            color: '#78909c',
            fontWeight: 'bold',
            textTransform: "none",
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          Cancel
        </Button>
        
        <Button
          disabled={loader}
          onClick={handleSubmit}
          variant="contained"
          elevation={0}
          sx={{
            backgroundColor: mainColor,
            color: "white",
            px: 4,
            py: 1,
            borderRadius: '10px',
            textTransform: "none",
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(63, 81, 181, 0.3)',
            "&:hover": {
              backgroundColor: hoverColor,
              boxShadow: '0 6px 16px rgba(63, 81, 181, 0.4)',
            },
          }}
        >
          {loader ? "Processing..." : "Confirm & Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}