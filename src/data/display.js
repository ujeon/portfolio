const size = {
  phone: "37.5em",
  tabletPortrait: "56.25em",
  tabletLandscape: "75em",
  desktop: "112.5em"
};

export const device = {
  phone: `(max-width: ${size.phone})`,
  tabletPortrait: `(max-width: ${size.tabletPortrait})`,
  tabletLandscape: `(max-width: ${size.tabletLandscape})`,
  desktop: `(min-width: ${size.desktop})`
};
