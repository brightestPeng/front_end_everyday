let i = 0;

function test() {
  i++;
  return test();
}

try {
  test();
} catch (e) {
  alert(`i=${i}+error:${e}`);
}
