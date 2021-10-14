import type { NextPage } from "next"

const Home: NextPage = () => {
	return (
		<>
			<div className="seventhSlide">
				<div className="seventhSlideContainer">
					<div className="seventhSlideHeading">
						<span>Command line apps and NPM packages</span>
					</div>
					<div className="projectsCards">
						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://www.npmjs.com/package/crypto-string"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/npm.png"
										alt="crypto-string"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://www.npmjs.com/package/crypto-string"
										target="_blank"
										rel="noopener noreferrer"
									>
										{" "}
										crypto-string{" "}
									</a>
								</span>
								<span className="cardDetails">
									Generate crypto random string that can be
									used for chat rooms and other id specific
									use case. Install with npm.
								</span>
							</div>
						</div>

						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://www.npmjs.com/package/endict"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/endict.jpg"
										alt="Endict"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://www.npmjs.com/package/endict"
										target="_blank"
										rel="noopener noreferrer"
									>
										{" "}
										Endict{" "}
									</a>
								</span>
								<span className="cardDetails">
									Command line English dictionary. Search for
									words and get the meaning. Install with npm.
								</span>
							</div>
						</div>

						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://www.npmjs.com/package/find-the-odd"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/findodd.jpg"
										alt="Find the sus word!"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://www.npmjs.com/package/find-the-odd"
										target="_blank"
										rel="noopener noreferrer"
									>
										{" "}
										Find the sus word!{" "}
									</a>
								</span>
								<span className="cardDetails">
									Command line game to find the word which is
									not related to the given word. Install with
									npm.
								</span>
							</div>
						</div>

						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://www.npmjs.com/package/placeholder-image-data-url"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/npm.png"
										alt="Placeholder Images API NPM Package"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://www.npmjs.com/package/placeholder-image-data-url"
										target="_blank"
										rel="noopener noreferrer"
									>
										{" "}
										Placeholder Images API NPM Package{" "}
									</a>
								</span>
								<span className="cardDetails">
									The npm package for Placeholder Images API.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.seventhSlide {
					padding-top: 5rem;
					padding-bottom: 5rem;
					background-color: #e67e22;
				}
				.seventhSlide .card {
					box-shadow: 6px 5px 8px 3px #44444444;
				}
				.seventhSlideHeading {
					text-shadow: 3px 2px 0 hsl(28deg 80% 35%);
				}

				.seventhSlideContainer {
					max-width: 1200px;
					margin: 0 auto;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.seventhSlideHeading {
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
