import styles from "../app/page.module.scss";

const WorkExperience = () => {
    return (
        <section className={styles.experience}>
            <div className={styles.experienceContent}>
                <h1 className={styles.heading}>Work Experience</h1>

                <div className={styles.experienceGrid}>
                    {/* Left Column */}
                    <div className={styles.experienceCard}>
                        <h3>Professional Experience</h3>
                        <h4>BIM / Architectural Experience</h4>
                        <p className={styles.roleMeta}>
                            (Various Roles & Projects)
                        </p>

                        <p className={styles.description}>
                            Developed detailed BIM models aligned with architectural intent and
                            construction requirements. Introduced coordinated drawing sets for
                            planning, construction, and record purposes.
                            <br /><br />
                            Supported clash detection and model coordination exercises, assisting
                            in improving workflow efficiency and overall model accuracy.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className={styles.experienceCard}>
                        <h3>Freelance Experience</h3>
                        <h4>Freelance BIM & Architectural Consultant</h4>
                        <p className={styles.roleMeta}>
                            2023 – Present
                        </p>

                        <p className={styles.description}>
                            Delivered Revit-based BIM models and CAD drawings for residential and
                            small commercial projects. Supported clients with design development,
                            documentation, and revisions.
                            <br /><br />
                            Converted 2D drawings into coordinated 3D BIM models while working
                            independently and managing deadlines, scope, and client expectations.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default WorkExperience;