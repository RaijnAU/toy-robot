import {left, move, place, report, right} from './index';

describe('toy robot spec', () => {
    test('place', () => {
        expect(place(0, 0, 'north')).toEqual({
            x: 0,
            y: 0,
            direction: 'north',
        });
        expect(place(4, 4, 'south')).toEqual({
            x: 4,
            y: 4,
            direction: 'south',
        });
        expect(place(-7, 0, 'west')).toBeNull();
        expect(place(0, 20, 'west')).toBeNull();
        expect(place(0, 0, 'tokyo')).toBeNull();
    });

    test('move', () => {
        expect(move(place(0, 0, 'north'))).toEqual({
            x: 0,
            y: 1,
            direction: 'north',
        });
        expect(move(place(1, 1, 'south'))).toEqual({
            x: 1,
            y: 0,
            direction: 'south',
        });
        expect(move(place(0, 0, 'east'))).toEqual({
            x: 1,
            y: 0,
            direction: 'east',
        });
        expect(move(place(1, 1, 'west'))).toEqual({
            x: 0,
            y: 1,
            direction: 'west',
        });
        expect(move(place(4, 4, 'north'))).toEqual({
            x: 4,
            y: 4,
            direction: 'north',
        });
        expect(move(place(0, 0, 'south'))).toEqual({
            x: 0,
            y: 0,
            direction: 'south',
        });
        expect(move(place(4, 0, 'east'))).toEqual({
            x: 4,
            y: 0,
            direction: 'east',
        });
        expect(move(place(0, 0, 'west'))).toEqual({
            x: 0,
            y: 0,
            direction: 'west',
        });
        expect(move(null)).toBeNull();
    });

    test('left', () => {
        expect(left(place(0, 0, 'north'))).toEqual({
            x: 0,
            y: 0,
            direction: 'west',
        });
        expect(left(place(0, 0, 'west'))).toEqual({
            x: 0,
            y: 0,
            direction: 'south',
        });
        expect(left(place(0, 0, 'south'))).toEqual({
            x: 0,
            y: 0,
            direction: 'east',
        });
        expect(left(place(0, 0, 'east'))).toEqual({
            x: 0,
            y: 0,
            direction: 'north',
        });
        expect(left(null)).toBeNull();
    });

    test('right', () => {
        expect(right(place(0, 0, 'north'))).toEqual({
            x: 0,
            y: 0,
            direction: 'east',
        });
        expect(right(place(0, 0, 'east'))).toEqual({
            x: 0,
            y: 0,
            direction: 'south',
        });
        expect(right(place(0, 0, 'south'))).toEqual({
            x: 0,
            y: 0,
            direction: 'west',
        });
        expect(right(place(0, 0, 'west'))).toEqual({
            x: 0,
            y: 0,
            direction: 'north',
        });
        expect(right(null)).toBeNull();
    });

    test('report', () => {
        expect(report(place(0, 0, 'north'))).toBe('0,0,NORTH');
        expect(report(place(2, 3, 'west'))).toBe('2,3,WEST');
        expect(report(null)).toBe('Not on board');
    });
});
