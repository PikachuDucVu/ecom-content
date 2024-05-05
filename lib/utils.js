export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function formatCash(str) {
  const arr = str.split(".");

  return arr[0]
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}

export const convertUSDtoVND = (usd) => {
  const vnd = Number(usd) * 23000;
  return formatCash(vnd.toString());
};

export const fakeSales = (usd, percent) => {
  const price = Number(usd) + (Number(usd) * percent) / 100;
  const vnd = convertUSDtoVND(price);
  return vnd;
};
