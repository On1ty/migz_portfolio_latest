import HeroSection from "../HeroSection/HeroSection";
import "./Main.css";
import data from "../../data.json";
import TechSection from "../TechSection/TechSection";

export default function Main() {
  // console.log(data);
  // console.log(data.techStack);

  return (
    <main className="content">
      <HeroSection data={data} />
      <TechSection data={data.techStack} />
    </main>
  );
}
