import type { NextPage } from "next"
import Head from "next/head"
import FrontPage from "./frontPage"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta key="description" content="Tharunraj Mailvakanan" />
				<meta
					key="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<meta key="theme-color" content="#feca57" />
				<title>Tharunraj Mailvakanan</title>
			</Head>

			<FrontPage />

			<style jsx global>{`
				@font-face {
					font-family: Inter;
					src: url(/assets/css/regular.woff2) format("woff2");
					font-display: swap;
				}
				* {
					outline: 0;
				}
				body,
				html {
					margin: 0;
					height: 100%;
					font-weight: 300;
					font-family: Inter, system-ui, -apple-system,
						BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
						Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
					color: #fff;
				}
				body::-webkit-scrollbar {
					display: none;
				}
				body {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
				#__next {
					min-height: 100%;
					height: 100%;
				}
				a {
					text-decoration: none;
				}
			`}</style>
		</>
	)
}

export default Home
