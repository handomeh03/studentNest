import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";

export default function EditDocumentDialog({editDocumentDialog,handleChangeEditDocumentDialog}){
    const mainColor = "#3f51b5";
      const hoverColor = "#303f9f";
    
      const textFieldStyle = {
        "& label.Mui-focused": { color: mainColor },
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: mainColor + "99" },
          "&:hover fieldset": { borderColor: mainColor },
          "&.Mui-focused fieldset": { borderColor: mainColor },
        },
        "& .MuiInputBase-input": { fontSize: "0.95rem" },
      };
    
      const buttonStyle = {
        backgroundColor: mainColor,
        color: "white",
        fontWeight: "bold",
        "&:hover": { backgroundColor: hoverColor },
        textTransform: "none",
      };
    
      const [documentType, setDocumentType] = useState("");
      const [documentImage, setDocumentImage] = useState(null);
    
      function handleDocumentImageChange(e) {
        setDocumentImage(e.target.files[0]);
      }
    return(
     <Dialog
      open={editDocumentDialog}
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
        Edit Document
      </DialogTitle>

      <DialogContent sx={{ mt: 2 }}>
        <h2 style={{textAlign:"center",textTransform:"capitalize"}}>you cant edit if apartment is Verified</h2>
        <form id="add-document-form" className="space-y-4">
          {/* Document Type */}
          <TextField
            style={{marginTop:"1rem"}}
            select
            required
            fullWidth
            label="Document Type"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            variant="outlined"
            sx={textFieldStyle}
            SelectProps={{
              MenuProps: {
                disablePortal: true,
                anchorOrigin: { vertical: "bottom", horizontal: "left" },
              },
            }}
          >
            <MenuItem value="ID">ID</MenuItem>
            <MenuItem value="Lease">Lease</MenuItem>
            <MenuItem value="Contract">Contract</MenuItem>
          </TextField>

          {/* Upload Document Image */}
          <Button
            variant="outlined"
            component="label"
            sx={{
              width: "100%",
              marginTop:"1rem",
              borderColor: mainColor,
              color: mainColor,
              borderRadius: 2,
              "&:hover": { borderColor: hoverColor, color: hoverColor },
              textTransform: "none",
            }}
          >
            Upload Document
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleDocumentImageChange}
            />
          </Button>

          {/* Preview */}
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

      <DialogActions sx={{ justifyContent: "space-between", p: 2 }}>
        <Button
          onClick={handleChangeEditDocumentDialog}
          sx={{ color: mainColor, fontWeight: "bold", textTransform: "none" }}
        >
          Cancel
        </Button>
        <Button type="submit" form="add-document-form" sx={buttonStyle}>
          Edit
        </Button>
      </DialogActions>
    </Dialog>
    );
}