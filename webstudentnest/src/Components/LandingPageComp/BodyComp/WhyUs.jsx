import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "../../../Styles/LandingStyle/WhyUs.module.css";

export default function WhyUse() {
  let cards = [
    {
      title: "High Security",
      description:
        " StudentNest provides a highly secure environment to ensure safe and trustworthy housing for students",
    },

    {
      title: "Roommate Match",
      description:
        "  Smart matchmaking system helps you find the perfect roommate based on lifestyle, habits, and preferences",
    },
    {
      title: "Smart Contract",
      description:
        "  Automated smart contracts powered by blockchain technology to ensure transparent, fast, and fair agreements",
    },
  ];

    useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div className={style.WhyUs}>
      <h2>Why StudentNest?</h2>

      <div className={style.cards}>
        {cards.map((e, index) => {
          return (
            <div  data-aos="fade-up" key={index} className={style.card}>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
