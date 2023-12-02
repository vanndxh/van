/**
 * @file 爱奇艺播放页面删除无用内容
 */
const iqiyi = () => {
  const classNames = [
    "nav-link nav-vip", // 左上角导航
    "header-sideItem qy-header__game",
    "header-sideItem header-download",
    "header-sideItem header-upload",
    "iqp-ivos-video-top",
    "header__weather",
    "header-sideItem header-vip",
    "qy-player-side-list",
    "qy-nav",
    "meta-tab", // 右侧面板tab
    "meta-cont", // 右侧面板信息
    "iqp-top-item iqp-client-launcher",
    "iqp-dock-right-cont",
    "iqp-btn iqp-btn-see-ta", // 只看TA
    "barrage-input-wrap",
    "heat_map_canvas_0079",
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
