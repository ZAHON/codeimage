import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { CSSGlobal, CSSReset, CSSVariables } from '@/styles/.';
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider defaultTheme="system" disableTransitionOnChange>
    <CSSGlobal />
    <CSSReset />
    <CSSVariables />
    <TooltipProvider delayDuration={0}>
      <Component {...pageProps} />
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
