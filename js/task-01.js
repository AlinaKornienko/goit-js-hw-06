const categEl = document.querySelector('#categories');
const itemsEl = categEl.querySelectorAll('.item');
console.log('Nunber of categories:', ${itemsEl.length});
console.log('');

const titlesEl = [];
itemsEl.forEach(elem => {
  console.log('Category:', elem.getElementsByTagName('h2')[0].textContent);
  console.log(
    'Elements:',
    elem.getElementsByTagName('li').length
  );
  console.log('');
});
