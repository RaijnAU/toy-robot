import {execute} from './api/index';

describe('robot works', () => {
    test('puzzle requirements', () => {
        expect(execute(['PLACE 0,0,NORTH', 'MOVE', 'REPORT'])).toBe(
            '0,1,NORTH'
        );

        expect(execute(['PLACE 0,0,NORTH', 'LEFT', 'REPORT'])).toBe('0,0,WEST');

        expect(
            execute([
                'PLACE 1,2,EAST',
                'MOVE',
                'MOVE',
                'LEFT',
                'MOVE',
                'REPORT',
            ])
        ).toBe('3,3,NORTH');

        // Ignore commands until placed
        expect(
            execute([
                'MOVE',
                'LEFT',
                'RIGHT',
                'MOVE',
                'PLACE 2,2,EAST',
                'MOVE',
                'REPORT',
            ])
        ).toBe('3,2,EAST');

        // Attempt to walk off board
        expect(
            execute(['PLACE 0,0,WEST', 'MOVE', 'LEFT', 'MOVE', 'REPORT'])
        ).toBe('0,0,SOUTH');
        expect(
            execute(['PLACE 4,4,NORTH', 'MOVE', 'RIGHT', 'MOVE', 'REPORT'])
        ).toBe('4,4,EAST');
    });
});
