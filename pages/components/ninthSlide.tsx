import type { NextPage } from "next"

const Home: NextPage = () => {
	return (
		<>
			<div className="ninthSlide">
				<div className="ninthSlideContent">
					<div className="ninthSlideTitle">
						<span>Have something to say?</span>
					</div>
					<span>
						<button>
							<a href="mailto:tharunoptimus@proton.me">
								Send me an Email! 📧{" "}
							</a>
						</button>
					</span>
				</div>
			</div>

			<style jsx>{`
				.ninthSlide button:focus {
					text-decoration: none;
					transform: scale(1.02);
					transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
				}
				.ninthSlideContent button {
					margin-top: 1rem;
					border: none;
					padding: 10px;
					background: #fff;
					color: #444;
					font-size: 1.5rem;
					font-weight: 600;
					border-radius: 5px;
					cursor: pointer;
				}
				.ninthSlide {
					background-color: #4285f4;
				}
				.ninthSlideContent {
					max-width: 550px;
					margin: 0 auto;
					padding: 1rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 20px;
				}
				.ninthSlideTitle {
					font-size: 2.5rem;
					font-weight: 600;
					text-align: center;
					text-shadow: 3px 3px 0 #4d5eb3;
				}
				.ninthSlideContent button {
					padding: 8px 16px;
					border-radius: 5px;
					border: 1px solid #44444444;
					background-color: #fff;
				}
				.ninthSlideContent button a {
					color: #444;
				}
				.ninthSlideContent button {
					margin-top: 1rem;
					border: none;
					padding: 10px;
					background: #fff;
					color: #444;
					font-size: 1.5rem;
					font-weight: 600;
					border-radius: 5px;
					cursor: pointer;
				}
				.ninthSlide button:focus {
					text-decoration: none;
					transform: scale(1.02);
					transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
				}
			`}</style>
		</>
	)
}

export default Home
