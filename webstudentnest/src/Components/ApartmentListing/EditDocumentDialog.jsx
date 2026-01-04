import { useState } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, CircularProgress, Box } from "@mui/material";
import { UseUpdateDocument } from "../../Hooks/LandlordHook/UseUpdateDocument";
import ErrorComp from "../PublicComp/ErrorComp";


export default function EditDocumentDialog({ editDocumentDialog, handleChangeEditDocumentDialog, apartmentId }) {
  const mainColor = "#3f51b5";
  const hoverColor = "#303f9f";


  const buttonStyle = {
    backgroundColor: mainColor,
    color: "white",
    fontWeight: "bold",
    minWidth: "100px",
    "&:hover": { backgroundColor: hoverColor },
    "&:disabled": { backgroundColor: "#ccc" },
    textTransform: "none",
  };

  
  const [documentImage, setDocumentImage] = useState(null);

  
  let { updateDocument, loader, error } = UseUpdateDocument();

  function handleDocumentImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setDocumentImage(e.target.files[0]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateDocument(apartmentId, documentImage, handleChangeEditDocumentDialog);
  }

  return (
    <Dialog
      open={editDocumentDialog}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: { borderRadius: 3, p: 2, "@media (max-width:600px)": { p: 1 } },
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
        Edit Document
      </DialogTitle>

      <DialogContent sx={{ mt: 2 }}>
        
       

        <h2 style={{ textAlign: "center", textTransform: "capitalize", color: "#666", marginBottom: "1rem" }}>
          You can't edit if apartment is Verified
        </h2>

        <form id="edit-document-form" onSubmit={handleSubmit} className="space-y-4">
       

          <Button
            variant="outlined"
            component="label"
            disabled={loader}
            sx={{
              width: "100%",
              mt: 2,
              borderColor: mainColor,
              color: mainColor,
              borderRadius: 2,
              "&:hover": { borderColor: hoverColor, color: hoverColor },
              textTransform: "none",
            }}
          >
            {documentImage ? "Change Image" : "Upload Document Image"}
            <input hidden accept="image/*" type="file" onChange={handleDocumentImageChange} />
          </Button>

          {documentImage && (
            <Box mt={2} display="flex" justifyContent="center">
              <img
                src={URL.createObjectURL(documentImage)}
                alt="preview"
                className="rounded-md shadow-md object-cover w-full max-w-xs h-40 sm:h-52"
              />
            </Box>
          )}
        </form>
         {error && (
          <Box mb={2}>
            <ErrorComp error={error} />
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ justifyContent: "space-between", px: 3, pb: 2 }}>
        <Button
          onClick={handleChangeEditDocumentDialog}
          disabled={loader}
          sx={{ color: "#777", fontWeight: "bold", textTransform: "none" }}
        >
          Cancel
        </Button>
        
        <Button 
          type="submit" 
          form="edit-document-form" 
          sx={buttonStyle}
          
        >
          {loader ? (
            <CircularProgress size={24} sx={{ color: "white" }} />
          ) : (
            "Save Changes"
          )}
        </Button>
        
      </DialogActions>
    </Dialog>
  );
}