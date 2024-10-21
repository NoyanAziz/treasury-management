import moment from "moment";

export const displayTimestamp = (timestamp: string): string => {
  return moment(timestamp).format("MMM Do YYYY, h:mm:ss a");
};
