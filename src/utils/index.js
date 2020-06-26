// 格式化时间
export const formatTime = (timeStemp) => {
  let second = +Number(timeStemp % 60).toFixed();
  let minute = +Number((timeStemp / 60) % 60).toFixed();
  let hour = +Number(timeStemp / 60 / 60).toFixed();

  if (second < 10) second = `0${second}`;
  if (minute < 10) minute = `0${minute}`;
  if (hour < 10) hour = `0${hour}`;

  return `${hour === "00" ? "" : hour + ":"}${minute}:${second}`;
};

// 类型判断
export const typeJudgment = (data, type) => {
  let dataType = Object.prototype.toString.call(data);
  let flag = undefined;

  switch (type) {
    case "array":
      flag = dataType === "[object Array]" ? true : false;
      break;
    default:
      flag = false;
  }

  return flag;
};
