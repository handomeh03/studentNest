import OtpContainer from "../Componnets/OtpComponnet/OtpContainer";
import Loader from "../Componnets/PublicComp/Loader";
import UserRegisterHeader from "../Componnets/userRegisterComp/UserRegisterHeader";
import { UseLoader } from "../Hooks/publicHook/useLoader";
import style from "../Styles/otpStyle/Otp.module.css";
export default function Otp(){
    let { loaderFalg } = UseLoader();
     if (loaderFalg) {
        return <Loader />;
      }
    return (
        <div className={style.Otp}>
            <UserRegisterHeader/>
            <div className={style.otpC}>
                 <OtpContainer/>
            </div>
           

        </div>
    );
}