/**
 * @file 关闭b站直播间22娘
 */
const clearBili22 = () => {
  const elements = document.getElementsByClassName("avatar-btn");
  let timer = setInterval(() => {
    if (elements.length > 0) {
      elements[0].remove();
      clearInterval(timer);
    }
  }, 5000);
};

console.log("开始清除22娘");
chrome.storage.sync.get(["bili22"]).then((res) => {
  console.log(res, "拿到bili22的值");
});
clearBili22();
