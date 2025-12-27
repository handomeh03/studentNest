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

export default function Showdetailsdialog({
  details,
  showdetailsFlag,
  handlechageShowDetailsFlag,
}) {
  const data = details || {};
  const primaryColor = "#3f51b5";
  
  // فحص حجم الشاشة باستخدام Material UI Hooks
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
      fullScreen={isMobile} // كامل الشاشة فقط على الموبايل
      maxWidth="md"
      fullWidth
      scroll="body"
      onClose={handlechageShowDetailsFlag}
      PaperProps={{
        // الحواف دائرية فقط في الشاشات الكبيرة
        className: "lg:!rounded-[32px] overflow-hidden shadow-2xl",
      }}
    >
      <DialogContent className="p-0 bg-white relative">
        {/* زر الإغلاق العائم */}
        <div className="absolute top-4 right-4 z-50">
          <IconButton
            onClick={handlechageShowDetailsFlag}
            className="bg-white/90 backdrop-blur-md hover:bg-white shadow-xl border border-slate-100 transition-all"
          >
            <CloseIcon style={{ color: primaryColor }} />
          </IconButton>
        </div>

        {/* الحاوية الرئيسية: عمودية في الموبايل، أفقية في الكمبيوتر */}
        <div className="flex flex-col lg:flex-row">
          
          {/* الجانب الأيسر: الصور */}
          <div className="w-full lg:w-1/2 bg-slate-100 border-r border-slate-100">
            <TabGroup className="h-full flex flex-col">
              <TabPanels className="aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                {displayImages.map((img, idx) => (
                  <TabPanel key={idx} className="h-full outline-none">
                    <img
                      src={img.img}
                      className="w-full h-full object-cover transition-transform duration-500"
                      alt="Apartment"
                    />
                  </TabPanel>
                ))}
              </TabPanels>
              
              {/* الصور المصغرة */}
              <div className="p-4 overflow-x-auto scrollbar-hide">
                <TabList className="flex gap-2 justify-start lg:justify-center">
                  {displayImages.map((img, idx) => (
                    <Tab
                      key={idx}
                      className="relative min-w-[70px] h-14 outline-none rounded-xl overflow-hidden border-2 border-transparent ui-selected:border-[#3f51b5] transition-all"
                    >
                      <img src={img.img} className="w-full h-full object-cover" />
                    </Tab>
                  ))}
                </TabList>
              </div>
            </TabGroup>
          </div>

          {/* الجانب الأيمن: البيانات */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              {/* العناوين */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span 
                    className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded"
                    style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                  >
                    Premium Apartment
                  </span>
                  {data.Verified && <VerifiedUserIcon className="text-emerald-500 text-sm" />}
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                  {data.title}
                </h2>
                
                <div className="flex items-center text-slate-500 text-sm font-semibold">
                  <LocationOnIcon style={{ color: primaryColor }} className="mr-1" fontSize="small" />
                  {data.address}
                </div>
              </div>

              {/* السعر */}
              <div className="inline-flex flex-col border-l-4 pl-4" style={{ borderColor: primaryColor }}>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-tighter">Rent Price</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black" style={{ color: primaryColor }}>{data.price}</span>
                  <span className="text-sm font-bold text-slate-500">JOD / Month</span>
                </div>
              </div>

              {/* الوصف */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 mb-2 text-slate-800 font-bold text-sm">
                  <InfoIcon style={{ color: primaryColor }} fontSize="inherit" />
                  Description
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {data.description}
                </p>
              </div>

              {/* شبكة الميزات (Feature Grid) */}
              <div className="grid grid-cols-2 gap-4">
                <FeatureItem icon={<MeetingRoomIcon />} label="Rooms" value={data.numberOfRoom} color={primaryColor} />
                <FeatureItem icon={<KingBedIcon />} label="Beds" value={data.numberOfBed} color={primaryColor} />
                <FeatureItem icon={<PersonIcon />} label="Landlord" value={data.landlordName} color={primaryColor} />
                <FeatureItem 
                  icon={<VerifiedUserIcon />} 
                  label="Status" 
                  value={data.propertyStatus ? "Active" : "Booked"} 
                  color={data.propertyStatus ? "#10b981" : "#ef4444"}
                />
              </div>

              {/* الخريطة */}
              <div className="h-40 lg:h-48 rounded-[2rem] overflow-hidden border-2 border-slate-50 shadow-inner">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${data.googleMapLocation?.latitude},${data.googleMapLocation?.longitude}&z=15&output=embed`}
                ></iframe>
              </div>
            </div>

            {/* زر الإغلاق السفلي */}
            <div className="mt-8">
              <button
                onClick={handlechageShowDetailsFlag}
                className="w-full bg-slate-900 hover:opacity-90 text-white py-4 rounded-2xl font-bold transition-all shadow-xl active:scale-[0.98] cursor-pointer"
                style={{ backgroundColor: primaryColor }}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function FeatureItem({ icon, label, value, color }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white border border-slate-50 rounded-2xl shadow-sm transition-hover hover:border-slate-200">
      <div className="p-2 rounded-xl" style={{ backgroundColor: `${color}10`, color: color }}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter leading-none mb-1">{label}</p>
        <p className="text-sm font-black text-slate-800 leading-none">{value}</p>
      </div>
    </div>
  );
}