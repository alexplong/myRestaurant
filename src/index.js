import header from "./app/framework/header";
import home from "./app/framework/container";
import footer from "./app/framework/footer";
import about from "./app/content/about";
import menu from "./app/content/menu";
import "./main.scss";

(function() {

  // cache DOM
  const content = document.getElementById("content");

  content.append(header(), home(), footer());

  const buttons = document.querySelectorAll("button");
  let tab = document.getElementById("tab");

  buttons.forEach( button => {
    button.addEventListener("click", (e) => {
      if(e.target.id === "home-button") {
        content.replaceChild(home(), tab);
        tab = document.getElementById("tab");
      }
      if(e.target.id === "menu-button") {
        content.replaceChild(menu(), tab);
        tab = document.getElementById("tab");

      }
      if(e.target.id === "about-button") {
        content.replaceChild(about(), tab);
        tab = document.getElementById("tab");

      }
      
    })
  });

})();










