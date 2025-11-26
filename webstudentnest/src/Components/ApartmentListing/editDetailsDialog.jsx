import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function EditDetailsDialog({editDetailsFlag,handleChangeEditdetailFlag}){

    const primaryColor = "#3f51b5";

  const textFieldStyle = {
    "& label.Mui-focused": { color: primaryColor },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: primaryColor + "66" },
      "&:hover fieldset": { borderColor: primaryColor },
      "&.Mui-focused fieldset": { borderColor: primaryColor },
    },
  };

  const buttonStyle = {
    backgroundColor: primaryColor,
    color: "white",
    "&:hover": { backgroundColor: "#303f9f" },
  };
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [beds, setBeds] = useState("");
  const [isJoined, setIsJoined] = useState(false);
     
    return(
        <Dialog open={editDetailsFlag} fullWidth maxWidth="sm">
              <DialogTitle sx={{ backgroundColor: primaryColor, color: "white", textAlign: "center" }}>
                Edit Details
              </DialogTitle>
              <DialogContent>
                <form id="apartment-form" className="space-y-4">
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Title"
                    fullWidth
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={textFieldStyle}
                  />
        
                  <TextField
                    margin="dense"
                    label="Address"
                    fullWidth
                    variant="outlined"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    sx={textFieldStyle}
                  />
        
                  <TextField
                    margin="dense"
                    label="Monthly Price"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={monthlyPrice}
                    onChange={(e) => setMonthlyPrice(e.target.value)}
                    sx={textFieldStyle}
                  />
        
                  <TextField
                    margin="dense"
                    label="Number of Bedrooms"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    sx={textFieldStyle}
                  />
        
                  <TextField
                    margin="dense"
                    label="Number of Beds"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}
                    sx={textFieldStyle}
                  />
        
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="checkbox"
                      checked={isJoined}
                      onChange={() => setIsJoined(!isJoined)}
                      id="joined"
                    />
                    <label htmlFor="joined">Joined</label>
                  </div>
        
                
                 
                </form>
              </DialogContent>
        
              <DialogActions>
                <Button onClick={handleChangeEditdetailFlag} sx={{ color: primaryColor }} >
                  Cancel
                </Button>
                <Button type="submit" form="apartment-form" sx={buttonStyle}>
                  Edit
                </Button>
              </DialogActions>
            </Dialog>
    );
}