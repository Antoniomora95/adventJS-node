// https://adventjs.dev/en/challenges/2022/11
function getCompleted(part, total) {
    const [h, m, s] = part.split(':');
    const [totalH, totalM, totalS] = total.split(':');
    const secondsWorked = (h * 3600) + (m * 60) + s;
    const secondsTask = (totalH * 3600) + (totalM * 60) + totalS;
    const percent = secondsWorked / secondsTask;
    // percent = Number.parseFloat(percent).toFixed(2);
    if (percent === '1.00') {
        return '1/1';
    }
    return percent;
}

console.log(getCompleted('01:00:00', '03:00:00')); // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')); // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')); // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')); // '1/6'
console.log(getCompleted('01:10:10', '03:30:30')); // '1/3'
console.log(getCompleted('03:30:30', '05:50:50')); // '3/5

console.log(1 / 6);
