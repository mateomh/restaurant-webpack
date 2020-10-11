import breakfast1 from './imgs/breakfast1.jpg';
import breakfast2 from './imgs/breakfast2.jpg';
import breakfast3 from './imgs/breakfast3.jpg';

export default function breakfastItems() {
  const items = [];
  items.push({
    img: breakfast1,
    title: 'Eggs',
    desc: 'Delicious eggs to start the morning',
  });
  items.push({
    img: breakfast2,
    title: 'Granola',
    desc: 'Healthy granola to give you all the vitamins and minerals',
  });
  items.push({
    img: breakfast3,
    title: 'Pancakes',
    desc: 'Tasty pancakes with fruit for those cheat days',
  });
  return items;
}