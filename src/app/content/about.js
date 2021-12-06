const about = () => {
  const content = document.createElement('div');
  const title = document.createElement('h1');


  title.textContent = "Some Info About Me!";

  content.append(title);
  return content;
};

export default about;