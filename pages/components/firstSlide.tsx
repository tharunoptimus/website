import type { NextPage } from "next"
import Image from "next/image"

const Home: NextPage = () => {
	function handleClick(): boolean {
		let string: string = "/pdfs/Tharunraj-Mailvakanan.pdf"
		window.open(string, "_blank", "fullscreen=yes")
		return false
	}

	return (
		<>
			<div className="firstSlide">
				<div className="firstSlideBackground"></div>
				<div className="firstSlideContent">
					<div className="imageContainer">
						<Image
							className="tharunoptimusImage"
							src="/assets/images/pics/tharunoptimus.png"
							alt="Tharunraj Mailvakanan"
							width={160}
							height={160}
						/>
					</div>
					<div className="firstSlideInfo">
						<span>Tharunraj Mailvakanan</span>
						<span>Full Stack Web Developer</span>
						<a
							href="#"
							onClick={handleClick}
						>
							<button type="button">Download Resume 📃</button>
						</a>
						<a
							href="https://2s.pages.dev"
						>
							<button type="button">Pages that load in &lt;2 Seconds ⚡</button>
						</a>
					</div>
				</div>
			</div>

			<style jsx>{`
				.firstSlide {
					min-height: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					position: relative;
				}
				.firstSlideBackground {
					position: absolute;
					top: 50%;
					left: 50%;
					width: 100%;
					height: 100%;
					transform: translate(-50%, -50%);
					background: url(/assets/images/svg/first.svg) no-repeat
						center center;
					background-size: cover;
					z-index: -1;
				}
				.firstSlideContent {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
				.imageContainer {
					border: none;
					padding: 10px;
				}
				img {
					height: 10rem;
					width: 10rem;
					aspect-ratio: 1;
					border-radius: 50%;
				}
				.firstSlideInfo {
					text-shadow: 3px 3px 0 #4d5eb3;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding-top: 1rem;
				}
				.firstSlideInfo > span:nth-child(1) {
					text-align: center;
					font-size: 3rem;
					font-weight: 600;
					padding-bottom: 1rem;
				}
				.firstSlideInfo > span:nth-child(2) {
					text-shadow: 2px 2px 0 #4d5eb3;
					text-align: center;
					font-size: 1.9rem;
					font-weight: 400;
					padding-bottom: 1rem;
				}
				.firstSlide a:focus,
				.firstSlide a:hover {
					text-decoration: none;
					transform: scale(1.02);
					transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
				}
				.firstSlide button {
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
			`}</style>
		</>
	)
}

export default Home
