import type { NextPage } from "next"

const Home: NextPage = () => {
	return (
		<>
			<div className="fifthSlide">
				<div className="fifthSlideContainer">
					<div className="fifthSlideHeading">
						<span>Some of my PWA and SPAs</span>
					</div>
					<div className="projectsCards">
						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://findcurrentweather.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/weather.png"
										alt="Weather App"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://findcurrentweather.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										{" "}
										Weather App{" "}
									</a>
								</span>
								<span className="cardDetails">
									My first PWA app. It shows the current
									weather of a city. It uses OpenWeatherMap
									API.
								</span>
							</div>
						</div>

						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://idb-grocery.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/grocery.png"
										alt="Grocery App"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://idb-grocery.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Grocery App{" "}
									</a>
								</span>
								<span className="cardDetails">
									I often forget things to buy in the grocery
									store. This app helps me remember them. Runs
									Offline 📡 with IndexedDB
								</span>
							</div>
						</div>

						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://arkanoid-ts.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/arkanoid.png"
										alt="Arkanoid"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://arkanoid-ts.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Arkanoid{" "}
									</a>
								</span>
								<span className="cardDetails">
									I love playing this game so I built one with
									TypeScript.
								</span>
							</div>
						</div>

						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://short.up.railway.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/short.png"
										alt="URL Shortner"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://short.up.railway.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										{" "}
										URL Shortner{" "}
									</a>
								</span>
								<span className="cardDetails">
									URL Shortner built with Express.js RESTful
									API and MongoDB. It allows users to shorten
									their URLs.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.fifthSlide {
					padding-top: 5rem;
					padding-bottom: 5rem;
					background-color: #f1c40f;
				}
				.fifthSlide .card {
					box-shadow: 1px 0 11px 1px #44444444;
				}
				.fifthSlideHeading {
					text-shadow: 2px 2px 0 #c19c0b;
				}

				.fifthSlideContainer {
					max-width: 1200px;
					margin: 0 auto;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.fifthSlideHeading {
					font-size: 1.8rem;
					font-weight: 600;
					text-align: center;
					padding-bottom: 3rem;
				}
				.projectsCards {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 10px;
				}
				.card {
					background-color: #fff;
					color: #444;
					display: flex;
					align-items: center;
					max-width: 315px;
					padding: 1rem;
					border: 0;
					border-radius: 5px;
					box-shadow: 1px 0 11px 1px #444;
				}
				.cardImageContainer {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.cardImageContainer img {
					width: 5rem;
					height: 5rem;
					border-radius: 50%;
					background-color: #fff;
					padding: 5px;
					border: 1px solid #44444444;
				}
				.cardContent {
					padding: 10px;
					padding-left: 20px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					text-align: justify;
				}
				.cardHeading {
					font-size: 1.2rem;
					font-weight: 600;
					padding-bottom: 0.3rem;
				}
				.cardHeading a {
					text-decoration: none;
					color: #000;
				}
			`}</style>
		</>
	)
}

export default Home
