import style from "../../Styles/ChangePasswordStyle/changePasswordContainer.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import { UseUserData } from "../../Context/UserRegisterData";
import { useState } from "react";
import ErrorComp from "../PublicComp/ErrorComp";
export default function ChangePasswordContainer({changePasswordOtp,handleChangeError,changeLoader,error}) {
    let {Email}=UseUserData();
    let [password,setPassword]=useState("");
    let[confirmPassword,setConfirmPassword]=useState("");

    function confirm(e){
     e.preventDefault();
     if(!password || !confirmPassword){
        handleChangeError("All fields are required");
        return;
     }
     if(password!==confirmPassword ){  
        handleChangeError("Password does not match  Confirm Password");
        return;
     }
     changePasswordOtp(Email,password);
    }
  return (
    <div className={style.ChangePasswordContainer}>

          <h2 style={{fontSize:"x-large"}}>Rest Password</h2>
          
          <form>
             <TextField
  className={style.Field}
  id="password"
  label="Password"
  type="password"
  value={password}
  onChange={(e)=>{
    setPassword(e.target.value);
    handleChangeError("");
  }}
/>

<TextField
  className={style.Field}
  id="ConfirmPassword"
  label="Confirm Password"
  type="password"
  value={confirmPassword}
  onChange={(e)=>{
    setConfirmPassword(e.target.value);
    handleChangeError("");
  }}
/>
          </form>
        
          


         {changeLoader?<Button
              loading={true}
              variant="outlined"
              disabled
            >
              Disabled
            </Button> :  <Button
            onClick={confirm}
            className={style.Button}
            variant="contained"
            endIcon={<SendIcon/>}
          >
            send
          </Button>}
            
          
    
    
          {error?<ErrorComp error={error}/>:""}
         
    
         
        
         </div> 
  );

}