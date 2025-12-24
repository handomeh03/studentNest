
import LoginForm from "../Components/userLoginComp/LoginForm";
import UserRegisterHeader from "../Components/userRegisterComp/UserRegisterHeader";
import WelcomeHeader from "../Components/userRegisterComp/WelcomeHeader";
import style from "../Styles/LoginStyle/UserLogin.module.css"
import Loader from "../Components/PublicComp/Loader";

import { UseLoader } from "../Hooks/publicHook/useLoader";
import { useState } from "react";
import { UseLogin } from "../Hooks/LoginHook/useLogin";
import ErrorComp from "../Components/PublicComp/ErrorComp";
export default function UserLogin(){
    let{loaderFalg}=UseLoader();

    let{Login,LoginLoader,error}=UseLogin();
    
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");

    function handleChangeEmail(value){
           setEmail(value);
    }
    function handleChangePassword(value){
        setPassword(value);
    }

    function handleLogin(e){
        e.preventDefault();
        Login(email,password);
    }
  


        if(loaderFalg){
            return <Loader/>
        }
    return(
        <div className={style.UserLogin}>
            <UserRegisterHeader/>
            <div className={style.loginContainer}>
                 <WelcomeHeader title={"welcome back"} description={"log in to discover your ideal accommodation within our community"}/>
                 <LoginForm  handleLogin={handleLogin} LoginLoader={LoginLoader} email={email} password={password} handleChangeEmail={handleChangeEmail} handleChangePassword={handleChangePassword}/>
                  
            </div>

            {error?<ErrorComp error={error}/>:""}

        </div>
    );
}