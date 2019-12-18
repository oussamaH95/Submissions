var imageLink;
var x = document.querySelectorAll("img");
for (let i = 0; i < 5; i++) {
  x[i].addEventListener("mouseover", function() {
    x[i].src = "images/image" + (i + 1) + "_2.jpg";
  });
  x[i].addEventListener("mouseout", function() {
    imageLink = x[i].src;
    imageLink = imageLink.replace("_2", "");
    x[i].src = imageLink;
  });
}
