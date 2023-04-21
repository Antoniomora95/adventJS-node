// https://adventjs.dev/en/challenges/2022/2
function countHours(year, holidays) {
    const getReducer = (yearParam) => {
        const callback = ((total, holiday) => {
            let localTotal = total;
            const strDate = `${holiday}/${yearParam}`;
            const date = new Date(strDate);
            const dayNum = date.getDay();
            // Sunday - Saturday : 0 - 6
            // Monday to friday are valid days
            const isValidDay = dayNum > 0 && dayNum < 6;
            if (isValidDay) {
                localTotal += 2;
                return localTotal;
            }
            return localTotal;
        });
        return callback;
    };
    return holidays.reduce(getReducer(year), 0);
}

module.exports = {
    countHours,
};

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.
