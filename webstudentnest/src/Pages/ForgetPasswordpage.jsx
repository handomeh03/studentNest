import { useState } from "react";
import ForgetPaswordContainer from "../Components/ForgetPasswordComp/ForgetPaswordContainer";
import UserRegisterHeader from "../Components/userRegisterComp/UserRegisterHeader";
import style from "../Styles/ForgetpasswordStyle/ForgetPasswordpage.module.css";
import { UseFogetPasswordSendOtp } from "../Hooks/OtpHooks/useFogetPasswordSendOtp";
import ErrorComp from "../Components/PublicComp/ErrorComp";
export default function ForgetPasswordpage(){
    let [email,setEmail]=useState("");
    let{sendOtpForgetPassword, error, setError, OtpLoader}=UseFogetPasswordSendOtp();
    function handleChangeEmail(value){
        setEmail(value);
    }
    function handlesubmit(){
        
        sendOtpForgetPassword(email);
    }
    return(
        <div className={style.ForgetPasswordpage}>
            <UserRegisterHeader/>
             <div className={style.ForgetPasswordC}>
                             <ForgetPaswordContainer OtpLoader={OtpLoader} setError={setError} email={email} handleChangeEmail={handleChangeEmail} handlesubmit={handlesubmit} />
              </div>
              {error?<ErrorComp erorr={error}/>:""}
        </div>
    );
}