export default function lunchItems() {
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