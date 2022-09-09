import type { NextPage } from "next"
import { Stack } from "./stackData"

export interface CardProps {
	imageUrl: string
	cardTitle: string
	cardDescription: string
	stack: Stack[]
	projectURL: string
	repoURL: string
}


const Card: NextPage<CardProps> = (props) => {
	return (
		<>
			<div className="card">
				<div className="cardInfo">
					<div className="cardImageContainer">
						<a
							href={props.projectURL}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={props.imageUrl} alt={props.cardTitle} />
						</a>
					</div>
					<div className="cardContent">
						<span className="cardHeading">
							<a
								href={props.projectURL}
								target="_blank"
								rel="noopener noreferrer"
							>
								{props.cardTitle}
							</a>
						</span>
						<span className="cardDetails">
							{props.cardDescription}
						</span>
					</div>
				</div>

				<div className="cardButtons">
					<div className="cardStack">
						{props.stack?.map((image: Stack) => (
							<img
								src={image.imageUrl}
								alt={image.imageAlt}
								height={25}
								width={25}
							/>
						))}
					</div>

					<div className="cardActions">
						<a href={props.projectURL} className="linkToSite">
							Visit Site ↗
						</a>
						<a href={props.repoURL} className="linkToRepo">
							Source Code ↗
						</a>
					</div>
				</div>
			</div>

			<style jsx>{`
				.card {
					background-color: #fff;
					color: #444;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					max-width: 315px;
					padding: 1rem;
					border: 0;
					border-radius: 5px;
					box-shadow: 1px 0 11px 1px #444;
				}
				.cardInfo {
					display: flex;
					align-items: center;
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
				.cardStack {
					padding-top: 0.5rem;
					display: flex;
					align-items: center;
					// justify-content: space-evenly;
				}
				.cardStack > * {
					margin-right: 0.3rem;
				}
				.cardActions {
					padding-top: 0.5rem;
					display: flex;
					align-items: center;
					justify-content: flex-start;
				}
				.linkToSite,
				.linkToRepo {
					text-decoration: none;
					padding: 0.3em 0.5em;
					color: white;
					background-color: #0070f3;
					border: 1px solid #44444444;
					margin-right: 0.4rem;
					border-radius: 7px;
				}
				.linkToRepo {
					background-color: black;
				}
				.linkToSite:hover,
				.linkToSite:focus,
				.linkToRepo:hover,
				.linkToRepo:focus {
					text-decoration: none;
					transform: scale(1.05);
					transition: transform 0.2s linear;
					border: 1px solid #0070f3;
				}
				.linkToRepo:hover,
				.linkToRepo:focus {
					border: 1px solid white;
				}
			`}</style>
		</>
	)
}

export default Card
