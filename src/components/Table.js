import {left, move, place, report, right} from '../api/index';
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

    const onClick = ({x, y}) => setPosition(place(x, y, 'NORTH'));

    return (
        <div className="container">
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
        </div>
    );
};
export default Table;
