import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { UseDeleteLandlord } from '../../Hooks/AdminHooks/UsedeleteLandlord';
import ErrorComp from '../PublicComp/ErrorComp';

export default function DeleteLandlordDialog({deletelanlordFlag,handleChangeDeletelandlordDialog,landlordId}) {
  const mainColor = "#3f51b5"; 
  const hoverColor = "#5c6bc0";
  const cancelColor = "#000"; 

const {deleteLandlord,loader,error}=UseDeleteLandlord();

function ondeleteLandlord(e){
    e.preventDefault();
  deleteLandlord(landlordId,handleChangeDeletelandlordDialog);
}

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

         {error?<ErrorComp erorr={error}/>:""}

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
          {loader?<Button
          loading={true}
          variant="outlined"
          disabled
        >
          Disabled
        </Button>:
         <Button
            autoFocus
            onClick={ondeleteLandlord}
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
        }
      
         
        </DialogActions>
        
      </Dialog>
    
  );
}