import noodles from "../../assets/cambodian noodle bowl.png";

const home = () => {
  const content = document.createElement("div");
  const title = document.createElement("h1");

  const myNoodles = new Image();
  myNoodles.src = noodles;
  myNoodles.setAttribute("class", "noodle");

  content.setAttribute("class", 
        "windowtab flex flex-dir-r flex-jc-sb flex-ai-c m-3");
  
  content.setAttribute("id", "tab");

  title.setAttribute("class", "title");
  title.textContent = "This is My Restaurant";

  content.append(title, myNoodles);
  return content;
};

export default home;