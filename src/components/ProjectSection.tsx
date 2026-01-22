import styles from "../app/page.module.scss";

const ProjectSection = () => {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.projectsContent}>
                <h1 className={styles.heading}>Projects Portfolio</h1>

                <p className={styles.intro}>
                    Below is a curated and categorized overview of projects I have worked on
                    across professional roles, freelance assignments, and academic work.
                </p>

                <div className={styles.projectsTimeline}>
                    {/* Project 1 - Left */}
                    <div className={`${styles.projectCard} ${styles.left}`}>
                        <h3>Professional Practice Projects</h3>
                        <h4>Residential & Mixed-Use Developments</h4>

                        <p className={styles.meta}>
                            Role: BIM Modeller / Architectural Assistant<br />
                            Tools: Autodesk Revit, AutoCAD
                        </p>

                        <p className={styles.description}>
                            Worked on residential and mixed-use projects supporting architectural
                            teams through BIM modelling, technical drawings, and coordination
                            support from early design to construction documentation stages.
                        </p>

                        <ul>
                            <li>Developed architectural BIM models aligned with design intent</li>
                            <li>Produced coordinated plans, sections, elevations, and schedules</li>
                            <li>Maintained drawing packages for planning and construction</li>
                            <li>Supported design revisions using model-based workflows</li>
                        </ul>

                        <p className={styles.deliverables}>
                            Deliverables: BIM models, GA drawings, technical sets, 3D views
                        </p>
                    </div>

                    {/* Empty right */}
                    <div></div>

                    {/* Project 2 - Right */}
                    <div></div>
                    <div className={`${styles.projectCard} ${styles.right}`}>
                        <h3>Professional Practice Projects</h3>
                        <h4>Renovation, Refurbishment & As-Built Projects</h4>

                        <p className={styles.meta}>
                            Role: BIM & CAD Support<br />
                            Tools: AutoCAD, Revit
                        </p>

                        <p className={styles.description}>
                            Supported renovation and refurbishment projects by producing accurate
                            as-built drawings and updated BIM models based on site information.
                        </p>

                        <ul>
                            <li>Converted site surveys and redlines into as-built drawings</li>
                            <li>Updated BIM models to reflect site conditions</li>
                            <li>Ensured consistency between drawings and models</li>
                        </ul>

                        <p className={styles.deliverables}>
                            Deliverables: As-built drawings, updated BIM models, record documents
                        </p>
                    </div>

                    {/* Project 3 - Left */}
                    <div className={`${styles.projectCard} ${styles.left}`}>
                        <h3>Freelance BIM & Architectural Projects</h3>
                        <h4>Freelance Residential BIM Modelling</h4>

                        <p className={styles.meta}>
                            Role: Freelance BIM Consultant<br />
                            Duration: 2023 – Present
                        </p>

                        <p className={styles.description}>
                            Delivered BIM modelling and architectural documentation services to
                            private clients and small practices.
                        </p>

                        <ul>
                            <li>Created Revit models from 2D CAD drawings and sketches</li>
                            <li>Produced planning and construction-ready drawings</li>
                            <li>Managed scope, timelines, and client communication</li>
                        </ul>
                    </div>

                    <div></div>

                    {/* Project 4 - Right */}
                    <div></div>
                    <div className={`${styles.projectCard} ${styles.right}`}>
                        <h3>Academic & Research Projects</h3>
                        <h4>Multidisciplinary BIM Coordination Project</h4>

                        <p className={styles.meta}>
                            Role: Architectural BIM Lead<br />
                            Duration: Jan 2023 – Sep 2024
                        </p>

                        <p className={styles.description}>
                            Simulated a real-world multidisciplinary BIM environment involving
                            architectural, structural, and building services coordination.
                        </p>

                        <ul>
                            <li>Led architectural BIM model development</li>
                            <li>Prepared models for clash detection</li>
                            <li>Coordinated with multiple disciplines</li>
                            <li>Resolved clashes and maintained BIM standards</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProjectSection;