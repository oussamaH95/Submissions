let str = "";
let isPrime = true;
for (let i = 2; i <= 30; i++) {
  isPrime = true;
  for (let j = 2; j < i; j++) if (i % j == 0 && isPrime) isPrime = false;
  if (isPrime) str = str + " " + i;
}
window.alert(str);
