var x = document.querySelectorAll("img");

for (let i = 0; i < x.length; i++) {
  x[i].addEventListener("mouseover", function() {
    x[i].src = "images/image" + (i + 1) + "_2.jpg";
  });
}
