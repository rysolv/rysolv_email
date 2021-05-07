const formatDollar = (number, digits = 2) => {
  const strNum = number.toFixed(digits).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${strNum}`;
};

module.exports = { formatDollar };
