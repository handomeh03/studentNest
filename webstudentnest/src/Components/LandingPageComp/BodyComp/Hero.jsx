import Button from "@mui/material/Button";

import style from "../../../Styles/LandingStyle/Hero.module.css"
import { Link } from "react-router-dom";
export default function Hero(){
    return(
        <div className={style.Hero}>
            <h1>student Nest</h1>
            <p>Your safest and easiest way to find student housing</p>
            <Button className={style.Button} variant="contained">
                 <Link to={"/apartments"} >
                    find Apartemts
            </Link>
            </Button>
            

        </div>
    );
}