import type { NextPage } from "next"
import Card from "./card"
import { cli } from "./projectData" 

const Home: NextPage = () => {
	return (
		<>
			<div className="seventhSlide">
				<div className="seventhSlideContainer">
					<div className="seventhSlideHeading">
						<span>Command line apps, NPM packages and Languages</span>
					</div>
					<div className="projectsCards">
						{
							cli.map(project => (
								<Card {...project}/>
							))
						}
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
			`}</style>
		</>
	)
}

export default Home
