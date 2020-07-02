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

// 歌词时间解析
export const splitLyric = (lrc) => {
  const timeReg = /\[([0-9]{2}:[0-9]{2}.[0-9]+?)\]/;

  let time = lrc.match(timeReg);

  if (!time) {
    return { time: 0, content: lrc };
  }

  time = time[1];

  // 获取歌词内容
  let content = lrc.replace(`[${time}]`, "");

  // 当前先只考虑分秒结构
  time = time.split(":");
  time = +time[0] * 60 + +time[1];

  return { content, time };
};

// 均衡歌词开始时多个零时间点
export const balanceLyricTime = (lrcs) => {
  let { length } = lrcs;
  let firstTime = 0;
  let blackCount = 0;

  for (let i = 0; i < length; i++) {
    if (firstTime) {
      blackCount--;
      break;
    }

    firstTime = lrcs[i].time ? lrcs[i].time : 0;
    blackCount++;
  }

  for (let i = 0; i < blackCount; i++) {
    lrcs[i].time = (firstTime / blackCount) * i;
  }

  return lrcs;
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

// 节流
export const throttle = function (func, delay) {
  let prev = Date.now();

  return function () {
    const context = this;
    const args = arguments;
    const now = Date.now();

    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  };
};
