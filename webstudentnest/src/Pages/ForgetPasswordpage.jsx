import ForgetPaswordContainer from "../Componnets/ForgetPasswordComp/ForgetPaswordContainer";
import UserRegisterHeader from "../Componnets/userRegisterComp/UserRegisterHeader";
import style from "../Styles/ForgetpasswordStyle/ForgetPasswordpage.module.css";
export default function ForgetPasswordpage(){
    return(
        <div className={style.ForgetPasswordpage}>
            <UserRegisterHeader/>
             <div className={style.ForgetPasswordC}>
                             <ForgetPaswordContainer/>
              </div>
        </div>
    );
}