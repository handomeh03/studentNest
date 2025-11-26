import style from "../../../Styles/LandingStyle/Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.contact}>
                       <h3>Contact Us</h3>
                       <p>Email: support@studentnest.com</p>
                       <p>Phone: +962 78 000 0000</p>
           </div>

      <div className={style.bottomBar}>
        <p>© {new Date().getFullYear()} StudentNest. All rights reserved.</p>
      </div>
    </footer>
  );
}
