const { fitsInOneBox } = require('../algorithms/does-box-fit-inside-another');
const { selectSleigh } = require('../algorithms/get-best-sleigh');
const { createCube } = require('../algorithms/get-cube');
const { dryNumber } = require('../algorithms/get-dried-numbers');
const { countHours } = require('../algorithms/get-extra-hours');
const { getFibonacciNumber } = require('../algorithms/get-fibonacci-number-dynamic-approach');
const { getFilesToBackup } = require('../algorithms/get-files-to-backup');

describe('Tests for the different adventjs algorithms', () => {
    test('fitsInOneBox: the smallest box fits into the largest box -> returns true', () => {
        expect(
            fitsInOneBox(
                [
                    { l: 1, w: 1, h: 1 },
                    { l: 2, w: 2, h: 2 },
                ],
            ),
        ).toBe(true);
    });

    test('fitsInOneBox: the smallest box fits into the middle box, but the middle box does not fit into the largest box. -> returns false', () => {
        expect(
            fitsInOneBox(
                [
                    { l: 1, w: 1, h: 1 },
                    { l: 3, w: 3, h: 3 },
                    { l: 2, w: 2, h: 1 },
                ],
            ),
        ).toBe(false);
    });

    test('fitsInOneBox: the first box fits into the third, and the third into the second. -> returns true', () => {
        expect(
            fitsInOneBox(
                [
                    { l: 1, w: 1, h: 1 },
                    { l: 3, w: 3, h: 3 },
                    { l: 2, w: 2, h: 2 },
                ],
            ),
        ).toBe(true);
    });

    test('selectSleigh: Middle Madeval', () => {
        expect(
            selectSleigh(
                30,
                [
                    { name: 'Gorusuke', consumption: 0.3 },
                    { name: 'Madeval', consumption: 0.5 },
                    { name: 'Lolivier', consumption: 0.7 },
                    { name: 'Hyuuh', consumption: 1 },
                ],
            ),
        ).toEqual('Madeval');
    });

    test('selectSleigh: small distance, returns Hyuuh', () => {
        expect(
            selectSleigh(
                1,
                [
                    { name: 'Gorusuke', consumption: 0.3 },
                    { name: 'Madeval', consumption: 0.5 },
                    { name: 'Lolivier', consumption: 0.7 },
                    { name: 'Hyuuh', consumption: 1 },
                ],
            ),
        ).toEqual('Hyuuh');
    });

    test('selectSleigh: big distance returns null', () => {
        expect(
            selectSleigh(
                80,
                [
                    { name: 'Gorusuke', consumption: 0.3 },
                    { name: 'Madeval', consumption: 0.5 },
                    { name: 'Lolivier', consumption: 0.7 },
                    { name: 'Hyuuh', consumption: 1 },
                ],
            ),
        ).toEqual(null);
    });

    test('selectSleigh: empty array returns null', () => {
        expect(
            selectSleigh(
                80,
                [],
            ),
        ).toEqual(null);
    });

    test('selectSleigh: all the sleighs have the same consumption, and distance is small', () => {
        expect(
            selectSleigh(
                8,
                [
                    { name: 'Gorusuke', consumption: 0.3 },
                    { name: 'Madeval', consumption: 0.3 },
                    { name: 'Lolivier', consumption: 0.3 },
                    { name: 'Hyuuh', consumption: 0.3 },
                ],
            ),
        ).toEqual('Hyuuh');
    });

    test('createCube: Should create a cube of size 5', () => {
        const cube = createCube(5);
        expect(
            cube,
        ).toBeDefined();
    });

    test('dryNumber: when the dry number is 1, and the interval goes from 1 to 15', () => {
        expect(
            dryNumber(1, 15),
        ).toStrictEqual([1, 10, 11, 12, 13, 14, 15]);
    });

    test('dryNumber: when the dry number is 2, and the interval goes from 1 to 20', () => {
        expect(
            dryNumber(2, 20),
        ).toStrictEqual([2, 12, 20]);
    });

    test('dryNumber: when the dry number is 0, and the interval goes from 1 to 5', () => {
        expect(
            dryNumber(0, 5),
        ).toStrictEqual([]);
    });

    test('countHours:  has to work 4 extra hours, because he missed 2 working days', () => {
        const year = 2022;
        const holidays = ['01/06', '04/01', '12/25'];
        expect(
            countHours(year, holidays),
        ).toBe(4);
    });

    test('countHours:  has to work 2 extra hours, because he missed 1 working day', () => {
        const year = 2023;
        const holidays = ['04/19', '04/01', '04/02'];
        expect(
            countHours(year, holidays),
        ).toBe(2);
    });

    test('countHours:  has to work 0 extra hours, because he did not missed a single working day', () => {
        const year = 2023;
        const holidays = ['04/22'];
        expect(
            countHours(year, holidays),
        ).toBe(0);
    });

    test('countHours:  has to work 0 extra hours, because he did not missed a single working day', () => {
        const year = 2023;
        const holidays = [];
        expect(
            countHours(year, holidays),
        ).toBe(0);
    });

    test('countHours:  has to work 10 extra hours, because he missed 5 working days', () => {
        const year = 2023;
        const holidays = ['04/17', '04/18', '04/19', '04/20', '04/21'];
        expect(
            countHours(year, holidays),
        ).toBe(10);
    });

    test('getFibonacciNumber: gets the 10th fibb number -> 55', () => {
        const memo = {
            0: 0,
            1: 1,
            2: 1,
        };
        const start = new Date().getTime();
        const res = getFibonacciNumber(10, memo);
        const end = new Date().getTime();
        console.log(end - start, 'milisec');
        expect(res).toEqual(55);
    });

    test('getFibonacciNumber: gets the 2nd fibb number -> 1', () => {
        const memo = {
            0: 0,
            1: 1,
            2: 1,
        };
        const start = new Date().getTime();
        const res = getFibonacciNumber(2, memo);
        const end = new Date().getTime();
        console.log(end - start, 'milisec');
        expect(res).toEqual(1);
    });

    test('getFilesToBackup: return the ids of the modification events that happened after the last backup', () => {
        const lastBackup = 1546300800;

        const changes = [
            [3, 1546301100],
            [2, 1546300800],
            [1, 1546300800],
            [1, 1546300900],
            [1, 1546301000],
        ];
        expect(
            getFilesToBackup(lastBackup, changes),
        ).toStrictEqual([1, 3]);
    });
});
