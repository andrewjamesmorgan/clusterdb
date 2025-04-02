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
          content="Abut Andrew Morgan – Senior Staff Developer Advocate at MongoDB. Formerly Director of Product Management at Oracle.."
        />
        <meta
          name="keywords"
          content="Abut Andrew Morgan – Senior Staff Developer Advocate at MongoDB. Formerly Director of Product Management at Oracle."
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Abut Andrew Morgan – Senior Staff Developer Advocate at MongoDB. Formerly Director of Product Management at Oracle.</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> 

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Abut Andrew Morgan – Senior Staff Developer Advocate at MongoDB. Formerly Director of Product Management at Oracle." />
        <meta
          property="og:description"
          content="Abut Andrew Morgan – Senior Staff Developer Advocate at MongoDB. Formerly Director of Product Management at Oracle."
        />
        <meta property="og:image" content="https://clusterdb.com/images/clusterdb-OG.jpg" />
        <meta property="og:url" content="https://clusterdb.com/#/contact" /> 
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abut Andrew Morgan – Senior Staff Developer Advocate at MongoDB. Formerly Director of Product Management at Oracle.." />
        <meta
          name="twitter:description"
          content="Abut Andrew Morgan – Senior Staff Developer Advocate at MongoDB. Formerly Director of Product Management at Oracle.."
        />
      </Helmet>
    </>
  );
}