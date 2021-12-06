const footer = () => {
  // cache DOM
  const bottomBar = document.createElement('footer');

  bottomBar.setAttribute("class", "footer");
  bottomBar.textContent = "Created by Alex Plong - The Odin Project"
  
  return bottomBar;
};

export default footer;