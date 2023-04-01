/** 全文阅读，本质是vip破解 */
const getVip = () => {
  let timer = setInterval(() => {
    if (window.pageData) {
      const vipInfo = window.pageData.vipInfo;
      vipInfo.isVip = true;
      window.pageData.vipInfo = vipInfo;
      clearInterval(timer);
    }
  }, 1000);
};

/** 复制破解 */
const unlockCopy = () => {
  /** 键盘按下复制快捷键时，实现复制功能 */
  document.body.addEventListener("keydown", function (e) {
    if ((e.ctrlKey && e.which == 67) || (e.metaKey && e.which == "67")) {
      let targetStr = document
        .querySelector(".search-result-wrap .link")
        .innerText.split("查看全部包含“")[1]
        .split("”的文档")[0];
      navigator.clipboard.writeText(targetStr);
    }
  });

  // 鼠标抬起时，清除自动打开的恶心弹窗
  document.body.addEventListener("mouseup", function () {
    document.querySelector("#reader-helper").style.display = "none";
  });
};

// getVip();
unlockCopy();
