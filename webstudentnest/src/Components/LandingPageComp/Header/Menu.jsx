import { useState } from "react";
import style from "../../../Styles/LandingStyle/Menu.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../Context/UserContext/UserContext";
import { useRole } from "../../../Context/RoleContext";

export default function Menu() {
  const [menuFlag, setMenuFlag] = useState(false);
  const { user } = useUserContext(); 

  const {role}=useRole();

  
  const getDashboardLink = () => {
    switch (user?.role || role) {
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
    { title: "Log In", to: "/userlogin" },
    { title: "Sign Up", to: "/userRegister" },
  ];

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
              <Link to={item.to} className={style.link}>
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
              <Link to={item.to} className={style.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
