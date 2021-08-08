var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
//   alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
}

// Create a function for setting a variable value
function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--blue', 'lightblue');
}

document.querySelector('.red').addEventListener('click', ()=> r.style.setProperty('--regular-color', 'rgb(245, 153, 153)'))

document.querySelector('.green').addEventListener('click', ()=> r.style.setProperty('--regular-color', 'rgb(190, 245, 153)'))

document.querySelector('.blue').addEventListener('click', ()=> r.style.setProperty('--regular-color', 'rgb(153, 208, 245)'))

document.querySelector('.yellow').addEventListener('click', ()=> r.style.setProperty('--regular-color', 'rgb(245, 239, 153)'))