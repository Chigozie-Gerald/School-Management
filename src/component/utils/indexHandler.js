const letterObj = "abcdefghijklmnopqrstuvwxyz";
const colors = [
  "var(--yellow)",
  "var(--orange)",
  "var(--red)",
  "var(--secondary)",
  "var(--green)",
  "teal",
  "#54971c",
  "#20aa65",
  "#347db4",
  "#a55eac",
  "#279099",
  "#ac7230",
  "#7754a5",
];

export const letter_index = (letter) => {
  if (!isNaN(parseInt(letter))) {
    if (typeof letter === "number") {
      return Math.floor(letter);
    } else {
      return 1;
    }
  } else {
    try {
      return letterObj.indexOf(letter[0].toLowerCase());
    } catch {
      return 1;
    }
  }
};

export const returnNum = (number) => {
  if (isNaN(parseInt(number))) {
    return 1;
  } else {
    return Math.floor(parseInt(number));
  }
};

export const colorGenerator = (txt, n, m) => {
  n = n || 7;
  m = m || 7;

  return !isNaN(
    (returnNum(txt.substr(txt.length - 2, 1)) ** n +
      letter_index(txt.substr(txt.length - 1).toLowerCase()) ** m) %
      colors.length
  )
    ? colors[
        (returnNum(txt.substr(txt.length - 2, 1)) ** n +
          letter_index(txt.substr(txt.length - 1).toLowerCase()) ** m) %
          colors.length
      ]
    : colors[(m * n) % colors.length];
};

export const link = (txt) => {
  if (!txt) throw new Error("[Custom Error]: link address passed is undefined");
  txt = txt.split("/");
  txt.pop();
  return txt.join("/");
};
