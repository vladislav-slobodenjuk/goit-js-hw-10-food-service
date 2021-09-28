import { toggle, body } from './refs';

import { Theme } from './themes';
const { LIGHT: light, DARK: dark } = Theme;

let storageTheme = localStorage.getItem('theme');

if (storageTheme === null) {
  // console.log('scenario null');
  body.classList.add(light);
  localStorage.setItem('theme', light);
} else if (storageTheme === dark) {
  // console.log('scenario dark');
  body.classList.add(dark);
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  body.classList.toggle(dark);
  body.classList.toggle(light);

  localStorage.getItem('theme') === light
    ? localStorage.setItem('theme', dark)
    : localStorage.setItem('theme', light);

  // localStorage.setItem('theme', body.classList);
  // console.log(`set localstorage ${body.classList}`);
});
