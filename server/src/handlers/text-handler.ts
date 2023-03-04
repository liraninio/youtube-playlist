import moment from "moment";

export const getDurationTimeFormat = (durationNumber: string) => {
  const duration: number = moment.duration(durationNumber).asMinutes();
  const durationFormatted: string = moment
    .utc(duration * 60 * 1000)
    .format("mm:ss");
  return durationFormatted;
};
