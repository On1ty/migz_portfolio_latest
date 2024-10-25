import HeroSection from "../HeroSection/HeroSection";
import "./Main.css";
import data from "../../data.json";
import TechSection from "../TechSection/TechSection";
import EducationSection from "../EducationSection/EducationSection";
import WorkHistorySection from "../WorkHistorySection/WorkHistorySection";
import ContactSection from "../ContactSection/ContactSection";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Main({ setActiveSection }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.2 });
  const [techRef, techInView] = useInView({ threshold: 0.2 });
  const [eduRef, eduInView] = useInView({ threshold: 0.2 });
  const [workRef, workInView] = useInView({ threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (heroInView) setActiveSection("hero");
    else if (techInView) setActiveSection("techStack");
    else if (eduInView) setActiveSection("education");
    else if (workInView) setActiveSection("workHistory");
    else if (contactInView) setActiveSection("contact");
  }, [heroInView, techInView, eduInView, workInView, contactInView]);

  return (
    <main className="content">
      <HeroSection anchorId="hero" data={data} ref={heroRef} />
      <TechSection anchorId="techStack" data={data.techStack} ref={techRef} />
      <EducationSection
        anchorId="education"
        data={data.educationHistory}
        ref={eduRef}
      />
      <WorkHistorySection
        anchorId="workHistory"
        data={data.workHistory}
        ref={workRef}
      />
      <ContactSection
        anchorId="contact"
        email={data.email}
        mobile={data.mobile}
        country={data.country}
        province={data.province}
        city={data.city}
        ref={contactRef}
      />
    </main>
  );
}
