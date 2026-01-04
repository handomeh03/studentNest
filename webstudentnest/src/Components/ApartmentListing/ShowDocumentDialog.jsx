import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorComp from '../PublicComp/ErrorComp';
import { Box, Typography, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // تأكد من تثبيت icons

export default function ShowDocumentDialog({ showDocumentFLag, handleChangeShowDocumnetFlag, document, error }) {
  
  return (
    <Dialog
      open={showDocumentFLag}
      onClose={handleChangeShowDocumnetFlag}
      aria-labelledby="alert-dialog-title"
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
        }
      }}
    >
      
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          background: 'linear-gradient(135deg, #3f51b5 0%, #1a237e 100%)',
          color: '#fff',
          textAlign: 'center',
          py: 2.5,
          position: 'relative'
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
          DOCUMENT 
        </Typography>
        <IconButton
          onClick={handleChangeShowDocumnetFlag}
          sx={{ position: 'absolute', right: 8, top: 8, color: '#fff' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        {error ? (
          <Box sx={{ p: 4 }}>
             <ErrorComp error={"No document found or failed to load."} />
          </Box>
        ) : (
          <Box>
            
            <Box 
              sx={{ 
                width: '100%', 
                backgroundColor: '#f5f5f5', 
                display: 'flex', 
                justifyContent: 'center',
                borderBottom: '1px solid #eee',
                p: 1
              }}
            >
              <Box
                component="img"
                src={document?.documentUrl}
                alt="Document"
                sx={{
                  width: '90%',
                  height: 'auto',
                  maxHeight: '350px',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  my: 2,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.02)' },
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
              />
            </Box>

            {/* تفاصيل المستند */}
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                 <Typography variant="body2" color="text.secondary">Document Type</Typography>
                 <Typography variant="body2" fontWeight="700" color="primary">{document?.apartmentType || 'N/A'}</Typography>
              </Box>
              <Divider sx={{ my: 1, borderStyle: 'dashed' }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                 <Typography variant="body2" color="text.secondary">Uploaded Date</Typography>
                 <Typography variant="body2" fontWeight="600">2025-11-14</Typography>
              </Box>
            </Box>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 2, justifyContent: 'center', backgroundColor: '#fafafa' }}>
        <Button
          onClick={handleChangeShowDocumnetFlag}
          variant="contained"
          fullWidth
          sx={{ 
            borderRadius: '10px',
            py: 1.2,
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(63, 81, 181, 0.3)',
            backgroundColor: '#3f51b5', 
            '&:hover': { backgroundColor: '#303f9f', boxShadow: 'none' } 
          }}
        >
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}