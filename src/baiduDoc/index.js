/**
 * @file 百度文库破解
 * @description 复制破解+免费全文阅读
 */

/** 全文阅读，本质是vip破解 */
let data;
Object.defineProperty(window, "pageData", {
  set: (v) => (data = v),
  get() {
    "vipInfo" in data ? (data.vipInfo.isVip = 1) : "";
    return data;
  },
});

/** 复制 */
document.body.addEventListener("keydown", function (e) {
  // Ctrl功能键 + 67（C）或者 mac版的command
  if ((e.ctrlKey && e.keyCode == "67") || (e.metaKey && e.keyCode == "67")) {
    // 目标文本
    let tagetStr = document
      .querySelector(".search-result-wrap .link")
      .innerText.split("查看全部包含“")[1]
      .split("”的文档")[0];
    // 创建input元素，为实现复制准备
    let input = document.createElement("input");
    // 给input的value属性设置值为目标文本
    input.setAttribute("value", tagetStr);
    // 将input添加到页面
    document.body.appendChild(input);
    // 选中input
    input.select();
    // 执行copy命令
    document.execCommand("copy");
    // 完了之后移除input元素，为下一次初始化
    document.body.removeChild(input);
    // 定时器延迟1毫秒隐藏vip提示和遮罩层
    setTimeout(function () {
      document.querySelector(".dialog-mask").style.display = "none";
      document.querySelector(".copy-limit-dialog-v2").style.display = "none";
    }, 1);
  }
});

// 鼠标抬起触发
document.body.addEventListener("mouseup", function () {
  // 设置不想看见的盒子隐藏
  document.querySelector("#reader-helper").style.display = "none";
});
