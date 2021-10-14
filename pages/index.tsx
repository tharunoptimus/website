import type { NextPage } from "next"
import Head from "next/head"
import FirstSlide from "./components/firstSlide"

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
				<link rel="apple-touch-icon" href="/apple-touch-icon.webp" />
				<meta key="theme-color" content="#feca57" />
				<title>Tharunraj Mailvakanan</title>
			</Head>

			<div className="wrapper">
				<FirstSlide />
				<div className="firstBreakSlide"></div>
			</div>

			<style jsx>{`
				.firstBreakSlide {
					min-height: 100px;
					width: 100%;
					background: url(/assets/images/svg/firstBreak.svg) no-repeat
						center center;
					background-size: cover;
				}
			`}</style>

			<style jsx global>{`
				@font-face {
					font-family: Inter;
					src: url(/assets/css/Inter.ttf);
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
				#__next {
					min-height: 100%;
					height: 100%;
				}
				a {
					text-decoration: none;
				}
				.wrapper {
					display: flex;
					flex-direction: column;
					height: 100%;
				}
			`}</style>
		</>
	)
}

export default Home
