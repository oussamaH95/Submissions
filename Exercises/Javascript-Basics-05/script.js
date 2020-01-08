var gessNum = Math.floor(Math.random() * 100) + 1;
var count = 0;
document.getElementById("guess").onclick = function() {
  var num = document.getElementById("num").value;

  if (num == gessNum) {
    alert(" Correct with " + count + " trials! ");
  } else if (num > gessNum) {
    count++;
    alert("Too Large trial " + count + "/8");
  } else {
    count++;
    alert("Too Small trial " + count + "/8");
  }
};
