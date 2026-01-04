import { useState } from "react";
import { 
  Button, TextField, Dialog, DialogActions, 
  DialogContent, DialogTitle, Box, Typography, Alert, CircularProgress 
} from "@mui/material";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { UseAddApartment } from "../../Hooks/LandlordHook/AddApartmentHook";
import ErrorComp from "../PublicComp/ErrorComp";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function AddApartmentDialog({ addApartmentflag, handlechangeAddApartemntFlag }) {
  const primaryColor = "#3f51b5";

  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); 
  const [address, setAddress] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [beds, setBeds] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [images, setImages] = useState([]);
  const [position, setPosition] = useState([31.9454, 35.9284]);

  
  const [inputError, setInputError] = useState(""); 
  const { addapartment, loader, error,setError } = UseAddApartment();

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
    setImages([...e.target.files]);
    setInputError(""); 
  }

  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return <Marker position={position}></Marker>;
  }

  
  function handleSubmit(e) {
    e.preventDefault();
    setInputError(""); 
      setError("");

    if (title.length < 10) {
      setInputError("Apartment title must be at least 10 characters long");
      return;
    }
    if (description.length < 20) {
      setInputError("Description must be at least 20 characters long");
      return;
    }
    if (address.length < 3) {
      setInputError("Please enter a valid detailed address");
      return;
    }
    if (!monthlyPrice || Number(monthlyPrice) <= 0) {
      setInputError("Monthly price must be a positive number");
      return;
    }
    if (!bedrooms || Number(bedrooms) <= 0) {
      setInputError("Please specify number of bedrooms");
      return;
    }
    if (!beds || Number(beds) <= 0) {
      setInputError("Please specify number of beds");
      return;
    }
    if (images.length > 6 || images.length === 0) {
      setInputError("Please upload between 1 and 6 images");
      return;
    }
    addapartment(title, description, monthlyPrice, address, beds, bedrooms, true, isJoined, position, images,handlechangeAddApartemntFlag);
  }

  return (
    <Dialog 
      open={addApartmentflag} 
      fullWidth 
      maxWidth="sm" 
      PaperProps={{ sx: { borderRadius: 3 } }}
    >
      <DialogTitle sx={{ backgroundColor: primaryColor, color: "white", textAlign: "center", fontWeight: "bold" }}>
        Add New Apartment
      </DialogTitle>
      
      <DialogContent dividers>
        <Box component="form" id="apartment-form" sx={{ mt: 1 }}>
          

          <TextField
            label="Apartment Title"
            fullWidth
            variant="outlined"
            value={title}
            onChange={(e) => { setTitle(e.target.value); setInputError(""); setError(""); }}
            sx={textFieldStyle}
          />

          <TextField
            label="Description"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            value={description}
            onChange={(e) => { setDescription(e.target.value); setInputError(""); setError(""); }}
            sx={textFieldStyle}
          />

          <TextField
            label="Address"
            fullWidth
            variant="outlined"
            value={address}
            onChange={(e) => { setAddress(e.target.value); setInputError(""); setError(""); }}
            sx={textFieldStyle}
          />

          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Price (Monthly)"
              type="number"
              fullWidth
              value={monthlyPrice}
              onChange={(e) => { setMonthlyPrice(e.target.value); setInputError(""); setError(""); }}
              sx={textFieldStyle}
            />
            <TextField
              label="Bedrooms"
              type="number"
              fullWidth
              value={bedrooms}
              onChange={(e) => { setBedrooms(e.target.value); setInputError(""); setError(""); }}
              sx={textFieldStyle}
            />
          </Box>

          <TextField
            label="Number of Beds"
            type="number"
            fullWidth
            value={beds}
            onChange={(e) => { setBeds(e.target.value); setInputError("");  setError(""); }}
            sx={textFieldStyle}
          />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, p: 1.5, border: '1px solid #ddd', borderRadius: 1 }}>
            <input
              type="checkbox"
              style={{ width: 18, height: 18, cursor: 'pointer' }}
              checked={isJoined}
              onChange={() => {setIsJoined(!isJoined); setInputError(""); setError("")} }
              id="joined"
            />
            <Typography variant="body2" component="label" htmlFor="joined" sx={{ cursor: 'pointer' }}>
              Is this a joined apartment?
            </Typography>
          </Box>

          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={{ mb: 1, borderStyle: 'dashed', py: 1.5 }}
          >
             Upload Images
            <input hidden accept="image/*" type="file" multiple onChange={(e)=>{
              handleChangeImages(e);
           setInputError("");
           setError("");
            }} />
          </Button>

          {images.length > 0 && (
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, my: 2 }}>
              {Array.from(images).map((img, idx) => (
                <img
                  key={idx}
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  style={{ width: '100%', height: 60, objectFit: 'cover', borderRadius: 4 }}
                />
              ))}
            </Box>
          )}

          <Typography variant="subtitle2" sx={{ mt: 2, mb: 1, fontWeight: 'bold', color: '#555' }}>
            Pin Location:
          </Typography>
          <Box sx={{ height: 200, width: "100%", borderRadius: 2, overflow: 'hidden', border: '1px solid #ccc' }}>
            <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <LocationMarker />
            </MapContainer>
          </Box>
        </Box>
        
         <div className="mt-3">
          {(error || inputError) && (
          <ErrorComp  error={error || inputError} />
        )}
         </div>
      </DialogContent>

      <DialogActions sx={{ p: 2, px: 3 }}>
        <Button onClick={handlechangeAddApartemntFlag} disabled={loader} sx={{ color: '#888' }}>
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
            boxShadow: 2 
          }}
        >
          {loader ? <CircularProgress size={24} color="inherit" /> : "Add Apartment"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}