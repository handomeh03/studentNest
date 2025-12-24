import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorComp from '../PublicComp/ErrorComp';
export default function ShowDocumentDialog({showDocumentFLag,handleChangeShowDocumnetFlag,document,error}){
  
    return(
  <div>
    {error?<ErrorComp error={"no document found"}/>:<Dialog
  open={showDocumentFLag}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
  fullWidth
  maxWidth="sm"
>
  <DialogTitle
    id="alert-dialog-title"
    sx={{ 
      backgroundColor: '#3f51b5', 
      color: '#fff', 
      textAlign: 'center',
      fontWeight: 'bold'
    }}
  >
    Document Details
  </DialogTitle>
  
  <DialogContent
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      p: 2
    }}
  >
    
    <img 
      src={document?.documentUrl} 
      alt="Document"
      style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'contain', borderRadius: '8px' }}
    />

    
    <DialogContentText
      id="alert-dialog-description"
      sx={{ textAlign: 'center', wordBreak: 'break-word', color: '#3f51b5', fontWeight: '500' }}
    >
      <strong>Type:</strong> {document?.apartmentType} <br />
      <strong>Uploaded at:</strong> 2025-11-14 17:00
    </DialogContentText>
  </DialogContent>
  
  <DialogActions sx={{ justifyContent: 'center' }}>
    <Button 
      onClick={handleChangeShowDocumnetFlag} 
      sx={{ backgroundColor: '#3f51b5', color: '#fff', '&:hover': { backgroundColor: '#303f9f' } }}
    >
      Close
    </Button>
  </DialogActions>
</Dialog>}
  </div>


    );
}