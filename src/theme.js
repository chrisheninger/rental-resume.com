export const colors = {
  primary: '#334050',
  primaryLight: '#657279',
  secondary: '#de673d',
  background: '#edeff0',
  white: '#fff',
  black: '#000',
};

export const typography = {
  sans:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: '"Source Code Pro", monospace',
  headingColor: colors.gray600,
  bodyColor: colors.gray800,
  anchorColor: colors.primary,
  fontBase: '1rem',
};

export const breakpoints = {
  tabletPortrait: `@media (min-width: 600px)`,
  tabletLandscape: `@media (min-width: 900px)`,
  desktop: `@media (min-width: 1200px)`,
};

export const globalBorderRadius = '4px';
export const globalBoxShadow =
  '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)';
export const globalPadding = {
  padding: '12px',
  [breakpoints.tabletPortrait]: {
    padding: '16px',
  },
  [breakpoints.tabletLandscape]: {
    padding: '20px',
  },
  [breakpoints.desktop]: {
    padding: '24px',
  },
};

export default {
  colors,
  typography,
  breakpoints,
  globalPadding,
  globalBorderRadius,
  globalBoxShadow,
};
