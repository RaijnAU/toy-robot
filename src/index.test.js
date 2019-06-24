import {left, move, place, report, right} from './api/index';

describe('robot works', () => {
    test('test1', () => {
        const first = place(0, 0, 'north');
        const next = move(first);
        const output = report(next);
        expect(output).toBe('0,1,NORTH');
    });
    test('test2', () => {
        const first = place(0, 0, 'north');
        const next = left(first);
        const output = report(next);
        expect(output).toBe('0,0,WEST');
    });
    test('test3', () => {
        const first = place(1, 2, 'east');
        const next1 = move(first);
        const next2 = move(next1);
        const next3 = left(next2);
        const next4 = move(next3);
        const output = report(next4);
        expect(output).toBe('3,3,NORTH');
    });
});
