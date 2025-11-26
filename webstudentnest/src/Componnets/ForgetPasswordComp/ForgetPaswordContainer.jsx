import style from "../../Styles/ForgetpasswordStyle/ForgetPasswordContainer.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";
export default function ForgetPaswordContainer(){
    let navigate=useNavigate();
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
                              // value={cliqAccount}
                              // onChange={(e) => handleChangeCliqAccount(e.target.value)}
                             
                            />
                   
                  </form>
                  
         
                  <Button
                    onClick={()=>{
                        navigate("/Otp")
                    }}
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