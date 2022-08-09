import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const ProjectBackground = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
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
            gridArea: "1/1",
            height: 600,
          }}
          layout="fullWidth"
          alt=""
          image={image.node.childImageSharp.gatsbyImageData}
          formats={["webp", "avif"]}
        />
      );
    }}
  />
);

export default ProjectBackground;
