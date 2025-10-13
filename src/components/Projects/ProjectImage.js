import React from "react";
import Image from "next/image";

const ProjectImage = (props) => {
  return (
    <div style={{ width: "100%", position: "relative", height: "400px" }}>
      <Image
        src={`/${props.filename}`}
        alt=""
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default ProjectImage;
