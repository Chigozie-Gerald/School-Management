export const handleCopy = (text, func, copyNode, id = false) => {
  if (
    !text ||
    typeof text !== "string" ||
    !func ||
    !copyNode ||
    typeof func !== "function"
  ) {
    let err_msg;
    !text || typeof text !== "string"
      ? (err_msg = "text")
      : !copyNode
      ? (err_msg = "node")
      : !func || typeof func !== "function"
      ? (err_msg = "function")
      : (err_msg = "info");
    throw new Error("Please send the neccesary " + err_msg);
  }
  func();
  let textarea = document.createElement("textarea");
  textarea.style.position = "fixed";
  textarea.style.left = "0";
  textarea.style.top = "0";

  textarea.style.height = "2em";
  textarea.style.width = "2em";
  textarea.style.padding = "0";
  textarea.style.border = "none";
  textarea.style.outline = "none";
  textarea.style.shadow = "none";
  textarea.style.background = "transparent";
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    let copied = document.execCommand("copy");
    if (id) {
      copyNode = document.getElementById(copyNode);
    }
    copyNode.innerText = copied ? "Copied!" : "Operation failed";
  } catch {
    copyNode.value = "Operation failed";
  }
  document.body.removeChild(textarea);
};
