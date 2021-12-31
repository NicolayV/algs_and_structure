const str = "abbrakaddabra";
const foo = (str) => {
  const hashMap = {};

  const arr = str.split("");

  arr.forEach((element) => {
    if (!hashMap[element]) {
      hashMap[element] = 1;
    } else {
      hashMap[element] += 1;
    }
  });

  return hashMap;
};

console.log(foo(str));

function func2() {
  for (var i = 0; i < 3; i++) {
    (function (i) {
      setTimeout(() => console.log(i), 2000);
    })(i);
  }
}
func2();
