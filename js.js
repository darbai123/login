// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('#msg');
// const userList = document.querySelector('.users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     // Tikriname, ar klaidos pranešimas jau yra pateiktas
//     if (msg.classList.contains('error')) {
//         return; // Jei taip, neleidžiame sukurti naujo klaidos pranešimo
//     }

//     if (nameInput.value === '' || emailInput.value === '') {
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter fields';
//         setTimeout(() => {
//             msg.innerHTML = ''; // Pašaliname klaidos pranešimą
//             msg.classList.remove('error');
//         }, 3000);
//     } else {
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
//         if (userList !== null) {
//             userList.appendChild(li);
//         } else {
//             console.error('Element with class "users" not found.');
//         }
//         nameInput.value = '';
//         emailInput.value = '';
//     }
// }