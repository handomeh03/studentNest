import { useState } from "react";
import ChangePasswordContainer from "../Components/changePassword/ChangePasswordContainer";
import SuccessComp from "../Components/PublicComp/SucccessComp";
import UserRegisterHeader from "../Components/userRegisterComp/UserRegisterHeader";
import { UseChangePasswordOtp } from "../Hooks/OtpHooks/useChangePasswordOtp";
import style from "../Styles/ChangePasswordStyle/ChangePassword.module.css";
export default function ChangePasswordOtp() {
    let {changePasswordOtp,error,setError,changeLoader}=UseChangePasswordOtp();
    let[flag,setflag]=useState(true);
    function handleChangeError(value){
        setError(value);
    }
    return(
        <div className={style.changePassword}>
               <UserRegisterHeader />
                 
               <div className={style.changePasswordC}>
                {flag ? <SuccessComp measage={"OTP verified successfully you can change password"} setSuccessFlag={setflag}/> : ""}
                     <ChangePasswordContainer changePasswordOtp={changePasswordOtp} handleChangeError={handleChangeError} error={error} changeLoader={changeLoader} />
               </div>
               
        </div>
    );
}