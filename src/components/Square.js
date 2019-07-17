import PropTypes from 'prop-types';
import React from 'react';

const Square = ({coord, onClick, robot1, robot2}) => {
    const hasRobot1 = () =>
        robot1 && coord.x === robot1.x && coord.y === robot1.y
            ? `has-robot black ${robot1.direction.toLowerCase()}`
            : '';

    const hasRobot2 = () =>
        robot2 && coord.x === robot2.x && coord.y === robot2.y
            ? `has-robot pink ${robot2.direction.toLowerCase()}`
            : '';

    return (
        <div
            className={`square ${hasRobot1()} ${hasRobot2()}`}
            onClick={() => onClick(coord)}
        />
    );
};

Square.propTypes = {
    coord: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    robot1: PropTypes.object,
    robot2: PropTypes.object,
};

export default Square;
