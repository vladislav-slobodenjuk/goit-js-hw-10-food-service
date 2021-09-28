import { toggle, body } from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let storageTheme = localStorage.getItem('theme');

if (storageTheme === null) {
  console.log('scenario null');
  body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
} else if (storageTheme === Theme.DARK) {
  console.log('scenario Theme.DARK');
  body.classList.add(Theme.DARK);
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  body.classList.toggle(Theme.DARK);
  body.classList.toggle(Theme.LIGHT);

  // localStorage.getItem('theme') === Theme.LIGHT
  //   ? localStorage.setItem('theme', Theme.DARK)
  //   : localStorage.setItem('theme', Theme.LIGHT);

  localStorage.setItem('theme', body.classList);
  console.log(`set localstorage ${body.classList}`);
});

// let storageTheme = localStorage.getItem('theme');
// // console.log('storageTheme :>> ', storageTheme);

// // console.log(localStorage.getItem('theme'));
// if (storageTheme) {
//   body.classList.add(storageTheme);
//   // console.log('storageTheme :>> ', storageTheme);
// }

// // console.dir(toggle.checked);
// if (!toggle.checked) {
//   localStorage.setItem('theme', Theme.LIGHT);
//   body.classList.add(Theme.LIGHT);
// }

// toggle.addEventListener('change', e => {});
