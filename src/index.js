/* eslint-disable no-alert */
import pageLoad from './page-load';
import createTab from './create-tab';
import loadMenu from './load-menu';

function changeTabs(event) {
  let prevSelected = document.getElementsByClassName('selected');
  [prevSelected] = prevSelected;
  prevSelected.classList.remove('selected');
  event.target.classList.toggle('selected');
  loadMenu();
}

pageLoad();
createTab(1, 'Breakfast', changeTabs, true);
createTab(2, 'Lunch', changeTabs);
createTab(3, 'Dinner', changeTabs);
createTab(4, 'Contact Us', changeTabs);
loadMenu();
