import React from "react";
import { Helmet } from "react-helmet";
import Icon from "../../images/favicon.png";

const HelmetComponent = ({ title, description, image }) => {
  const newTitle = title ? `${title} - EMERALD` : `EMERALD`;

  const newDescription = description
    ? description
    : "The personal website for EMERALD's web apps and social media.";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{newTitle}</title>
      <meta name="title" content={title ? title : "EMERALD"} />
      <meta name="description" content={newDescription} />
      <meta name="theme-color" content="#5865F2" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title ? title : "EMERALD"} />
      <meta property="og:site_name" content="EMERALD" />
      <meta property="og:description" content={newDescription} />
      <meta property="og:image" content={image ? image : Icon} />

      {/* Twitter */}
      <meta property="twitter:title" content={newTitle} />
      <meta property="twitter:description" content={newDescription} />
      <meta property="twitter:image" content={image ? image : Icon} />
      {image && <meta property="twitter:card" content="summary_large_image" />}

      {/* Other */}
      <meta name="msapplication-TileColor" content="#5865F2" />
    </Helmet>
  );
};

export default HelmetComponent;
