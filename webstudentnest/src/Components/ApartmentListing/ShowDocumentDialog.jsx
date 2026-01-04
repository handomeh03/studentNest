import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorComp from '../PublicComp/ErrorComp';

export default function ShowDocumentDialog({ showDocumentFLag, handleChangeShowDocumnetFlag, document, error }) {
  
  return (
    <Dialog
      open={showDocumentFLag}
      onClose={handleChangeShowDocumnetFlag}
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
          p: 2,
          mt: 2
        }}
      >
        
        {error ? (
          <ErrorComp error={"No document found or failed to load."} />
        ) : (
          <>
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
          </>
        )}
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          onClick={handleChangeShowDocumnetFlag}
          sx={{ 
            backgroundColor: '#3f51b5', 
            color: '#fff', 
            px: 4,
            '&:hover': { backgroundColor: '#303f9f' } 
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}