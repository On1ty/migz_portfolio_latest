import Hero from "../Hero/Hero";
import "./Main.css";
import data from "../../data.json";
import TechStack from "../TechStack/TechStack";

export default function Main() {
  console.log(data);
  console.log(data.techStack);

  return (
    <main className="content">
      <Hero data={data} />
      <TechStack data={data} />
    </main>
  );
}
