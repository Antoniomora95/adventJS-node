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
module.exports = {
    getCompleted,
};
