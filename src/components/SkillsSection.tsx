import styles from "../app/page.module.scss";

const SkillSection = () => {
    return (
        <section className={styles.skills}>
            <div className={styles.skillsContent}>
                <h1 className={styles.heading}>Skills & Competencies</h1>

                <div className={styles.skillsGrid}>
                    {/* Column 1 */}
                    <div className={styles.skillCard}>
                        <h3>BIM & Digital Tools</h3>
                        <ul>
                            <li>Autodesk Revit (Architecture)</li>
                            <li>BIM Modelling & Coordination</li>
                            <li>Navisworks (Basic Clash Detection)</li>
                            <li>AutoCAD</li>
                            <li>BIM Standards, BEP awareness & structured workflows</li>
                            <li>Model auditing and quality control</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className={styles.skillCard}>
                        <h3>Architectural & Technical Skills</h3>
                        <ul>
                            <li>Architectural drawings: plans, sections, elevations</li>
                            <li>Construction documentation & GA drawings</li>
                            <li>As-built & record drawings</li>
                            <li>Basic detailing and drawing coordination</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className={styles.skillCard}>
                        <h3>Professional Skills</h3>
                        <ul>
                            <li>Multidisciplinary coordination support</li>
                            <li>Clear communication with designers and consultants</li>
                            <li>Time management and task prioritisation</li>
                            <li>Adaptability in fast-paced project environments</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillSection;