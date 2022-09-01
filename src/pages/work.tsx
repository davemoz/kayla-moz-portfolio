import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC } from "gatsby";

const WorkPage = ({ data }) => {
  return (
    <>
      <h1>Work</h1>
      {data.map((work) => {
        return <WorkPost post={work} />;
      })}
    </>
  );
};

export const Head: HeadFC = ({ data }) => {
  return <title>{data.site.siteMetadata.title} - Work</title>;
};

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default WorkPage;