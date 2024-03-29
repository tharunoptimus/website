import type { NextPage } from "next"

import { html, css, js, mongodb, express, nodejs, pug, pwa, jquery, bootstrap, react, ts, vscode, npm, go, nextjs, worksOffline } from "./stackData"
import { CardProps } from "./card"

export let fullStack: CardProps[] = [
    {
        imageUrl: "/assets/images/pics/meowit.webp",
        cardTitle: "Meow It - Find your clowder!",
        cardDescription: "Anonymous Location based Social Media. Safe for children.",
        stack: [html, css, js, express, mongodb, pwa, worksOffline],
        projectURL: "https://meowit.pages.dev",
        repoURL: "https://github.com/meow-it"
    },
    {
        imageUrl: "/assets/images/pics/talk.png",
        cardTitle: "Talk Messenger",
        cardDescription: "Anonymous private messenger to protect people 's privacy while they chat with their friends.",
        stack: [pug, css, js, jquery, express, mongodb, nodejs, pwa],
        projectURL: "https://talk.adaptable.app",
        repoURL: "https://github.com/tharunoptimus/talk"
    },
    {
        imageUrl: "/assets/images/pics/thunderme.png",
        cardTitle: "Thunder Me",
        cardDescription: "A social media website for sharing your thoughts and experiences. Built entirely with RESTful APIs.",
        stack: [pug, css, bootstrap, js, jquery, express, mongodb, nodejs, pwa],
        projectURL: "https://thunderme.adaptable.app/",
        repoURL: "https://github.com/tharunoptimus/thunderme"
    },
    {
        imageUrl: "/assets/images/pics/classroom.png",
        cardTitle: "Classroom",
        cardDescription: "Online classroom management system for students to manage their lectures, messages, and assignments.",
        stack: [pug, css, bootstrap, js, jquery, express, mongodb, nodejs, pwa],
        projectURL: "https://classroom.adaptable.app/",
        repoURL: "https://github.com/tharunoptimus/classroom"
    },
    {
        imageUrl: "/assets/images/pics/search.png",
        cardTitle: "New Search",
        cardDescription: "A scalable search engine built with Express.js and MongoDB which shows sites and images based on the search query.",
        stack: [pug, css, js, jquery, express, mongodb, pwa],
        projectURL: "https://search.cyclic.app/",
        repoURL: "https://github.com/tharunoptimus/search-engine"
    },
    {
        imageUrl: "/assets/images/pics/paint.png",
        cardTitle: "Paint",
        cardDescription: "A shareable Paint App to showcase your creativity. Share, Save, Edit and Delete at any time. Now available with multiple templates to begin with.",
        stack: [pug, css, js, express, mongodb, nodejs, pwa],
        projectURL: "https://paint.cyclic.app/",
        repoURL: "https://github.com/tharunoptimus/paint"
    },
]

export let pwaspa: CardProps[] = [
    {
        imageUrl: "/assets/images/pics/coolsw.png",
        cardTitle: "Cool SW",
        cardDescription: "Generate a 😎 Service Worker in an Instant ⚡ - Batteries included",
        stack: [html, css, js, pwa, worksOffline],
        projectURL: "https://coolsw.pages.dev",
        repoURL: "https://github.com/tharunoptimus/coolsw"
    },
    {
        imageUrl: "/assets/images/pics/weather.png",
        cardTitle: "Weather App",
        cardDescription: "My first PWA app. It shows the current weather of a city. It uses OpenWeatherMap API.",
        stack: [react, pwa],
        projectURL: "https://findcurrentweather.netlify.app",
        repoURL: "https://github.com/tharunoptimus/weather"
    },
    {
        imageUrl: "/assets/images/pics/arkanoid.png",
        cardTitle: "Arkanoid",
        cardDescription: "I love playing this game so I built one with TypeScript.",
        stack: [react, ts, worksOffline],
        projectURL: "https://arkanoid-ts.netlify.app",
        repoURL: "https://github.com/tharunoptimus/arkanoid"
    },
    {
        imageUrl: "/assets/images/pics/grocery.png",
        cardTitle: "Grocery App",
        cardDescription: "I often forget things to buy in the grocery store. This app helps me remember them. Runs Offline 📡 with IndexedDB",
        stack: [html, css, js, jquery, pwa, worksOffline],
        projectURL: "https://idb-grocery.netlify.app",
        repoURL: "https://github.com/tharunoptimus/grocery"
    },
    {
        imageUrl: "/assets/images/pics/short.png",
        cardTitle: "URL Shortner",
        cardDescription: "URL Shortner built with Express.js RESTful API and MongoDB. It allows users to shorten their URLs.",
        stack: [html, css, js, jquery, pwa],
        projectURL: "http://short.cyclic.app",
        repoURL: "https://github.com/tharunoptimus/short"
    }
    // {
    //     imageUrl: "/assets/images/pics/crawler.png",
    //     cardTitle: "New Search Crawler",
    //     cardDescription: "Crawler bot to crawl and scrap data from websites. New Search uses this crawler!",
    //     stack: [html, css, js, jquery, pwa],
    //     projectURL: "https://newseacrawler.herokuapp.com",
    //     repoURL: "https://github.com/tharunoptimus/crawlerbot"
    // },
]

export let apis: CardProps[] = [
    {
        imageUrl: "/assets/images/pics/css.png",
        cardTitle: "Convert CSS Units",
        cardDescription: "This extension helps you convert CSS units to pixels and vice versa. Has support for 13 different CSS Units.",
        stack: [vscode, js, worksOffline],
        projectURL: "https://github.com/tharunoptimus/css-units/releases/tag/1.0.0",
        repoURL: "https://github.com/tharunoptimus/css-units"
    },
    {
        imageUrl: "/assets/images/pics/placeholder.png",
        cardTitle: "Placeholder Images API",
        cardDescription: "Generate Placeholder Images for a given height and width. Includes support for text and color.",
        stack: [npm, express, nodejs],
        projectURL: "https://placeholder-image-api.herokuapp.com/",
        repoURL: "https://github.com/tharunoptimus/placeholder-image-data-url"
    },
    {
        imageUrl: "/assets/images/pics/fire.png",
        cardTitle: "Fire OAuth",
        cardDescription: "One click passwordless private and secure authentication service provider. Runs fully on Express.js APIs and web sockets",
        stack: [html, css, js, express, mongodb, nodejs, pwa, worksOffline],
        projectURL: "https://fireoauth.netlify.app/",
        repoURL: "https://github.com/Fire-OAuth"
    },
    {
        imageUrl: "/assets/images/pics/qr.png",
        cardTitle: "Generate QR API",
        cardDescription: "Generate QR Codes for a given text or URL for a given size in width and height. Supports multiple formats.",
        stack: [npm, express, nodejs],
        projectURL: "https://qrapigen.herokuapp.com/?data=meow",
        repoURL: "https://github.com/tharunoptimus/qrcode-generator-api.git"
    },
    {
        imageUrl: "/assets/images/pics/infant.webp",
        cardTitle: "Infant Sandbox API",
        cardDescription: "Send Infant Lang code and get the output. Build on top of the Infant Lang Interpreter. Infant Lang Playground uses this API.",
        stack: [go],
        projectURL: "https://infant-lang-playground.netlify.app",
        repoURL: "https://github.com/infant-lang/sandbox.git"
    }
]

export let cli: CardProps[] = [
    {
        imageUrl: "/assets/images/pics/npm.png",
        cardTitle: "crypto-string",
        cardDescription: "Generate crypto random string that can be used for chat rooms and other id specific use case. Install with npm.",
        stack: [npm, js],
        projectURL: "https://www.npmjs.com/package/crypto-string",
        repoURL: "https://github.com/tharunoptimus/crypto-string"
    },
    {
        imageUrl: "/assets/images/pics/endict.jpg",
        cardTitle: "Endict",
        cardDescription: "Command line English dictionary. Search for words and get the meaning. Install with npm.",
        stack: [npm, js],
        projectURL: "https://www.npmjs.com/package/endict",
        repoURL: "https://github.com/tharunoptimus/endict"
    },
    {
        imageUrl: "/assets/images/pics/findodd.jpg",
        cardTitle: "Find the sus word!",
        cardDescription: "Command line game to find the word which is not related to the given word. Install with npm.",
        stack: [npm, js],
        projectURL: "https://www.npmjs.com/package/find-the-odd",
        repoURL: "https://github.com/tharunoptimus/find-the-odd"
    },
    {
        imageUrl: "/assets/images/pics/npm.png",
        cardTitle: "Placeholder Images API NPM Package",
        cardDescription: "The npm package for Placeholder Images API.",
        stack: [npm, js],
        projectURL: "https://www.npmjs.com/package/placeholder-image-data-url",
        repoURL: "https://github.com/tharunoptimus/placeholder-image-data-url"
    },
    {
        imageUrl: "/assets/images/pics/infant.webp",
        cardTitle: "Infant Lang",
        cardDescription: "The Esoteric Programming Language for Infants",
        stack: [nextjs, go, pwa, worksOffline],
        projectURL: "https://infant.pages.dev/",
        repoURL: "https://github.com/infant-lang"
    }
]


const Home: NextPage = () => {
	return (
		<></>
	)
}

export default Home
