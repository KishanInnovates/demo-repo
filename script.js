function cube(a) {
  return a * a * a;
}

function sumOfSomething(a, b, fn) {
  const var1 = fn(a);
  const var2 = fn(b);
  return var1 + var2;
}

let value = sumOfSomething(1, 2, cube);
console.log(value);