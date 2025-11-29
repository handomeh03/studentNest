import style from "../../Styles/otpStyle/otpContainer.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { UseUserData } from "../../Context/UserRegisterData";
import ErrorComp from "../PublicComp/ErrorComp";
import { UseConfirmOtpPassword } from "../../Hooks/OtpHooks/UseConfirmOtpForget";
export default function OtpContainer({sendOtp,setError}) {

 let[otp,setOtp]=useState("");
 let{Email}=UseUserData();
 let{ confirmOtp, error, ConfirmLoader ,setotpError}=UseConfirmOtpPassword();

function handleChangeOtp(value){
  setOtp(value);
 }
 function confirm(e){
  e.preventDefault();
  confirmOtp(Email,otp)
 }
  
  return (
    <div className={style.otpContainer}>
      <h2>Email Verification(OTP)</h2>
      <p>
        please enter the OTP sent to your registerd email to complete your
        Verification
      </p>
      <form>
         <TextField
                  className={style.Field}
                  id="Otp"
                  label="enter OTP"
                  type="text"
                  value={otp}
                  onChange={(e) => {
                    setError("");
                    setotpError("");
                    handleChangeOtp(e.target.value);
                    
                  }}
                 
                /> 
      </form>
    
      <div className={style.resendOtp}>
     
        <button onClick={()=>{
          sendOtp(Email);
        }}   className={style.resendbtn}>resend OTP</button>
      </div>
      {ConfirmLoader?  <Button
          loading={true}
          variant="outlined"
          disabled
        >
          Disabled
        </Button> : <Button
        onClick={confirm}
        className={style.Button}
        variant="contained"
        endIcon={<SendIcon/>}
      >
        send
      </Button>}

      {error?<ErrorComp erorr={error}/>:""}
     

     
    </div>
  );
}
