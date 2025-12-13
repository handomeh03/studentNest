import { Link } from 'react-router-dom';
import style from '../Styles/PublicCompStyle/notFound.module.css'; 
export default function NotVerifedPage(){
    return (
          <div className={style.notFoundContainer}>
              
              <h2 className={style.errorMessage}>you will wait until admin verifed you</h2>
              
              <Link to="/" className={style.homeButton}>
                Go to Home page
              </Link>
            
            </div>
    );
}