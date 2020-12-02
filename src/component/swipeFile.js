class Swipe {
  constructor(
    element,
    threshold,
    time,
    childrenWidth,
    childrenPadding,
    currentPage
  ) {
    this.skipMovement = false;
    this.interval = undefined;
    this.threshold = threshold;
    this.childrenPadding = childrenPadding;
    this.childrenWidth = childrenWidth;
    this.time = time;
    this.elaspedTime = undefined;
    this.startTime = undefined;
    this.element =
      typeof element === "string" ? document.getElementById(element) : element;
    this.element.addEventListener("touchstart", this.handleTouchStart, false);
    this.childNum = this.element.children.length;
    this.currentPage = !currentPage ? 0 : currentPage;
    this.element.style.transform =
      currentPage !== 0
        ? `translate(calc(((${this.currentPage}) / ${this.childNum} * -${this.childrenWidth}%) + (((100% - ${this.childrenWidth}%)/2) / var(--n)  )))`
        : "translate(0)";
  }
  getTouches = (e) => {
    return e.touches;
  };
  handleTouchStart = (e) => {
    this.element.style.transition = "";
    this.skipMovement = false;
    const firstTouch = this.getTouches(e)[0];
    this.xDOWN = firstTouch.pageX;
    this.yDOWN = firstTouch.pageY;
    this.startTime = new Date().getTime();
    this.move = false;
  };
  handleTouchMove = (e) => {
    if (!this.xDOWN || !this.yDOWN) {
      return;
    }
    var xUp = e.touches[0].pageX;
    var yUp = e.touches[0].pageY;
    var xDiff = this.xDOWN - xUp;
    var yDiff = this.yDOWN - yUp;
    if (Math.abs(xDiff) > 10 && this.skipMovement === false) {
      e.preventDefault();
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          if (this.currentPage >= this.childNum - 1) {
            this.element.style.transform = `translate(calc(((${
              this.childNum - 1
            }) / ${this.childNum} * ${-this.childrenWidth}%) + (((100% - ${
              this.childrenWidth
            }%)/2) / ${this.childNum})))`;
          } else {
            if (this.currentPage === 0) {
              this.element.style.transform = `translate(calc((-${
                this.currentPage
              } / ${this.childNum} * ${this.childrenWidth}%) + ${-xDiff}px))`;
            } else {
              this.element.style.transform = `translate(calc((-${
                this.currentPage
              } / ${this.childNum} * ${
                this.childrenWidth
              }%) + ${-xDiff}px + (((100% - ${this.childrenWidth}%)/2) / ${
                this.childNum
              })))`;
            }
          }
        } else {
          if (this.currentPage === 0) {
            this.element.style.transform = `translate(0)`;
          } else {
            this.element.style.transform = `translate(calc((-${
              this.currentPage
            } / ${this.childNum} * ${this.childrenWidth}%) + ${-xDiff}px + ${
              parseFloat(this.childrenPadding) * 3.5
            }rem))`;
          }
        }
      } else {
        if (this.currentPage === 0) {
          this.element.style.transform = `translate(0)`;
        } else {
          this.element.style.transform = `translate(calc((-${
            this.currentPage
          } / ${this.childNum} * ${this.childrenWidth}%) + ${-xDiff}px + ${
            parseFloat(this.childrenPadding) * 3.5
          }rem))`;
        }
      }
    } else {
      this.skipMovement = true;
      return;
    }
  };
  handleTouchEnd = (e) => {
    this.touchEndX = this.xDOWN - e.changedTouches[0].pageX;
    this.touchEndY = this.yDOWN - e.changedTouches[0].pageY;
    this.elaspedTime = new Date().getTime() - this.startTime;
    const ToTalWidth = this.element.clientWidth / this.childNum;
    if (Math.abs(this.touchEndX) > Math.abs(this.touchEndY)) {
      this.element.style.transition = "all 200ms ease-out";
      if (this.touchEndX > 0) {
        if (
          (this.touchEndX > this.threshold && this.elaspedTime < this.time) ||
          this.touchEndX > ToTalWidth * 0.5
        ) {
          if (this.currentPage >= this.childNum - 1) {
            this.element.style.transform = `translate(calc(((${this.currentPage}) / ${this.childNum} * -${this.childrenWidth}%) + (((100% - ${this.childrenWidth}%)/2) / ${this.childNum})))`;
          } else {
            this.element.style.transform = `translate(calc(((${this.currentPage} + 1) / ${this.childNum} * -${this.childrenWidth}%) + (((100% - ${this.childrenWidth}%)/2) / ${this.childNum})))`;
            if (this.currentPage < this.childNum - 1) {
              this.currentPage += 1;
            }
          }
        } else {
          if (this.currentPage === 0) {
            this.element.style.transform = `translate(0)`;
          } else {
            this.element.style.transform = `translate(calc(((${this.currentPage}) / ${this.childNum} * -${this.childrenWidth}%) + (((100% - ${this.childrenWidth}%)/2) / ${this.childNum})))`;
          }
        }
      } else {
        if (this.currentPage === 0) {
          this.element.style.transform = `translate(0)`;
        } else {
          if (
            (-this.touchEndX > this.threshold &&
              this.elaspedTime < this.time) ||
            -this.touchEndX > ToTalWidth * 0.35
          ) {
            if (this.currentPage === 1) {
              this.element.style.transform = `translate(0)`;
            } else {
              this.element.style.transform = `translate(calc(((${this.currentPage} - 1) / ${this.childNum} * -${this.childrenWidth}%) + (((100% - ${this.childrenWidth}%)/2) / ${this.childNum})))`;
            }
            this.currentPage = this.currentPage - 1;
          } else {
            this.element.style.transform = `translate(calc(((${this.currentPage}) / ${this.childNum} * -${this.childrenWidth}%) + (((100% - ${this.childrenWidth}%)/2) / ${this.childNum})))`;
          }
        }
      }
    } else {
      if (this.currentPage === 0) {
        this.element.transform = "translate(0)";
      } else
        this.element.style.transform = `translate(calc(((${this.currentPage}) / ${this.childNum} * -${this.childrenWidth}%) + (((100% - ${this.childrenWidth}%)/2) / ${this.childNum})))`;
    }

    this.xDOWN = null;
    this.yDOWN = null;
  };
  slider = (time, stepTime) => {
    if (!stepTime) {
      stepTime = 1500;
    }
    if (time < stepTime * 2) {
      time = 2 * stepTime;
    }
    const transitionTime = `transform ${stepTime}ms ease`;
    if (this.move === false) {
      this.sliderClear();
    } else {
      let ind_arr = [];
      for (let i = 0; i < this.childNum; i++) {
        ind_arr.push(i + 1);
      }
      let addElem = ind_arr.pop();
      ind_arr.unshift(addElem);
      let turns = 1;
      this.interval = setInterval(() => {
        let arr = Array.from(this.element.children);
        turns = turns !== arr.length ? turns + 1 : 1;
        if (turns === arr.length) {
          arr[arr.length - 1].style.zIndex = "1";
          arr[arr.length - 1].style.left = `calc(${turns - 1} * 100% / ${
            this.childNum
          })`;
          setTimeout(() => {
            this.element.style.transition = "transform 0ms linear";
            this.element.style.transform = `translate(calc(100%/${this.childNum}))`;
            this.element.style.overflow = "visible";
            arr[arr.length - 1].style.left = `calc(-100% / ${this.childNum})`;
          }, time / 2);
        } else {
          this.element.style.transform = `translate(calc(-100% * ${turns - 1}/${
            this.childNum
          }))`;
          this.element.style.transition = `${transitionTime}`;
          arr[arr.length - 1].style.zIndex = "-1";
          arr[arr.length - 1].style.left = `calc(-100% / ${this.childNum})`;
          if (turns > 2) {
          }
        }
        let addElem = ind_arr.pop();
        ind_arr.unshift(addElem);
        this.element.style.transform = `translate(calc(-100% * ${turns - 1}/${
          this.childNum
        }))`;
      }, time);
    }
  };
  sliderClear = () => {
    clearInterval(this.interval);
  };
  run = async () => {
    this.element.addEventListener("touchmove", this.handleTouchMove, false);
  };
  go = () => {
    this.run().then(() => {
      this.element.addEventListener("touchend", this.handleTouchEnd, false);
    });
  };
}

export default Swipe;
