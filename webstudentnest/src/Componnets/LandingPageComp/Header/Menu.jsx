import { useState } from "react";
import style from "../../../Styles/LandingStyle/Menu.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export default function Menu() {
  let [menuFlag, setMenuFlag] = useState(false);

  const menuItems = [
    { title: "Home", to: "/" },
    { title: "Apartemts", to: "/apartmets" },
    { title: "Dashborad", to: "/admindashborad" },
    { title: "Log In", to: "/userlogin" },
    { title: "sign up", to: "/userRegister" },
    
  ];

  return (
    <div className={style.Menu}>
      <div
        onClick={() => setMenuFlag((old) => !old)}
        className={`${style.menuButton}`}
      >
        <MenuIcon style={{ color: "white",marginRight:"6px"}} />
      </div>

      {/* for small menu */}
      <div className={`${style.SmallMenu} ${menuFlag ? style.open : ""}`}>
        <button
          onClick={() => {
            setMenuFlag(false);
          }}
        >
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

      {/* for large menu */}
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
