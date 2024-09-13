import TechItem from "../TechItem/TechItem";
import "./TechStack.css";

export default function TechStack({ data }) {
  const { techStack } = data;
  const { statement, tech } = techStack;

  return (
    <section>
      <h2 className="sub-header">Tech Stack</h2>
      <p className="statement">{statement}</p>
      <div className="tech-stack">
        {tech.map((tech) => (
          <TechItem
            key={tech.name}
            tech={tech.name}
            yearsExp={tech.yearsExp}
            icon={tech.reactIcon}
          />
        ))}
      </div>
    </section>
  );
}
