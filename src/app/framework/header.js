const header = () => {
  // cache DOM
  const navBar = document.createElement('header');

  const linksContainer = document.createElement('div');
  const homeLink = document.createElement('button');
  const menuLink = document.createElement('button');
  const aboutLink = document.createElement('button');


  
  navBar.setAttribute("class", "header");
  navBar.textContent = "This is my navbar";
  homeLink.textContent = "Home";
  menuLink.textContent = "Menu";
  aboutLink.textContent = "About";

  linksContainer.append(homeLink, menuLink, aboutLink);
  navBar.append(linksContainer);
  return navBar;
};

export default header;