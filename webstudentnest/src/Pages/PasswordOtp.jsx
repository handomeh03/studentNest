import UserRegisterHeader from "../Components/userRegisterComp/UserRegisterHeader";
import SuccessComp from "../Components/PublicComp/SucccessComp";
import ErrorComp from "../Components/PublicComp/ErrorComp";
import Loader from "../Components/PublicComp/Loader";
import style from "../Styles/otpStyle/Otp.module.css";
import OtpContainer from "../Components/OtpPasswordForget/OtpContainer";
import { UseResendOtpForgetPassword } from "../Hooks/OtpHooks/UseResendOtpForgetPassword";
export default function PasswordOtp(){
     const { sendOtp, resenForgetPasswordLoader, error, setError, success, successFlag, setSuccessFlag } = UseResendOtpForgetPassword();
          if (resenForgetPasswordLoader) return <Loader />;
        
          return (
            <div className={style.Otp}>
              <UserRegisterHeader />
        
              <div className={style.otpC}>
                {success && successFlag && (
                  <SuccessComp measage={success} setSuccessFlag={setSuccessFlag} />
                )}
        
                <OtpContainer sendOtp={sendOtp} setError={setError} />
              </div>
        
              {error && <ErrorComp error={error} />}
            </div>
          );
}