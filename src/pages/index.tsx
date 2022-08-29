import * as React from "react";
import { Script } from "gatsby";
import type { HeadFC } from "gatsby";

const IndexPage = () => {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <Script id="netlify-identity-redirect">
        {`
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            });
          }
        `}
      </Script>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return <title>Kayla Moz - Home</title>;
};
