import HeroSection from "../HeroSection/HeroSection";
import "./Main.css";
import data from "../../data.json";
import TechSection from "../TechSection/TechSection";
import EducationSection from "../EducationSection/EducationSection";
import WorkHistorySection from "../WorkHistorySection/WorkHistorySection";
import ContactSection from "../ContactSection/ContactSection";

export default function Main() {
  // console.log(data);
  // console.log(data.educationHistory);

  return (
    <main className="content">
      <HeroSection anchorId="hero" data={data} />
      <TechSection anchorId="techStack" data={data.techStack} />
      <EducationSection anchorId="education" data={data.educationHistory} />
      <WorkHistorySection anchorId="workHistory" data={data.workHistory} />
      <ContactSection
        anchorId="contact"
        email={data.email}
        mobile={data.mobile}
        country={data.country}
        province={data.province}
        city={data.city}
      />
    </main>
  );
}
