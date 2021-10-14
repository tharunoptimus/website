import type { AppProps } from "next/app"
import { useEffect } from "react"

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		if ("serviceWorker" in navigator) {
			window.addEventListener("load", () => {
				navigator.serviceWorker
					.register("serviceworker.js")
					.then((reg) => console.log("Success: ", reg.scope))
					.catch((err) => console.log("Failure: ", err))
			})
		}
	}, [])
	return <Component {...pageProps} />
}
export default MyApp
