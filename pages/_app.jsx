import Head from "next/head";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Zoo do Joca!</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
