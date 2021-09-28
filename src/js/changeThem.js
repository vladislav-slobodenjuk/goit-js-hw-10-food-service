import { toggle, body } from './refs';

import { Theme } from './themes';
const { LIGHT: ligth, DARK: dark } = Theme;

let storageTheme = localStorage.getItem('theme');

if (storageTheme === null) {
  // console.log('scenario null');
  body.classList.add(ligth);
  localStorage.setItem('theme', ligth);
} else if (storageTheme === dark) {
  // console.log('scenario dark');
  body.classList.add(dark);
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  body.classList.toggle(dark);
  body.classList.toggle(ligth);

  localStorage.getItem('theme') === ligth
    ? localStorage.setItem('theme', dark)
    : localStorage.setItem('theme', ligth);

  // localStorage.setItem('theme', body.classList);
  // console.log(`set localstorage ${body.classList}`);
});
