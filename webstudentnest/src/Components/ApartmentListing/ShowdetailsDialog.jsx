import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";

export default function Showdetailsdialog({
  showdetailsFlag,
  handlechageShowDetailsFlag,
}) {
  let x = true;

  let [images] = useState([
    {
      img: "/people.png",
    },
    {
      img: "/people.png",
    },
    {
      img: "/people.png",
    },
    {
      img: "/people.png",
    },
  ]);

  return (
    <Dialog open={showdetailsFlag} fullWidth maxWidth="md">
      <DialogTitle
        sx={{
          backgroundColor: "#3f51b5",
          color: "#fff",
          textAlign: "center",
          fontSize: "20px",
          paddingY: 2,
        }}
      >
        Apartment Details
      </DialogTitle>

      <DialogContent
        sx={{
          padding: 0,
          overflowX: "hidden",
        }}
      >
        <div className="p-4 sm:p-6">
          {/* -------- Image Gallery -------- */}
          <div className="w-full max-w-xl mx-auto">
            <TabGroup className="flex flex-col-reverse">
              {/* Thumbnails */}
              <div className="mt-4 hidden sm:block">
                <TabList className="grid grid-cols-4 gap-3">
                  {images.map((img, idx) => (
                    <Tab
                      key={idx}
                      className="group relative flex h-20 cursor-pointer items-center justify-center 
                  rounded-md bg-white shadow hover:bg-gray-50"
                    >
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <img
                          src={img.img}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-md 
                    ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
                      />
                    </Tab>
                  ))}
                </TabList>
              </div>

              {/* Main Image */}
              <TabPanels>
                {images.map((img, idx) => (
                  <TabPanel key={idx}>
                    <img
                      src={img.img}
                      className="w-full max-h-[340px] sm:max-h-[420px] object-cover rounded-lg shadow"
                    />
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>

          {/*  Apartment Info  */}
          <div className="mt-8 text-gray-800 space-y-6">
            {/* Title */}
            <h2 className="text-3xl font-bold">{x.location || "Amman"}</h2>

            {/* Price */}
            <p className="text-2xl font-semibold text-indigo-600">
              100 JOD / month
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Bedrooms</span>
                <span className="font-semibold text-[15px]">100</span>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Beds</span>
                <span className="font-semibold text-[15px]">10</span>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Landlord</span>
                <span className="font-semibold text-[15px]">jameel</span>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Joined</span>
                <span
                  className={`font-semibold text-[15px] ${
                    x.isJoined ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {x.isJoined ? "Yes" : "No"}
                </span>
              </div>
            </div>

            {/* Location Map */}
            <div className="pt-6 border-t">
              <h3 className="font-semibold text-gray-700 mb-2 text-lg">
                Location
              </h3>

              <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=31.963158,35.930359&z=15&output=embed`}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", paddingBottom: 2 }}>
        <Button
          onClick={handlechageShowDetailsFlag}
          sx={{
            backgroundColor: "#3f51b5",
            color: "#fff",
            fontWeight: "bold",
            px: 5,
            "&:hover": { backgroundColor: "#303f9f" },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
