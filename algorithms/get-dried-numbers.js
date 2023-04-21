// https://adventjs.dev/en/challenges/2022/18
function dryNumber(dry, numbers) {
    const missing = [];
    const dried = dry.toString();
    for (let i = 1; i <= numbers; i += 1) {
        const curr = i.toString();
        if (curr.includes(dried)) {
            missing.push(i);
        }
    }
    return missing;
}

module.exports = {
    dryNumber,
};
