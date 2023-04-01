const storage = chrome.storage.sync;
console.log(chrome, chrome.storage, storage);

const bili22Element = document.getElementById("bili22");

bili22Element.addEventListener("click", () => {
  storage.set({
    bili22: bili22Element.checked,
  });
});
