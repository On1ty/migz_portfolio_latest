import HeroSection from "../HeroSection/HeroSection";
import "./Main.css";
import data from "../../data.json";
import TechSection from "../TechSection/TechSection";
import EducationSection from "../EducationSection/EducationSection";

export default function Main() {
  // console.log(data);
  // console.log(data.educationHistory);

  return (
    <main className="content">
      <HeroSection anchorId="hero" data={data} />
      <TechSection anchorId="techStack" data={data.techStack} />
      <EducationSection anchorId="education" data={data.educationHistory} />
    </main>
  );
}
