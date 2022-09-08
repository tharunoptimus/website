import { html, css, js, mongodb, express, nodejs, pwa } from "./stackData"
import { CardProps } from "./card"

export let fullStack: CardProps[] = [
    {
        imageUrl: "/assets/images/pics/meowit.webp",
        cardTitle: "Meow It - Find your clowder!",
        cardDescription: "Anonymous Location based Social Media. Safe for children.",
        stack: [html, css, js, express, mongodb, nodejs, pwa],
        projectURL: "https://meowit.pages.dev",
        repoURL: "https://github.com/meow-it"
    },
    {
        imageUrl: "/assets/images/pics/talk.png",
        cardTitle: "Talk Messenger",
        cardDescription: "Anonymous private messenger to protect people 's privacy while they chat with their friends.",
        stack: [html, css, js, express, mongodb, nodejs, pwa],
        projectURL: "https://disposeable.herokuapp.com",
        repoURL: "https://github.com/tharunoptimus/talk"
    },
    {
        imageUrl: "/assets/images/pics/thunderme.png",
        cardTitle: "Thunder Me",
        cardDescription: "A social media website for sharing your thoughts and experiences. Built entirely with RESTful APIs.",
        stack: [html, css, js, express, mongodb, nodejs, pwa],
        projectURL: "https://thunderme.herokuapp.com",
        repoURL: "https://github.com/tharunoptimus/thunderme"
    },
    {
        imageUrl: "/assets/images/pics/classroom.png",
        cardTitle: "Classroom",
        cardDescription: "Online classroom management system for students to manage their lectures, messages, and assignments.",
        stack: [html, css, js, express, mongodb, nodejs, pwa],
        projectURL: "https://classroom-task.herokuapp.com",
        repoURL: "https://github.com/tharunoptimus/classroom"
    },
    {
        imageUrl: "/assets/images/pics/search.png",
        cardTitle: "New Search",
        cardDescription: "A scalable search engine built with Express.js and MongoDB which shows sites and images based on the search query.",
        stack: [html, css, js, express, mongodb, nodejs, pwa],
        projectURL: "https://newsea.herokuapp.com",
        repoURL: "https://github.com/tharunoptimus/classroom"
    },
    {
        imageUrl: "/assets/images/pics/paint.png",
        cardTitle: "Paint",
        cardDescription: "A shareable Paint App to showcase your creativity. Share, Save, Edit and Delete at any time. Now available with multiple templates to begin with.",
        stack: [html, css, js, express, mongodb, nodejs, pwa],
        projectURL: "https://newpaint.herokuapp.com",
        repoURL: "https://github.com/tharunoptimus/classroom"
    },
]