import noodles from "../../assets/cambodian noodle bowl.png";

const bodyContainer = () => {
  const content = document.createElement('div');
  const title = document.createElement('h1');

  const myNoodles = new Image();
  myNoodles.src = noodles;

  content.setAttribute("class", "windowtab")
  title.textContent = "This is My Restaurant";

  content.append(title, myNoodles);
  return content;
};

export default bodyContainer;