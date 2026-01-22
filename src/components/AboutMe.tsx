import styles from "../app/page.module.scss";

const AboutMe = () => {
    return (
        <section className={styles.aboutme}>
            <div className={styles.aboutContent}>
                <h1 className={styles.heading}>About Me</h1>

                <p className={styles.text}>
                    My professional journey combines on-site exposure, structural practice,
                    postgraduate BIM education, and freelance consultancy. This mix has given
                    me a practical understanding of how buildings are designed, coordinated,
                    and delivered both digitally and on site.
                    <br /><br />
                    I am particularly interested in how BIM improves coordination between
                    disciplines, reduces errors, and supports better decision-making across
                    project teams. I approach every project with a strong attention to detail,
                    a structured workflow mindset, and a collaborative attitude.
                    <br /><br />
                    I am now looking to contribute my skills within a professional environment
                    where I can continue to grow as a BIM-focused architectural professional.
                </p>
            </div>
        </section>

    )
}

export default AboutMe;