import { UseOtp } from "../Hooks/OtpHooks/useOtp";
import UserRegisterHeader from "../Components/userRegisterComp/UserRegisterHeader";
import OtpContainer from "../Components/OtpComponnet/OtpContainer";
import SuccessComp from "../Components/PublicComp/SucccessComp";
import ErrorComp from "../Components/PublicComp/ErrorComp";
import Loader from "../Components/PublicComp/Loader";
import style from "../Styles/otpStyle/Otp.module.css";

export default function Otp() {
  const { sendOtp, registerOtpLoader, error, setError, success, successFlag, setSuccessFlag } = UseOtp();
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
