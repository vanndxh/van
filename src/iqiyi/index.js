/**
 * @file 爱奇艺播放页面删除无用内容
 */
const iqiyi = () => {
  const classNames = [
    "header-sideItem qy-header__game",
    "header-sideItem header-download",
    "header-sideItem header-upload",
    "iqp-ivos-video-top",
    "header__weather",
    "header-sideItem header-vip",
    "nav-link nav-vip",
    "qy-player-side-list",
    "qy-nav",
    "meta-tab",
    "meta-cont",
  ];
  // 顶部目录无用内容
  classNames.forEach((i) => {
    const ele = document.getElementsByClassName(i)[0];
    if (ele) {
      ele.remove();
    }
  });

  // 右侧推荐视频栏
  Array(10)
    .fill(0)
    .forEach(() => {
      const element = document.getElementsByClassName("wrap")[0];
      if (element) {
        element.remove();
      }
    });
};

setTimeout(() => {
  iqiyi();
}, 3000);
