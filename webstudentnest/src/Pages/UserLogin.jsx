
import LoginForm from "../Componnets/userLoginComp/LoginForm";
import UserRegisterHeader from "../Componnets/userRegisterComp/UserRegisterHeader";
import WelcomeHeader from "../Componnets/userRegisterComp/WelcomeHeader";
import style from "../Styles/LoginStyle/UserLogin.module.css"
import Loader from "../Componnets/PublicComp/Loader";
import { UseLoader } from "../Hooks/publicHook/useLoader";
import { useState } from "react";
export default function UserLogin(){
    let{loaderFalg}=UseLoader();
    
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");

    function handleChangeEmail(value){
           setEmail(value);
    }
    function handleChangePassword(value){
        setPassword(value);
    }


        if(loaderFalg){
            return <Loader/>
        }
    return(
        <div className={style.UserLogin}>
            <UserRegisterHeader/>
            <div className={style.loginContainer}>
                 <WelcomeHeader title={"welcome back"} description={"log in to discover your ideal accommodation within our community"}/>
                 <LoginForm email={email} password={password} handleChangeEmail={handleChangeEmail} handleChangePassword={handleChangePassword}/>
                  
            </div>

        </div>
    );
}