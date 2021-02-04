var array = ["Gunner", "Engineer", "Scout", "Driller"];

function GetValue() {
  var randomNumber = array[Math.floor(Math.random() * (array.length))];
  document.getElementById('message').innerHTML = randomNumber

  if (randomNumber === 'Scout') {
    document.getElementById('message').style.color = "blue";
  } else {
    if (randomNumber === 'Engineer') {
      document.getElementById('message').style.color = 'red';
  } else {
    if (randomNumber === 'Gunner') {
      document.getElementById('message').style.color = 'green';
  } else {
    if (randomNumber === 'Driller') {
      document.getElementById('message').style.color = 'yellow';
    }
  }
  }
}
}
