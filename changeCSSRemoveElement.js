
console.log('Changing CSS properties');
const elementTechnology = document.querySelector('.tech');
elementTechnology.style.color = 'rgb(12, 194, 127)';


console.log(`Removing an element`);
const elementList = document.querySelector('.stackList');
const elementAgile = document.querySelector('#process');
elementList.removeChild(elementAgile);