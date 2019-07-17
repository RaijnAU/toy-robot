import {left, move, place, reverse, right} from '../api/index';
import React from 'react';
import Report from './Report';
import Square from './Square';
import useRobot from '../hooks/useRobot';

const Table = () => {
    const [robot1, setRobot1] = useRobot(null);
    const [robot2, setRobot2] = useRobot(null);

    const squares = [];
    for (let y = 4; y > -1; y--) {
        for (let x = 0; x < 5; x++) {
            squares.push({x, y});
        }
    }

    const onClick = ({x, y}) => {
        if (robot1 === null) {
            setRobot1(place(x, y, 'north'));
        } else {
            setRobot2(place(x, y, 'north'));
        }
    };

    const onKeyDown = e =>
        e.key === 'a'
            ? setRobot1(left(robot1))
            : e.key === 'd'
            ? setRobot1(right(robot1))
            : e.key === 'w'
            ? setRobot1(move(robot1, robot2))
            : e.key === 's'
            ? setRobot1(reverse(robot1, robot2))
            : e.key === 'ArrowLeft'
            ? setRobot2(left(robot2))
            : e.key === 'ArrowRight'
            ? setRobot2(right(robot2, robot1))
            : e.key === 'ArrowUp'
            ? setRobot2(move(robot2, robot1))
            : e.key === 'ArrowDown'
            ? setRobot2(reverse(robot2))
            : null;

    const handleReset = () => {
        setRobot1(null);
        setRobot2(null);
    };

    return (
        <div className="container" onKeyDown={onKeyDown} tabIndex={-1}>
            <div className="table">
                {squares.map((coord, index) => (
                    <Square
                        key={index}
                        coord={coord}
                        onClick={onClick}
                        robot1={robot1}
                        robot2={robot2}
                    />
                ))}
            </div>
            <Report robot1={robot1} robot2={robot2} />
            <button className="reset" onClick={handleReset} type="button">
                Reset
            </button>
        </div>
    );
};
export default Table;
