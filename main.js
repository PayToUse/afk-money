function makeMoney() {
  // important variables
  var money = 0;
  var display = document.querySelector("#money");
  var display1 = document.querySelector("#rate")
  var revenue = (Math.floor(Math.random() * 10) + 1) + (Math.random());
  
  // variables for saving
  var savedMoneyValue = localStorage.getItem('savedMoneyValue') || 0;
  var currentMoneyValue = parseInt(savedMoneyValue);
  var newMoneyValue = currentMoneyValue + revenue;
  localStorage.setItem('savedMoneyValue', newMoneyValue);
  
  // odometer parameters
  display.innerHTML = newMoneyValue;
  display1.innerHTML = revenue;
  
  // variables for displaying the year
  const d = new Date();
  let year = d.getFullYear();
  document.getElementById("creator").innerHTML = "Louie Kurenai @ " + year;
}

setInterval(makeMoney, 2000);
