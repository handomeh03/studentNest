import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet marker icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function AddApartmentDialog({ addApartmentflag, handlechangeAddApartemntFlag }) {
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
  const [images, setImages] = useState([]);
  const [position, setPosition] = useState([31.9454, 35.9284]); 

  function handleChangeImages(e) {
    setImages([...e.target.files]);
  }

  // Component to handle map click and set marker
  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return <Marker position={position}></Marker>;
  }

  return (
    <Dialog open={addApartmentflag} fullWidth maxWidth="sm">
      <DialogTitle sx={{ backgroundColor: primaryColor, color: "white", textAlign: "center" }}>
        Add Apartment
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

          <Button
            variant="outlined"
            component="label"
            sx={{ mt: 2, color: primaryColor, borderColor: primaryColor }}
          >
            Upload Images
            <input hidden accept="image/*" type="file" multiple onChange={handleChangeImages} />
          </Button>

          {images.length > 0 && (
            <div className="mt-2 grid grid-cols-2 gap-2">
              {Array.from(images).map((img, idx) => (
                <img
                  key={idx}
                  src={URL.createObjectURL(img)}
                  alt={`apartment-${idx}`}
                  className="w-full h-24 object-cover rounded-md"
                />
              ))}
            </div>
          )}

          {/* Map */}
          <div className="mt-4 h-64 w-full">
            <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <LocationMarker />
            </MapContainer>
            <p className="text-sm text-gray-500 mt-1">
              Click on the map to set apartment location (lat: {position[0].toFixed(5)}, lng: {position[1].toFixed(5)})
            </p>
          </div>
        </form>
      </DialogContent>

      <DialogActions>
        <Button sx={{ color: primaryColor }} onClick={handlechangeAddApartemntFlag}>
          Cancel
        </Button>
        <Button type="submit" form="apartment-form" sx={buttonStyle}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
