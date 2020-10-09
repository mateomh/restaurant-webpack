export default function pageLoad() {
  const contentDiv = document.getElementById('content');
  const header = document.createElement('div');
  const title = document.createElement('h1');
  const desc = document.createElement('p');

  header.classList.add('banner');
  title.classList.add('banner-title');
  title.textContent = 'Welcome to Chunks';
  desc.classList.add('description');
  desc.textContent = 'The best restaurant in the area, where you can find fresh and healthy food';

  contentDiv.append(header, desc);
  header.appendChild(title);
}
