import type { NextPage } from "next"
import Card from "./card"
import { fullStack } from "./projectData" 
const Home: NextPage = () => {
	
	return (
		<>
			<div className="fourthSlide">
				<div className="fourthSlideContainer">
					<div className="fourthSlideHeading">
						<span>Some of my Full Stack Projects</span>
					</div>
					<div className="projectsCards">
						{
							fullStack.map(project => (
								<Card {...project}/>
							))
						}
					</div>
				</div>
			</div>

			<style jsx>{`
				.fourthSlide {
					padding-top: 5rem;
					padding-bottom: 5rem;
					background-color: #743ad5;
				}
				.fourthSlideContainer {
					max-width: 1200px;
					margin: 0 auto;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.fourthSlideHeading {
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
				
				.fourthSlideHeading {
					text-shadow: 3px 3px 0 #5b26b5;
				}
			`}</style>
		</>
	)
}

export default Home
