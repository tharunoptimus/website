import type { NextPage } from "next"
import Card from "./card"
import { pwaspa } from "./projectData" 

const Home: NextPage = () => {
	return (
		<>
			<div className="fifthSlide">
				<div className="fifthSlideContainer">
					<div className="fifthSlideHeading">
						<span>Some of my PWA and SPAs</span>
					</div>
					<div className="projectsCards">
						{
							pwaspa.map(project => (
								<Card {...project}/>
							))
						}
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
					text-align: left;
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
