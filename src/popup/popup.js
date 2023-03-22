const bili22Element = document.getElementById("bili22");
console.log(chrome, "chrome");

bili22Element.addEventListener("click", () => {
  if (!chrome.storage) {
    alert("set fail");
  }
  chrome.storage.sync.set({
    bili22: bili22Element.checked,
  });
});
