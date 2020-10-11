import lunch1 from './imgs/lunch1.jpg';
import lunch2 from './imgs/lunch2.jpg';
import lunch3 from './imgs/lunch3.jpg';

export default function lunchItems() {
  const items = [];
  items.push({
    img: lunch1,
    title: 'Chicken',
    desc: 'Grilled chicken with no added fat',
  });
  items.push({
    img: lunch2,
    title: 'Pasta',
    desc: 'Tasty pasta alfredo with parmesan cheese',
  });
  items.push({
    img: lunch3,
    title: 'Beef',
    desc: 'Juicy beef with potatoes and vegetables',
  });
  return items;
}