import PropTypes from 'prop-types';
import React from 'react';

const Square = ({coord, onClick, position}) => {
    const hasRobot = () =>
        position && coord.x === position.x && coord.y === position.y
            ? `has-robot ${position.direction.toLowerCase()}`
            : '';

    return (
        <div
            className={`square ${hasRobot()}`}
            onClick={() => onClick(coord)}
        />
    );
};

Square.propTypes = {
    coord: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    position: PropTypes.object.isRequired,
};

export default Square;
