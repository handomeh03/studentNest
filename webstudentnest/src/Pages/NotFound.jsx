import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Styles/PublicCompStyle/notFound.module.css'; 

export default function NotFound() {
  return (
    <div className={style.notFoundContainer}>
      <h1 className={style.errorCode}>404</h1>
      <h2 className={style.errorMessage}>Page Not Found</h2>
      <p className={style.description}>
        We can't seem to find the page you're looking for.
        <br />
        Perhaps you entered the wrong address, or the page has been moved.
      </p>
      <Link to="/" className={style.homeButton}>
        Go to Homepage
      </Link>
    
    </div>
  );
}