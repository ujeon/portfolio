export const projectScriptGenerator = <T>(
  name: T,
  abstract: T,
  keywords: T,
  url: T
) => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: name,
    abstract: abstract,
    accessMode: "textual, visual",
    creator: {
      "@type": "Person",
      name: "장우전"
    },
    keywords: keywords,
    url: url
  });
};
