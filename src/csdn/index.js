/** 
 * @file csdn复制破解
 */
const makeCodeEditable = () => {
  const codeEls = document.getElementsByTagName("code");
  for (let i of codeEls) {
    i.contentEditable = true;
  }
};

makeCodeEditable();
