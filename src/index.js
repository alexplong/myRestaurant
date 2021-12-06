import header from "./app/framework/header";
import bodyContainer from "./app/framework/container";
import footer from "./app/framework/footer";
import about from "./app/content/about";
import "./main.scss";

(function() {

  // cache DOM
  const content = document.getElementById("content");

  content.append(header(), bodyContainer(), footer());

})();










