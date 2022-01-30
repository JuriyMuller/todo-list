const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const result = document.querySelector(".todo-list");
btn.addEventListener("click", function () {
  let outputList = document.createElement("div");
  outputList.className = "todo-item";
  result.appendChild(outputList);
  outputList.innerText = input.value;
  input.value = "";
  outputList.addEventListener("click", function () {
    outputList.remove();
  });
});
