import React from "react";
import { Helmet } from "react-helmet";

export default function HomeHead() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="ClusterDB. Content from Andrew Morgan on working with databass – especially MongoDB"
        />
        <meta
          name="keywords"
          content="ClusterDB. Content from Andrew Morgan on working with databass – especially MongoDB"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>ClusterDB — Andrew Morgan on databases</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> 

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ClusterDB — Andrew Morgan on databases" />
        <meta
          property="og:description"
          content="ClusterDB — Andrew Morgan on databases"
        />
        <meta property="og:image" content="https://clusterdb.com/images/clusterdb-OG.jpg" />
        <meta property="og:url" content="https://clusterdb.com" /> 
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ClusterDB — Andrew Morgan on databases" />
        <meta
          name="twitter:description"
          content="ClusterDB — Andrew Morgan on databases"
        />
      </Helmet>
    </>
  );
}