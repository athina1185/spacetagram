import React from "react";
import useSpace from "../custom-hooks/useSpace";
import Card from "../components/Cards";

function Images() {
  const [error, spaceData] = useSpace(
    "https://api.nasa.gov/planetary/apod?api_key=ZhZWP6d4gtOrpEOxtMcFAJDegMEDVw0fdRLAOgmx"
  );
  return (
    <div>
      {spaceData?.map((data, index) => (
        <Card spaceData={data} index={index }/>
      ))}
    </div>
  );
}

export default Images;
