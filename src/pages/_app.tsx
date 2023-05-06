import { Roboto } from 'next/font/google';
import type { AppProps } from 'next/app'
import '@/styles/globals.scss'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
