import type { NextPage } from "next"

const Home: NextPage = () => {
	return (
		<>
			<div className="eighthSlide">
            <div className="eighthSlideContainer">
                <div className="eighthSlideHeading">
                    <span>My Blogs built on Next.js</span>
                </div>
                <div className="eighthSlideContent">
                    <div className="card">
                        <div className="cardImageContainer">
                            <a href="https://blog-tharunoptimus-pd.vercel.app/blog/center-a-div-using-css"
                                target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/pics/blogOne.png" alt="Centering a Div with CSS" />
                            </a>
                        </div>
                        <div className="cardContent">
                            <span className="cardHeading">
                                <a href="https://blog-tharunoptimus-pd.vercel.app/blog/center-a-div-using-css"
                                    target="_blank" rel="noopener noreferrer"> Centering a Div </a>
                            </span>
                            <span className="cardDetails">
                                Center a div both horizontally and vertically using these three simple techniques
                            </span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImageContainer">
                            <a href="https://blog-tharunoptimus-pd.vercel.app/blog/develop-a-service-worker"
                                target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/pics/blogTwo.jpg" alt="Develop a Service Worker" />
                            </a>
                        </div>
                        <div className="cardContent">
                            <span className="cardHeading">
                                <a href="https://blog-tharunoptimus-pd.vercel.app/blog/develop-a-service-worker"
                                    target="_blank" rel="noopener noreferrer"> Develop a Service Worker </a>
                            </span>
                            <span className="cardDetails">
                                Develop a service worker to cache all assets and make it online first service worker
                            </span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImageContainer">
                            <a href="https://blog-tharunoptimus-pd.vercel.app/blog/convert-your-site-into-a-pwa"
                                target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/pics/blogThree.jpg" alt="Convert your Website into a PWA in 5 minutes" />
                            </a>
                        </div>
                        <div className="cardContent">
                            <span className="cardHeading">
                                <a href="https://blog-tharunoptimus-pd.vercel.app/blog/convert-your-site-into-a-pwa"
                                    target="_blank" rel="noopener noreferrer"> Convert your Website into a PWA in 5 minutes </a>
                            </span>
                            <span className="cardDetails">
                                Add an offline page, a service worker and few logos to make your PWA!
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

			<style jsx>{`
				.eighthSlide {
					padding-top: 5rem;
					padding-bottom: 5rem;
					background-color: #e67e22;
				}
				.eighthSlide .card {
					box-shadow: 6px 5px 8px 3px #44444444;
				}
				.eighthSlideHeading {
					text-shadow: 3px 2px 0 hsl(28deg 80% 35%);
				}

				.eighthSlideContainer {
					max-width: 1200px;
					margin: 0 auto;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.eighthSlideHeading {
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
				.eighthSlide {
					background-color: #fcc;
					color: #000;
				}
				.eighthSlideContent {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 15px;
				}
				.eighthSlideContent .card {
					display: flex;
					flex-direction: column;
					box-shadow: 6px 5px 8px 3px #44444444;
					max-width: 250px;
					justify-content: space-between;
				}
				.eighthSlideContent .card .cardHeading {
					text-align: left;
				}
				.eighthSlideContent .cardImageContainer,
				.eighthSlideContent .cardImageContainer a {
					display: flex;
					justify-content: center;
				}
				.eighthSlideContent .cardImageContainer img {
					width: 90%;
					height: auto;
					margin: 0 auto;
					border-radius: 0;
					background-color: #fff;
					padding: 5px;
					border: 0;
				}
				.eighthSlideHeading {
					text-shadow: 3px 3px 0 #fbb6b6;
				}
			`}</style>
		</>
	)
}

export default Home
