function breakfastItems() {
  const items = [];
  items.push({
    img: '../src/imgs/breakfast1.jpg',
    title: 'Eggs',
    desc: 'Delicious eggs to start the morning',
  });
  items.push({
    img: '../src/imgs/breakfast2.jpg',
    title: 'Granola',
    desc: 'Healthy granola to give you all the vitamins and minerals',
  });
  items.push({
    img: '../src/imgs/breakfast3.jpg',
    title: 'Pancakes',
    desc: 'Tasty pancakes with fruit for those cheat days',
  });
  return items;
}

function lunchItems() {
  const items = [];
  items.push({
    img: '../src/imgs/lunch1.jpg',
    title: 'Chicken',
    desc: 'Grilled chicken with no added fat',
  });
  items.push({
    img: '../src/imgs/lunch2.jpg',
    title: 'Pasta',
    desc: 'Tasty pasta alfredo with parmesan cheese',
  });
  items.push({
    img: '../src/imgs/lunch3.jpg',
    title: 'Beef',
    desc: 'Juicy beef with potatoes and vegetables',
  });
  return items;
}

function dinnerItems() {
  const items = [];
  items.push({
    img: '../src/imgs/dinner1.jpg',
    title: 'Salmon',
    desc: 'Imported salmon with a bed of stir vegetables',
  });
  items.push({
    img: '../src/imgs/dinner2.jpg',
    title: 'Salad',
    desc: 'If you eat this for dinner you will be hungry by midnight',
  });
  return items;
}

function contactItems() {
  const items = [];
  items.push({
    img: '../src/imgs/contact.jpg',
    title: 'Reach us',
    desc: 'Make your order online or by phone',
  });
  return items;
}

function clearMenu(menu) {
  while (menu.firstChild) {
    menu.removeChild(menu.firstChild);
  }
}

function menuCard(img, title, desc, pos) {
  const cardDiv = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardTitle = document.createElement('h2');
  const cardDesc = document.createElement('p');

  cardDiv.classList.add('menu-card');
  cardDiv.classList.add(pos);

  cardImg.classList.add('menu-image');
  cardImg.setAttribute('src', img);
  cardImg.setAttribute('alt', 'breakfast picture');

  cardInfo.classList.add('menu-info');

  cardTitle.textContent = title;
  cardDesc.textContent = desc;

  cardInfo.append(cardTitle, cardDesc);

  cardDiv.append(cardImg, cardInfo);

  return cardDiv;
}

function renderContent(content, menu) {
  const cards = [];
  for (let i = 0; i < content.length; i += 1) {
    const { img, title, desc } = content[i];
    let pos = '';

    if ((i % 2) === 0) {
      pos = 'left';
    } else {
      pos = 'right';
    }
    cards.push(menuCard(img, title, desc, pos));
  }
  menu.append(...cards);
}

export default function loadMenu() {
  const menu = document.getElementById('menu-display');
  const [tab] = document.getElementsByClassName('selected');
  let content = [];
  clearMenu(menu);
  switch (tab.getAttribute('tabIndex')) {
    case '1':
      content = breakfastItems();
      break;
    case '2':
      content = lunchItems();
      break;
    case '3':
      content = dinnerItems();
      break;
    case '4':
      content = contactItems();
      break;
    default:
      break;
  }

  renderContent(content, menu);
}
