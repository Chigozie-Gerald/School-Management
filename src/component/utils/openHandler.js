exports.openHandlerDefault = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.right = "";
  document.body.style.left = "";
  window.scrollTo(0, parseFloat(scrollY || "0") * -1);
};

exports.openHandlerOpen = () => {
  const scrollH = `-${window.scrollY}px`;
  document.body.style.position = "fixed";
  document.body.style.top = scrollH;
  document.body.style.right = 0;
  document.body.style.left = 0;
};

exports.handleOpen = (e, isOpen, callback) => {
  try {
    if (!e || isOpen === undefined || typeof callback !== "function") {
      if (!e) {
        throw new Error("incomplete details provide an element or component");
      } else if (isOpen === undefined) {
        throw new Error("incomplete details, provide a state");
      } else {
        throw new Error("incomplete details, provide a callback function");
      }
    } else {
      e.stopPropagation();
      if (!isOpen) {
        this.openHandlerOpen();
      } else if (isOpen) {
        this.openHandlerDefault();
      }
      callback();
    }
  } catch (err) {
    console.error(err);
  }
};
