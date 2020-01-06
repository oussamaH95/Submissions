let n = prompt("enter a number");
let sum = 0;
for (let i = 1; i <= n; i++) {
  if (i % 3 == 0 || i % 5 == 0) sum = sum + i;
}

window.alert("ur sum is " + sum);
