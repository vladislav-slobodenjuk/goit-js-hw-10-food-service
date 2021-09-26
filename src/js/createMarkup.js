// import refs from './refs';
// const { menu } = refs;

import { menu } from './refs';
import dishList from '../menu.json';
// console.log(dishList);

import itemMarkup from '../templates/list-item-markup.handlebars';
// console.log(typeof itemMarkup);

const listMarkup = dishList.map(dish => itemMarkup(dish)).join('');
// console.log(listMarkup);

menu.insertAdjacentHTML('beforeend', listMarkup);
