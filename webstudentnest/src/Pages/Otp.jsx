import {  UseResendOtp } from "../Hooks/OtpHooks/useResendOtp";
import UserRegisterHeader from "../Components/userRegisterComp/UserRegisterHeader";
import OtpContainer from "../Components/OtpComponnet/OtpContainer";
import SuccessComp from "../Components/PublicComp/SucccessComp";
import ErrorComp from "../Components/PublicComp/ErrorComp";
import Loader from "../Components/PublicComp/Loader";
import style from "../Styles/otpStyle/Otp.module.css";


export default function Otp() {

  
  // here after register you want to resend opt if otp expire time   its left up state 
  const { sendOtp, registerOtpLoader, error, setError, success, successFlag, setSuccessFlag } = UseResendOtp();

 
  if (registerOtpLoader) return <Loader />;

  return (
    <div className={style.Otp}>
      <UserRegisterHeader />

      <div className={style.otpC}>
        {success && successFlag && (
          <SuccessComp measage={success} setSuccessFlag={setSuccessFlag} />
        )}

        <OtpContainer sendOtp={sendOtp} setError={setError} />
      </div>

      {error && <ErrorComp erorr={error} />}
    </div>
  );
}
