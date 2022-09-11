import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { CSSGlobal, CSSReset, CSSVariables } from '@/styles/.';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider defaultTheme="system" disableTransitionOnChange>
    <CSSGlobal />
    <CSSReset />
    <CSSVariables />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
