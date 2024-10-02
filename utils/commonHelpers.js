const capitalizeFirstLetter = (text) => {
    return text.split(/(?<=[.!?])\s+/).map(sentence => {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }).join(' ');
}

const addMonths = (startDate, months) => {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + months);

    // Handle cases where the end date might overflow to the next month
    if (date.getDate() < startDate.getDate()) {
        date.setDate(0); // Go to the last day of the previous month
    }

    return date;
}


export default {
    capitalizeFirstLetter,
    addMonths,
}
