import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./DownloadCVBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DownloadCVBtn() {
  return (
    <a href="#" download className="button download-cv">
      Download CV
      <FontAwesomeIcon icon={faDownload} />
    </a>
  );
}
