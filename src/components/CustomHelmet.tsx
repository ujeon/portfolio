import React from "react";

import { Helmet } from "react-helmet";

type Props = {
  title?: string;
  keywords?: string;
  description?: string;
};

const CustomHelmet: React.FC<Props> = ({ title, description }: Props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="author" content="장우전" />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Helmet>
  );
};

export default CustomHelmet;
