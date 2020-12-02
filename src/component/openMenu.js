export const handleOpen = (e, menu, func) => {
    e.stopPropagation();
    if (menu) {
      const scrollH = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
      document.body.style.top = scrollH;
      document.body.style.right = 0;
      document.body.style.left = 0;
    } else if (menu) {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.right = "";
      document.body.style.left = "";
      window.scrollTo(0, parseFloat(scrollY || "0") * -1);
    }
    func()
  };