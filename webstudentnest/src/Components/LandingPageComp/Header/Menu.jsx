import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../Context/UserContext/UserContext";

export default function Menu() {
  const [menuFlag, setMenuFlag] = useState(false);
  const { user, userDispatch } = useUserContext();
  const navigate = useNavigate();

  const getDashboardLink = () => {
    switch (user?.user?.role) {
      case "admin": return "/admindashborad";
      case "student": return "/studentdashboard";
      case "landloard": return "/landlordDashboard";
      default: return "/";
    }
  };

  const menuItems = [
    { title: "Home", to: "/" },
    { title: "Apartments", to: "/apartments" },
    ...(user ? [{ title: "Dashboard", to: getDashboardLink() }] : []),
    ...(!user
      ? [
          { title: "Log In", to: "/userlogin" },
          { title: "Sign Up", to: "/userRegister", special: true },
        ]
      : [{ title: "Sign Out", to: "/userlogin", isSignOut: true }]),
  ];

  const handleSignOut = () => {
    sessionStorage.clear();
    userDispatch({ type: "CLEAR_USER" });
    navigate("/userlogin");
    setMenuFlag(false);
  };

  return (
    <nav>
      {/* Desktop Menu - لا تغيير هنا */}
      <ul className="hidden md:flex items-center gap-8">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              onClick={item.isSignOut ? handleSignOut : null}
              className="text-sm font-bold uppercase tracking-widest transition-all duration-300 bg-[#3f51b5] text-white px-5 py-2.5 rounded-full hover:shadow-lg "
              
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      
      <button className=" text-white cursor-pointer md:hidden  p-2" onClick={() => setMenuFlag(true)}>
        <MenuIcon fontSize="large" />
      </button>

      
      <div 
        className={`fixed inset-0 min-h-screen w-screen z-[9999] transition-all duration-500 ${
          menuFlag ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        
        <div 
          className={`absolute inset-0 w-full h-full bg-slate-900/60 backdrop-blur-md transition-opacity duration-500 ${
            menuFlag ? "opacity-100" : "opacity-0"
          }`} 
          onClick={() => setMenuFlag(false)}
        ></div>

        
        <div 
          className={`absolute right-0 top-0 h-full w-[85%] max-w-[320px] bg-[#3f51b5] z-[10000] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col p-8 ${
            menuFlag ? "translate-x-0" : "translate-x-full"
          }`}
        >
          
          <div className="flex justify-end mb-10">
            <button className="text-white cursor-pointer p-2" onClick={() => setMenuFlag(false)}>
              <CloseIcon fontSize="large" />
            </button>
          </div>

          
          <ul className="flex flex-col gap-6">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-50 pb-4 last:border-0">
                <Link
                  to={item.to}
                  onClick={() => { 
                    setMenuFlag(false); 
                    if (item.isSignOut) handleSignOut(); 
                  }}
                  className={`text-2xl font-black block w-full transition-colors p-2 rounded-4xl ${
                    item.isSignOut ? "text-red-500" : "text-white hover:bg-white/50"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}