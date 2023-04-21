// https://adventjs.dev/en/challenges/2022/4

function fitsInOneBox(boxes = []) {
    boxes.sort((a, b) => a.l - b.l);
    let { l: lp, w: wp, h: hp } = boxes[0];
    for (let i = 1; i < boxes.length; i += 1) {
        const { l, w, h } = boxes[i];
        if (l <= lp || w <= wp || h <= hp) {
            return false;
        }

        lp = l;
        wp = w;
        hp = h;
    }
    return true;
}

module.exports = {
    fitsInOneBox,
};

fitsInOneBox(
    [
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
    ],
);
