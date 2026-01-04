import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { UseAddDocument } from "../../Hooks/LandlordHook/UseAddDocument";
import ErrorComp from "../PublicComp/ErrorComp";

export default function AddDocumentDialog({ apartmentId, adddocumnetFlag, handlechangeAddDocumentFlag }) {
  const mainColor = "#3f51b5";
  const hoverColor = "#303f9f";

  const buttonStyle = {
    backgroundColor: mainColor,
    color: "white",
    fontWeight: "bold",
    "&:hover": { backgroundColor: hoverColor },
    textTransform: "none",
  };

  let { addDocument, loader, error } = UseAddDocument();
  const [documentImage, setDocumentImage] = useState(null);

  function handleDocumentImageChange(e) {
    setDocumentImage(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (documentImage) {
      addDocument(apartmentId, documentImage, handlechangeAddDocumentFlag);
    }
  }

  return (
    <Dialog
      open={adddocumnetFlag}
      onClose={handlechangeAddDocumentFlag}
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
      <DialogTitle
        sx={{
          fontWeight: "bold",
          color: "white",
          backgroundColor: mainColor,
          textAlign: "center",
          borderRadius: "12px 12px 0 0",
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
        }}
      >
        Add Document
      </DialogTitle>

      <DialogContent sx={{ mt: 2 }}>
        <form id="add-document-form" className="space-y-4" onSubmit={handleSubmit}>
          
          <Button
            variant="outlined"
            component="label"
            disabled={loader}
            sx={{
              width: "100%",
              marginTop: "1rem",
              borderColor: mainColor,
              color: mainColor,
              borderRadius: 2,
              "&:hover": { borderColor: hoverColor, color: hoverColor },
              textTransform: "none",
            }}
          >
            {documentImage ? "Change Document" : "Upload Document"}
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleDocumentImageChange}
            />
          </Button>

          
          {documentImage && (
            <div className="mt-3 flex justify-center">
              <img
                src={URL.createObjectURL(documentImage)}
                alt="document-preview"
                className="rounded-md shadow-md object-cover w-full max-w-xs h-40 sm:h-52"
              />
            </div>
          )}
        </form>
      </DialogContent>

      
      {error && (
        <div style={{ padding: '0 24px' }}>
          <ErrorComp error={error} />
        </div>
      )}

      <DialogActions sx={{ justifyContent: "space-between", p: 2 }}>
        <Button
          onClick={handlechangeAddDocumentFlag}
          disabled={loader}
          sx={{ color: mainColor, fontWeight: "bold", textTransform: "none" }}
        >
          Cancel
        </Button>

        
        {loader ? (
          <Button variant="outlined" disabled startIcon={<CircularProgress size={20} />}>
            Uploading...
          </Button>
        ) : (
          <Button 
            type="submit" 
            form="add-document-form" 
            sx={buttonStyle}    
          >
            Save Document
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}