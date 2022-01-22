import React from "react";
import useSpace from "../custom-hooks/useSpace";
import Cards from "../components/Cards";
import "../App.css"
function Images() {
  const [error, spaceData] = useSpace(
    "https://api.nasa.gov/planetary/apod?api_key=ZhZWP6d4gtOrpEOxtMcFAJDegMEDVw0fdRLAOgmx"
  );
  return (
    <div className="hero__img">
      {spaceData?.map((data, index) => (
        <Cards spaceData={data} index={index }/>
      ))}
    </div>
  );
}

export default Images;
