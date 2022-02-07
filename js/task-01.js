const categEl = document.querySelector('#categories');
const itemsEl = categEl.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории`);
console.log('');

const titlesEl = [];
itemsEl.forEach(elem => {
  console.log('Category: ', elem.getElementsByTagName('h2')[0].textContent);
  console.log(
    'Elements: ',
    elem.getElementsByTagName('li').length
  );
  console.log('');
});
