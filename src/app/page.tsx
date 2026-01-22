import HeroSection from "@/components/HeroSection";
import styles from "./page.module.scss";
import SkillSection from "@/components/SkillsSection";
import WorkExperience from "@/components/ExperienceSection";
import AboutMe from "@/components/AboutMe";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <AboutMe />
      <SkillSection />
      <WorkExperience />
      <ProjectSection/>
      <Footer/>
    </div>
  );
}
