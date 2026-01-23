"use client";

import styles from "../app/page.module.scss";
import Image from "next/image";


const HeroSection = () => {

    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};


    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.title}>
                    <h1 className={styles.firstName}>Yash <br />
                        <span className={styles.lastName}>Bhamre</span>
                    </h1>
                    <p className={styles.label}>BIM Professional | Architectural & Construction Technology Specialist</p>
                </div>
                <div className={styles.description}>
                    <p>
                        I am a BIM professional with a strong foundation in Structural and architectural design, construction documentation, and digital project delivery. With hands on industry experience, a Master’s degree in Building Information Modelling (BIM), and freelance project exposure, I support architectural and construction teams by delivering accurate, coordinated, and reliable BIM models.
                        My work focuses on clarity, coordination, and build ability ensuring that design intent is translated into well-structured digital information that supports smoother project delivery.
                        Currently seeking: BIM Technician / Architectural Assistant / BIM roles.
                    </p>
                </div>
                <div>
                    <div className={styles.infoRow}>
                        <div className={styles.infoItem}>
                            <Image
                                src="/images/location.svg"
                                alt="location"
                                width={16}
                                height={16}
                            /> Oxford, UK</div>
                        <div className={styles.infoItem}>  <Image
                                src="/images/mail.svg"
                                alt="mail"
                                width={16}
                                height={16}
                            /> yashbhamre27@gmail.com</div>
                        <div className={styles.infoItem}>
                            <Image
                                src="/images/linkedin.svg"
                                alt="linkedin"
                                width={16}
                                height={16}
                            />
                            <a href="http://linkedin.com/in/yash-bhamre-398773295">/in/yashbhamre</a>
                        </div>
                    </div>

                    <div className={styles.ctaRow}>
                        <button className={styles.primaryBtn} onClick={() => scrollToSection("projects")}>
                            View Projects
                        </button>
                        <button className={styles.secondaryBtn} onClick={() => scrollToSection("contact")}>
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.heroImage}>
                <img src="/images/structural.png" alt="structural" />
            </div>
        </section>
    )
}

export default HeroSection;