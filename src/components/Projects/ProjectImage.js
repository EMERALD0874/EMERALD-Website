import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const ProjectImage = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(width: 600, placeholder: NONE)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      return (
        <GatsbyImage
          style={{
            width: "100%",
          }}
          alt=""
          image={image.node.childImageSharp.gatsbyImageData}
          formats={["auto", "webp", "avif"]}
        />
      );
    }}
  />
);

export default ProjectImage;
