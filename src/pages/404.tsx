import React from "react";
import { GatsbyLocation } from "local-types";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { useSiteMetadata } from "../hooks";

interface NotFoundPageProps {
  location: GatsbyLocation;
}

const NotFoundPage: React.FunctionComponent<NotFoundPageProps> = ({
  location,
}): React.ReactElement => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Não encontrado</h1>
      <p>A página que você procura não existe, que pena :(</p>
    </Layout>
  );
};

export default NotFoundPage;
