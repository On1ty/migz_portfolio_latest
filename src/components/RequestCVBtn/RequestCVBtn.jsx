import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./RequestCVBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RequestCVBtn() {
  return (
    <a
      className="button download-cv"
      href="/JUAN_MIGUEL_PALLO_RESUME_UPDATED_JULY_2024.pdf"
      download="Resume - Juan Miguel Pallo.pdf"
    >
      Download CV
      {/* <FontAwesomeIcon icon={faDownload} /> */}
    </a>
  );
}
