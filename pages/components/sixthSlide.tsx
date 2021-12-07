import type { NextPage } from "next"

const Home: NextPage = () => {
	return (
		<>
			<div className="sixthSlide">
				<div className="sixthSlideContainer">
					<div className="sixthSlideHeading">
						<span>Some of my APIs and VSCode Extensions</span>
					</div>
					<div className="projectsCards">
						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://qrapigen.herokuapp.com/?data=meow"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/qr.png"
										alt="Generate QR API"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://qrapigen.herokuapp.com/?data=meow"
										target="_blank"
										rel="noopener noreferrer"
									>
										{" "}
										Generate QR API{" "}
									</a>
								</span>
								<span className="cardDetails">
									Generate QR Codes for a given text or URL
									for a given size in width and height.
									Supports multiple formats. Simply specify
									the data parameter in the URL
								</span>
							</div>
						</div>
						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://placeholder-image-api.herokuapp.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/placeholder.png"
										alt="Placeholder Images API"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://placeholder-image-api.herokuapp.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										{" "}
										Placeholder Images API{" "}
									</a>
								</span>
								<span className="cardDetails">
									Generate Placeholder Images for a given
									height and width. Includes support for text
									and color.
								</span>
							</div>
						</div>


						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://fireoauth.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/fire.png"
										alt="Fire OAuth"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://fireoauth.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										{" "}
										Fire OAuth{" "}
									</a>
								</span>
								<span className="cardDetails">
									One click passwordless private and secure
									authentication service provider. Runs fully
									on Express.js APIs and web sockets
								</span>
							</div>
						</div>

						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://github.com/tharunoptimus/css-units"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/css.png"
										alt="Convert CSS Units"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://github.com/tharunoptimus/css-units"
										target="_blank"
										rel="noopener noreferrer"
									>
										{" "}
										Convert CSS Units{" "}
									</a>
								</span>
								<span className="cardDetails">
									You can&apos;t visualize the CSS units in
									rems and ems or other relative units. This
									extension helps you convert CSS units to
									pixels. Has support for 13 different CSS
									Units.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.sixthSlide {
					background-color: #4cd137;
					padding-top: 5rem;
					padding-bottom: 5rem;
				}
				.sixthSlide .card {
					box-shadow: 6px 5px 8px 3px #44444444;
				}
				.sixthSlideHeading {
					text-shadow: 3px 3px 0 #38aa27;
				}

				.sixthSlideContainer {
					max-width: 1200px;
					margin: 0 auto;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.sixthSlideHeading {
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
