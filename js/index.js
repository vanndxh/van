/**
 * @file 关闭b站直播间22娘
 */
console.log("van start running~");

// const clear22 = () => {
//   const elements = document.getElementsByClassName("avatar-btn");
//   let timer = setInterval(() => {
//     if (elements.length > 0) {
//       elements[0].remove();
//       clearInterval(timer);
//     }
//   }, 5000);
// };

// clear22();

(() => {
  const elements = document.getElementsByClassName("avatar-btn");
  let timer = setInterval(() => {
    if (elements.length > 0) {
      elements[0].remove();
      clearInterval(timer);
    }
  }, 5000);
})();
