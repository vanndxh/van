/**
 * @file b站用户标签器
 */
const keyword = {
  原: ["原神", "魈", "钟离", "万叶", "雷神", "可莉"],
  农: ["王者荣耀", "澜", "娜可露露", "元歌", "亚瑟", "妲己", "kpl", "KPL"],
  LOL: ["LOL", "LPL"],
  舟: ["明日方舟", "温蒂", "博士"],
  任: ["任天堂", "塞尔达", "宝可梦", "switch", "Switch"],
  主机: ["主机", "手柄", "switch", "Switch"],
  只因: ["小黑子", "只因", "cxk", "鸡脚", "鸡你太美", "只因你太美"],
  抽奖: ["互动抽奖"],
};
const blogUrl =
  "https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space?&host_mid=";
const isNew =
  document.getElementsByClassName(
    "back-to-old-version fixed-sidenav-storage-item storable"
  ).length != 0; // 检测是不是新版
const whiteList = ["363270906"];
const getTag = (value) =>
  `<b style='background-image: -webkit-linear-gradient(left, #1E90FF, #BA55D3); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>
  ${value}</b>`;

const getBiliId = (c) =>
  isNew ? c.dataset.userId : c.children[0].href.replace(/[^\d]/g, "");

const getCommentList = () => {
  if (isNew) {
    let list = new Set();
    for (let c of document.getElementsByClassName("user-name")) {
      list.add(c);
    }
    for (let c of document.getElementsByClassName("sub-user-name")) {
      list.add(c);
    }
    return list;
  } else {
    return document.getElementsByClassName("user");
  }
};

(function () {
  console.log("开始打标~");
  const biliIdStack = new Set();
  let tagList = [];

  let jiance = setInterval(() => {
    let commentlist = getCommentList();
    if (commentlist.length !== 0) {
      commentlist.forEach((comment) => {
        let biliId = getBiliId(comment);
        // 作者保护通道
        if (whiteList.includes(biliId)) {
          comment.innerHTML += getTag("【帅气的开发者】");
          clearInterval(jiance);
          return;
        }

        biliIdStack.add(biliId);

        // request({
        //   method: "get",
        //   url: blogUrl + biliId,
        //   data: "",
        //   headers: {
        //     "user-agent":
        //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
        //   },
        //   onload: function (res) {
        //     if (res.status === 200) {
        //       let userData = JSON.stringify(JSON.parse(res.response).data);
        //       unknown.delete(biliId);

        //       Object.entries(keyword)?.map((i) => {
        //         let isHave = false;
        //         i[1]?.map((j) => {
        //           if (userData.includes(j)) {
        //             if (!isHave) {
        //               tagList.push(i[0]);
        //             }
        //             isHave = true;
        //           }
        //         });
        //         if (isHave) {
        //           return;
        //         }
        //       });

        //       if (tagList.length !== 0) {
        //         comment.innerHTML += getTag(tagList?.join(","));
        //         clearInterval(jiance);
        //         tagList = [];
        //       }
        //     } else {
        //       console.log("失败", res);
        //     }
        //   },
        // });
        return;
      });
    }
  }, 1000);
})();
