import dinner1 from './imgs/dinner1.jpg';
import dinner2 from './imgs/dinner2.jpg';

export default function dinnerItems() {
  const items = [];
  items.push({
    img: dinner1,
    title: 'Salmon',
    desc: 'Imported salmon with a bed of stir vegetables',
  });
  items.push({
    img: dinner2,
    title: 'Salad',
    desc: 'If you eat this for dinner you will be hungry by midnight',
  });
  return items;
}