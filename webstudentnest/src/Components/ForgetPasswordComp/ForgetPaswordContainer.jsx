import style from "../../Styles/ForgetpasswordStyle/ForgetPasswordContainer.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
export default function ForgetPaswordContainer({OtpLoader,setError,email,handleChangeEmail,handlesubmit}){

    return(
        
             <div className={style.forgetPasswordContainer}>
                  
                  <p>
                   please enter the email to send otp to change password
                  </p>
                  <form>
                     <TextField
                              className={style.Field}
                              id="email"
                              label="email"
                              type="email"
                              value={email}
                              onChange={(e) => {
                                setError("");
                                handleChangeEmail(e.target.value)
                              }}
                             
                            />
                   
                  </form>
                  

                  {OtpLoader?<Button
                      loading={true}
                      variant="outlined"
                      disabled
                    >
                      Disabled
                    </Button> :<Button
                    onClick={()=>{
                        handlesubmit();
                    }}
                    className={style.Button}
                    variant="contained"
                    endIcon={<SendIcon/>}
                  >
                    send
                  </Button>}
                </div>
        
    );
}