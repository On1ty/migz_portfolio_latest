import { forwardRef } from "react";
import TechStack from "../TechStack/TechStack";
import "./TechSection.scss";

export default forwardRef(function HereSection({ anchorId, data }, ref) {
  const { summary, tech } = data;

  return (
    <section id={anchorId} ref={ref}>
      <h2 className="sub-header">Tech Stack</h2>
      <p className="summary">{summary}</p>
      <TechStack tech={tech} />
    </section>
  );
});
