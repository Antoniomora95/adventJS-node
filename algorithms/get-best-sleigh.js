// https://adventjs.dev/en/challenges/2022/12
function selectSleigh(distance, sleighs) {
    let best = null;
    sleighs.forEach((sleigh) => {
        const { name, consumption } = sleigh;
        const total = consumption * distance;
        if (total > 20) {
            return;
        }
        best = name;
    });
    return best;
}
module.exports = {
    selectSleigh,
};
