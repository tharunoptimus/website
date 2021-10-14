import type { NextPage } from "next"
import FirstSlide from "./components/firstSlide"
import SecondSlide from "./components/secondSlide"
import ThirdSlide from "./components/thirdSlide"
import FourthSlide from "./components/fourthSlide"
import FifthSlide from "./components/fifthSlide"
import SixthSlide from "./components/sixthSlide"
import SeventhSlide from "./components/seventhSlide"
import EighthSlide from "./components/eighthSlide"
import NinthSlide from "./components/ninthSlide"
import Footer from "./components/footer"

const Home: NextPage = () => {
	return (
		<>

			<div className="wrapper">
				<FirstSlide />
				<div className="firstBreakSlide"></div>
        <SecondSlide />
        <div className="secondBreakSlide"></div>
        <ThirdSlide />
        <div className="thirdBreakSlide"></div>
        <FourthSlide />
        <div className="fourthBreakSlide"></div>
        <FifthSlide />
        <div className="sixthBreakSlide"></div>
        <SixthSlide />
        <div className="seventhBreakSlide"></div>
        <SeventhSlide />
        <div className="eighthBreakSlide"></div>
        <EighthSlide />
        <div className="ninethBreakSlide"></div>
        <NinthSlide />
        <div className="tenthBreakSlide"></div>
        <Footer />
			</div>

			<style jsx>{`
				.firstBreakSlide {
					min-height: 100px;
					width: 100%;
					background: url(/assets/images/svg/firstBreak.svg) no-repeat
						center center;
					background-size: cover;
				}
        .secondBreakSlide {
          min-height: 100px;
          width: 100%;
          background: url(/assets/images/svg/secondBreak.svg) no-repeat center center;
          background-size: cover;
        }
        .thirdBreakSlide {
          min-height: 100px;
          width: 100%;
          background: url(/assets/images/svg/thirdBreak.svg) no-repeat center center;
          background-size: cover;
        }
        .fourthBreakSlide {
          min-height: 100px;
          width: 100%;
          background: url(/assets/images/svg/fourthBreak.svg) no-repeat center center;
          background-size: cover;
        }
        .sixthBreakSlide {
          min-height: 100px;
          width: 100%;
          background: url(/assets/images/svg/sixthBreak.svg) no-repeat center center;
          background-size: cover;
        }
        .seventhBreakSlide {
          min-height: 100px;
          width: 100%;
          background: url(/assets/images/svg/seventhBreak.svg) no-repeat center center;
          background-size: cover;
        }
        .eighthBreakSlide {
          min-height: 100px;
          width: 100%;
          background: url(/assets/images/svg/eighthBreak.svg) no-repeat center center;
          background-size: cover;
        }
        .ninethBreakSlide {
          min-height: 200px;
          width: 100%;
          background: url(/assets/images/svg/ninethBreak.svg) no-repeat center center;
          background-size: cover;
        }
        .tenthBreakSlide {
          min-height: 100px;
          width: 100%;
          background: url(/assets/images/svg/tenthBreak.svg) no-repeat center center;
          background-size: cover;
        }
        .wrapper {
					display: flex;
					flex-direction: column;
					height: 100%;
				}
			`}</style>
		</>
	)
}

export default Home
