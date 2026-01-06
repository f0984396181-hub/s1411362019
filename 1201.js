const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  console.log("按鈕被點擊了！");
});
const hoverDiv = document.getElementById("hoverDiv");
hoverDiv.addEventListener("mouseover", function() {
  console.log("滑鼠進來了！");
});
const textInput = document.getElementById("textInput");
  textInput.addEventListener("input", function() {
    console.log("輸入中...");
});
const doubleClickBtn = document.getElementById("doubleClickBtn");
  doubleClickBtn.addEventListener("dblclick", function() {
    console.log("你雙擊了我！");
});
 hoverDiv.addEventListener("mousedown", function() {
  console.log("滑鼠按下了！");
});
 hoverDiv.addEventListener("mouseup", function() {
  console.log("滑鼠放開了！");
});
