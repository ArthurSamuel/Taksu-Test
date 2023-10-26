export const isOverDue = (date: string) => {
  const date1Obj = new Date();
  const date2Obj = new Date(date);

  if (date2Obj.getTime() < date1Obj.getTime()) {
    return true;
  }
  return false;
};

export const formatDate = (date: string) => {
  const temp = new Date(date);
  const ampm = temp.getHours() >= 12 ? "PM" : "AM";
  const nameMonth = temp.toLocaleString("en-US", {
    month: "long",
  });
  return `${temp.getDate()} ${nameMonth} ${temp.getFullYear()} ${temp.getHours()}:${temp.getMinutes()}${ampm}`;
};
