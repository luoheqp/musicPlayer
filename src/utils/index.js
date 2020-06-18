export const formatTime = (timeStemp) => {
  let second = +Number(timeStemp % 60).toFixed();
  let minute = +Number((timeStemp / 60) % 60).toFixed();
  let hour = +Number(timeStemp / 60 / 60).toFixed();

  if (second < 10) second = `0${second}`;
  if (minute < 10) minute = `0${minute}`;
  if (hour < 10) hour = `0${hour}`;

  console.log(second, minute, hour);

  return `${hour === "00" ? hour + ":" : ""}${minute}:${second}`;
};
