import React from "react";
import Image from "next/image";

const ProjectBackground = (props) => {
  return (
    <div
      style={{
        gridArea: "1/1",
        height: 600,
        position: "relative",
        width: "100%",
      }}
    >
      <Image
        src={`/${props.filename}`}
        alt=""
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
};

export default ProjectBackground;
