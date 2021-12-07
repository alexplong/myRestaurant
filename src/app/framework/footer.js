const footer = () => {
  // cache DOM
  const bottomBar = document.createElement("footer");

  bottomBar.setAttribute("class", 
        "footer flex flex-dir-r flex-jc-c flex-ai-c m-3");
  bottomBar.textContent = "Created by Alex Plong - The Odin Project";
  
  return bottomBar;
};

export default footer;