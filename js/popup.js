const bili22Element = document.getElementById("bili22");

bili22Element.addEventListener("click", () => {
  chrome.storage.sync.set({
    bili22: bili22Element.checked,
  });
});
