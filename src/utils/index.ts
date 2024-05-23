const TIMES = {
  SECOND: 1,
  MINUTE: 60 * 1,
  HOUR: 60 * 60 * 1,
  DAY: 24 * 60 * 60 * 1,
};

function formatTime(...values: number[]): string {
  return values.map((value) => value.toString().padStart(2, "0")).join(":");
}

export function convertTimeFromMillisToSeconds(
  millis: number,
  totalMillis: number = millis
): string {
  const totalTimeInSeconds = Math.floor(totalMillis / 1000);
  const totalSeconds = Math.floor(millis / 1000);

  const daysTotal = Math.floor(totalTimeInSeconds / TIMES.DAY);
  const hoursTotal = Math.floor((totalTimeInSeconds % TIMES.DAY) / TIMES.HOUR);
  const minutesTotal = Math.floor(
    (totalTimeInSeconds % TIMES.HOUR) / TIMES.MINUTE
  );

  const days = Math.floor(totalSeconds / TIMES.DAY);
  const hours = Math.floor((totalSeconds % TIMES.DAY) / TIMES.HOUR);
  const minutes = Math.floor((totalSeconds % TIMES.HOUR) / TIMES.MINUTE);
  const seconds = totalSeconds % TIMES.MINUTE;

  const timeParts =
    daysTotal > 0
      ? [days, hours, minutes, seconds]
      : hoursTotal > 0
      ? [hours, minutes, seconds]
      : minutesTotal > 0
      ? [minutes, seconds]
      : [seconds];

  const formattedCurrentTime = formatTime(...timeParts);

  if (totalMillis !== undefined) {
    return `${formattedCurrentTime}`;
  }

  return formattedCurrentTime;
}
