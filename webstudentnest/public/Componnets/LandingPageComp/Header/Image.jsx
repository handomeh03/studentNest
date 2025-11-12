import style from "../../../Styles/LandingStyle/Image.module.css"
export default function Image(){
    return (
        <div className={style.Image}>
               <img  src="./logo.png"></img>
               <h4>StudentNest</h4>      
        </div>
    );
}