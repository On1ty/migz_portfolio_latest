import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./RequestCVBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RequestCVBtn() {
  return (
    <button className="download-cv">
      Request CV
      <FontAwesomeIcon icon={faDownload} />
    </button>
  );
}
