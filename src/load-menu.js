import breakfastItems from './breakfast';
import lunchItems from './lunch';
import dinnerItems from './dinner';
import contactItems from './contact';

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
