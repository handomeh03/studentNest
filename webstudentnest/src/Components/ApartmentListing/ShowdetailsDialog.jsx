import {
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KingBedIcon from "@mui/icons-material/KingBed";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PersonIcon from "@mui/icons-material/Person";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import InfoIcon from "@mui/icons-material/Info";
import ErrorComp from "../PublicComp/ErrorComp";

export default function Showdetailsdialog({
  details,
  showdetailsFlag,
  handlechageShowDetailsFlag,
  error
}) {
  const data = details || {};
  const primaryColor = "#3f51b5";

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const defaultImages = [
    { img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070" },
    { img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980" },
    { img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070" },
  ];

  const displayImages =
    data.apartmentPhoto?.length > 0
      ? data.apartmentPhoto.map((p) => ({ img: p.photoUrl }))
      : defaultImages;

  return (
    <Dialog
      open={showdetailsFlag}
      fullScreen={isMobile}
      maxWidth="md"
      fullWidth
      onClose={handlechageShowDetailsFlag}
      PaperProps={{
        className: "lg:!rounded-[40px] lg:h-[95vh] overflow-hidden shadow-2xl",
      }}
    >
      <DialogContent className="p-0 bg-white h-full flex flex-col relative overflow-hidden">
        
        {/* Close Button */}
        <div className="absolute top-5 right-5 z-[60]">
          <IconButton
            onClick={handlechageShowDetailsFlag}
            className="bg-white/80 backdrop-blur-xl hover:bg-white shadow-2xl border border-white/50 transition-all active:scale-90"
          >
            <CloseIcon style={{ color: primaryColor }} />
          </IconButton>
        </div>

        <div className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar">
          
          {error ? (
            /* حالة الخطأ فقط */
            <div className="h-full w-full flex items-center justify-center p-10 min-h-[400px]">
              <div className="max-w-md w-full text-center">
                <ErrorComp error={error} />
                <button
                  onClick={handlechageShowDetailsFlag}
                  className="mt-6 px-8 py-3 bg-slate-100 rounded-2xl font-bold text-slate-600 hover:bg-slate-200 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* عرض البيانات مباشرة */
            <>
              {/* Media Section */}
              <div className="relative w-full lg:h-[650px] flex flex-col ">
                <TabGroup className="h-full w-full">
                  <TabPanels className="h-full w-full">
                    {displayImages.map((img, idx) => (
                      <TabPanel 
                        key={idx} 
                        className="h-full w-full outline-none relative flex items-center justify-center overflow-hidden"
                      >
                        <img
                          src={img.img}
                          className="relative z-10 w-full h-full object-contain animate-in fade-in zoom-in duration-700"
                        />
                      </TabPanel>
                    ))}
                  </TabPanels>
                  
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-auto ">
                    <TabList className="flex gap-3 p-2 bg-black/20 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-x-auto max-w-[90vw] scrollbar-hide">
                      {displayImages.map((img, idx) => (
                        <Tab
                          key={idx}
                          className="relative min-w-[60px] h-[60px] rounded-xl overflow-hidden border-2 border-transparent ui-selected:border-white ui-selected:scale-105 transition-all duration-300"
                        >
                          <img src={img.img} className="w-full h-full object-cover" />
                        </Tab>
                      ))}
                    </TabList>
                  </div>
                </TabGroup>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-10">
                
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 border-b border-slate-100 pb-8">
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span 
                        className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-sm"
                        style={{ backgroundColor: `${primaryColor}10`, color: primaryColor }}
                      >
                        Premium Property
                      </span>
                      {data.Verified && (
                        <div className="flex items-center gap-1 text-emerald-600 font-bold text-[10px] bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100 uppercase">
                          <VerifiedUserIcon className="text-sm" />
                          Verified
                        </div>
                      )}
                    </div>
                    
                    <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                      {data.title}
                    </h2>
                    
                    <div className="flex items-center text-slate-400 font-semibold text-base">
                      <LocationOnIcon className="mr-1.5 text-blue-500" fontSize="small" />
                      {data.address}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-3xl flex flex-col items-center justify-center min-w-[160px] border border-slate-100 shadow-inner">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Monthly</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-slate-900">{data.price}</span>
                      <span className="text-xs font-black text-blue-600 uppercase">JOD</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <FeatureItem icon={<MeetingRoomIcon />} label="Rooms" value={data.numberOfRoom} color={primaryColor} />
                  <FeatureItem icon={<KingBedIcon />} label="Beds" value={data.numberOfBed} color={primaryColor} />
                  <FeatureItem icon={<PersonIcon />} label="Landlord" value={data.landlordName} color={primaryColor} />
                  <FeatureItem 
                    icon={<VerifiedUserIcon />} 
                    label="Status" 
                    value={data.isVisible ? "Available" : "not Available"} 
                    color={data.isVisible ? "#10b981" : "#ef4444"}
                  />
                </div>

                <div className="relative p-6 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="absolute -top-3 left-6 bg-white px-3 py-0.5 rounded-full border border-slate-100 shadow-sm flex items-center gap-2 text-slate-800 font-bold text-[10px] uppercase tracking-tighter">
                    <InfoIcon style={{ color: primaryColor }} className="text-xs" />
                    Description
                  </div>
                  <p className="text-slate-600 text-base leading-relaxed font-medium italic overflow-x-hidden">
                    "{data.description}"
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-black text-slate-900 text-lg flex items-center gap-2">
                    <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: primaryColor }} />
                    Map Location
                  </h3>
                  <div className="h-80 rounded-[2.5rem] overflow-hidden border-4 border-slate-50 shadow-xl">
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src={`https://maps.google.com/maps?q=${data.googleMapLocation?.latitude},${data.googleMapLocation?.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    ></iframe>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handlechageShowDetailsFlag}
                    className="w-full hover:opacity-90 text-white py-5 rounded-3xl font-black text-lg transition-all shadow-xl active:scale-[0.98] cursor-pointer flex items-center justify-center gap-3 uppercase tracking-widest"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function FeatureItem({ icon, label, value, color }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 p-4 bg-white border border-slate-100 rounded-[2rem] hover:shadow-lg transition-all duration-300">
      <div className="p-3 rounded-full shadow-sm" style={{ backgroundColor: `${color}10`, color: color }}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">
          {label}
        </p>
        <p className="text-base font-black text-slate-800 truncate">
          {value}
        </p>
      </div>
    </div>
  );
}