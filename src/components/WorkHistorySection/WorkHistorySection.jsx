import "./WorkHistorySection.css";

export default function WorkHistorySection({ anchorId, data }) {
  const { summary, work } = data;
  return (
    <section id={anchorId}>
      <h2 className="sub-header">Work History</h2>
      <p className="summary">{summary}</p>
      <div className="work-history">
        {work.map(
          ({
            jobTitle,
            company,
            startMonth,
            startYear,
            endMonth,
            endYear,
            currentWork,
            location,
            responsibilities,
          }) => (
            <div className="work" key={company}>
              <p className="job-title">{jobTitle}</p>
              <p className="company">{company}</p>
              <p className="job-info">
                <span className="period">
                  {startMonth} {startYear} -{" "}
                  {currentWork ? "Present" : `${endMonth} ${endYear}`}
                </span>
                <span>{location}</span>
              </p>
              <div className="responsibilities">
                <p>Responsibilities:</p>
                <ul className="">
                  {responsibilities.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
