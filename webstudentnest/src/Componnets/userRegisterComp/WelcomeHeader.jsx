import style from "../../Styles/RegisterStyle/WelcomeHeader.module.css"
export default function WelcomeHeader({title,description}){
    return(
        <div className={style.WelcomeHeader}>
            <h1>{title}</h1>
            <p>{description}</p>
            

        </div>
    );
}