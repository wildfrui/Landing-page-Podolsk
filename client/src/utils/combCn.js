const combCn = (classnames) => {
  const cns = classnames
    .split(" ")
    .map((cn) => {
      return "styles." + cn;
    })
    .join(" ");
  console.log(cns);
  return cns;
};

export default combCn;
