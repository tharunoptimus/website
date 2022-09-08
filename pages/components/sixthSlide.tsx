import type { NextPage } from "next"
import Card from "./card"
import { apis } from "./projectData" 

const Home: NextPage = () => {
	return (
		<>
			<div className="sixthSlide">
				<div className="sixthSlideContainer">
					<div className="sixthSlideHeading">
						<span>Some of my APIs and VSCode Extensions</span>
					</div>
					<div className="projectsCards">
						{
							apis.map(project => (
								<Card {...project}/>
							))
						}
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
			`}</style>
		</>
	)
}

export default Home
