import "./EducationSection.css";

export default function EducationSection({ anchorId, data }) {
  const { summary, education } = data;

  return (
    <section id={anchorId}>
      <h2 className="sub-header">Education</h2>
      <p className="summary">{summary}</p>
      <div className="education">
        {education.map(
          ({
            degree,
            institution,
            batchYear,
            capstone,
            capstoneDescription,
          }) => (
            <div className="education-item" key={degree}>
              <div>
                <p className="institution">{institution}</p>
                <span className="batchYear">{batchYear}</span>
              </div>
              <div>
                <p className="capstone">Capstone - {capstone}</p>
                <p className="capstone-desc">{capstoneDescription}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
