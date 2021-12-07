const menu = () => {
  const content = document.createElement("div");
  const title = document.createElement("h1");
  const specials = document.createElement("h5");
  const specialItem = document.createElement("h7");
  const specialPrice = document.createElement("span");
  const itemsTitle = document.createElement("h6");
  const dryNoodle = document.createElement("h7");
  const dryNoodleP = document.createElement("span");
  const curryNoodle = document.createElement("h7");
  const curryNoodleP = document.createElement("span");
  const friedRice = document.createElement("h7");
  const friedRiceP = document.createElement("span");


  content.setAttribute("class", 
        "windowtab flex flex-dir-c flex-ai-c m-3")
  content.setAttribute("id", "tab");

  title.setAttribute("class", "pb-3")
  specialPrice.setAttribute("class", "pb-4")
  dryNoodleP.setAttribute("class", "pb-3")
  curryNoodleP.setAttribute("class", "pb-3")
  friedRiceP.setAttribute("class", "pb-3")

  title.textContent = "Our Menu";
  specials.textContent = "The Daily Special";
  specialItem.textContent = "Phnom Penh House Noodle Bowl"
  specialPrice.textContent = "$12.99"
  itemsTitle.textContent = "Lunch and Dinner Items"

  dryNoodle.textContent = "Stir Fried Pan Noodles [Mee Katang]";
  dryNoodleP.textContent = "$10.99";
  curryNoodle.textContent = "Khmer Curry Noodles";
  curryNoodleP.textContent = "$10.99";
  friedRice.textContent = "House Fried Rice - Spicy";
  friedRiceP.textContent = "$10.99";


  content.append(title, specials, specialItem, specialPrice, 
                 itemsTitle, dryNoodle, dryNoodleP, 
                 curryNoodle, curryNoodleP,
                 friedRice, friedRiceP);
  return content;
};

export default menu;