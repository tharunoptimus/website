import type { NextPage } from "next"

const Home: NextPage = () => {
	return (
		<>
			<div className="fourthSlide">
				<div className="fourthSlideContainer">
					<div className="fourthSlideHeading">
						<span>Some of my Full Stack Projects</span>
					</div>
					<div className="projectsCards">
						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://thunderme.herokuapp.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/thunderme.png"
										alt="Thunder Me"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://thunderme.herokuapp.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Thunder Me{" "}
									</a>
								</span>
								<span className="cardDetails">
									A social media website for sharing your
									thoughts and experiences. Built entirely
									with RESTful APIs.
								</span>
							</div>
						</div>

						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://disposeable.herokuapp.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/talk.png"
										alt="Talk Messenger"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://disposeable.herokuapp.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Talk Messenger{" "}
									</a>
								</span>
								<span className="cardDetails">
									Anonymous private messenger to protect
									people &apos;s privacy while they chat with their
									friends.
								</span>
							</div>
						</div>

						<div className="card">
							<div className="cardImageContainer">
								<a
									href="http://classNameroom-task.herokuapp.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/classroom.png"
										alt="classNameroom"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="http://classNameroom-task.herokuapp.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										{" "}
										classNameroom{" "}
									</a>
								</span>
								<span className="cardDetails">
									Online classNameroom management system for
									students to manage their lectures, messages,
									and assignments.
								</span>
							</div>
						</div>

						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://newsea.herokuapp.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/search.png"
										alt="New Search"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://newsea.herokuapp.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										{" "}
										New Search{" "}
									</a>
								</span>
								<span className="cardDetails">
									A scalable search engine built with
									Express.js and MongoDB which shows sites and
									images based on the search query.
								</span>
							</div>
						</div>

						<div className="card">
							<div className="cardImageContainer">
								<a
									href="https://newseacrawler.herokuapp.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/assets/images/pics/crawler.png"
										alt="New Search Crawler"
									/>
								</a>
							</div>
							<div className="cardContent">
								<span className="cardHeading">
									<a
										href="https://newseacrawler.herokuapp.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										{" "}
										New Search Crawler{" "}
									</a>
								</span>
								<span className="cardDetails">
									Crawler bot to crawl and scrap data from
									websites. New Search uses this crawler!
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.eighthSlide,
				.fifthSlide,
				.fourthSlide,
				.seventhSlide,
				.sixthSlide {
					padding-top: 5rem;
					padding-bottom: 5rem;
					background-color: #743ad5;
				}
				.eighthSlideContainer,
				.fifthSlideContainer,
				.fourthSlideContainer,
				.seventhSlideContainer,
				.sixthSlideContainer {
					max-width: 1200px;
					margin: 0 auto;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.eighthSlideHeading,
				.fifthSlideHeading,
				.fourthSlideHeading,
				.seventhSlideHeading,
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
				.fourthSlideHeading {
					text-shadow: 3px 3px 0 #5b26b5;
				}
			`}</style>
		</>
	)
}

export default Home