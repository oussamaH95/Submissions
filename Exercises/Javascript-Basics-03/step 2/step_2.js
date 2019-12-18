//function f1(a) {
//  if (a == "hide") document.getElementById("texte").style.opacity = "0.0";
// else document.getElementById("texte").style.opacity = "1.0";
//}
var x = document.querySelectorAll("a");
for (let i = 0; i < 2; i++) {
  x[i].addEventListener("click", function() {
    if (x[i].id == "show")
      document.getElementById("texte").style.opacity = "1.0";
    else document.getElementById("texte").style.opacity = "0.0";
  });
}
