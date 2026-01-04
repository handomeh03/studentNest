import { useState, useEffect } from "react";
import { 
  Button, TextField, Dialog, DialogActions, 
  DialogContent, DialogTitle, Box, Typography, CircularProgress 
} from "@mui/material";
import ErrorComp from "../PublicComp/ErrorComp";
import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";
import { UseEditApartment } from "../../Hooks/LandlordHook/UseEditApartment";

export default function EditDetailsDialog({ editDetailsFlag, handleChangeEditdetailFlag, apartmentId }) {
  const primaryColor = "#3f51b5";
  
  const { Apartments } = UseApatment();
  const [inputError, setInputError] = useState("");
  
  
  const { editApartment, loader, error } = UseEditApartment();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); 
  const [address, setAddress] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [beds, setBeds] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (editDetailsFlag && apartmentId) {
      const apartment = Apartments.find((a) => a.apartmentId === apartmentId);
      if (apartment) {
        setTitle(apartment.title || "");
        setDescription(apartment.description || "");
        setAddress(apartment.address || "");
        setMonthlyPrice(apartment.price || "");
        setBedrooms(apartment.numberOfRoom || "");
        setBeds(apartment.numberOfBed || "");
        setIsJoined(apartment.isJoin || false);
      }
    }
    
    setInputError("");
  }, [editDetailsFlag, apartmentId, Apartments]);

  const textFieldStyle = {
    mb: 2,
    "& label.Mui-focused": { color: primaryColor },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: primaryColor + "44" },
      "&:hover fieldset": { borderColor: primaryColor },
      "&.Mui-focused fieldset": { borderColor: primaryColor },
    },
  };

  function handleChangeImages(e) {
    if (e.target.files.length > 0) {
      setImages([...e.target.files]);
      setInputError(""); 
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInputError("");

    if (title.length < 10) return setInputError("Apartment title must be at least 10 characters long");
    if (description.length < 20) return setInputError("Description must be at least 20 characters long");
    if (address.length < 3) return setInputError("Please enter a valid detailed address");
    if (!monthlyPrice || Number(monthlyPrice) <= 0) return setInputError("Monthly price must be a positive number");
    if (images.length < 1) return setInputError("Please upload at least one image of the apartment");

   
    editApartment(apartmentId, title, description, address, monthlyPrice, beds, bedrooms, isJoined, images, handleChangeEditdetailFlag);
  }

  return (
    <Dialog 
      open={editDetailsFlag} 
      onClose={!loader ? handleChangeEditdetailFlag : undefined} 
      fullWidth 
      maxWidth="sm" 
      PaperProps={{ sx: { borderRadius: 3 } }}
    >
      <DialogTitle sx={{ backgroundColor: primaryColor, color: "white", textAlign: "center", fontWeight: "bold" }}>
        Edit Apartment Details
      </DialogTitle>
      
      <DialogContent dividers>
        <Box component="form" id="edit-apartment-form" sx={{ mt: 1 }}>
          
          <TextField
            label="Apartment Title"
            fullWidth
            variant="outlined"
            value={title}
            onChange={(e) => { setTitle(e.target.value); setInputError(""); }}
            sx={textFieldStyle}
            disabled={loader}
          />

          <TextField
            label="Description"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            value={description}
            onChange={(e) => { setDescription(e.target.value); setInputError(""); }}
            sx={textFieldStyle}
            disabled={loader}
          />

          <TextField
            label="Address"
            fullWidth
            variant="outlined"
            value={address}
            onChange={(e) => { setAddress(e.target.value); setInputError(""); }}
            sx={textFieldStyle}
            disabled={loader}
          />

          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Price (Monthly)"
              type="number"
              fullWidth
              value={monthlyPrice}
              onChange={(e) => { setMonthlyPrice(e.target.value); setInputError(""); }}
              sx={textFieldStyle}
              disabled={loader}
            />
            <TextField
              label="Bedrooms"
              type="number"
              fullWidth
              value={bedrooms}
              onChange={(e) => { setBedrooms(e.target.value); setInputError(""); }}
              sx={textFieldStyle}
              disabled={loader}
            />
          </Box>

          <TextField
            label="Number of Beds"
            type="number"
            fullWidth
            value={beds}
            onChange={(e) => { setBeds(e.target.value); setInputError(""); }}
            sx={textFieldStyle}
            disabled={loader}
          />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, p: 1.5, border: '1px solid #ddd', borderRadius: 1 }}>
            <input
              type="checkbox"
              style={{ width: 18, height: 18, cursor: 'pointer' }}
              checked={isJoined}
              onChange={() => { setIsJoined(!isJoined); setInputError(""); }}
              id="joined-edit"
              disabled={loader}
            />
            <Typography variant="body2" component="label" htmlFor="joined-edit" sx={{ cursor: loader ? 'default' : 'pointer', color: loader ? 'text.disabled' : 'inherit' }}>
              Is this a joined apartment?
            </Typography>
          </Box>

          <Button
            variant="outlined"
            component="label"
            fullWidth
            disabled={loader}
            sx={{ mb: 1, borderStyle: 'dashed', py: 1.5, color: loader ? 'text.disabled' : primaryColor, borderColor: loader ? 'text.disabled' : primaryColor }}
          >
             Update Images
            <input hidden accept="image/*" type="file" multiple onChange={handleChangeImages} />
          </Button>

          {images.length > 0 && (
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, my: 2 }}>
              {Array.from(images).map((img, idx) => {
               
                const imgSrc = typeof img === 'string' ? img : URL.createObjectURL(img);
                return (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt="preview"
                    style={{ width: '100%', height: 60, objectFit: 'cover', borderRadius: 4, opacity: loader ? 0.6 : 1 }}
                  />
                );
              })}
            </Box>
          )}

        </Box>
        
        <div className="mt-3">
          {/* عرض خطأ التحقق من المدخلات أو خطأ السيرفر القادم من الهوك */}
          {(inputError || error) && <ErrorComp error={inputError || error} />}
        </div>
      </DialogContent>

      <DialogActions sx={{ p: 2, px: 3 }}>
        <Button 
          onClick={handleChangeEditdetailFlag} 
          disabled={loader}
          sx={{ color: '#888' }}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit} 
          variant="contained" 
          disabled={loader}
          sx={{ 
            backgroundColor: primaryColor, 
            minWidth: 140,
            fontWeight: 'bold',
            boxShadow: 2,
            '&:hover': { backgroundColor: '#303f9f' }
          }}
        >
          {loader ? <CircularProgress size={24} color="inherit" /> : "Save Changes"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}