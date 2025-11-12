import style from "../../../Styles/LandingStyle/HeaderLandingPage.module.css"
import Image from "./Image";
import Menu from "./Menu";
export default function HeaderLandingPage(){
    return(
        <div className={style.HeaderLandingPage}>
            <Image/>
            <Menu/>
        </div>
    );
}