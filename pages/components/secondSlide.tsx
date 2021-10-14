import type { NextPage } from 'next'
import Image  from 'next/image'

const Home: NextPage = () => {
   

  return (
    <>
      <div className="secondSlide">
            <div className="secondSlideHeading">What can I do?</div>
            <div className="secondSlideContent">
                <span>
                    I can build
                    <ul>
                        <li>Full Stack Web Apps 🌐</li>
                        <li>PWAs 📱 with cool service workers 👨‍🏭</li>
                        <li>SPAs with React, Vue or Next.js 🛬</li>
                        <li>RESTful APIs with Express or PHP 🌠</li>
                        <li>
                            Manage Database and schemas with MongoDB, MySQL or Postgres
                            🛢
                        </li>
                        <li>Manipulate DOM with jQuery 🤹‍♂️</li>
                        <li>Render HTML with PUG / Jade 👩‍💻</li>
                        <li>
                            and can use CSS with or without Bootstrap or
                            Tailwind ✨
                        </li>
                    </ul>
                </span>

                <span>
                    I can also host the websites and web apps on AWS, Netlify, Cloudflare Pages, Vercel or
                    Heroku. I use Git to manage my source code and GitHub to keep
                    track of my projects and make it open source. I am a fast learner by building
                    things and I am always looking to learn new things.
                    Eager to get involved with most of the web technologies.
                </span>
            </div>
        </div>

        <style jsx>{`
            .secondSlide {
                position: relative;
                background-color: #023;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
            }
            .secondSlideContent {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                max-width: 600px;
                margin: 0 auto;
            }
            .secondSlideHeading {
                font-size: 3rem;
                text-align: center;
                font-weight: 500;
                text-shadow: 3px 3px 0 hsl(0deg 0% 0%);
            }
            .secondSlideContent span:nth-child(1) {
                font-size: 1.2rem;
                font-weight: 400;
                padding: 3rem 0;
            }
            .secondSlideContent span:nth-child(2) {
                font-size: 1.3rem;
                font-weight: 400;
                text-align: center;
            }
            .secondSlideContent span:nth-child(3) button {
                font-size: 1.2rem;
                font-weight: 400;
                text-align: center;
                border: 1px solid #4285f4;
                padding: 10px;
                border-radius: 5px;
                background-color: #fff;
            }
        `}</style>
    </>
  )
}

export default Home
