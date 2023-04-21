// https://adventjs.dev/challenges/2022/13

function getFilesToBackup(lastBackup, changes) {
    function getReducer(prevBackup) {
        return (uniques, c) => {
            const [id, date] = c;
            if (date > prevBackup) {
                uniques.add(id);
            }
            return uniques;
        };
    }
    const res = changes.reduce(getReducer(lastBackup), new Set());
    return [...res].sort((a, b) => a - b);
}

module.exports = {
    getFilesToBackup,
};
