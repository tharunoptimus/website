import type { NextPage } from "next"

const Home: NextPage = () => {
	return (
		<>
			<div className="thirdSlide">
				<div className="timelineItem">
					<div className="event">
						<span className="dateContainer">October 21 2014</span>
						<span className="eventHeading">
							My first Website! 💻
						</span>
						<span className="eventDetails">
							I got interested in web development
						</span>
					</div>
				</div>
				<div className="timelineItem">
					<div className="event">
						<span className="dateContainer">
							August 2019 - Current (Exp: April 2023)
						</span>
						<span className="eventHeading">
							B. Tech Information Technology 👨‍🎓{" "}
						</span>
						<span className="eventDetails">
							Studied at Madras Institute of Technology, Anna
							University, Chennai
						</span>
					</div>
				</div>
				<div className="timelineItem">
					<div className="event">
						<span className="dateContainer">
							March 2021 - June 2021
						</span>
						<span className="eventHeading">
							Data Analyst Intern 👨‍🔬
						</span>
						<span className="eventDetails">
							Completed my Internship at Shape AI
						</span>
					</div>
				</div>
				<div className="timelineItem">
					<div className="event">
						<span className="dateContainer">
							September 2021 - October 2021
						</span>
						<span className="eventHeading">
							Founder & Full stack Developer 👨‍💻
						</span>
						<span className="eventDetails">
							Started my own Private Authentication Service to
							protect users&apos; privacy and security
						</span>
					</div>
				</div>
			</div>

			<style jsx>{`
				.thirdSlide {
					min-width: 300px;
					max-width: 500px;
					margin: auto;
					color: #000;
				}
				.thirdSlide .timelineItem {
					font-size: 1em;
					line-height: 1.75em;
					border-top: 3px solid;
					-o-border-image: linear-gradient(
						to right,
						#743ad5 0,
						#d53a9d 100%
					);
					border-image: linear-gradient(
						to right,
						#743ad5 0,
						#d53a9d 100%
					);
					border-image-slice: 1;
					border-width: 3px;
					margin: 0;
					padding: 40px;
					counter-increment: section;
					position: relative;
					color: #34435e;
				}
				.thirdSlide .timelineItem:before {
					content: counter(section);
					position: absolute;
					border-radius: 50%;
					padding: 10px;
					height: 1.25em;
					width: 1.25em;
					background-color: #34435e;
					text-align: center;
					line-height: 1.25em;
					color: #fff;
					font-size: 1em;
				}
				.thirdSlide .timelineItem:nth-child(odd) {
					border-right: 3px solid;
					padding-left: 0;
				}
				.thirdSlide .timelineItem:nth-child(odd):before {
					left: 100%;
					margin-left: -20px;
				}
				.thirdSlide .timelineItem:nth-child(even) {
					border-left: 3px solid;
					padding-right: 0;
				}
				.thirdSlide .timelineItem:nth-child(even):before {
					right: 100%;
					margin-right: -20px;
				}
				.thirdSlide .timelineItem:first-child {
					border-top: 0;
					border-top-right-radius: 0;
					border-top-left-radius: 0;
				}
				.thirdSlide .timelineItem:last-child {
					border-bottom-right-radius: 0;
					border-bottom-left-radius: 0;
				}
				.thirdSlide .event {
					display: flex;
					flex-direction: column;
					gap: 10px;
				}
				.thirdSlide .event .dateContainer {
					font-size: 1.3rem;
				}
				.thirdSlide .event .eventHeading {
					font-size: 1.5rem;
				}
				.thirdSlide .event .eventDetails {
					font-size: 1.2rem;
				}
			`}</style>
		</>
	)
}

export default Home
