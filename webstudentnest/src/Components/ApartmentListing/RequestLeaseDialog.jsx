import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Box, Button, Typography, CircularProgress
} from "@mui/material";
import ErrorComp from '../PublicComp/ErrorComp';
import { UseCreateLeaseRequest } from '../../Hooks/StudentHooks/UseCreateLeaseRequest';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext/AuthContext';

export default function RequestLeaseDialog({ 
  requestLeaseFlagDialog, 
  handleChangeRequestLeaseDialog, 
  apartmentId ,
}) {
  const primaryColor = "#3f51b5";
  
  
  const [requestMessage, setRequestMessage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [rentTerm, setRentTerm] = useState("");
  

  const [inputError, setInputError] = useState("");

  
  const { createLeaseRequest, loader, error } = UseCreateLeaseRequest();
  let navigate=useNavigate();
  let{token}=useAuth();

  const textFieldStyle = {
    mb: 2,
    "& label.Mui-focused": { color: primaryColor },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: primaryColor + "44" },
      "&:hover fieldset": { borderColor: primaryColor },
      "&.Mui-focused fieldset": { borderColor: primaryColor },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputError("");

    
    if (!startDate) {
      setInputError("Please select the date you intend to move in.");
      return;
    }
    if (!rentTerm || Number(rentTerm) <= 0) {
      setInputError("Please specify how many months you plan to stay.");
      return;
    }
    if (requestMessage.length < 10) {
      setInputError("Please write a short message (at least 10 characters) to the owner.");
      return;
    }
    if(token==null || token==""){
        navigate("/userlogin");
         return;
       }

    
    createLeaseRequest(apartmentId, requestMessage, startDate, rentTerm,handleChangeRequestLeaseDialog);
    
   
  };

  return (
    <Dialog 
      open={requestLeaseFlagDialog} 
      onClose={handleChangeRequestLeaseDialog} 
      fullWidth 
      maxWidth="xs" 
      PaperProps={{ sx: { borderRadius: 3 } }}
    >
      <DialogTitle sx={{ backgroundColor: primaryColor, color: "white", textAlign: "center", fontWeight: "bold" }}>
        Request to Lease
      </DialogTitle>
      
      <DialogContent dividers>
        <Box component="form" sx={{ mt: 1 }}>
          <Typography variant="body2" sx={{ mb: 2, color: 'gray' }}>
            Fill in the details below to send a lease request for this apartment
          </Typography>

          <TextField
            label="Start Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={startDate}
            onChange={(e) => { setStartDate(e.target.value); setInputError(""); }}
            sx={textFieldStyle}
          />

          <TextField
            label="Rent Term (Months)"
            type="number"
            placeholder="How many months?"
            fullWidth
            value={rentTerm}
            onChange={(e) => { setRentTerm(e.target.value); setInputError(""); }}
            sx={textFieldStyle}
          />

          <TextField
            label="Request Message"
            placeholder="Tell the Landlord a bit about yourself..."
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={requestMessage}
            onChange={(e) => { setRequestMessage(e.target.value); setInputError(""); }}
            sx={textFieldStyle}
          />

          
          {(inputError || error) && (
            <ErrorComp error={inputError || error} />
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2, px: 3 }}>
        <Button onClick={handleChangeRequestLeaseDialog} sx={{ color: '#888' }} disabled={loader}>
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit} 
          variant="contained" 
          disabled={loader}
          sx={{ 
            backgroundColor: primaryColor, 
            minWidth: 120,
            fontWeight: 'bold',
            boxShadow: 2,
            '&:hover': { backgroundColor: '#303f9f' }
          }}
        >
          {loader ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Send Request"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}