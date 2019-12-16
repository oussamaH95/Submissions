function f1() {
  var txt;
  var age = document.getElementById("age").value;
  if (age >= 18) txt = "you are over 18";
  else txt = "you are under 18";
  window.alert(txt);
}
