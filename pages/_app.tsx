import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta charSet="utf-8" />
          <title>42Manito</title>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://user-images.githubusercontent.com/86397600/250159799-efa4ccf2-daeb-46f0-8679-655e4f2587df.png"
          />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
