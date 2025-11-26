import style from "../../Styles/RegisterStyle/UserRegisterHeader.module.css"
export default function UserRegisterHeader(){
    return(
        <div className={style.UserRegisterHeader}>
            <p>Student Nest</p>
            <img className={style.logo} src="./logo.png"></img>
            
        </div>
    );
}