
const serNos = [6934, 23111, 23114, 1001, 211161, "abc"];
const partEl = document.getElementById('part-list');
const strList = serNos.reduce(
  (acc, element) => acc += `<li>1</li>`, ''
);

partEl.innerHTML = strList;