export default function createTab(tabIndex, tabName, callbackFcn, selected = false) {
  const tabsContainer = document.getElementById('tabs');

  const tab = document.createElement('button');
  tab.classList.add('tab');
  if (selected) {
    tab.classList.add('selected');
  }
  tab.setAttribute('tabindex', tabIndex);
  tab.textContent = tabName;
  tab.addEventListener('click', callbackFcn);
  tabsContainer.appendChild(tab);
}