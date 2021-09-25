import refs from './refs';
const { menu } = refs;

import Handlebars from 'handlebars';

import dishList from '../menu.json';
// console.log(dishList);

import itemMarkup from '../templates/list-item-markup.hbr';
console.log(itemMarkup);

const makeListItem = Handlebars.compile(itemMarkup);
console.log(makeListItem);

const listMarkup = dishList.map(dish => {
  makeListItem(dish);
});
console.log(listMarkup);

// menu.insertAdjacentHTML('beforeend', listMarkup);
