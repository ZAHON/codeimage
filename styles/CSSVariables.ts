import { createGlobalStyle } from 'styled-components';

export const CSSVariables = createGlobalStyle`
	:root {
		// Colors
		--color-blue-50: hsl(213, 100%, 96%);
		--color-blue-100: hsl(212, 100%, 94%);
		--color-blue-200: hsl(213, 96%, 90%);
		--color-blue-300: hsl(212, 82%, 85%);
		--color-blue-400: hsl(212, 78%, 77%);
		--color-blue-500: hsl(212, 82%, 65%);
		--color-blue-600: hsl(212, 100%, 48%);
		--color-blue-700: hsl(212, 100%, 40%);
		--color-blue-800: hsl(212, 100%, 30%);
		--color-blue-900: hsl(211, 100%, 15%);

		--color-gray-50: hsl(210, 17%, 95%);
		--color-gray-100: hsl(210, 12%, 93%);
		--color-gray-200: hsl(216, 11%, 91%);
		--color-gray-300: hsl(206, 12%, 89%);
		--color-gray-400: hsl(210, 11%, 86%);
		--color-gray-500: hsl(205, 11%, 78%);
		--color-gray-600: hsl(206, 6%, 56%);
		--color-gray-700: hsl(206, 6%, 52%);
		--color-gray-800: hsl(206, 6%, 44%);
		--color-gray-900: hsl(202, 24%, 9%);

		--color-link: hsl(212, 100%, 48%);
  	--color-selection: hsl(213, 96%, 90%);
  	--color-code: hsl(317, 100%, 65%);

  	--color-background: hsl(0, 0%, 100%);
  	--color-background-alpha: hsla(0, 0%, 100%, 0.8);
  	--color-background-contrast: hsl(0, 0%, 100%);
  	--color-foreground: hsl(0, 0%, 0%);
  	--color-text: hsl(202, 24%, 9%);
  	--color-border: hsla(0, 0%, 0%, 0.15);

		--color-primary: hsl(212, 100%, 48%);

		// Shadows
		--shadow-xs: 0 2px 8px 1px hsla(206, 6%, 44%, 0.07), 0 1px 1px -1px hsla(206, 6%, 44%, 0.04);
  	--shadow-sm: 0 2px 8px 2px hsla(206, 6%, 44%, 0.071), 0 2px 4px -1px hsla(206, 6%, 44%, 0.04);
  	--shadow-md: 0 12px 20px 6px hsla(206, 6%, 44%, 0.08);
  	--shadow-lg: 0 12px 34px 6px hsla(206, 6%, 44%, 0.18);
  	--shadow-xl: 0 25px 65px 0px hsla(206, 6%, 44%, 0.349);
}

[data-theme='dark'] {
	// Colors
  --color-blue-50: hsl(213, 59%, 15%);
  --color-blue-100: hsl(212, 65%, 18%);
  --color-blue-200: hsl(212, 71%, 20%);
  --color-blue-300: hsl(212, 78%, 23%);
  --color-blue-400: hsl(212, 86%, 27%);
  --color-blue-500: hsl(212, 90%, 34%);
  --color-blue-600: hsl(212, 100%, 48%);
  --color-blue-700: hsl(212, 100%, 61%);
  --color-blue-800: hsl(212, 100%, 61%);
  --color-blue-900: hsl(211, 100%, 96%);

	--color-gray-50: hsl(210, 8%, 9%);
  --color-gray-100: hsl(204, 6%, 16%);
  --color-gray-200: hsl(200, 7%, 18%);
  --color-gray-300: hsl(206, 7%, 21%);
  --color-gray-400: hsl(203, 6%, 24%);
  --color-gray-500: hsl(207, 6%, 32%);
  --color-gray-600: hsl(206, 6%, 44%);
  --color-gray-700: hsl(208, 5%, 50%);
  --color-gray-800: hsl(207, 6%, 63%);
  --color-gray-900: hsl(210, 6%, 93%);

  --color-link: hsl(212, 100%, 61%);
  --color-selection: hsl(317, 100%, 71%);
  --color-code: hsl(190, 95%, 44%);

  --color-background: hsl(0, 0%, 0%);
  --color-background-alpha: hsla(0, 0%, 0%, 0.6);
  --color-background-contrast: hsl(210, 8%, 9%);
  --color-foreground: hsl(0, 0%, 100%);
  --color-text: hsl(210, 6%, 93%);
  --color-border: hsla(0, 0%, 100%, 0.15);

	// Shadows
	--shadow-xs: 0 2px 8px 1px hsla(0, 0%, 0%, 0.07), 0 1px 1px -1px hsla(0, 0%, 0%, 0.04);
  --shadow-sm: 0 2px 8px 2px hsla(0, 0%, 0%, 0.07), 0 2px 4px -1px hsla(0, 0%, 0%, 0.04);
  --shadow-md: 0 12px 20px 6px hsla(0, 0%, 0%, 0.08);
  --shadow-lg: 0 12px 34px 6px hsla(0, 0%, 0%, 0.18);
  --shadow-xl: 0 25px 65px 0px hsla(0, 0%, 0%, 0.35);
}
`;
