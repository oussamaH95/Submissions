let str = "";
for (let i = 1; i <= 12; i++) {
  str = str + i + ":";
  for (let j = 1; j <= 12; j++) str = str + " " + i * j;
  str = str + "\n";
}
window.alert(str);
