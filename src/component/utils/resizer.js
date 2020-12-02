export const resizeTArea = (e, value, minheight, maxheight) => {
  if (!minheight || !maxheight) {
    throw new Error("Incomplete or invalid inputs");
  } else if (
    typeof value !== "string" ||
    typeof minheight !== "number" ||
    typeof maxheight !== "number"
  ) {
    throw new Error("Invalid input types provided");
  } else {
    // setTimeout(() => {
    //   let newHeight = (value.match(/\n/g) || []).length * 24 + minheight + 20;
    //   if (e.scrollHeight <= maxheight && e.scrollHeight >= newHeight) {
    //     console.log(e.scrollHeight + " wrap " + newHeight);
    //   } else {
    //     console.log(e.scrollHeight + ", dont wrap " + newHeight, minheight);
    //   }
    // }, 0);

    return e.scrollHeight <= maxheight ? e.scrollHeight : maxheight;
  }
};
