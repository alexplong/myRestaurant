import map from "../../assets/maps.jpg"

const about = () => {
  const content = document.createElement("div");
  const title = document.createElement("h1");
  const myMap = new Image();

  
  content.setAttribute("class", 
        "windowtab flex flex-dir-c flex-jc-sb flex-ai-c m-3")
  content.setAttribute("id", "tab");

  myMap.src = map;
  myMap.setAttribute("class", "map");

  title.textContent = "Some Info About Me!";

  content.append(title, myMap);
  return content;
};

export default about;