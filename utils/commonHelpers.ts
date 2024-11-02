const capitalizeFirstLetter = (text: string) => {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    })
    .join(" ");
};

const addMonths = (startDate: Date, months: number) => {
  const date = new Date(startDate);
  date.setMonth(date.getMonth() + months);

  // Handle cases where the end date might overflow to the next month
  if (date.getDate() < startDate.getDate()) {
    date.setDate(0); // Go to the last day of the previous month
  }

  return date;
};

const commonHelpers = {
  capitalizeFirstLetter,
  addMonths,
};

export default commonHelpers;
