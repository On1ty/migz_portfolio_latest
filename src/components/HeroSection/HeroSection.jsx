import { LazyLoadImage } from "react-lazy-load-image-component";
import heroPhoto from "../../assets/company-photoshoot.png";
import placeholderHeroPhoto from "../../assets/placeholder-company-photoshoot.jpg";
import HireMeBtn from "../HireMeBtn/HireMeBtn";
import "./HeroSection.scss";
import { forwardRef } from "react";

export default forwardRef(function HereSection({ anchorId, data }, ref) {
  const { firstName, lastName, currentJob, statement } = data;

  return (
    <section className="hero" id={anchorId} ref={ref}>
      <div className="hero-left">
        <h1 className="hero-header">
          I'm {firstName} {lastName} <br />
          <span>
            <span className="text-primary-clr">
              {currentJob.substring(0, currentJob.indexOf(" "))}
            </span>{" "}
            {currentJob.substring(currentJob.indexOf(" ") + 1)}
          </span>
        </h1>
        <p className="hero-intro">{statement}</p>
        <HireMeBtn />
      </div>
      <div className="hero-right">
        <LazyLoadImage
          src={heroPhoto}
          className="hero-photo"
          placeholderSrc={placeholderHeroPhoto}
          alt={`${firstName}'s photo`}
        />
      </div>
    </section>
  );
});
