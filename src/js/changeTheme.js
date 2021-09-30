import { toggle, body } from './refs';

import { Theme } from './themes';
const { LIGHT: light, DARK: dark } = Theme;

// let storageTheme = localStorage.getItem('theme') || light;
let storageTheme = localStorage.getItem('theme');

if (!storageTheme) {
  storageTheme = light;
  localStorage.setItem('theme', light);
}

body.classList.add(storageTheme);
toggle.checked = storageTheme === dark;

toggle.addEventListener('change', () => {
  body.classList.toggle(dark);
  body.classList.toggle(light);

  const theme = localStorage.getItem('theme') === light ? dark : light;
  localStorage.setItem('theme', theme);
});
