import React from "react";
import { Helmet } from "react-helmet";

export default function ContactHead() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Contact Andrew Morgan on ClusterDB.com to discuss databases such as MongoDB."
        />
        <meta
          name="keywords"
          content="Contact Andrew Morgan on ClusterDB.com to discuss databases such as MongoDB"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Contact Andrew Morgan on ClusterDB.com to discuss databases such as MongoDB</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> 

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Andrew Morgan on ClusterDB.com to discuss databases such as MongoDB" />
        <meta
          property="og:description"
          content="Contact Andrew Morgan on ClusterDB.com to discuss databases such as MongoDB"
        />
        <meta property="og:image" content="https://clusterdb.com/images/clusterdb-OG.jpg" />
        <meta property="og:url" content="https://clusterdb.com/#/contact" /> 
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Andrew Morgan on ClusterDB.com to discuss databases such as MongoDB." />
        <meta
          name="twitter:description"
          content="Contact Andrew Morgan on ClusterDB.com to discuss databases such as MongoDB."
        />
      </Helmet>
    </>
  );
}