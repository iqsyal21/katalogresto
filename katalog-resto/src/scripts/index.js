import "regenerator-runtime";
import "../styles/style.css";
import App from "./views/app";
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector("#hamburger"),
  drawer: document.querySelector("#drawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});

const skipToContent = document.querySelector('.skip-link');
skipToContent.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('#mainContent').focus();
  }
});
