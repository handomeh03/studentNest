import Button from "@mui/material/Button";

import style from "../../../Styles/LandingStyle/Hero.module.css"
export default function Hero(){
    return(
        <div className={style.Hero}>
            <h1>student Nest</h1>
            <p>Your safest and easiest way to find student housing</p>
             <Button className={style.Button} variant="contained">
                    find Apartemts
            </Button>
            

        </div>
    );
}