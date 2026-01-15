import { renderPage } from "../renderPage.js";

renderPage({
    title: "Artifical Intelligence as a Crisis",
    sectionHeading: "A Brief History of AI",
    introTxt: "../../content/home/intro.txt",
    bodyTxt: "../../content/home/history.txt",
    heroImage: {
        src: "../../images/douglas-county-servers.jpg",
        alt: "Data Center",
        title: "Douglas County Server Room"
    },
    secondaryImage: {
        src: "../../images/texas-data-center.jpg",
        alt: "Data Center", 
        title: "Google, Midlothian Texas, data center"
    },
});
