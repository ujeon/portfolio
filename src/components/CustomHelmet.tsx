import React from "react";

import { Helmet } from "react-helmet";

type Props = {
  title?: string;
  description?: string;
  jsonData?: string;
};

const CustomHelmet: React.FC<Props> = ({
  title,
  description,
  jsonData
}: Props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="author" content="장우전" />
      <meta name="description" content={description} />
      <title>{title}</title>
      <script type="application/ld+json">{jsonData}</script>
    </Helmet>
  );
};

export default CustomHelmet;
