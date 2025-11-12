
import { useEffect } from "react";
import style from "../../../Styles/LandingStyle/CommunityStats.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CommunityStats(){
    const stats = [
        { 
            number: '+1000', 
            label: 'Students Secured Housing', 
            image: './student.jpg', 
            alt: 'Student securing housing' 
        },
        { 
            number: '+1000', 
            label: 'Verified Landlords', 
            image: './landlord.jpg', 
            alt: 'Verified landlord' 
        },
        { 
            number: '+1000', 
            label: 'Available apartments', 
            
            image: './apartment.jpg', 
            alt: 'Available apartments' 
        },
    ];
     useEffect(() => {
        AOS.init({ duration: 500 });
      }, []);
    
    return (
        <section className={style.communityStatsSection}>
            <h2 className={style.sectionTitle}>Join Our Growing Community</h2>
            <p className={style.sectionSubtitle}>Trust security and variety in one place Our numbers speak for themselves:</p>
            
            <div className={style.statsContainer}>
                {stats.map((e, index) => (
                    <div data-aos="fade-up" key={index} className={style.statCard}>
                        <img 
                            loading="lazy"
                            src={e.image} 
                            alt={e.alt} 
                            className={style.statImage} 
                        /> 
                        <p className={style.statNumber}>{e.number}</p>
                        <p className={style.statLabel}>{e.label}</p>
                    </div>
                ))}
                
            </div>
            
        </section>
    );
}