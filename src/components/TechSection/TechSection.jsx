import TechStack from "../TechStack/TechStack";
import "./TechSection.css";

export default function TechSection({data}) {
  const {statement, tech} = data;

  return (
    <section>
      <h2 className="sub-header">Tech Stack</h2>
      <p className="statement">{statement}</p>
      <TechStack tech={tech}/>
    </section>
  );
}
