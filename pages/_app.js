import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem="true" attribute='class'>
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
    </ThemeProvider>
  );
}
