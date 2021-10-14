import type { NextPage } from "next"

const Home: NextPage = () => {
	return (
		<>
			<div className="footer">
				<div className="endNote">All Rights Reserved &copy; 2021</div>
				<div className="logoContainer">
					<span>
						<a
							href="https://facebook.com/tharunoptimus"
							aria-label="Facebook Id"
						>
							<img
								src="/assets/images/logos/facebook.svg"
								alt="@tharunoptimus"
							/>
						</a>
					</span>
					<span>
						<a
							href="https://instagram.com/tharunoptimus"
							aria-label="Instagram Id"
						>
							<img
								src="/assets/images/logos/instagram.svg"
								alt="@tharunoptimus"
							/>
						</a>
					</span>
					<span>
						<a
							href="https://github.com/tharunoptimus"
							aria-label="GitHub Id"
						>
							<img
								className="githubLogo"
								src="/assets/images/logos/github.svg"
								alt="@tharunoptimus"
							/>
						</a>
					</span>
					<span>
						<a
							href="https://www.linkedin.com/in/tharunoptimus/"
							aria-label="LinkedIn Id"
						>
							<img
								src="/assets/images/logos/linkedin.svg"
								alt="@tharunoptimus"
							/>
						</a>
					</span>
					<span>
						<a
							href="skype:tharunoptimus?chat"
							aria-label="Skype Chat"
						>
							<img
								src="/assets/images/logos/skype.svg"
								alt="@tharunoptimus"
							/>
						</a>
					</span>
				</div>
			</div>

			<style jsx>{`
				.footer {
					color: #000;
					padding-bottom: 2rem;
				}
				.endNote {
					max-width: 550px;
					margin: 0 auto;
					padding: 1rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 20px;
					font-size: 1.5rem;
					font-weight: 400;
				}
				.logoContainer {
					display: flex;
					flex-wrap: wrap;
					gap: 10px;
					align-items: center;
					justify-content: center;
				}
				.logoContainer a img {
					height: 2rem;
					width: 2rem;
				}
				.logoContainer a .githubLogo {
					height: 1.5rem;
				}
			`}</style>
		</>
	)
}

export default Home
