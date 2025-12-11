import { useState } from "react";
import style from "../../../Styles/LandingStyle/Menu.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../Context/UserContext/UserContext";


export default function Menu() {
  const [menuFlag, setMenuFlag] = useState(false);
  const { user, userDispatch } = useUserContext();
  
  const navigate = useNavigate();
  
  const getDashboardLink = () => {
    switch (user?.role) {
      case "admin":
        return "/admindashborad";
      case "student":
        return "/studentdashboard";
      case "landloard":
        return "/landlordDashboard";
      default:
        return "/"; 
    }
  };

  
  const menuItems = [
    { title: "Home", to: "/" },
    { title: "Apartments", to: "/apartments" },
    { title: "Dashboard", to: getDashboardLink() },
    
    ...(!user
      ? [
          { title: "Log In", to: "/userlogin" },
          { title: "Sign Up", to: "/userRegister" },
        ]
      : []),
    
    ...(user ? [{ title: "Sign Out", to: "/userlogin" }] : []),
  ];

  const handleClick = (item) => {
    if (item.title === "Sign Out") {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("email");
      userDispatch({ type: "CLEAR_USER"});
        navigate(item.to); 
    }
    
    setMenuFlag(false); 
  };
  return (
    <div className={style.Menu}>
      
      <div onClick={() => setMenuFlag(prev => !prev)} className={style.menuButton}>
        <MenuIcon style={{ color: "white", marginRight: "6px" }} />
      </div>

      
      <div className={`${style.SmallMenu} ${menuFlag ? style.open : ""}`}>
        <button onClick={() => setMenuFlag(false)}>
          <CloseIcon />
        </button>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} onClick={()=>{
                handleClick(item);
              }} className={style.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Large Menu */}
      <div className={style.largeMenu}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} onClick={()=>{
                handleClick(item);
              }}className={style.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
