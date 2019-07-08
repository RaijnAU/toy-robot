import {left, move, place, reverse, right} from '../api/index';
import React, {useState} from 'react';
import Report from './Report';
import Square from './Square';

const Table = () => {
    const [position, setPosition] = useState(null);

    const squares = [];
    for (let y = 4; y > -1; y--) {
        for (let x = 0; x < 5; x++) {
            squares.push({x, y});
        }
    }

    const onClick = ({x, y}) => setPosition(place(x, y, 'north'));

    const onKeyDown = e =>
        e.key === 'ArrowLeft'
            ? setPosition(left(position))
            : e.key === 'ArrowRight'
            ? setPosition(right(position))
            : e.key === 'ArrowUp'
            ? setPosition(move(position))
            : e.key === 'ArrowDown'
            ? setPosition(reverse(position))
            : null;

    const handleReset = () => setPosition(null);

    return (
        <div className="container" onKeyDown={onKeyDown} tabIndex={-1}>
            <div className="table">
                {squares.map((coord, index) => (
                    <Square
                        key={index}
                        coord={coord}
                        onClick={onClick}
                        position={position}
                    />
                ))}
            </div>
            <Report position={position} />
            <button className="reset" onClick={handleReset} type="button">
                Reset
            </button>
        </div>
    );
};
export default Table;
