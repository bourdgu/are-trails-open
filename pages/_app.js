import Layout from '../components/layout';
import { Analytics } from '@vercel/analytics/react';

import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
            <Analytics />
        </Layout>
    )
  }