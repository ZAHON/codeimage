import { createGlobalStyle } from 'styled-components';

export const CSSGlobal = createGlobalStyle`
	*::selection {
  background-color: var(--color-selection);
}

body {
	font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: var(--color-text);
  background-color: var(--color-background);
}
`;
