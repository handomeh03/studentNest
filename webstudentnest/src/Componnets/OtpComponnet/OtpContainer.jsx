import style from "../../Styles/otpStyle/otpContainer.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
export default function OtpContainer() {

 
  
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
                  // value={cliqAccount}
                  // onChange={(e) => handleChangeCliqAccount(e.target.value)}
                 
                />
       
      </form>
      

      <div className={style.resendOtp}>
        <p>time</p>
        <p className={style.resendbtn}>resend OTP</p>
      </div>
      <Button
        className={style.Button}
        variant="contained"
        endIcon={<SendIcon/>}
      >
        send
      </Button>

      {/* <Button
          loading={true}
          variant="outlined"
          disabled
        >
          Disabled
        </Button> */}
    </div>
  );
}
