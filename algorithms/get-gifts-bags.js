// https://adventjs.dev/en/challenges/2022/17

function carryGifts(gifts, maxWeight) {
    let localGifts = [...gifts];
    const groups = [];
    localGifts = localGifts.filter((g) => (g.length <= maxWeight));
    if (localGifts.length < 1) {
        return [];
    }
    groups.push(localGifts[0]);
    function canMerge(acc, curr, max) {
        let localAcc = acc;
        // eslint-disable-next-line no-unused-vars
        localAcc = localAcc.replace(/\s/g, '');
        return (acc.length + curr.length) <= max;
    }
    for (let i = 1; i < localGifts.length; i += 1) {
        const curr = localGifts[i];
        const acc = groups[groups.length - 1];
        const merge = canMerge(acc, curr, maxWeight);
        if (merge) {
            const last = groups.pop();
            groups.push(`${last} ${curr}`);
        } else {
            groups.push(curr);
        }
    }
    return groups;
}
module.exports = {
    carryGifts,
};
