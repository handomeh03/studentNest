
import OtpContainer from "../Componnets/OtpComponnet/OtpContainer";
import ErrorComp from "../Componnets/PublicComp/ErrorComp";
import Loader from "../Componnets/PublicComp/Loader";
import UserRegisterHeader from "../Componnets/userRegisterComp/UserRegisterHeader";
import { UseUserData } from "../Context/UserRegisterData";
import { UseRegisterOtp } from "../Hooks/OtpHooks/useRegisterOtp";
import style from "../Styles/otpStyle/Otp.module.css";
import SuccessComp from "../Componnets/PublicComp/SucccessComp";
export default function Otp(){
    let{Email}=UseUserData();
    let{registerOtpLoader,error,setError,success,successFlag,setSuccessFlag}=UseRegisterOtp(Email);
   

     if (registerOtpLoader) {
        return <Loader />;
      }
    return (
        <div className={style.Otp}>
          <UserRegisterHeader/>
           
            <div className={style.otpC}>
              {success && successFlag? <SuccessComp measage={success} setSuccessFlag={setSuccessFlag}/>:""}
                 <OtpContainer setError={setError}/>
            </div>

              {error?<ErrorComp erorr={error}/>:""}
           

        </div>
    );
}