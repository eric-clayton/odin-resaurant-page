import "./styles.css"
import Home from "./home";
import Menu from "./menu";
import About from "./about"
const content = document.querySelector('#content');
function loadPage(func) {
    content.innerHTML ='';
    content.appendChild(func());
}
function bindEvents() {
    const homeButton = document.querySelector('#home-button');
    const aboutButton = document.querySelector("#about-button");
    const menuButton = document.querySelector("#menu-button");
    homeButton.addEventListener('click', () => loadPage(Home));
    aboutButton.addEventListener('click', () => loadPage(About));
    menuButton.addEventListener('click', () => loadPage(Menu));
}
loadPage(Home);
bindEvents();