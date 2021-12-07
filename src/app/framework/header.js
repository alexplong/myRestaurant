import about from "../content/about";

const header = () => {
  // cache DOM
  const navBar = document.createElement('header');

  // create buttons
  const linksContainer = document.createElement("div");
  const homeLink = document.createElement("button");
  const menuLink = document.createElement("button");
  const aboutLink = document.createElement("button");

  // apply class and ID  
  navBar.setAttribute("class", 
        "header flex flex-dir-r flex-jc-sb flex-ai-c h3 m-3");
  homeLink.setAttribute("class", 
        "btn btn-outline-secondary m-1");
  menuLink.setAttribute("class", 
        "btn btn-outline-secondary m-1");
  aboutLink.setAttribute("class", 
        "btn btn-outline-secondary m-1");

  homeLink.setAttribute("id", "home-button");
  menuLink.setAttribute("id", "menu-button");
  aboutLink.setAttribute("id", "about-button");

  navBar.textContent = "OoOodles of Noodles";
  homeLink.textContent = "Home";
  menuLink.textContent = "Menu";
  aboutLink.textContent = "About";

  // click events for buttons

  linksContainer.append(homeLink, menuLink, aboutLink);
  navBar.append(linksContainer);
  return navBar;
};

export default header